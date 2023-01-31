import { c as create_ssr_component, d as add_attribute, e as escape } from './index-14666a34.js';
import './uneval-c005139b.js';
import { l as logo } from './svelte-logo-59afeaba.js';

const css = {
  code: ".form-loading.svelte-1gpx623.svelte-1gpx623{pointer-events:none}.label.svelte-1gpx623.svelte-1gpx623{font-size:0.875rem;line-height:1.25rem}.label.required.svelte-1gpx623.svelte-1gpx623::after{--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity));--tw-content:'*';content:var(--tw-content)}.input-login.svelte-1gpx623.svelte-1gpx623{display:flex;width:100%;align-items:center;overflow:hidden;border-radius:0.25rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-ring-opacity:1;--tw-ring-color:rgb(234 88 12 / var(--tw-ring-opacity))}.input-login.svelte-1gpx623 input.svelte-1gpx623::-moz-placeholder{font-size:0.875rem;line-height:1.25rem}.input-login.svelte-1gpx623 input.svelte-1gpx623::placeholder{font-size:0.875rem;line-height:1.25rem}.input-login.svelte-1gpx623.svelte-1gpx623:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.btn.svelte-1gpx623.svelte-1gpx623{display:block;width:100%;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.btn.svelte-1gpx623.svelte-1gpx623:hover{--tw-bg-opacity:1;background-color:rgb(251 146 60 / var(--tw-bg-opacity))}.btn-2.svelte-1gpx623.svelte-1gpx623{display:flex;width:100%;align-items:center;border-radius:0.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}.btn-2.svelte-1gpx623 .btn-icon.svelte-1gpx623{height:2rem;width:2rem;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.25rem}.btn-2.svelte-1gpx623 .btn-text.svelte-1gpx623{min-width:0px;flex-grow:1;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-weight:600}.btn-loading.svelte-1gpx623.svelte-1gpx623{position:relative;overflow:hidden}.btn-loading.svelte-1gpx623.svelte-1gpx623::after{position:absolute;top:50%;left:50%;display:block;height:1.5rem;width:1.5rem;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;border-width:2px;border-left-width:1px;--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));border-left-color:transparent;--tw-content:'';content:var(--tw-content);animation:btn-loading 1s infinite linear}.btn-loading.svelte-1gpx623.svelte-1gpx623::before{position:absolute;top:0px;left:0px;display:block;height:100%;width:100%;background-color:inherit;--tw-content:'';content:var(--tw-content)}@keyframes btn-loading{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let input_pass = null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="${"w-full min-h-screen bg-gray-100 py-16"}"><div class="${"w-full max-w-lg mx-auto rounded-lg shadow px-12 py-8 bg-white"}"><div class="${"flex flex-col justify-center items-center"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"w-20"}">

			<h1 class="${"text-4xl font-semibold mt-4 mb-2"}">Welcome to ViệtIT!</h1>
			<p class="${"text-gray-600"}">Log in to your ViệtIT account</p></div>

    ${data?.user ? `<form action="${"?/logout"}" class="${"mt-8"}" method="${"post"}"><p class="${"mb-4"}">You are logged in</p>

        <div class="${"mb-4 pt-2"}"><button class="${"btn svelte-1gpx623"}" type="${"submit"}">Logout</button></div></form>` : `<form action="${"?/login"}" class="${"mt-8 " + escape("", true) + " svelte-1gpx623"}" method="${"post"}"><div class="${"mb-4"}"><label for="${"email"}" class="${"label required svelte-1gpx623"}">Email</label>
          <div class="${"input-login mt-1 svelte-1gpx623"}"><input id="${"email"}" name="${"email"}" type="${"text"}" class="${"flex-grow min-w-0 px-4 py-2 svelte-1gpx623"}" placeholder="${"e.g. viet@doe.com"}"></div></div>

        <div class="${"mb-4"}"><label for="${"password"}" class="${"label required svelte-1gpx623"}">Password</label>
          <div class="${"input-login mt-1 svelte-1gpx623"}"><input id="${"password"}" name="${"password"}" type="${"password"}" class="${"flex-grow min-w-0 px-4 py-2 svelte-1gpx623"}"${add_attribute("this", input_pass, 0)}>
            <div class="${"flex-none px-2"}">
              <span class="${"icon w-8 h-8 cursor-pointer p-1.5 text-gray-700 hover:text-orange-600"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.315c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM12.043 7H12a5 5 0 0 1 5 5 4.894 4.894 0 0 1-.852 2.734l-.721-.721A3.919 3.919 0 0 0 16 11.999c0-.474-.099-.925-.255-1.349A.985.985 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.965 3.965 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-.72-.72C10.053 7.326 10.982 7 12 7h-.043L12 6.998l.043.002zm-7.969 4.999c.103-.235.274-.586.521-.989l5.867 5.867c-4.213-.647-5.939-3.842-6.388-4.878zm9.247 4.908-7.48-7.48a8.146 8.146 0 0 1 1.188-.984l8.055 8.055a8.835 8.835 0 0 1-1.763.409z"}"></path></svg>`}</span></div></div></div>

        ${form?.error ? `<p class="${"mb-4 text-red-500 text-sm"}">* ${escape(form?.error)}</p>` : ``}

        ${form?.success ? `<p class="${"mb-4 text-green-500 text-sm"}">Successfully logged in! Welcome back</p>` : ``}

        <div class="${"mb-4 pt-2"}"><button class="${"btn " + escape("", true) + " svelte-1gpx623"}" type="${"submit"}">Login</button></div>

        <hr>

        <div class="${"mb-4 pt-4"}"><button class="${"btn-2 bg-blue-700 hover:bg-blue-600 text-white svelte-1gpx623"}"><span class="${"btn-icon svelte-1gpx623"}"><img src="${"/images/google.png"}" alt="${""}"></span>
            <span class="${"btn-text svelte-1gpx623"}">Login with Google</span></button></div>

        <div class="${"mb-4"}"><button class="${"btn-2 bg-sky-700 hover:bg-sky-600 text-white svelte-1gpx623"}"><span class="${"btn-icon svelte-1gpx623"}"><img src="${"/images/facebook.png"}" alt="${""}"></span>
            <span class="${"btn-text svelte-1gpx623"}">Login with Facebook</span></button></div>

        <div class="${"mb-4"}"><button class="${"btn-2 bg-stone-800 hover:bg-stone-700 text-white svelte-1gpx623"}"><span class="${"btn-icon svelte-1gpx623"}"><img src="${"/images/github.png"}" alt="${""}"></span>
            <span class="${"btn-text svelte-1gpx623"}">Login with Github</span></button></div></form>`}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2931d793.js.map
