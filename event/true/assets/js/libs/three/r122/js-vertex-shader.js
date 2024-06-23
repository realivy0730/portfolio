export const customVertexShader = `
attribute vec3 position;
attribute vec3 secPosition;
attribute vec3 thirdPosition;
attribute vec3 forthPosition;
attribute vec3 fivePosition;
uniform float u_sec1;
uniform float u_sec2;
uniform float u_sec3;
uniform float u_sec4;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
  vec3 toTorus = mix(position, secPosition, u_sec1);
  vec3 toTorusKnot = mix(toTorus, thirdPosition, u_sec2);
  vec3 toCylinder = mix(toTorusKnot, forthPosition, u_sec3);
  vec3 finalPos = mix(toCylinder, fivePosition, u_sec4);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0 );
  gl_PointSize = 3.0;
}
`;

export { customVertexShader };
