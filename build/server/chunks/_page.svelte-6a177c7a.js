import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, e as escape, f as each } from './index-14666a34.js';
import { p as page } from './stores-7aaf8fa7.js';
import slugify from 'slugify';
import { T as Text, R as Rich_text, L as Long_text } from './text-81c787c3.js';
import './uneval-c005139b.js';

const Collapse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let first_show = show;
  let el = null;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `<div style="${escape(!first_show ? "height: 0px;" : "", true) + " overflow: hidden; transition: height .3s ease;"}"${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$6 = {
  code: ".bg-make-transparent.svelte-1bd0mel{background:repeating-conic-gradient(rgb(246, 246, 249) 0%, rgb(246, 246, 249) 25%, transparent 0%, transparent 50%) 50% center / 20px 20px}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "image" } = $$props;
  let { data = "" } = $$props;
  let { name = "" } = $$props;
  let view = "storage";
  let files;
  let img_files = [];
  const changeFiles = (files2) => {
    if (files2)
      Array.from(files2 || []).map((v, i) => {
        img_files = [
          ...img_files,
          {
            name: v.name,
            type: v.type,
            preview: URL.createObjectURL(v),
            file: v
          }
        ];
      });
    if (img_files.length > 0) {
      view = "upload";
    }
  };
  const loadFiles = async () => {
    return;
  };
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$6);
  {
    changeFiles(files);
  }
  {
    if (view == "storage") {
      loadFiles();
    }
  }
  return `


<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span>
    <span class="${"icon inline-block w-3 h-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"}"></path></svg></span></p>
  <div class="${"h-36 border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"hidden"}"${add_attribute("name", name, 0)} class="${"sr-only"}"${add_attribute("value", data, 0)}>
    <div class="${"w-full h-full flex flex-col justify-center items-center cursor-pointer"}">${data ? `<div class="${"w-full h-full p-2 bg-make-transparent svelte-1bd0mel"}"><img${add_attribute("src", data, 0)} alt="${""}" class="${"w-full h-full object-contain"}"></div>` : `<span class="${"icon w-10 h-10 text-orange-600"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"}"></path><path d="${"m8 11-3 4h11l-4-6-3 4z"}"></path><path d="${"M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"}"></path></svg></span>
        <span class="${"mt-2 text-xs font-semibold"}">Click to add an asset or drag and drop one in this area</span>`}</div></div></div>

${``}`;
});
const css$5 = {
  code: ".list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0{border-bottom-width:0px\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0:hover:not(button),.list-rounded.svelte-1sg5ko0>*.show.svelte-1sg5ko0.svelte-1sg5ko0{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(254 215 170 / var(--tw-bg-opacity))\n}.list-rounded.svelte-1sg5ko0>*:hover:not(button) .item-title.svelte-1sg5ko0.svelte-1sg5ko0,.list-rounded.svelte-1sg5ko0>*.show .item-title.svelte-1sg5ko0.svelte-1sg5ko0{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity))\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0:hover+.svelte-1sg5ko0{border-top-width:0px\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0:first-child{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0:last-child{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;border-bottom-width:1px\n}",
  map: null
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "Questions" } = $$props;
  let { data = [] } = $$props;
  let { is_add = true } = $$props;
  let show_item = null;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.is_add === void 0 && $$bindings.is_add && is_add !== void 0)
    $$bindings.is_add(is_add);
  $$result.css.add(css$5);
  return `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span></p>
  <div class="${"list-rounded flex flex-col svelte-1sg5ko0"}">${each(data, (item, index) => {
    return `<div class="${"border bg-white " + escape(show_item == index ? "show" : "", true) + " svelte-1sg5ko0"}">
        <div class="${"item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none svelte-1sg5ko0"}"><span class="${"icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform " + escape(show_item == index ? "rotate-180" : "", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"}"></path></svg></span>
          <span class="${"font-semibold"}">Question</span>
          <span class="${"!ml-auto icon w-6 h-6 p-1 cursor-pointer hover:text-red-600"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"}"></path></svg></span>
          <span class="${"icon w-6 h-6 p-1 hover:text-blue-600 cursor-move"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"}"></path></svg>
          </span></div>

        ${validate_component(Collapse, "Collapse").$$render($$result, { show: show_item == index }, {}, {
      default: () => {
        return `<div class="${"bg-orange-100 px-4 py-6"}">${slots.default ? slots.default({ index }) : ``}</div>
        `;
      }
    })}
      </div>`;
  })}

    ${is_add ? `<button class="${"flex items-center justify-center space-x-2 border px-4 py-2 cursor-pointer bg-white text-orange-600 transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-600 svelte-1sg5ko0"}"><span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}"></path></svg></span>
        <span class="${"font-semibold"}">Add new question</span></button>` : ``}</div>
