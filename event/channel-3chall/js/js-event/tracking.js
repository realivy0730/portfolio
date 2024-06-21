(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

var domainWhiteList = ['shopping.friday.tw', 'mall.static.friday.tw', 'sys-sso.friday.tw', 'videoshopping.friday.tw'];

// UA-54005280-1
ga('create', 'UA-54005280-1', 'auto', {
    'name': 'ec1',
    'allowLinker': true
});
ga('ec1.require', 'displayfeatures');
ga('ec1.require', 'linker');
ga('ec1.require', 'linkid', 'linkid.js');
ga('ec1.linker:autoLink', domainWhiteList);
ga('ec1.send', 'pageview');

// UA-54005280-12
ga('create', 'UA-54005280-12', 'auto', {
    'name': 'ec12',
    'allowLinker': true
});
ga('ec12.require', 'displayfeatures');
ga('ec12.require', 'linker');
ga('ec12.linker:autoLink', domainWhiteList);
ga('ec12.send', 'pageview');

// UA-69206466-2
ga('create', 'UA-69206466-2', 'auto', {
    'name': 'custom',
    'allowLinker': true
});
ga('custom.require', 'displayfeatures');
ga('custom.require', 'linker');
ga('custom.linker:autoLink', domainWhiteList);
ga('custom.send', 'pageview');

// UA-55322636-2 Campaign
ga('create', 'UA-55322636-2', 'auto', {
    'name': 'campaign',
    'allowLinker': true
});
ga('campaign.require', 'displayfeatures');
ga('campaign.require', 'linker');
ga('campaign.linker:autoLink', domainWhiteList);
ga('campaign.send', 'pageview');

function ga_prepare(ga_dataset, label) {
    temp_ga_dataset = ga_dataset;
    temp_ga_dataset.label = label;
    return temp_ga_dataset;
}

function ga_send(ga_dataset) {
    log2(ga_dataset);
    if (empty(ga_dataset)) {
        return false;
    }
    if (empty(ga_dataset.category) || empty(ga_dataset.action) || empty(ga_dataset.label)) {
        return false;
    }
    ga('send', 'event', ga_dataset.category, ga_dataset.action, ga_dataset.label);
    ga('first.send', 'event', ga_dataset.category, ga_dataset.action, ga_dataset.label);
    ga('second.send', 'event', ga_dataset.category, ga_dataset.action, ga_dataset.label);
    ga('custom1.send', 'event', ga_dataset.category, ga_dataset.action, ga_dataset.label);
    ga('custom2.send', 'event', ga_dataset.category, ga_dataset.action, ga_dataset.label);
}
