import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, h as createEventDispatcher, o as onDestroy } from './index-14666a34.js';

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
let apiKey_tinymce = "533bnxknzoiro9lr6pa0oawuiww55hjjdqx4hlfledrf210z";
const Rich_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { height = 500 } = $$props;
  let config_tinymce = {
    height,
    "plugins": [
      "a11ychecker",
      "advlist",
      "advcode",
      "advtable",
      "autolink",
      "checklist",
      "export",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "powerpaste",
      "fullscreen",
      "formatpainter",
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
  return `<div><p class="${"text-xs font-semibold text-primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span>
    <span class="${"icon inline-block w-3 h-3"}"><svg width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}"><path d="${"M12.59 23.679l-.044-.007a.045.045 0 00.043.007zM22.334 8.345a.295.295 0 00-.572-.033.296.296 0 01-.28.206h-.828a.294.294 0 01-.153-.042l-1.199-.72a.293.293 0 00-.152-.042h-1.918a.294.294 0 00-.163.05l-2.366 1.577a.295.295 0 00-.131.248v2.236a.295.295 0 00.156.261l3.101 1.656a.298.298 0 01.157.257L18 15.257a.296.296 0 00.153.255l1.246.69a.297.297 0 01.152.258v2.604a.297.297 0 00.34.292.296.296 0 00.152-.07c.502-.443 1.223-1.09 1.319-1.237a11.186 11.186 0 001.175-2.415c.679-1.966.142-5.501-.203-7.289zM13.629 14.507l-3.286-2.464a.214.214 0 00-.129-.043H8.655a.203.203 0 01-.143-.06l-.735-.734a.216.216 0 00-.152-.063h-2.85a.202.202 0 01-.198-.243.203.203 0 01.055-.104l.451-.45a.202.202 0 01.144-.06H6.96a.428.428 0 00.413-.313l.369-1.312a.214.214 0 01.107-.132L9.32 7.77a.203.203 0 00.11-.18v-.67c0-.042.013-.082.037-.116l.782-1.126a.2.2 0 01.095-.074l1.095-.411a.203.203 0 00.131-.19v-.611a.203.203 0 00-.09-.17l-1.097-.729a.205.205 0 00-.206-.012l-1.493.747a.202.202 0 01-.214-.022l-.709-.56a.204.204 0 01.006-.321l.575-.424a.202.202 0 00-.005-.33l-.896-.625a.203.203 0 00-.214-.012c-.324.177-1.275.702-1.613.939a11.222 11.222 0 00-3.651 4.285c-.098.202-.218.407-.23.628-.012.221-.185.715-.258.915a.202.202 0 00.013.166l1.912 3.514a.2.2 0 00.074.077l2.012 1.207a.201.201 0 01.097.146l.403 2.922a.205.205 0 00.086.14l1.57 1.079a.214.214 0 01.088.133l.832 3.953a.193.193 0 00.027.066c.078.126.39.589.766.658-.035.01-.066.031-.101.041.09.016.18.037.268.063.107.028.214.053.321.076.168.033.184.06.265-.09.107-.2.23-.268.321-.292a.207.207 0 00.155-.156l.54-2.5a.215.215 0 01.085-.13l2.411-1.709a.214.214 0 00.09-.175v-3.212a.215.215 0 00-.082-.172z"}" fill="${"#32324D"}"></path><path d="${"M12.321.857s-.195.011-.235.012a11.113 11.113 0 00-3.932.845c.13.09-.094.173-.094.173l.35.684h1.876l1.285.643 1.125-.643-.375-1.714zM17.262 4.718l.863-.75a.214.214 0 00-.05-.357l-1.008-.467a.214.214 0 00-.284.101l-.415.869a.214.214 0 00.08.274l.56.35a.214.214 0 00.254-.02zM21.302 5.822l-.312-.483a.337.337 0 01-.014-.023c-.056-.115-.521-1.055-.91-1.42-.292-.276-.375-.196-.398-.135a.202.202 0 01-.064.085l-1.545 1.25a.214.214 0 01-.135.047h-.8a.214.214 0 00-.151.062l-.643.643a.215.215 0 000 .304l.643.642a.214.214 0 00.152.063h4.027a.215.215 0 00.214-.223l-.03-.705a.214.214 0 00-.034-.107z"}" fill="${"#32324D"}"></path><path d="${"M12 2.143A9.857 9.857 0 115.03 5.03 9.791 9.791 0 0112 2.143zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"}" fill="${"#32324D"}"></path></svg></span></p>

  ${validate_component(Editor, "Editor").$$render(
    $$result,
    {
      apiKey: apiKey_tinymce,
      conf: config_tinymce
    },
    {},
    {}
  )}</div>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { data = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><p class="${"text-xs font-semibold text-primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span>
    <span class="${"icon inline-block w-3 h-3"}"><svg width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}"><path d="${"M12.59 23.679l-.044-.007a.045.045 0 00.043.007zM22.334 8.345a.295.295 0 00-.572-.033.296.296 0 01-.28.206h-.828a.294.294 0 01-.153-.042l-1.199-.72a.293.293 0 00-.152-.042h-1.918a.294.294 0 00-.163.05l-2.366 1.577a.295.295 0 00-.131.248v2.236a.295.295 0 00.156.261l3.101 1.656a.298.298 0 01.157.257L18 15.257a.296.296 0 00.153.255l1.246.69a.297.297 0 01.152.258v2.604a.297.297 0 00.34.292.296.296 0 00.152-.07c.502-.443 1.223-1.09 1.319-1.237a11.186 11.186 0 001.175-2.415c.679-1.966.142-5.501-.203-7.289zM13.629 14.507l-3.286-2.464a.214.214 0 00-.129-.043H8.655a.203.203 0 01-.143-.06l-.735-.734a.216.216 0 00-.152-.063h-2.85a.202.202 0 01-.198-.243.203.203 0 01.055-.104l.451-.45a.202.202 0 01.144-.06H6.96a.428.428 0 00.413-.313l.369-1.312a.214.214 0 01.107-.132L9.32 7.77a.203.203 0 00.11-.18v-.67c0-.042.013-.082.037-.116l.782-1.126a.2.2 0 01.095-.074l1.095-.411a.203.203 0 00.131-.19v-.611a.203.203 0 00-.09-.17l-1.097-.729a.205.205 0 00-.206-.012l-1.493.747a.202.202 0 01-.214-.022l-.709-.56a.204.204 0 01.006-.321l.575-.424a.202.202 0 00-.005-.33l-.896-.625a.203.203 0 00-.214-.012c-.324.177-1.275.702-1.613.939a11.222 11.222 0 00-3.651 4.285c-.098.202-.218.407-.23.628-.012.221-.185.715-.258.915a.202.202 0 00.013.166l1.912 3.514a.2.2 0 00.074.077l2.012 1.207a.201.201 0 01.097.146l.403 2.922a.205.205 0 00.086.14l1.57 1.079a.214.214 0 01.088.133l.832 3.953a.193.193 0 00.027.066c.078.126.39.589.766.658-.035.01-.066.031-.101.041.09.016.18.037.268.063.107.028.214.053.321.076.168.033.184.06.265-.09.107-.2.23-.268.321-.292a.207.207 0 00.155-.156l.54-2.5a.215.215 0 01.085-.13l2.411-1.709a.214.214 0 00.09-.175v-3.212a.215.215 0 00-.082-.172z"}" fill="${"#32324D"}"></path><path d="${"M12.321.857s-.195.011-.235.012a11.113 11.113 0 00-3.932.845c.13.09-.094.173-.094.173l.35.684h1.876l1.285.643 1.125-.643-.375-1.714zM17.262 4.718l.863-.75a.214.214 0 00-.05-.357l-1.008-.467a.214.214 0 00-.284.101l-.415.869a.214.214 0 00.08.274l.56.35a.214.214 0 00.254-.02zM21.302 5.822l-.312-.483a.337.337 0 01-.014-.023c-.056-.115-.521-1.055-.91-1.42-.292-.276-.375-.196-.398-.135a.202.202 0 01-.064.085l-1.545 1.25a.214.214 0 01-.135.047h-.8a.214.214 0 00-.151.062l-.643.643a.215.215 0 000 .304l.643.642a.214.214 0 00.152.063h4.027a.215.215 0 00.214-.223l-.03-.705a.214.214 0 00-.034-.107z"}" fill="${"#32324D"}"></path><path d="${"M12 2.143A9.857 9.857 0 115.03 5.03 9.791 9.791 0 0112 2.143zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"}" fill="${"#32324D"}"></path></svg></span></p>
  <div class="${"border rounded focus-within:ring-2 ring-orange-600"}"><input type="${"text"}"${add_attribute("name", label, 0)} class="${"w-full px-4 py-2"}"${add_attribute("value", data, 0)}></div></div>`;
});

export { Rich_text as R, Text as T };
//# sourceMappingURL=text-48262b48.js.map
