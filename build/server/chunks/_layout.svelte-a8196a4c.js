import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from './index-14666a34.js';
import './uneval-c005139b.js';
import { l as logo } from './svelte-logo-59afeaba.js';
import { p as page } from './stores-7aaf8fa7.js';

const css = {
  code: "#client.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090{display:flex;min-height:100vh;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(51 51 51 / var(--tw-text-opacity))}h1,h2,h3,h4,h5{color:inherit}.nav-link.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090{color:#333;position:relative;display:inline-flex;height:100%;cursor:pointer;align-items:center;border-bottom-width:2px;border-color:transparent;font-weight:600}.nav-link.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090:hover{--tw-border-opacity:1;border-bottom-color:rgb(234 88 12 / var(--tw-border-opacity))}.dropdown.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090{position:relative}.dropdown.svelte-13iz090 .text.svelte-13iz090.svelte-13iz090.svelte-13iz090{color:#333;display:flex;height:100%;cursor:pointer;align-items:center}.dropdown.svelte-13iz090 .text.svelte-13iz090>.svelte-13iz090:not([hidden])~.svelte-13iz090:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.dropdown.svelte-13iz090 .text.svelte-13iz090.svelte-13iz090.svelte-13iz090{border-bottom-width:2px;border-color:transparent;font-weight:600}.dropdown.svelte-13iz090 .text.svelte-13iz090.svelte-13iz090.svelte-13iz090:hover{--tw-border-opacity:1;border-bottom-color:rgb(234 88 12 / var(--tw-border-opacity))}.dropdown.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090::before{content:'';position:absolute;top:100%;left:0px;height:0.5rem;width:100%}.dropdown.svelte-13iz090 .menu.svelte-13iz090.svelte-13iz090.svelte-13iz090{position:absolute;left:50%;top:calc(100% + .5rem);display:none;width:15rem;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.dropdown.svelte-13iz090:hover .menu.svelte-13iz090.svelte-13iz090.svelte-13iz090{display:block}.dropdown.svelte-13iz090 .menu .item.svelte-13iz090.svelte-13iz090.svelte-13iz090{width:100%;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}.dropdown.svelte-13iz090 .menu .item.svelte-13iz090.svelte-13iz090.svelte-13iz090:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.user-link.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090{display:flex;align-items:center}.user-link.svelte-13iz090>.svelte-13iz090:not([hidden])~.svelte-13iz090.svelte-13iz090:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))}.user-link.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090{border-radius:0.25rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600}.user-link.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.user-link.active.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090{--tw-bg-opacity:1;background-color:rgb(255 237 213 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(194 65 12 / var(--tw-text-opacity))}.user-link.active.svelte-13iz090.svelte-13iz090.svelte-13iz090.svelte-13iz090:hover{--tw-bg-opacity:1;background-color:rgb(254 215 170 / var(--tw-bg-opacity))}.user-link.svelte-13iz090>span.svelte-13iz090.svelte-13iz090.svelte-13iz090{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-link.svelte-13iz090 .icon.svelte-13iz090.svelte-13iz090.svelte-13iz090{height:1.25rem;width:1.25rem;flex:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let show_header;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  pathname = ($page.url.pathname + "/").split("/")[1];
  show_header = !["practice"].includes(pathname);
  $$unsubscribe_page();
  return `<div id="${"client"}" class="${"svelte-13iz090"}">${show_header ? `<div class="${"fixed top-0 left-0 w-full h-16 px-8 shadow-sm shadow-gray-200 bg-white"}"><div class="${"flex items-center space-x-6"}"><a href="${"/"}" class="${"flex-none flex items-center space-x-1 py-3"}"><img${add_attribute("src", logo, 0)} alt="${""}" class="${"w-10 h-10 rounded"}">
          <div class="${"logo-title"}"><h1 class="${"text-lg font-semibold"}">Việt Hùng IT</h1>
            <h5 class="${"text-xs text-gray-500"}">Developer . Transporter</h5></div></a>
    
        <div class="${"!ml-auto self-stretch flex items-stretch space-x-6"}"><div class="${"nav-link svelte-13iz090"}">English News</div>
          <div class="${"dropdown svelte-13iz090"}"><div class="${"text svelte-13iz090"}"><span class="${"svelte-13iz090"}">IELTS Online Test</span>
              <span class="${"icon w-4 h-4 svelte-13iz090"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}"></path></svg></span></div>
            <div class="${"menu svelte-13iz090"}"><div class="${"item svelte-13iz090"}">IELTS Full Test</div>
              <div class="${"item svelte-13iz090"}">IELTS Listening Practice</div>
              <div class="${"item svelte-13iz090"}">IELTS Reading Practice</div></div></div>
          <div class="${"nav-link svelte-13iz090"}">Spell copy</div>
          <div class="${"dropdown svelte-13iz090"}"><div class="${"text svelte-13iz090"}"><span class="${"svelte-13iz090"}">IELTS Writing Sample</span>
              <span class="${"icon w-4 h-4 svelte-13iz090"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}"></path></svg></span></div>
            <div class="${"menu svelte-13iz090"}"><div class="${"item svelte-13iz090"}">IELTS Writing Sample Task 1</div>
              <div class="${"item svelte-13iz090"}">IELTS Writing Sample Task 2</div>
              <div class="${"item svelte-13iz090"}">IELTS Writing Sample Task 3</div></div></div>
          <div class="${"dropdown svelte-13iz090"}"><div class="${"text svelte-13iz090"}"><span class="${"svelte-13iz090"}">IELTS Speaking Sample</span>
              <span class="${"icon w-4 h-4 svelte-13iz090"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}"></path></svg></span></div>
            <div class="${"menu svelte-13iz090"}"><div class="${"item svelte-13iz090"}">IELTS Speaking Part 1</div>
              <div class="${"item svelte-13iz090"}">IELTS Speaking Part 2</div>
              <div class="${"item svelte-13iz090"}">IELTS Speaking Part 3</div></div></div></div>
    
        
        ${data.user ? `<div class="${"relative"}">
            <div class="${"flex space-x-1 items-center"}"><div class="${"w-10 h-10 border rounded-full overflow-hidden cursor-pointer"}">
                <img${add_attribute("src", data.user?.image, 0)} alt="${"Photo by " + escape(data.user?.name, true)}" class="${"w-full h-full object-cover"}" loading="${"lazy"}"></div>
              <span class="${"icon transition-all cursor-pointer " + escape("", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}"></path></svg></span></div>
            ${``}</div>` : `<a href="${"/auth/login"}" class="${"btn btn-red rounded-lg"}">Sign up</a>`}</div></div>
    <div class="${"flex-none w-full h-16 shadow-lg shadow-gray-200"}"></div>` : ``}
  
  <div class="${"flex-grow min-h-0 flex flex-col"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a8196a4c.js.map
