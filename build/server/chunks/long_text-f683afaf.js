import { c as create_ssr_component, e as escape, d as add_attribute } from './index-14666a34.js';

const Long_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { data = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><p class="${"text-xs font-semibold text-primary mb-1.5 capitalize"}">${escape(label)} <span class="${"text-red-600"}">*</span>
    <span class="${"icon inline-block w-3 h-3"}"><svg width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}"><path d="${"M12.59 23.679l-.044-.007a.045.045 0 00.043.007zM22.334 8.345a.295.295 0 00-.572-.033.296.296 0 01-.28.206h-.828a.294.294 0 01-.153-.042l-1.199-.72a.293.293 0 00-.152-.042h-1.918a.294.294 0 00-.163.05l-2.366 1.577a.295.295 0 00-.131.248v2.236a.295.295 0 00.156.261l3.101 1.656a.298.298 0 01.157.257L18 15.257a.296.296 0 00.153.255l1.246.69a.297.297 0 01.152.258v2.604a.297.297 0 00.34.292.296.296 0 00.152-.07c.502-.443 1.223-1.09 1.319-1.237a11.186 11.186 0 001.175-2.415c.679-1.966.142-5.501-.203-7.289zM13.629 14.507l-3.286-2.464a.214.214 0 00-.129-.043H8.655a.203.203 0 01-.143-.06l-.735-.734a.216.216 0 00-.152-.063h-2.85a.202.202 0 01-.198-.243.203.203 0 01.055-.104l.451-.45a.202.202 0 01.144-.06H6.96a.428.428 0 00.413-.313l.369-1.312a.214.214 0 01.107-.132L9.32 7.77a.203.203 0 00.11-.18v-.67c0-.042.013-.082.037-.116l.782-1.126a.2.2 0 01.095-.074l1.095-.411a.203.203 0 00.131-.19v-.611a.203.203 0 00-.09-.17l-1.097-.729a.205.205 0 00-.206-.012l-1.493.747a.202.202 0 01-.214-.022l-.709-.56a.204.204 0 01.006-.321l.575-.424a.202.202 0 00-.005-.33l-.896-.625a.203.203 0 00-.214-.012c-.324.177-1.275.702-1.613.939a11.222 11.222 0 00-3.651 4.285c-.098.202-.218.407-.23.628-.012.221-.185.715-.258.915a.202.202 0 00.013.166l1.912 3.514a.2.2 0 00.074.077l2.012 1.207a.201.201 0 01.097.146l.403 2.922a.205.205 0 00.086.14l1.57 1.079a.214.214 0 01.088.133l.832 3.953a.193.193 0 00.027.066c.078.126.39.589.766.658-.035.01-.066.031-.101.041.09.016.18.037.268.063.107.028.214.053.321.076.168.033.184.06.265-.09.107-.2.23-.268.321-.292a.207.207 0 00.155-.156l.54-2.5a.215.215 0 01.085-.13l2.411-1.709a.214.214 0 00.09-.175v-3.212a.215.215 0 00-.082-.172z"}" fill="${"#32324D"}"></path><path d="${"M12.321.857s-.195.011-.235.012a11.113 11.113 0 00-3.932.845c.13.09-.094.173-.094.173l.35.684h1.876l1.285.643 1.125-.643-.375-1.714zM17.262 4.718l.863-.75a.214.214 0 00-.05-.357l-1.008-.467a.214.214 0 00-.284.101l-.415.869a.214.214 0 00.08.274l.56.35a.214.214 0 00.254-.02zM21.302 5.822l-.312-.483a.337.337 0 01-.014-.023c-.056-.115-.521-1.055-.91-1.42-.292-.276-.375-.196-.398-.135a.202.202 0 01-.064.085l-1.545 1.25a.214.214 0 01-.135.047h-.8a.214.214 0 00-.151.062l-.643.643a.215.215 0 000 .304l.643.642a.214.214 0 00.152.063h4.027a.215.215 0 00.214-.223l-.03-.705a.214.214 0 00-.034-.107z"}" fill="${"#32324D"}"></path><path d="${"M12 2.143A9.857 9.857 0 115.03 5.03 9.791 9.791 0 0112 2.143zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"}" fill="${"#32324D"}"></path></svg></span></p>
  <div class="${"border rounded focus-within:ring-2 ring-orange-600"}"><textarea${add_attribute("name", label, 0)} class="${"w-full h-20 resize-none px-4 py-2"}">${data || ""}</textarea></div></div>`;
});

export { Long_text as L };
//# sourceMappingURL=long_text-f683afaf.js.map