import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from './index-14666a34.js';
import { l as logo } from './svelte-logo-59afeaba.js';
import { p as page } from './stores-7aaf8fa7.js';
import './uneval-c005139b.js';

const css = {
  code: "body{background-color:rgb(246, 246, 249);--tw-text-opacity:1;color:rgb(85 85 85 / var(--tw-text-opacity))}h1,h2,h3,h4,h5{--tw-text-opacity:1;color:rgb(51 51 51 / var(--tw-text-opacity))}.left-sidebar.sidebar-collapse.svelte-7janxd .logo-title.svelte-7janxd.svelte-7janxd.svelte-7janxd{display:none}.left-sidebar.sidebar-collapse.svelte-7janxd .text-description.svelte-7janxd.svelte-7janxd.svelte-7janxd{height:0px;overflow:hidden;border-bottom-width:1px}.left-sidebar.sidebar-collapse.svelte-7janxd .link.svelte-7janxd>.svelte-7janxd+.svelte-7janxd{display:none}.link.svelte-7janxd.svelte-7janxd.svelte-7janxd.svelte-7janxd{display:flex;align-items:center}.link.svelte-7janxd>.svelte-7janxd:not([hidden])~.svelte-7janxd.svelte-7janxd:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))}.link.svelte-7janxd.svelte-7janxd.svelte-7janxd.svelte-7janxd{border-radius:0.25rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600}.link.svelte-7janxd.svelte-7janxd.svelte-7janxd.svelte-7janxd:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.link.active.svelte-7janxd.svelte-7janxd.svelte-7janxd.svelte-7janxd{--tw-bg-opacity:1;background-color:rgb(255 237 213 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(194 65 12 / var(--tw-text-opacity))}.link.active.svelte-7janxd.svelte-7janxd.svelte-7janxd.svelte-7janxd:hover{--tw-bg-opacity:1;background-color:rgb(254 215 170 / var(--tw-bg-opacity))}.link.svelte-7janxd>span.svelte-7janxd.svelte-7janxd.svelte-7janxd{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link.svelte-7janxd .icon.svelte-7janxd.svelte-7janxd.svelte-7janxd{height:1.25rem;width:1.25rem;flex:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let hours = new Date().getHours();
  let good_time = "Good morning";
  if (hours >= 22 && hours < 5) {
    good_time = "Good night";
  } else if (hours >= 19 && hours < 22) {
    good_time = "Good evening";
  } else if (hours >= 13 && hours < 19) {
    good_time = "Good afternoon";
  } else if (hours >= 5 && hours < 13) {
    good_time = "Good morning";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  pathname = ($page.url.pathname + "/").split("/")[2];
  $$unsubscribe_page();
  return `<div class="${"flex w-full"}"><div class="${"left-sidebar flex-none h-screen shadow relative z-10 " + escape("", true) + " svelte-7janxd"}" style="${"width: " + escape("200px", true)}"><div class="${"fixed w-[inherit] h-full flex flex-col bg-white"}"><div class="${"flex-none flex items-center py-4 px-3 space-x-2 border-b"}"><img${add_attribute("src", logo, 0)} alt="${""}" class="${"w-8 h-8 rounded"}">
        <div class="${"logo-title text-sm svelte-7janxd"}"><h1 class="${"font-semibold"}">Việt It Dashboard</h1>
          <h5 class="${"text-xs text-gray-500"}">Workplace</h5></div></div>
  
      <div class="${"flex-grow min-h-0 flex flex-col space-y-2 px-3 py-4 text-sm overflow-y-auto"}"><h3 class="${"text-description uppercase text-xs font-semibold mb-2 px-2 svelte-7janxd"}">Content Manager</h3>
  
        <a href="${"/dashboard"}" class="${"link " + escape(pathname == "" ? "active" : "", true) + " svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"}"></path></svg></span>
          <span class="${"svelte-7janxd"}">Dashboard</span></a>
  
        <a href="${"/dashboard/products"}" class="${"link " + escape(pathname == "products" ? "active" : "", true) + " svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m11.13 4.41 4.23 4.23L14.3 9.7l-4.24-4.24-1.77 1.77 4.24 4.24-1.06 1.06-4.24-4.24-1.77 1.77L9.7 14.3l-1.06 1.06-4.23-4.23C1.86 14 1.55 18 3.79 20.21a5.38 5.38 0 0 0 3.85 1.5 8 8 0 0 0 5.6-2.47l6-6c2.87-2.87 3.31-7.11 1-9.45s-6.24-1.93-9.11.62z"}"></path></svg></span>
          <span class="${"svelte-7janxd"}">Products</span></a>
  
        <a href="${"/dashboard/categories"}" class="${"link " + escape(pathname == "categories" ? "active" : "", true) + " svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"}"></path></svg></span>
          <span class="${"svelte-7janxd"}">Categories</span></a>

        <a href="${"/dashboard/quizzes"}" class="${"link " + escape(pathname == "quizzes" ? "active" : "", true) + " svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"}"></path></svg></span>
          <span class="${"svelte-7janxd"}">Quizzes</span></a>
  
        <h3 class="${"text-description uppercase text-xs font-semibold !mb-2 !mt-8 px-2 svelte-7janxd"}">General</h3>
  
        <a href="${"/dashboard/user"}" class="${"link " + escape(pathname == "user" ? "active" : "", true) + " svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"}"></path></svg></span>
          <span class="${"svelte-7janxd"}">User</span></a>
  
        <a href="${"/dashboard/role"}" class="${"link " + escape(pathname == "role" ? "active" : "", true) + " svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M3.433 17.325 3.079 19.8a1 1 0 0 0 1.131 1.131l2.475-.354C7.06 20.524 8 18 8 18s.472.405.665.466c.412.13.813-.274.948-.684L10 16.01s.577.292.786.335c.266.055.524-.109.707-.293a.988.988 0 0 0 .241-.391L12 14.01s.675.187.906.214c.263.03.519-.104.707-.293l1.138-1.137a5.502 5.502 0 0 0 5.581-1.338 5.507 5.507 0 0 0 0-7.778 5.507 5.507 0 0 0-7.778 0 5.5 5.5 0 0 0-1.338 5.581l-7.501 7.5a.994.994 0 0 0-.282.566zM18.504 5.506a2.919 2.919 0 0 1 0 4.122l-4.122-4.122a2.919 2.919 0 0 1 4.122 0z"}"></path></svg></span>
          <span class="${"svelte-7janxd"}">Role</span></a>
  
        <a href="${"/dashboard/settings"}" class="${"link " + escape(pathname == "settings" ? "active" : "", true) + " svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"}"></path></svg></span>
          <span class="${"svelte-7janxd"}">Settings</span></a></div>
  
      <div class="${"flex-none mt-auto border-t"}"><form action="${"/auth/login?/logout"}" method="${"post"}" class="${"flex items-center space-x-2 w-full px-3 py-4"}"><button type="${"submit"}" class="${"w-full link text-sm svelte-7janxd"}"><span class="${"icon svelte-7janxd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M16 13v-2H7V8l-5 4 5 4v-3z"}"></path><path d="${"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}"></path></svg></span>
            <span class="${"svelte-7janxd"}">Logout</span></button>

          
          <span class="${"border rounded p-1 !w-8 !h-8 -my-2 bg-white hover:bg-orange-600 hover:text-white cursor-pointer transition-all"}"><div class="${"icon transition-all " + escape("", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"}"></path></svg></div></span></form></div></div></div>

  <div class="${"flex-grow min-w-0 relative py-4 px-12"}"><div class="${"flex justify-between items-center border-b pb-4"}" style="${"height: 53px;"}"><h3 class="${"text-3xl font-bold"}">${escape(good_time)}, ${escape(data.user?.name)}!</h3>

      <div class="${"flex space-x-4 items-center"}">
        <div class="${"relative"}"><span class="${"icon w-6 h-6 cursor-pointer hover:text-orange-600"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"}"></path></svg></span>
          <span class="${"absolute w-2 h-2 rounded-full bg-orange-600 top-0 right-0"}"></span></div>

        
        <div class="${"relative"}">
          <div class="${"flex space-x-1 items-center"}"><div class="${"w-10 h-10 border rounded-full overflow-hidden cursor-pointer"}">
              <img${add_attribute("src", data.user?.image, 0)} alt="${"Photo by " + escape(data.user?.name, true)}" class="${"w-full h-full object-cover"}" loading="${"lazy"}"></div>
            <span class="${"icon transition-all cursor-pointer " + escape("", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}"></path></svg></span></div>
          ${``}</div></div></div>
    <div class="${"mt-4 text-sm"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-566d416f.js.map
