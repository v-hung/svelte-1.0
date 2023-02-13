import { c as create_ssr_component, b as subscribe, d as add_attribute } from './index-14666a34.js';
import { n as navigating } from './stores-7aaf8fa7.js';
import './list_message.svelte_svelte_type_style_lang-80a42772.js';
import 'socket.io-client';

const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');#app.svelte-1gfhr7c.svelte-1gfhr7c{font-family:'Roboto', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.line.svelte-1gfhr7c.svelte-1gfhr7c{position:fixed;top:0px;left:0px;z-index:50;height:0.125rem;width:100%}.line.svelte-1gfhr7c .line-process.svelte-1gfhr7c{position:absolute;height:100%;width:0px;--tw-bg-opacity:1;background-color:rgb(234 88 12 / var(--tw-bg-opacity));transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => value);
  let line_process = null;
  $$result.css.add(css);
  $$unsubscribe_navigating();
  return `<div id="${"app"}" class="${"svelte-1gfhr7c"}"><div class="${"line svelte-1gfhr7c"}"><div class="${"line-process svelte-1gfhr7c"}"${add_attribute("this", line_process, 0)}></div></div>
  ${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-0cc59299.js.map
