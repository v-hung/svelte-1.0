import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, f as each, d as add_attribute } from './index-14666a34.js';
import { p as page } from './stores-7aaf8fa7.js';
import slugify from 'slugify';
import { T as Text, R as Rich_text } from './text-48262b48.js';

const Collapse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let el = null;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `<div style="${"height: 0px; overflow: hidden; transition: height .3s ease;"}"${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$2 = {
  code: ".list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo{@apply border-b-0;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:hover:not(button),.list-rounded.svelte-5vcobo>*.show.svelte-5vcobo.svelte-5vcobo{@apply border-b border-orange-600 bg-orange-200 ;}.list-rounded.svelte-5vcobo>*:hover:not(button) .item-title.svelte-5vcobo.svelte-5vcobo,.list-rounded.svelte-5vcobo>*.show .item-title.svelte-5vcobo.svelte-5vcobo{@apply text-orange-600;}.list-rounded.svelte-5vcobo>.svelte-5vcobo:hover+.svelte-5vcobo{@apply border-t-0;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:first-child{@apply rounded-t;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:last-child{@apply rounded-b border-b;}",
  map: null
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data_render;
  let { label = "" } = $$props;
  let { data = [{}] } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  data_render = data.map((v) => v = { ...v, collapsed: true });
  return `<div><p class="${"text-xs font-semibold text-primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span></p>
  <div class="${"list-rounded flex flex-col svelte-5vcobo"}">${each(data_render, (item) => {
    return `<div class="${"border bg-white " + escape(!item.collapsed ? "show" : "", true) + " svelte-5vcobo"}">
        <div class="${"item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none svelte-5vcobo"}"><span class="${"icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform " + escape(!item.collapsed ? "rotate-180" : "", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"}"></path></svg></span>
          <span class="${"font-semibold"}">Title</span>
          <span class="${"!ml-auto icon w-6 h-6 p-1 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"}"></path></svg></span>
          <span class="${"icon w-6 h-6 p-1 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"}"></path></svg>
          </span></div>

        ${validate_component(Collapse, "Collapse").$$render($$result, { show: !item.collapsed }, {}, {
      default: () => {
        return `<div class="${"bg-orange-100 px-4 py-6"}">asd
          </div>
        `;
      }
    })}
      </div>`;
  })}

    <button class="${"flex items-center justify-center space-x-2 border px-4 py-2 cursor-pointer bg-white text-orange-600 transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-600 svelte-5vcobo"}"><span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}"></path></svg></span>
      <span class="${"font-semibold"}">Add new entry</span></button></div>
</div>`;
});
const css$1 = {
  code: ".list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo{@apply border-b-0;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:hover:not(button),.list-rounded.svelte-5vcobo>*.show.svelte-5vcobo.svelte-5vcobo{@apply border-b border-orange-600 bg-orange-200 ;}.list-rounded.svelte-5vcobo>*:hover:not(button) .item-title.svelte-5vcobo.svelte-5vcobo,.list-rounded.svelte-5vcobo>*.show .item-title.svelte-5vcobo.svelte-5vcobo{@apply text-orange-600;}.list-rounded.svelte-5vcobo>.svelte-5vcobo:hover+.svelte-5vcobo{@apply border-t-0;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:first-child{@apply rounded-t;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:last-child{@apply rounded-b border-b;}",
  map: null
};
const Group_question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data_render;
  let { label = "" } = $$props;
  let { data = [{}] } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  data_render = data.map((v) => v = { ...v, collapsed: true });
  return `<div><p class="${"text-xs font-semibold text-primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span></p>
  <div class="${"list-rounded flex flex-col svelte-5vcobo"}">${each(data_render, (item) => {
    return `<div class="${"border bg-white " + escape(!item.collapsed ? "show" : "", true) + " svelte-5vcobo"}">
        <div class="${"item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none svelte-5vcobo"}"><span class="${"icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform " + escape(!item.collapsed ? "rotate-180" : "", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"}"></path></svg></span>
          <span class="${"font-semibold"}">Title</span>
          <span class="${"!ml-auto icon w-6 h-6 p-1 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"}"></path></svg></span>
          <span class="${"icon w-6 h-6 p-1 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"}"></path></svg>
          </span></div>

        ${validate_component(Collapse, "Collapse").$$render($$result, { show: !item.collapsed }, {}, {
      default: () => {
        return `<div class="${"bg-orange-100 px-4 py-6"}">${validate_component(Question, "Question").$$render($$result, { label: "question" }, {}, {})}</div>
        `;
      }
    })}
      </div>`;
  })}

    <button class="${"flex items-center justify-center space-x-2 border px-4 py-2 cursor-pointer bg-white text-orange-600 transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-600 svelte-5vcobo"}"><span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}"></path></svg></span>
      <span class="${"font-semibold"}">Add new entry</span></button></div>