</div>`;
});
const Diagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { image } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"flex flex-wrap -mx-2"}"><div class="${"w-2/5 px-2 mb-4"}">${validate_component(Image, "Image").$$render(
      $$result,
      { data: image },
      {
        data: ($$value) => {
          image = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
  <div class="${"w-3/5 px-2 mb-4"}">${validate_component(Question, "Question").$$render(
      $$result,
      { data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">question name <span class="${"text-red-600"}">*</span>
          <span class="${"icon inline-block w-3 h-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"}"></path></svg></span></p>
        <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"Water runs into a __ used by local people"}"${add_attribute("value", data[index]["question_name"], 0)}></div>
        <p class="${"mt-2 text-xs s-9Y9hJpp9NSMc"}">Use the __ symbol for the answer position.</p></div>

      <div class="${"mt-4"}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">answer <span class="${"text-red-600"}">*</span></p>
        <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"canal"}"${add_attribute("value", data[index]["answer"], 0)}></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Matching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { options } = $$props;
  if (!options.suggestions) {
    options.suggestions = [];
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (data.length) {
        if (data.length > options.suggestions.length) {
          let temp = new Array(data.length - options.suggestions.length).fill({ title: "" });
          options.suggestions = [...options.suggestions, ...temp];
        }
      }
    }
    $$rendered = `<div class="${"flex flex-wrap -mx-2"}"><div class="${"w-1/2 px-2 mb-4"}">${validate_component(Question, "Question").$$render(
      $$result,
      {
        label: "suggestions",
        data: options.suggestions
      },
      {
        data: ($$value) => {
          options.suggestions = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `<div class="${""}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">suggestion <span class="${"text-red-600"}">*</span></p>
        <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"suggestion"}"${add_attribute("value", options.suggestions[index]["title"], 0)}></div></div>`;
        }
      }
    )}</div>
  <div class="${"w-1/2 px-2 mb-4"}">${validate_component(Question, "Question").$$render(
      $$result,
      { data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `<div class="${""}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">answer <span class="${"text-red-600"}">*</span></p>
        <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"canal"}"${add_attribute("value", data[index]["answer"], 0)}></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Short = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Question, "Question").$$render(
      $$result,
      { data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">question name <span class="${"text-red-600"}">*</span>
      <span class="${"icon inline-block w-3 h-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"}"></path></svg></span></p>
    <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"What type of mineral were the Dolaucothi mines in Wales built to extract?"}"${add_attribute("value", data[index]["question_name"], 0)}></div></div>

  <div class="${"mt-4"}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">answer <span class="${"text-red-600"}">*</span></p>
    <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"gold"}"${add_attribute("value", data[index]["answer"], 0)}></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$4 = {
  code: ".item-answer.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{display:flex;width:100%;cursor:pointer;align-items:center\n}.item-answer.svelte-xx3lxf>.svelte-xx3lxf:not([hidden])~.svelte-xx3lxf:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}.item-answer.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{border-radius:0.25rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-weight:600\n}.item-answer.active.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity))\n}",
  map: null
};
const Single = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Question, "Question").$$render(
      $$result,
      { data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `${validate_component(Text, "Text").$$render(
            $$result,
            {
              label: "question name",
              placeholder: "What is the writer's main point in the first paragraph?",
              data: data[index]["question_name"]
            },
            {
              data: ($$value) => {
                data[index]["question_name"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}

  <div class="${"mt-4"}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">answer <span class="${"text-red-600"}">*</span></p>
    <div class="${"flex -mx-2 flex-wrap"}"><div class="${"w-1/2 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "a" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">A</span>
          <input type="${"text"}" class="${"w-full py-1 svelte-xx3lxf"}" placeholder="${"Our use of technology is having a hidden effect on us."}"${add_attribute("value", data[index]["option_a"], 0)}></button></div>

      <div class="${"w-1/2 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "b" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">B</span>
          <input type="${"text"}" class="${"w-full py-1 svelte-xx3lxf"}" placeholder="${"Technology can be used to help youngsters to read."}"${add_attribute("value", data[index]["option_b"], 0)}></button></div>

      <div class="${"w-1/2 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "c" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">C</span>
          <input type="${"text"}" class="${"w-full py-1 svelte-xx3lxf"}" placeholder="${"Travellers should be encouraged to use technology on planes."}"${add_attribute("value", data[index]["option_c"], 0)}></button></div>

      <div class="${"w-1/2 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "d" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">D</span>
          <input type="${"text"}" class="${"w-full py-1 svelte-xx3lxf"}" placeholder="${"Playing games is a more popular use of technology than reading."}"${add_attribute("value", data[index]["option_d"], 0)}></button></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { options } = $$props;
  if (!options.summary_title) {
    options.summary_title = "";
  }
  if (!options.summary_content) {
    options.summary_content = "";
  }
  if (!options.suggestions) {
    options.suggestions = [];
  }
  const changeQuestion = (long_text) => {
    let count = (long_text.split("__") || []).length - 1;
    if (count > data.length) {
      let temp = new Array(count - data.length).fill({});
      data = [...data, ...temp];
      if (data.length > options.suggestions.length) {
        let temp2 = new Array(data.length - options.suggestions.length).fill({ title: "" });
        options.suggestions = [...options.suggestions, ...temp2];
      }
    } else if (count < data.length) {
      data = data.filter((v, i) => i < count);
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      changeQuestion(options.summary_content);
    }
    $$rendered = `${validate_component(Text, "Text").$$render(
      $$result,
      {
        label: "Summary title",
        placeholder: "Studies on digital screen use",
        data: options.summary_title
      },
      {
        data: ($$value) => {
          options.summary_title = $$value;
          $$settled = false;
        }
      },
      {}
    )}
<div class="${"mt-4"}">${validate_component(Long_text, "LongText").$$render(
      $$result,
      {
        label: "content",
        data: options.summary_content
      },
      {
        data: ($$value) => {
          options.summary_content = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
<p class="${"mt-2 text-xs s-9Y9hJpp9NSMc"}">Use the __ symbol for the answer position.</p>

<div class="${"mt-4 flex flex-wrap -mx-2"}"><div class="${"w-1/2 px-2 mb-4"}">${validate_component(Question, "Question").$$render(
      $$result,
      {
        label: "suggestions",
        data: options.suggestions
      },
      {
        data: ($$value) => {
          options.suggestions = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `<div class="${""}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">suggestion <span class="${"text-red-600"}">*</span></p>
        <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"suggestion"}"${add_attribute("value", options.suggestions[index]["title"], 0)}></div></div>`;
        }
      }
    )}</div>
  <div class="${"w-1/2 px-2 mb-4"}">${validate_component(Question, "Question").$$render(
      $$result,
      { is_add: false, data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `<div class="${""}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">answer <span class="${"text-red-600"}">*</span></p>
        <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}" class="${"w-full px-4 py-2"}" placeholder="${"canal"}"${add_attribute("value", data[index]["answer"], 0)}></div></div>`;
        }
      }
    )}

    ${data.length == 0 ? `<p>No question</p>` : ``}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$3 = {
  code: ".item-answer.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{display:flex;width:100%;cursor:pointer;align-items:center\n}.item-answer.svelte-xx3lxf>.svelte-xx3lxf:not([hidden])~.svelte-xx3lxf:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}.item-answer.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{border-radius:0.25rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-weight:600\n}.item-answer.active.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity))\n}",
  map: null
};
const True_false = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Question, "Question").$$render(
      $$result,
      { label: "questions", data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `${validate_component(Text, "Text").$$render(
            $$result,
            {
              label: "question name",
              data: data[index]["question_name"]
            },
            {
              data: ($$value) => {
                data[index]["question_name"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}

  <div class="${"mt-4"}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">answer <span class="${"text-red-600"}">*</span></p>
    <div class="${"flex -mx-2 flex-wrap"}"><div class="${"w-1/3 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "true" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">A</span>
          <span class="${"svelte-xx3lxf"}">True</span></button></div>

      <div class="${"w-1/3 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "false" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">B</span>
          <span class="${"svelte-xx3lxf"}">False</span></button></div>

      <div class="${"w-1/3 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "not_give" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">C</span>
          <span class="${"svelte-xx3lxf"}">Not give</span></button></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$2 = {
  code: ".item-answer.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{display:flex;width:100%;cursor:pointer;align-items:center\n}.item-answer.svelte-xx3lxf>.svelte-xx3lxf:not([hidden])~.svelte-xx3lxf:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}.item-answer.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{border-radius:0.25rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-weight:600\n}.item-answer.active.svelte-xx3lxf.svelte-xx3lxf.svelte-xx3lxf{--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity))\n}",
  map: null
};
const Yes_no = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Question, "Question").$$render(
      $$result,
      { label: "questions", data },
      {
        data: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ index }) => {
          return `${validate_component(Text, "Text").$$render(
            $$result,
            {
              label: "question name",
              data: data[index]["question_name"]
            },
            {
              data: ($$value) => {
                data[index]["question_name"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}

  <div class="${"mt-4"}"><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">answer <span class="${"text-red-600"}">*</span></p>
    <div class="${"flex -mx-2 flex-wrap"}"><div class="${"w-1/3 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "yes" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">A</span>
          <span class="${"svelte-xx3lxf"}">Yes</span></button></div>

      <div class="${"w-1/3 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "no" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">B</span>
          <span class="${"svelte-xx3lxf"}">No</span></button></div>

      <div class="${"w-1/3 px-2 mb-4"}"><button class="${"item-answer " + escape(data[index]["answer"] == "not_give" ? "active" : "", true) + " svelte-xx3lxf"}"><span class="${"grid w-7 h-7 place-items-center rounded-full bg-gray-200 svelte-xx3lxf"}">C</span>
          <span class="${"svelte-xx3lxf"}">Not give</span></button></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: ".list-rounded-2.svelte-eiua6u>.item.svelte-eiua6u.svelte-eiua6u{border-radius:0.25rem\n}.list-rounded-2.svelte-eiua6u>.item.svelte-eiua6u.svelte-eiua6u:hover,.list-rounded-2.svelte-eiua6u>.item.show.svelte-eiua6u.svelte-eiua6u{--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(254 215 170 / var(--tw-bg-opacity))\n}.list-rounded-2.svelte-eiua6u>.item:hover .item-title.svelte-eiua6u.svelte-eiua6u,.list-rounded-2.svelte-eiua6u>.item.show .item-title.svelte-eiua6u.svelte-eiua6u{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity))\n}.list-rounded-2.svelte-eiua6u .btn-add.svelte-eiua6u.svelte-eiua6u{width:14rem;overflow:hidden;border-radius:9999px;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))\n}.list-rounded-2.svelte-eiua6u .btn-add.svelte-eiua6u.svelte-eiua6u:hover,.list-rounded-2.svelte-eiua6u .btn-add.show.svelte-eiua6u.svelte-eiua6u{--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))\n}.list-rounded-2.svelte-eiua6u .btn-add.show.svelte-eiua6u>button.svelte-eiua6u{--tw-bg-opacity:1;background-color:rgb(254 215 170 / var(--tw-bg-opacity))\n}.list-rounded-2.svelte-eiua6u .btn-add.svelte-eiua6u>button.svelte-eiua6u:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.list-rounded-2.svelte-eiua6u .btn-add.show.svelte-eiua6u.svelte-eiua6u{width:100%;border-radius:0.25rem\n}",
  map: null
};
const Group_question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "group question" } = $$props;
  let { data = [] } = $$props;
  let show_item = null;
  const group_questions = [
    {
      type: "diagram",
      label: "Diagram Label Completion"
    },
    {
      type: "true-false",
      label: "True / False / Not given"
    },
    { type: "short", label: "Short Answer" },
    { type: "single", label: "Single Answer" },
    {
      type: "summary",
      label: "Summary, Note Completion With Hint"
    },
    {
      type: "yes-no",
      label: "Yes / No / Not Given"
    },
    {
      type: "matching",
      label: "Matching Heading"
    }
  ];
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span></p>
  <div class="${"list-rounded-2 flex flex-col svelte-eiua6u"}">${each(data, (item, index) => {
      return `<div class="${"item border bg-white " + escape(show_item == index ? "show" : "", true) + " svelte-eiua6u"}">
        <div class="${"item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none svelte-eiua6u"}"><span class="${"icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform " + escape(show_item == index ? "rotate-180" : "", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"}"></path></svg></span>
          <span class="${"font-semibold"}">${escape(group_questions.find((v) => item.type == v.type).label ?? "Group question")}</span>
          <span class="${"!ml-auto icon w-6 h-6 p-1 cursor-pointer hover:text-red-600"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"}"></path></svg></span>
          <span class="${"icon w-6 h-6 p-1 hover:text-blue-600 cursor-move"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"}"></path></svg>
          </span></div>

        ${validate_component(Collapse, "Collapse").$$render($$result, { show: show_item == index }, {}, {
        default: () => {
          return `<div class="${"bg-orange-100 px-4 py-6"}">${item.type == "diagram" ? `${validate_component(Diagram, "Diagram").$$render(
            $$result,
            { data: item.questions, image: item.image },
            {
              data: ($$value) => {
                item.questions = $$value;
                $$settled = false;
              },
              image: ($$value) => {
                item.image = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${item.type == "true-false" ? `${validate_component(True_false, "TrueFalse").$$render(
            $$result,
            { data: item.questions },
            {
              data: ($$value) => {
                item.questions = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${item.type == "short" ? `${validate_component(Short, "Short").$$render(
            $$result,
            { data: item.questions },
            {
              data: ($$value) => {
                item.questions = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${item.type == "single" ? `${validate_component(Single, "Single").$$render(
            $$result,
            { data: item.questions },
            {
              data: ($$value) => {
                item.questions = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${item.type == "summary" ? `${validate_component(Summary, "Summary").$$render(
            $$result,
            {
              data: item.questions,
              options: item.options
            },
            {
              data: ($$value) => {
                item.questions = $$value;
                $$settled = false;
              },
              options: ($$value) => {
                item.options = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${item.type == "yes-no" ? `${validate_component(Yes_no, "YesNo").$$render(
            $$result,
            { data: item.questions },
            {
              data: ($$value) => {
                item.questions = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${item.type == "matching" ? `${validate_component(Matching, "Matching").$$render(
            $$result,
            {
              data: item.questions,
              options: item.options
            },
            {
              data: ($$value) => {
                item.questions = $$value;
                $$settled = false;
              },
              options: ($$value) => {
                item.options = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}`}`}`}`}`}`}</div>
        `;
        }
      })}</div>
      <div class="${"w-2 h-4 mx-auto bg-orange-200"}"></div>`;
    })}

    <div class="${"flex justify-center"}"><div class="${"btn-add " + escape("", true) + " svelte-eiua6u"}"><button class="${"flex items-center justify-center space-x-2 w-full px-4 py-2 cursor-pointer text-orange-600 transition-colors svelte-eiua6u"}">${`<span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}"></path></svg></span>
            <span class="${"font-semibold"}">Add new group question</span>`}</button>

        <div class="${"grid p-4 gap-2 " + escape("!hidden", true)}" style="${"grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));"}">${each(group_questions, (item) => {
      return `<button class="${"flex flex-col items-center justify-center border p-2 rounded group cursor-pointer bg-gray-100 hover:bg-orange-100 hover:text-orange-600 hover:border-orange-600"}"><span class="${"icon w-10 h-10 p-1 rounded-full bg-gray-200 group-hover:bg-orange-200"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 10V7c0-1.103-.897-2-2-2h-3c0-1.654-1.346-3-3-3S8 3.346 8 5H5c-1.103 0-2 .897-2 2v4h1a2 2 0 0 1 0 4H3v4c0 1.103.897 2 2 2h4v-1a2 2 0 0 1 4 0v1h4c1.103 0 2-.897 2-2v-3c1.654 0 3-1.346 3-3s-1.346-3-3-3z"}"></path></svg></span>
              <span class="${"mt-2 text-xs text-center"}">${escape(item.label)}</span>
            </button>`;
    })}</div></div></div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: ".list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0{border-bottom-width:0px\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0:hover:not(button),.list-rounded.svelte-1sg5ko0>*.show.svelte-1sg5ko0.svelte-1sg5ko0{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(254 215 170 / var(--tw-bg-opacity))\n}.list-rounded.svelte-1sg5ko0>*:hover:not(button) .item-title.svelte-1sg5ko0.svelte-1sg5ko0,.list-rounded.svelte-1sg5ko0>*.show .item-title.svelte-1sg5ko0.svelte-1sg5ko0{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity))\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0:hover+.svelte-1sg5ko0{border-top-width:0px\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0:first-child{border-top-left-radius:0.25rem;border-top-right-radius:0.25rem\n}.list-rounded.svelte-1sg5ko0>.svelte-1sg5ko0.svelte-1sg5ko0:last-child{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;border-bottom-width:1px\n}",
  map: null
};
const Passage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { data = [] } = $$props;
  let show_item = null;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span></p>
  <div class="${"list-rounded flex flex-col svelte-1sg5ko0"}">${each(data, (item, index) => {
      return `<div class="${"border bg-white " + escape(show_item == index ? "show" : "", true) + " svelte-1sg5ko0"}">
        <div class="${"item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none svelte-1sg5ko0"}"><span class="${"icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform " + escape(show_item == index ? "rotate-180" : "", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"}"></path></svg></span>
          <span class="${"font-semibold"}">PASSAGE ${escape(index + 1)}</span>
          <span class="${"!ml-auto icon w-6 h-6 p-1 cursor-pointer hover:text-red-600"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"}"></path></svg></span>
          <span class="${"icon w-6 h-6 p-1 cursor-move hover:text-blue-600"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"}"></path></svg>
          </span></div>

        
        ${validate_component(Collapse, "Collapse").$$render($$result, { show: show_item == index }, {}, {
        default: () => {
          return `<div class="${"bg-orange-100 px-4 py-6"}"><div class="${"mb-4"}">${validate_component(Rich_text, "RichText").$$render(
            $$result,
            {
              label: "content",
              height: 300,
              data: item.content
            },
            {
              data: ($$value) => {
                item.content = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
            ${validate_component(Group_question, "GroupQuestion").$$render(
            $$result,
            { data: item.group_questions },
            {
              data: ($$value) => {
                item.group_questions = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
        `;
        }
      })}
        
      </div>`;
    })}

    <button class="${"flex items-center justify-center space-x-2 border px-4 py-2 cursor-pointer bg-white text-orange-600 transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-600 svelte-1sg5ko0"}"><span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}"></path></svg></span>
      <span class="${"font-semibold"}">Add new passage</span></button></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slug;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { form } = $$props;
  let title = "";
  let passages;
  let submit_form_el;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    slug = slugify(title, "_");
    {
      console.log(form);
    }
    $$rendered = `<button class="${"flex items-center space-x-1 text-blue-500 hover:text-orange-600"}"><span class="${"icon w-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"}"></path></svg></span>
  <span>Back</span></button>

<section class="${"flex justify-between items-end mt-4"}"><div><h3 class="${"text-xl font-semibold"}">Create an entry</h3>
    <p class="${"text-gray-600"}">API ID : quizzes</p></div>

  <button class="${"btn btn-orange"}"><span>Save</span></button></section>

<section class="${"mt-4"}"><div class="${"flex -mx-2"}"><div class="${"w-3/4 px-2 mb-4"}"><div class="${"w-full border rounded shadow-sm px-6 py-4 bg-white"}"><form action="${"?/create"}" method="${"post"}"><div class="${"flex -mx-2"}"><div class="${"w-1/2 px-2 mb-4"}">${validate_component(Text, "Text").$$render(
      $$result,
      {
        label: "title",
        name: "title",
        data: title
      },
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
      { label: "slug", name: "slug", data: slug },
      {
        data: ($$value) => {
          slug = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

          <div class="${"mb-4"}">${validate_component(Passage, "Passage").$$render(
      $$result,
      { label: "passages", data: passages },
      {
        data: ($$value) => {
          passages = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

          <div class="${"flex justify-end"}"><button type="${"submit"}" class="${"btn btn-orange"}"${add_attribute("this", submit_form_el, 0)}>Submit</button></div></form></div></div>

    <div class="${"w-1/4 px-2 mb-4"}"><div class="${"w-full h-60 border rounded shadow-sm px-6 py-4 bg-white"}"></div></div></div></section>

${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6a177c7a.js.map
