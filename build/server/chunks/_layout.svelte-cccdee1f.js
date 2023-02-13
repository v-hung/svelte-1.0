import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component, f as each, o as onDestroy } from './index-14666a34.js';
import './uneval-c005139b.js';
import { l as logo } from './svelte-logo-59afeaba.js';
import { p as page } from './stores-7aaf8fa7.js';
import './list_message.svelte_svelte_type_style_lang-968cebce.js';
import 'socket.io-client';

const css$1 = {
  code: ".message-is-me.svelte-10nmnoi.svelte-10nmnoi{justify-content:flex-end\n}.message-is-me.svelte-10nmnoi>.svelte-10nmnoi:first-child{order:9999;margin-left:0.5rem\n}.message-is-me.svelte-10nmnoi .message-img.svelte-10nmnoi{height:1rem;width:1rem\n}.message-is-me.svelte-10nmnoi>.svelte-10nmnoi:last-child{align-items:flex-end !important;text-align:end\n}.message-is-me.svelte-10nmnoi .message-text.svelte-10nmnoi{border-top-right-radius:0.25rem !important;border-bottom-right-radius:0.25rem !important;border-top-left-radius:9999px !important;border-bottom-left-radius:9999px !important\n}.message-first.svelte-10nmnoi.svelte-10nmnoi{border-top-left-radius:9999px\n}.message-last.svelte-10nmnoi.svelte-10nmnoi{border-bottom-left-radius:9999px\n}.message-is-me.svelte-10nmnoi .message-first.svelte-10nmnoi{border-top-right-radius:9999px !important\n}.message-is-me.svelte-10nmnoi .message-last.svelte-10nmnoi{border-bottom-right-radius:9999px !important\n}",
  map: null
};
const List_message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filterMessage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { messages } = $$props;
  let { users } = $$props;
  let { pageChat } = $$props;
  let { messagesLoadMore } = $$props;
  const groupMessage = (messages2) => {
    let unique = [];
    if (messages2.length <= 0)
      return [];
    let senderID = messages2[0].senderID;
    unique.unshift({
      isMe: messages2[0].senderID == $page.data.user.id,
      userId: messages2[0].senderID,
      messages: []
    });
    messages2.forEach((message) => {
      if (message.senderID != senderID) {
        unique.unshift({
          isMe: message.senderID == $page.data.user.id,
          userId: message.senderID,
          messages: []
        });
        senderID = message.senderID;
      }
      unique[0].messages.unshift(message);
    });
    return unique;
  };
  let listMessage = null;
  const getInfoUser = (userId) => {
    return users.find((v) => v.id == userId) || null;
  };
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  if ($$props.pageChat === void 0 && $$bindings.pageChat && pageChat !== void 0)
    $$bindings.pageChat(pageChat);
  if ($$props.messagesLoadMore === void 0 && $$bindings.messagesLoadMore && messagesLoadMore !== void 0)
    $$bindings.messagesLoadMore(messagesLoadMore);
  $$result.css.add(css$1);
  filterMessage = groupMessage(messages);
  $$unsubscribe_page();
  return `<div class="${"flex-grow min-h-0 basis-0 overflow-y-auto"}"${add_attribute("this", listMessage, 0)}><div class="${"flex flex-col justify-end text-[#333]"}">${pageChat ? `<div class="${"sr-only"}"${add_attribute("this", messagesLoadMore, 0)}></div>` : ``}
    ${each(filterMessage, (group) => {
    return `<div class="${"flex w-full space-x-2 items-end " + escape(group.isMe ? "message-is-me" : "", true) + " px-2 py-2 svelte-10nmnoi"}"><div class="${"flex-none sticky bottom-0 svelte-10nmnoi"}"><img${add_attribute("src", getInfoUser(group.userId).image, 0)} alt="${" "}" class="${"message-img w-8 h-8 rounded-full border object-cover svelte-10nmnoi"}" loading="${"lazy"}"></div>
        <div class="${"flex-grow min-w-0 flex flex-col items-start space-y-1 max-w-[60%] svelte-10nmnoi"}">${each(group.messages, (message, index) => {
      return `<div class="${"bg-gray-200 px-2.5 py-1.5 rounded rounded-r-full message-text " + escape(index == 0 ? "message-first" : "", true) + " " + escape(index == group.messages.length - 1 ? "message-last" : "", true) + " svelte-10nmnoi"}">${escape(message.body)}</div>`;
    })}</div>
      </div>`;
  })}</div>
</div>`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { room } = $$props;
  let info = room?.users.find((v) => v.id != $page.data?.user?.id);
  let textHolder = "";
  let messagesLoadMore = null;
  onDestroy(() => {
  });
  if ($$props.room === void 0 && $$bindings.room && room !== void 0)
    $$bindings.room(room);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${room.show ? `<div class="${"flex-none flex flex-col bg-white shadow rounded w-80 max-h-96 h-full text-sm pointer-events-auto"}"><div class="${"flex-none flex items-center justify-between space-x-2 px-2 shadow"}"><div class="${"flex-none py-2"}"><img${add_attribute("src", info?.image, 0)} alt="${" "}" class="${"w-9 h-9 rounded-full object-cover border"}" loading="${"lazy"}"></div>
      <div class="${"flex-grow"}">${escape(room?.name || info?.name)}</div>
      <button><span class="${"icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"}"></path></svg></span></button></div>

    ${validate_component(List_message, "ListMessage").$$render(
      $$result,
      {
        messages: room.messages,
        pageChat: room.page,
        users: room.users,
        messagesLoadMore
      },
      {
        messagesLoadMore: ($$value) => {
          messagesLoadMore = $$value;
          $$settled = false;
        }
      },
      {}
    )}

    <form class="${"flex-none flex space-x-2 items-center px-2 py-2 text-gray-500"}"><span class="${"flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}"></path></svg></span>

      <div class="${"flex-none flex space-x-2 items-center w-[88px] transition-all overflow-hidden " + escape("", true)}"><span class="${"flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"}"></path><path d="${"M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"}"></path><path d="${"m12 12-1-1-2 3h10l-4-6z"}"></path></svg></span>
        <span class="${"flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9zm7 16.5c0 .827-.673 1.5-1.5 1.5-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7v7.5z"}"></path><circle cx="${"9"}" cy="${"10"}" r="${"2"}"></circle><circle cx="${"15"}" cy="${"10"}" r="${"2"}"></circle></svg></span>
        <span class="${"flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z"}"></path></svg></span></div>

      <div class="${"flex-grow min-w-0 flex items-center rounded-full bg-gray-100 pl-3 py-1"}"><input type="${"text"}" placeholder="${"Aa"}" class="${"flex-grow min-w-0 text-$primary"}"${add_attribute("value", textHolder, 0)}>
        <span class="${"flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}"></path><path d="${"M14.829 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.042 6.042 0 0 0 2.415 0 5.972 5.972 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4.017 4.017 0 0 1-.489.592z"}"></path><circle cx="${"8.5"}" cy="${"10.5"}" r="${"1.5"}"></circle><circle cx="${"15.493"}" cy="${"10.493"}" r="${"1.493"}"></circle></svg></span></div>

      ${`<span class="${"flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"}"></path></svg></span>`}</form></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Messages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let listShowRoom = [];
  $$unsubscribe_page();
  return `<div class="${"fixed right-0 bottom-0 left-0 top-0 p-4 pointer-events-none"}"><div class="${"flex w-full h-full items-end justify-end space-x-4"}">${``}

    ${each(listShowRoom, (room) => {
    return `${validate_component(Chat, "Chat").$$render($$result, { room }, {}, {})}`;
  })}

    <div class="${"flex-none flex flex-col space-y-4 pointer-events-auto"}">${each(listShowRoom, (room) => {
    let info = room?.users.find((v) => v.id != $page.data?.user?.id);
    return `

        <button class="${"w-12 h-12 rounded-full bg-white shadow overflow-hidden"}"><img${add_attribute("src", room?.image || info?.image, 0)} alt="${" "}" class="${"w-full h-full object-cover"}" loading="${"lazy"}">
        </button>`;
  })}

      <button class="${"rounded-full"}"><span class="${"icon w-12 h-12 rounded-full bg-white shadow p-3"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"}"></path><path d="${"M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"}"></path></svg></span></button></div></div></div>`;
});
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
    
        <div class="${"hidden md:flex !ml-auto self-stretch items-stretch space-x-6"}"><div class="${"nav-link svelte-13iz090"}">English News</div>
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
    
        
        <div class="${"!ml-auto"}">${data.user ? `<div class="${"relative"}">
              <div class="${"flex space-x-1 items-center"}"><div class="${"w-10 h-10 border rounded-full overflow-hidden cursor-pointer"}">
                  <img${add_attribute("src", data.user?.image, 0)} alt="${"Photo by " + escape(data.user?.name, true)}" class="${"w-full h-full object-cover"}" loading="${"lazy"}"></div>
                <span class="${"icon transition-all cursor-pointer " + escape("", true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}"></path></svg></span></div>
              ${``}</div>` : `<a href="${"/auth/login"}" class="${"btn btn-red rounded-lg"}">Sign up</a>`}</div></div></div>
    <div class="${"flex-none w-full h-16 shadow-lg shadow-gray-200"}"></div>` : ``}
  
  <div class="${"flex-grow min-h-0 flex flex-col bg-[#F0F2F5]"}">${slots.default ? slots.default({}) : ``}</div></div>
${validate_component(Messages, "Messages").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-cccdee1f.js.map
