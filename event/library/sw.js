const VERSION = "2026-08-06.1";
const NEW_API_BASE = "https://newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download";
const OLD_PROXY_ORIGIN = "https://api.allorigins.win";
const OLD_PROXY_PATH = "/get";
const OLD_API_RID_PATTERN = /\/OpenData\/([0-9a-fA-F-]{8,36})/;

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method === "GET" && url.origin === OLD_PROXY_ORIGIN && url.pathname === OLD_PROXY_PATH) {
    event.respondWith(proxyRequest(url));
  }
});

async function proxyRequest(url) {
  const encoded = url.searchParams.get("url");
  if (!encoded) {
    return new Response("missing url param", { status: 400 });
  }

  let target;
  try {
    target = new URL(decodeURIComponent(encoded));
  } catch (error) {
    return new Response("invalid url param", { status: 400 });
  }

  const match = target.pathname.match(OLD_API_RID_PATTERN);
  if (!match) {
    return new Response("unsupported target url", { status: 400 });
  }

  const rid = match[1];
  const newUrl = `${NEW_API_BASE}?rid=${rid}`;

  try {
    const response = await fetch(newUrl, { cache: "no-store" });
    if (!response.ok) {
      return new Response("upstream error", { status: response.status });
    }
    const data = await response.json();
    const body = JSON.stringify({ contents: JSON.stringify(data) });
    return new Response(body, {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  } catch (error) {
    return new Response("upstream unavailable", { status: 502 });
  }
}
