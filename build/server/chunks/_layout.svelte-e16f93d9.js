import { c as create_ssr_component, b as subscribe, d as add_attribute } from './index-14666a34.js';
import { n as navigating } from './stores-7aaf8fa7.js';

const css = {
  code: ".line.svelte-1i5lnun.svelte-1i5lnun{position:fixed;top:0px;left:0px;z-index:50;height:0.125rem;width:100%\n}.line.svelte-1i5lnun .line-process.svelte-1i5lnun{position:absolute;height:100%;width:0px;--tw-bg-opacity:1;background-color:rgb(234 88 12 / var(--tw-bg-opacity));transition-timing-function:cubic-bezier(0, 0, 0.2, 1)\n}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => value);
  let line_process = null;
  $$result.css.add(css);
  $$unsubscribe_navigating();
  return `<div id="${"app"}"><div class="${"line svelte-1i5lnun"}"><div class="${"line-process svelte-1i5lnun"}"${add_attribute("this", line_process, 0)}></div></div>
  ${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-e16f93d9.js.map
