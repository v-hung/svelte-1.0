import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from './index-14666a34.js';
import './uneval-c005139b.js';
import { l as logo } from './svelte-logo-59afeaba.js';
import 'animejs/lib/anime.es.js';

const Diagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group_question } = $$props;
  if ($$props.group_question === void 0 && $$bindings.group_question && group_question !== void 0)
    $$bindings.group_question(group_question);
  return `<div class="${"flex -mx-2 rounded-xl px-4 py-3 bg-white"}"><div class="${"flex-none w-96 px-2 mb-4"}"><img${add_attribute("src", group_question.image, 0)} alt="${""}" class="${"w-full"}"></div>
  <div class="${"flex-grow min-w-0 px-2 mb-4"}"><div class="${"flex flex-col space-y-10"}">${each(group_question.questions, (question, index) => {
    let first_text = question.question_name.split("__")[0], last_text = question.question_name.split("__")[1];
    return `
        
        <div class="${"flex flex-wrap items-center space-x-3"}">${first_text ? `<span>${escape(first_text)}</span>` : ``}

          <div class="${"question"}"><span>${escape(question.number)}</span>
            <span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" width="${"1em"}" height="${"1em"}" font-size="${"18"}" color="${"blue100"}" data-testid="${"SvgComponent"}" class="${"IconArrowsArrowRight-sc-71dgak-0 kroQxV"}"><path fill="${"currentColor"}" fill-rule="${"evenodd"}" d="${"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"}" clip-rule="${"evenodd"}"></path></svg></span>
            <div class="${"input"}" contenteditable="${"true"}">${(($$value) => $$value === void 0 ? `` : $$value)(question.answer)}</div></div>

          ${last_text ? `<span>${escape(last_text)}</span>` : ``}
        </div>`;
  })}</div></div></div>`;
});
const css$4 = {
  code: "button.active.svelte-1hqmnd6.svelte-1hqmnd6{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))\n}button.active.svelte-1hqmnd6.svelte-1hqmnd6:hover{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))\n}button.active.svelte-1hqmnd6 span.svelte-1hqmnd6:first-child{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: null
};
const Tru_false = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group_question } = $$props;
  if ($$props.group_question === void 0 && $$bindings.group_question && group_question !== void 0)
    $$bindings.group_question(group_question);
  $$result.css.add(css$4);
  return `<div class="${"flex flex-col space-y-4"}">${each(group_question.questions, (question, index) => {
    return `<div class="${"rounded-xl px-4 py-3 bg-white"}"><div class="${"question"}"><span>${escape(question.number)}</span>
        <span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" width="${"1em"}" height="${"1em"}" font-size="${"18"}" color="${"blue100"}" data-testid="${"SvgComponent"}" class="${"IconArrowsArrowRight-sc-71dgak-0 kroQxV"}"><path fill="${"currentColor"}" fill-rule="${"evenodd"}" d="${"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"}" clip-rule="${"evenodd"}"></path></svg></span>
        <span class="${"font-semibold text-$primary text-sm"}">${escape(question.question_name)}</span></div>

      <div class="${"flex flex-col space-y-1 -mx-3 mt-2"}"><button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == "true" ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">A</span>
          <span class="${"text-sm svelte-1hqmnd6"}">True</span></button>
        <button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == "false" ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">B</span>
          <span class="${"text-sm svelte-1hqmnd6"}">False</span></button>
        <button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == "not_give" ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">C</span>
          <span class="${"text-sm svelte-1hqmnd6"}">Not give</span>
        </button></div>
    </div>`;
  })}
</div>`;
});
const Short = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group_question } = $$props;
  if ($$props.group_question === void 0 && $$bindings.group_question && group_question !== void 0)
    $$bindings.group_question(group_question);
  return `<div class="${"rounded-xl px-4 py-3 bg-white flex flex-col space-y-4"}">${each(group_question.questions, (question, index) => {
    return `<div class="${"question"}"><span>${escape(question.number)}</span>
      <span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" width="${"1em"}" height="${"1em"}" font-size="${"18"}" color="${"blue100"}" data-testid="${"SvgComponent"}" class="${"IconArrowsArrowRight-sc-71dgak-0 kroQxV"}"><path fill="${"currentColor"}" fill-rule="${"evenodd"}" d="${"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"}" clip-rule="${"evenodd"}"></path></svg></span>
      <span class="${"text-gray-600 font-normal text-sm"}">${escape(question.question_name)}</span>
      <div class="${"input"}" contenteditable="${"true"}">${(($$value) => $$value === void 0 ? `` : $$value)(question.answer)}</div>
    </div>`;
  })}</div>`;
});
const css$3 = {
  code: "button.active.svelte-1hqmnd6.svelte-1hqmnd6{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))\n}button.active.svelte-1hqmnd6.svelte-1hqmnd6:hover{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))\n}button.active.svelte-1hqmnd6 span.svelte-1hqmnd6:first-child{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: null
};
const Single = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group_question } = $$props;
  if ($$props.group_question === void 0 && $$bindings.group_question && group_question !== void 0)
    $$bindings.group_question(group_question);
  $$result.css.add(css$3);
  return `<div class="${"flex flex-col space-y-4"}">${each(group_question.questions, (question, index) => {
    return `<div class="${"rounded-xl px-4 py-3 bg-white"}"><div class="${"question"}"><span>${escape(question.number)}</span>
        <span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" width="${"1em"}" height="${"1em"}" font-size="${"18"}" color="${"blue100"}" data-testid="${"SvgComponent"}" class="${"IconArrowsArrowRight-sc-71dgak-0 kroQxV"}"><path fill="${"currentColor"}" fill-rule="${"evenodd"}" d="${"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"}" clip-rule="${"evenodd"}"></path></svg></span>
        <span class="${"font-semibold text-$primary text-sm"}">${escape(question.question_name)}</span></div>

      <div class="${"flex flex-col space-y-1 -mx-3 mt-2"}"><button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == question.option_a ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">A</span>
          <span class="${"text-sm svelte-1hqmnd6"}">${escape(question.option_a)}</span></button>

        <button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == question.option_b ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">B</span>
          <span class="${"text-sm svelte-1hqmnd6"}">${escape(question.option_b)}</span></button>

        <button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == question.option_c ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">C</span>
          <span class="${"text-sm svelte-1hqmnd6"}">${escape(question.option_c)}</span></button>

        <button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == question.option_d ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">D</span>
          <span class="${"text-sm svelte-1hqmnd6"}">${escape(question.option_d)}</span>
        </button></div>
    </div>`;
  })}
</div>`;
});
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group_question } = $$props;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const suggestions = group_question.options.suggestions.map((v, i) => {
    return { label: alphabet[i], value: v.title };
  });
  const list_content = group_question.options.summary_content.split("__");
  if ($$props.group_question === void 0 && $$bindings.group_question && group_question !== void 0)
    $$bindings.group_question(group_question);
  return `<div class="${"rounded-xl px-4 py-3 bg-white"}"><p class="${"text-xl text-$primary"}">Suggest</p>
  <div class="${"flex flex-wrap -mx-2 mt-4"}">${each(suggestions, (suggestion) => {
    return `<div class="${"w-1/3 px-2 mb-4 text-sm"}"><div class="${"flex items-center space-x-3"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm"}">${escape(suggestion.label)}</span>
          <span class="${"text-sm"}">${escape(suggestion.value)}</span></div>
      </div>`;
  })}</div></div>

<div class="${"mt-4 rounded-xl px-4 py-3 bg-white"}"><p class="${"text-xl text-$primary font-semibold"}">${escape(group_question.options.summary_title)}</p>
  <div class="${"mt-4"}">${each(list_content, (text, text_index) => {
    return `<span class="${"whitespace-pre-wrap leading-loose"}">${escape(text)}</span>

      ${text_index < list_content.length - 1 ? `
        <div class="${"choose-answer inline cursor-pointer px-4 relative"}"><div class="${"question !inline-flex w-max pointer-events-none"}"><span>${escape(group_question.questions[text_index].number)}</span>
            <span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" width="${"1em"}" height="${"1em"}" font-size="${"18"}" color="${"blue100"}" data-testid="${"SvgComponent"}" class="${"IconArrowsArrowRight-sc-71dgak-0 kroQxV"}"><path fill="${"currentColor"}" fill-rule="${"evenodd"}" d="${"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"}" clip-rule="${"evenodd"}"></path></svg></span>
            
            ${group_question.questions[text_index].answer ? (() => {
      let label = suggestions.find((v) => v.value == group_question.questions[text_index].answer)?.label;
      return `
              <span class="${"grid place-items-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm"}">${escape(label)}
              </span>`;
    })() : `<span class="${"block w-6 h-6 rounded-full border border-dashed bg-gray-100"}"></span>`}</div>
          ${group_question.questions[text_index].answer ? `<span class="${"text-blue-600 font-normal pointer-events-none"}">${escape(group_question.questions[text_index].answer)}</span>` : `<span class="${"text-gray-400 font-normal pointer-events-none text-sm"}">Click here to choose your answer</span>`}
        </div>` : ``}`;
  })}</div></div>

${``}`;
});
const css$2 = {
  code: "button.active.svelte-1hqmnd6.svelte-1hqmnd6{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))\n}button.active.svelte-1hqmnd6.svelte-1hqmnd6:hover{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))\n}button.active.svelte-1hqmnd6 span.svelte-1hqmnd6:first-child{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: null
};
const Yes_no = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group_question } = $$props;
  if ($$props.group_question === void 0 && $$bindings.group_question && group_question !== void 0)
    $$bindings.group_question(group_question);
  $$result.css.add(css$2);
  return `<div class="${"flex flex-col space-y-4"}">${each(group_question.questions, (question, index) => {
    return `<div class="${"rounded-xl px-4 py-3 bg-white"}"><div class="${"question"}"><span>${escape(question.number)}</span>
        <span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" width="${"1em"}" height="${"1em"}" font-size="${"18"}" color="${"blue100"}" data-testid="${"SvgComponent"}" class="${"IconArrowsArrowRight-sc-71dgak-0 kroQxV"}"><path fill="${"currentColor"}" fill-rule="${"evenodd"}" d="${"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"}" clip-rule="${"evenodd"}"></path></svg></span>
        <span class="${"font-semibold text-$primary text-sm"}">${escape(question.question_name)}</span></div>

      <div class="${"flex flex-col space-y-1 -mx-3 mt-2"}"><button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == "yes" ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">A</span>
          <span class="${"text-sm svelte-1hqmnd6"}">Yes</span></button>
        <button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == "no" ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">B</span>
          <span class="${"text-sm svelte-1hqmnd6"}">No</span></button>
        <button class="${"flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg " + escape(question.answer == "not_give" ? "active" : "", true) + " svelte-1hqmnd6"}"><span class="${"grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm svelte-1hqmnd6"}">C</span>
          <span class="${"text-sm svelte-1hqmnd6"}">Not give</span>
        </button></div>
    </div>`;
  })}
</div>`;
});
const romanize = (num) => {
  if (isNaN(num))
    return NaN;
  var digits = String(+num).split(""), key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ], roman = "", i = 3;
  while (i--)
    roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
};
const css$1 = {
  code: ".drop-box.svelte-hpp0x1{border-radius:0.25rem;border-width:1px;border-style:dashed;border-color:transparent;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem\n}.drop-box.is-drag-over{--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))\n}.drop-box.is-drag-over .circle{--tw-bg-opacity:1 !important;background-color:rgb(191 219 254 / var(--tw-bg-opacity)) !important\n}.drop-box.is-drag-over .text{--tw-text-opacity:1 !important;color:rgb(59 130 246 / var(--tw-text-opacity)) !important\n}",
  map: null
};
const Matching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group_question } = $$props;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const suggestions = group_question.options.suggestions.map((v, i) => {
    return { label: romanize(i + 1), value: v.title };
  });
  let answer_modal_el = null;
  if ($$props.group_question === void 0 && $$bindings.group_question && group_question !== void 0)
    $$bindings.group_question(group_question);
  $$result.css.add(css$1);
  return `<div class="${"relative rounded-xl px-4 py-3 bg-white"}"><div class="${"py-2"}"><div class="${"flex flex-col space-y-10"}">${each(group_question.questions, (question, index) => {
    return `<div class="${""}"><div class="${"question"}"><span>${escape(question.number)}</span>
            <span class="${"icon w-4 h-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" width="${"1em"}" height="${"1em"}" font-size="${"18"}" color="${"blue100"}" data-testid="${"SvgComponent"}" class="${"IconArrowsArrowRight-sc-71dgak-0 kroQxV"}"><path fill="${"currentColor"}" fill-rule="${"evenodd"}" d="${"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"}" clip-rule="${"evenodd"}"></path></svg></span>
            <span class="${"font-semibold text-$primary text-sm"}">Paragraph <span class="${"uppercase"}">${escape(alphabet[index])}</span>
            </span></div>
          <div class="${"mt-2 flex items-end space-x-1"}"><span class="${"ml-6 " + escape(
      group_question.questions[index].answer ? "text-blue-500" : "text-gray-300",
      true
    )}"><svg width="${"43"}" height="${"70"}" fill="${"none"}" data-testid="${""}"><path d="${"M15.631 8c0 3.988-3.315 7.25-7.44 7.25C4.063 15.25.75 11.988.75 8S4.064.75 8.19.75c4.127 0 7.441 3.262 7.441 7.25z"}" fill="${"#fff"}" stroke="${"currentColor"}" stroke-width="${"1.5"}"></path><ellipse cx="${"8.19"}" cy="${"8"}" rx="${"4.095"}" ry="${"4"}" fill="${"currentColor"}" data-testid="${"ellipse"}"></ellipse><path d="${"M8 16v10c0 9.941 8.059 18 18 18h9"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-dasharray="${"4 5"}" data-testid="${""}"></path><path d="${"M42.25 44c0 3.988-3.314 7.25-7.44 7.25s-7.44-3.262-7.44-7.25c0-3.987 3.314-7.25 7.44-7.25s7.44 3.263 7.44 7.25z"}" fill="${"#fff"}" stroke="${"currentColor"}" stroke-width="${"1.5"}"></path><ellipse cx="${"34.81"}" cy="${"44"}" rx="${"4.095"}" ry="${"4"}" fill="${"currentColor"}" data-testid="${"ellipse"}"></ellipse></svg></span>

            
            <div class="${"drop-box mb-2 flex items-center space-x-1 cursor-pointer text-sm svelte-hpp0x1"}">${group_question.questions[index].answer ? (() => {
      let answer = suggestions.find((v) => v.value == group_question.questions[index].answer);
      return `
                <span class="${"flex-none grid place-items-center w-6 h-6 rounded-full bg-blue-500 text-white"}">${escape(answer?.label)}</span>
                <span class="${"text-gray-400 font-normal pointer-events-none text-$primary"}">${escape(answer?.value)}</span>`;
    })() : `<span class="${"circle flex-none inline-block w-6 h-6 rounded-full border border-dashed bg-gray-100"}"></span>
                <span class="${"text text-gray-400 font-normal pointer-events-none"}">Click here or drop your answer</span>`}
            </div></div>
        </div>`;
  })}</div></div>

  <div class="${"w-96 absolute right-4 top-4 pb-4 shadow rounded bg-white"}"${add_attribute("this", answer_modal_el, 0)}><div class="${"flex flex-col space-y-2 text-sm"}"><div id="${"answerModalHeader"}" class="${"flex items-center space-x-2 p-4 text-$primary cursor-move"}"><span class="${"icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M18 11h-5V6h3l-4-4-4 4h3v5H6V8l-4 4 4 4v-3h5v5H8l4 4 4-4h-3v-5h5v3l4-4-4-4z"}"></path></svg></span>
        <span class="${"text-base font-semibold"}">Drag option to the question</span></div>

      ${each(suggestions, (suggestion) => {
    return `<div class="${"flex items-center space-x-2 rounded cursor-pointer mx-2 px-2 py-2 hover:bg-blue-200 select-none"}" draggable="${"true"}"><span class="${"flex-none grid place-items-center w-6 h-6 rounded-full bg-blue-500 text-white"}">${escape(suggestion?.label)}</span>
          <span class="${"text-gray-400 font-normal pointer-events-none text-$primary"}">${escape(suggestion?.value)}</span>
        </div>`;
  })}</div></div></div>

${``}`;
});
const css = {
  code: ".practice-container.svelte-ub4ac6{@apply w-full max-w-[1680px] mx-auto px-4;}.group-question-wrapper.svelte-ub4ac6 .question{@apply flex items-center space-x-2 text-sky-600 font-semibold;}.group-question-wrapper.svelte-ub4ac6 .question .input{margin-left:.75rem;@apply min-w-[3.5rem] border-b-2 font-normal text-[#333] whitespace-nowrap;}.group-question-wrapper.svelte-ub4ac6 .question .input:focus{@apply outline-none border-sky-600;}.passage.svelte-ub4ac6{@apply text-gray-500 select-none cursor-pointer;}.passage.active.svelte-ub4ac6{@apply text-red-600;}.content h3{@apply text-2xl mb-4;}.content p{@apply mb-4;}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let passage_index = 0;
  let question_index = 0;
  let passages = data.quiz.passages.map((v, i) => {
    let question_count = v.group_questions.reduce(
      (a, c) => {
        return a + c.questions.length;
      },
      0
    );
    return {
      title: v.title,
      content: v.content,
      question_count,
      group_question_index: 0,
      group_questions: v.group_questions.map((v2, i2) => {
        return {
          image: v2.image,
          options: v2.options,
          title: v2.title,
          type: v2.type,
          questions: v2.questions.map((v3, i3) => {
            return {
              ...v3,
              number: ++question_index,
              answer: ""
            };
          })
        };
      })
    };
  });
  const getPercent = (passage) => {
    let answer_count = passage.group_questions.reduce(
      (a2, c) => {
        return a2 + c.questions.filter((v) => v.answer).length;
      },
      0
    );
    let a = answer_count / passage.question_count * 100;
    a = a < 0 ? 0 : a > 100 ? 100 : a;
    return 292.796 / 100 * a;
  };
  let group_question_prev = null, group_question_next = null;
  const watchGroupQuestion = (passages2, passage_index2) => {
    if (passage_index2 == 0) {
      if (passages2[passage_index2].group_question_index != 0)
        group_question_prev = passages2[passage_index2].group_questions[passages2[passage_index2].group_question_index - 1];
      else
        group_question_prev = null;
    } else {
      if (passages2[passage_index2].group_question_index != 0) {
        group_question_prev = passages2[passage_index2].group_questions[passages2[passage_index2].group_question_index - 1];
      } else {
        group_question_prev = passages2[passage_index2 - 1].group_questions.at(-1);
      }
    }
    if (passage_index2 == passages2.length - 1) {
      if (passages2[passage_index2].group_question_index != passages2[passage_index2].group_questions.length - 1)
        group_question_next = passages2[passage_index2].group_questions[passages2[passage_index2].group_question_index + 1];
      else
        group_question_next = null;
    } else {
      if (passages2[passage_index2].group_question_index != passages2[passage_index2].group_questions.length - 1) {
        group_question_next = passages2[passage_index2].group_questions[passages2[passage_index2].group_question_index + 1];
      } else {
        group_question_next = passages2[passage_index2 + 1].group_questions[0];
      }
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      watchGroupQuestion(passages, passage_index);
    }
    $$rendered = `<div class="${"w-full h-screen flex flex-col"}"><div class="${"flex-none sticky w-full h-16 px-8 shadow-sm shadow-gray-200 bg-white"}"><div class="${"flex items-center space-x-6"}"><span class="${"icon w-8 h-8 p-1 bg-gray-200 rounded-full cursor-pointer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"}"></path></svg></span>
  
      <div class="${"flex-none flex items-center space-x-1 py-3"}"><img${add_attribute("src", logo, 0)} alt="${""}" class="${"w-10 h-10 rounded"}">
        <div class="${"logo-title"}"><h1 class="${"text-lg font-semibold"}">Việt Hùng IT</h1>
          <h5 class="${"text-xs text-gray-500"}">Developer . Transporter</h5></div></div>
  
      <div class="${"!ml-auto"}"><div class="${"flex items-center space-x-1 text-red-600 rounded-lg border px-2 py-1"}"><span class="${"font-semibold"}">60 : 00</span>
          <span class="${"icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m20.145 8.27 1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 0 0-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}"></path><path d="${"M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"}"></path></svg></span></div></div></div></div>
  
  <section class="${"flex-grow min-h-0"}" style="${"background: linear-gradient(to right, white 40%, rgb(243 244 246) 0%);"}"><div class="${"practice-container h-full svelte-ub4ac6"}"><div class="${"flex h-full -mx-4"}"><div class="${"w-5/12 content py-4 px-4 overflow-y-auto bg-white"}"><!-- HTML_TAG_START -->${passages[passage_index].content}<!-- HTML_TAG_END --></div>
        <div class="${"w-7/12 py-4 px-4 overflow-y-auto"}">${passages ? (() => {
      let group_question = passages[passage_index].group_questions[passages[passage_index].group_question_index];
      return `
            <div class="${"rounded-xl bg-red-500 text-white px-4 py-3"}"><span class="${"text-xl font-semibold"}">Question ${escape(group_question.questions[0].number)} - ${escape(group_question.questions.at(-1).number)}</span>
              <span class="${"pl-4"}">${escape(group_question.title)}</span></div>
            
            <div class="${"mt-4 group-question-wrapper svelte-ub4ac6"}">${group_question.type == "diagram" ? `${validate_component(Diagram, "Diagram").$$render(
        $$result,
        {
          group_question: passages[passage_index].group_questions[passages[passage_index].group_question_index]
        },
        {
          group_question: ($$value) => {
            passages[passage_index].group_questions[passages[passage_index].group_question_index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${group_question.type == "true-false" ? `${validate_component(Tru_false, "TruFalse").$$render(
        $$result,
        {
          group_question: passages[passage_index].group_questions[passages[passage_index].group_question_index]
        },
        {
          group_question: ($$value) => {
            passages[passage_index].group_questions[passages[passage_index].group_question_index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${group_question.type == "short" ? `${validate_component(Short, "Short").$$render(
        $$result,
        {
          group_question: passages[passage_index].group_questions[passages[passage_index].group_question_index]
        },
        {
          group_question: ($$value) => {
            passages[passage_index].group_questions[passages[passage_index].group_question_index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${group_question.type == "single" ? `${validate_component(Single, "Single").$$render(
        $$result,
        {
          group_question: passages[passage_index].group_questions[passages[passage_index].group_question_index]
        },
        {
          group_question: ($$value) => {
            passages[passage_index].group_questions[passages[passage_index].group_question_index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${group_question.type == "summary" ? `${validate_component(Summary, "Summary").$$render(
        $$result,
        {
          group_question: passages[passage_index].group_questions[passages[passage_index].group_question_index]
        },
        {
          group_question: ($$value) => {
            passages[passage_index].group_questions[passages[passage_index].group_question_index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${group_question.type == "yes-no" ? `${validate_component(Yes_no, "YesNo").$$render(
        $$result,
        {
          group_question: passages[passage_index].group_questions[passages[passage_index].group_question_index]
        },
        {
          group_question: ($$value) => {
            passages[passage_index].group_questions[passages[passage_index].group_question_index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${group_question.type == "matching" ? `${validate_component(Matching, "Matching").$$render(
        $$result,
        {
          group_question: passages[passage_index].group_questions[passages[passage_index].group_question_index]
        },
        {
          group_question: ($$value) => {
            passages[passage_index].group_questions[passages[passage_index].group_question_index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`}`}`}`}`}`}</div>`;
    })() : ``}</div></div></div></section>
  
  <section class="${"flex-none border-t border-gray-200 bg-white"}"><div class="${"practice-container svelte-ub4ac6"}"><div class="${"flex items-stretch space-x-4 py-2"}"><div class="${"flex space-x-2"}"><div class="${"w-8 bg-gray-200"}"><img src="${"https://suijm9clouobj.vcdn.cloud/PRIVATE/MEDIA/7606d599-4920-4860-8fb1-de3ee721bf85.png"}" alt="${""}" class="${"w-full h-full object-cover"}"></div>
          <div class="${"w-36"}"><h5 class="${"font-semibold truncate"}">${escape(data.quiz.title)}</h5>
            <p class="${"text-sm text-gray-500"}">Roman tunnels</p></div></div>
  
        ${each(passages, (passage, index) => {
      let percent = getPercent(passage), answer_count = passage.group_questions.reduce(
        (a, c) => {
          return a + c.questions.filter((v) => v.answer).length;
        },
        0
      );
      return `
          
          <button class="${"passage flex items-center space-x-2 " + escape(index == passage_index ? "active" : "", true) + " svelte-ub4ac6"}"><div class="${"relative w-11 h-11"}"><span class="${"icon w-full h-full"}"><svg class="${"ant-progress-circle"}" viewBox="${"0 0 100 100"}"><path class="${"ant-progress-circle-trail"}" d="${"M 50,50 m 0,-46.6\r\n                  a 46.6,46.6 0 1 1 0,93.2\r\n                  a 46.6,46.6 0 1 1 0,-93.2"}" stroke="${"#E9E9EC"}" stroke-linecap="${"round"}" stroke-width="${"6.8"}" fill-opacity="${"0"}" style="${"stroke: rgb(233, 233, 236); stroke-dasharray: 292.796px, 292.796px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s;"}"></path><path class="${"ant-progress-circle-path"}" d="${"M 50,50 m 0,-46.6\r\n                  a 46.6,46.6 0 1 1 0,93.2\r\n                  a 46.6,46.6 0 1 1 0,-93.2"}" stroke="${""}" stroke-linecap="${"round"}" stroke-width="${"6.8"}"${add_attribute("opacity", percent ? "1" : "0", 0)} fill-opacity="${"0"}" style="${"stroke: currentColor; stroke-dasharray: " + escape(percent, true) + "px, 292.796px; stroke-dashoffset: 0px; transition-property: stroke-dashoffset, stroke-dasharray, stroke, stroke-width, opacity; transition-duration: 0.3s, 0.3s, 0.3s, 0.06s; transition-timing-function: ease, ease, ease, ease, ease; transition-delay: 0s, 0s, 0s, 0.3s, 0s;"}"></path></svg></span>
              <span class="${"absolute w-full h-full top-0 left-0 grid place-items-center text-xs"}">${escape(answer_count)}/${escape(passage.question_count)}
              </span></div>
            <div class="${"mb-1"}"><h5 class="${"text-sm font-semibold truncate uppercase"}">passage ${escape(index)}</h5>
              <p class="${"text-xs"}">${escape(passage.question_count)} questions</p></div>
          </button>`;
    })}
  
        <div class="${"!ml-auto flex items-center space-x-4"}">
          <span class="${"icon w-10 h-10 border-2 border-gray-300 p-2 rounded-full hover:bg-gray-300 cursor-pointer"}"><svg class="${"transition-transform " + escape("rotate-180", true)}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"}"></path></svg></span>

          

          ${group_question_prev ? `<button class="${"flex items-center px-4 py-2 rounded-lg border-2 font-semibold hover:border-red-600 hover:text-red-600"}"><span class="${"icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"}"></path></svg></span>
              <span>Question ${escape(group_question_prev.questions[0].number)} - ${escape(group_question_prev.questions.at(-1).number)}</span></button>` : ``}

          ${group_question_next ? `<button class="${"flex items-center px-4 py-2 rounded-lg border-2 font-semibold hover:border-red-600 hover:text-red-600"}"><span>Question ${escape(group_question_next.questions[0].number)} - ${escape(group_question_next.questions.at(-1).number)}</span>
              <span class="${"icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"}"></path></svg></span></button>` : `<button class="${"flex items-center px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-400"}"><span>Submit</span>
              <span class="${"icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"}"></path></svg></span></button>`}</div></div></div></section>
  
  ${`<section class="${"flex-none bg-gray-50"}"><div class="${"practice-container py-2 svelte-ub4ac6"}"><div class="${"flex space-x-8"}">${each(passages[passage_index].group_questions, (group_question, index) => {
      return `<div class="${"text-xs"}"><p class="${"text-gray-500"}">${escape(group_question.title)}</p>
              <div class="${"flex space-x-2"}">${each(group_question.questions, (question) => {
        return `<button class="${"w-6 h-6 rounded-full border bg-gray-200 grid place-items-center " + escape(question.answer ? "border-blue-600 bg-blue-200" : "", true)}">${escape(question.number)}
                  </button>`;
      })}</div>
            </div>`;
    })}</div></div></section>`}</div>

${``}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4a67ac66.js.map
