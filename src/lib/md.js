const markdownIt = require("markdown-it");

const md = markdownIt({ html: true });

export function render(src) {
  return md.render(src);
}

export function renderInline(src) {
  return md.renderInline(src);
}

export function renderObjectValues(src, renderFn = render) {
  return Object.keys(src).reduce((acc, key) => {
    acc[key] = renderFn(src[key]);
    return acc;
  }, {});
}

export function renderObjectValuesInline(src) {
  return renderObjectValues(src, renderInline);
}
