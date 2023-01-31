import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, h as createEventDispatcher, o as onDestroy } from './index-14666a34.js';

const Long_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { data = "" } = $$props;
  let { name = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span>
    </p>
  <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><textarea${add_attribute("name", name, 0)} class="${"w-full h-20 px-4 py-2"}">${data || ""}</textarea></div></div>`;
});
const uuid = (prefix) => {
  return prefix + "_" + Math.floor(Math.random() * 1e9) + String(Date.now());
};
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = uuid("tinymce-svelte") } = $$props;
  let { inline = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { apiKey = "no-api-key" } = $$props;
  let { channel = "6" } = $$props;
  let { scriptSrc = void 0 } = $$props;
  let { conf = {} } = $$props;
  let { modelEvents = "change input undo redo" } = $$props;
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { cssClass = "tinymce-wrapper" } = $$props;
  let container;
  let element;
  createEventDispatcher();
  onDestroy(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.apiKey === void 0 && $$bindings.apiKey && apiKey !== void 0)
    $$bindings.apiKey(apiKey);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  if ($$props.scriptSrc === void 0 && $$bindings.scriptSrc && scriptSrc !== void 0)
    $$bindings.scriptSrc(scriptSrc);
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0)
    $$bindings.conf(conf);
  if ($$props.modelEvents === void 0 && $$bindings.modelEvents && modelEvents !== void 0)
    $$bindings.modelEvents(modelEvents);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.cssClass === void 0 && $$bindings.cssClass && cssClass !== void 0)
    $$bindings.cssClass(cssClass);
  return `<div${add_attribute("class", cssClass, 0)}${add_attribute("this", container, 0)}>${inline ? `<div${add_attribute("id", id, 0)}${add_attribute("this", element, 0)}></div>` : `<textarea${add_attribute("id", id, 0)} style="${"visibility:hidden"}"${add_attribute("this", element, 0)}></textarea>`}</div>`;
});
const css = {
  code: ".tox-tinymce{border-width:1px !important;border-color:inherit !important}",
  map: null
};
const Rich_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { height = 500 } = $$props;
  let { data = "" } = $$props;
  let { name = "" } = $$props;
  let config_tinymce = {
    height,
    "plugins": [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "help",
      "wordcount"
    ],
    "toolbar": "undo redo | a11ycheck casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | code table help"
  };
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span>
    </p>

  <input type="${"text"}"${add_attribute("name", name, 0)}${add_attribute("value", data, 0)} class="${"sr-only"}">
  ${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        id: name,
        scriptSrc: "/js/tinymce/tinymce.min.js",
        conf: config_tinymce,
        value: data
      },
      {
        value: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {}
    )}

  
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "Text" } = $$props;
  let { name = "" } = $$props;
  let { data = "" } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<div><p class="${"text-xs font-semibold text-$primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span>
    </p>
  <div class="${"border rounded focus-within:ring-2 ring-orange-600 bg-white"}"><input type="${"text"}"${add_attribute("name", name, 0)} class="${"w-full px-4 py-2"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", data, 0)}></div></div>`;
});

export { Long_text as L, Rich_text as R, Text as T };
//# sourceMappingURL=text-81c787c3.js.map
