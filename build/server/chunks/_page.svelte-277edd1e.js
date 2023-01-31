import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from './index-14666a34.js';
import { p as page } from './stores-7aaf8fa7.js';
import { T as Text, L as Long_text, R as Rich_text } from './text-81c787c3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let link_action;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const getLinkAction = (pathname) => {
    let array_pathname = pathname.split("/");
    return array_pathname.join("/");
  };
  link_action = getLinkAction($page.url.pathname);
  $$unsubscribe_page();
  return `<button class="${"flex items-center space-x-1 text-blue-500 hover:text-orange-600"}"><span class="${"icon w-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"}"></path></svg></span>
  <span>Back</span></button>

<section class="${"flex justify-between items-end mt-4"}"><div><h3 class="${"text-xl font-semibold"}">Create an entry</h3>
    <p class="${"text-gray-600"}">API ID : product</p></div>

  <button class="${"btn btn-orange"}"><span>Save</span></button></section>

<section class="${"mt-4"}"><div class="${"flex -mx-2"}"><div class="${"w-3/4 px-2 mb-4"}"><div class="${"w-full border rounded shadow-sm px-6 py-4 bg-white"}"><form action="${escape(link_action, true) + "?/created"}"><div class="${"flex -mx-2"}"><div class="${"w-1/2 px-2 mb-4"}">${validate_component(Text, "Text").$$render($$result, { label: "email" }, {}, {})}</div>
            <div class="${"w-1/2 px-2 mb-4"}">${validate_component(Text, "Text").$$render($$result, { label: "slug" }, {}, {})}</div></div>
          <div class="${"mb-4"}">${validate_component(Long_text, "LongText").$$render($$result, { label: "description" }, {}, {})}</div>

          <div class="${"mb-4"}">${validate_component(Rich_text, "RichText").$$render($$result, { label: "content" }, {}, {})}</div></form></div></div>

    <div class="${"w-1/4 px-2 mb-4"}"><div class="${"w-full h-60 border rounded shadow-sm px-6 py-4 bg-white"}"></div></div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-277edd1e.js.map