</div>`;
});
const css = {
  code: ".list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo{@apply border-b-0;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:hover:not(button),.list-rounded.svelte-5vcobo>*.show.svelte-5vcobo.svelte-5vcobo{@apply border-b border-orange-600 bg-orange-200 ;}.list-rounded.svelte-5vcobo>*:hover:not(button) .item-title.svelte-5vcobo.svelte-5vcobo,.list-rounded.svelte-5vcobo>*.show .item-title.svelte-5vcobo.svelte-5vcobo{@apply text-orange-600;}.list-rounded.svelte-5vcobo>.svelte-5vcobo:hover+.svelte-5vcobo{@apply border-t-0;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:first-child{@apply rounded-t;}.list-rounded.svelte-5vcobo>.svelte-5vcobo.svelte-5vcobo:last-child{@apply rounded-b border-b;}",
  map: null
};
const Passage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data_render;
  let { label = "" } = $$props;
  let { data = [{}] } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  data_render = data.map((v) => v = { ...v, collapsed: true });
  return `<div><p class="${"text-xs font-semibold text-primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span></p>
  <div class="${"list-rounded flex flex-col svelte-5vcobo"}">${each(data_render, (item) => {
    return `<div class="${"border bg-white " + escape(!item.collapsed ? "show" : "", true) + " svelte-5vcobo"}">
        <div class="${"item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none svelte-5vcobo"}"><span class="${"icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform " + escape(!item.collapsed ? "rotate-180" : "", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"}"></path></svg></span>
          <span class="${"font-semibold"}">Title</span>
          <span class="${"!ml-auto icon w-6 h-6 p-1 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"}"></path></svg></span>
          <span class="${"icon w-6 h-6 p-1 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"}"></path></svg>
          </span></div>

        
        ${validate_component(Collapse, "Collapse").$$render($$result, { show: !item.collapsed }, {}, {
      default: () => {
        return `<div class="${"bg-orange-100 px-4 py-6"}"><div class="${"mb-4"}">${validate_component(Rich_text, "RichText").$$render($$result, { label: "message", height: 300 }, {}, {})}</div>
            ${validate_component(Group_question, "GroupQuestion").$$render($$result, { label: "group_question" }, {}, {})}</div>
        `;
      }
    })}
        
      </div>`;
  })}

    <button class="${"flex items-center justify-center space-x-2 border px-4 py-2 cursor-pointer bg-white text-orange-600 transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-600 svelte-5vcobo"}"><span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}"></path></svg></span>
      <span class="${"font-semibold"}">Add new entry</span></button></div>

  <div class="${"hide-animation"}"></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let link_action;
  let slug;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const getLinkAction = (pathname) => {
    let array_pathname = pathname.split("/");
    return array_pathname.join("/");
  };
  let title = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    link_action = getLinkAction($page.url.pathname);
    slug = slugify(title, "_");
    $$rendered = `<button class="${"flex items-center space-x-1 text-blue-500 hover:text-orange-600"}"><span class="${"icon w-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"}"></path></svg></span>
  <span>Back</span></button>

<section class="${"flex justify-between items-end mt-4"}"><div><h3 class="${"text-xl font-semibold"}">Create an entry</h3>
    <p class="${"text-gray-600"}">API ID : product</p></div>

  <button class="${"btn btn-orange"}"><span>Save</span></button></section>

<section class="${"mt-4"}"><div class="${"flex -mx-2"}"><div class="${"w-3/4 px-2 mb-4"}"><div class="${"w-full border rounded shadow-sm px-6 py-4 bg-white"}"><form action="${escape(link_action, true) + "?/created"}"><div class="${"flex -mx-2"}"><div class="${"w-1/2 px-2 mb-4"}">${validate_component(Text, "Text").$$render(
      $$result,
      { label: "title", data: title },
      {
        data: ($$value) => {
          title = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
            <div class="${"w-1/2 px-2 mb-4"}">${validate_component(Text, "Text").$$render(
      $$result,
      { label: "slug", data: slug },
      {
        data: ($$value) => {
          slug = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

          <div class="${"mb-4"}">${validate_component(Passage, "Passage").$$render($$result, { label: "passage" }, {}, {})}</div></form></div></div>

    <div class="${"w-1/4 px-2 mb-4"}"><div class="${"w-full h-60 border rounded shadow-sm px-6 py-4 bg-white"}"></div></div></div></section>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-936b6ccc.js.map
