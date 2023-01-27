<script lang="ts">
	import { clickOutside } from "$lib/utils/clickOutSide";
	import { romanize } from "$lib/utils/helper";
	import { onMount, tick } from "svelte";
	import { scale } from "svelte/transition";
  import anime from "animejs";

  export let group_question
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const suggestions = group_question.options.suggestions.map((v,i) => {
    return {
      label: romanize(i + 1),
      value: v.title
    }
  })

  let modal_choose_answer = null
  let modal_choose_answer_bot = true
  let modal_choose_answer_el: HTMLElement | null = null

  const openModalChooseAnswer = async (e: MouseEvent, index) => {
    if (modal_choose_answer == index) return

    modal_choose_answer = index

    await tick()

    if (modal_choose_answer_el) {
      let position = (e.target as HTMLElement).getBoundingClientRect()

      modal_choose_answer_el.style.left = position.x + 'px'

      if (window.innerHeight - position.y >= (208 + 25)) {
        modal_choose_answer_el.style.top = position.y + 25 + 'px'
      }
      else {
        modal_choose_answer_el.style.top = position.y - (208 + 10) + 'px'
      }
    }
  }
  
  const closeModalChooseAnswer = (e) => {
    modal_choose_answer = null
  }

  const chooseAnswer = (answer) => {
    if (modal_choose_answer != null) {
      group_question.questions[modal_choose_answer].answer = answer.value
      modal_choose_answer = null
    }
  }

  let answer_modal_el: HTMLElement | null = null

  const dragAnswerModal = (el: HTMLElement) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, 
        x = 0, y = 0, w = 0, h = 0, pw = 0, ph = 0

    if (document.getElementById("answerModalHeader")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById("answerModalHeader").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      el.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e: MouseEvent) {
      e = e || window.event as MouseEvent;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      w = el.offsetWidth
      h = el.offsetHeight
      pw = el.offsetParent.clientWidth
      ph = el.offsetParent.clientHeight

      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      x = (el.offsetTop - pos2)
      y = (el.offsetLeft - pos1)

      // set the element's new position:
      el.style.top = x + "px"
      el.style.left = y + "px"
    }

    function closeDragElement() {
      if (x < 0) {
        anime({
          targets: el,
          duration: 700,
          top: 0
        });
      }
      else if (x > (ph - h)) {
        anime({
          targets: el,
          duration: 700,
          top: (ph - h) + 'px'
        });
      }

      if (y < 0) {
        anime({
          targets: el,
          duration: 700,
          left: 0
        });
      }
      else if (y > (pw - w)) {
        anime({
          targets: el,
          duration: 700,
          left: (pw - w) + 'px'
        });
      }

      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  let answer_dragstart = null
  const dragAnswerItemModal = (e, suggestion) => {
    answer_dragstart = suggestion
  }

  const dropAnswerItemModal = (e, index) => {
    if (!answer_dragstart) return

    group_question.questions[index].answer = answer_dragstart.value;
    (e.target as HTMLElement).classList.remove('is-drag-over')
  }

  const dragenterAnswerItemModal = (e: MouseEvent) => {
    (e.target as HTMLElement).classList.add('is-drag-over')
  }

  const dragleaveAnswerItemModal = (e: MouseEvent) => {
    (e.target as HTMLElement).classList.remove('is-drag-over')
  }

  onMount(() => {
    if (answer_modal_el)
      dragAnswerModal(answer_modal_el)
  })
</script>

<div class="relative rounded-xl px-4 py-3 bg-white">
  <div class="py-2">
    <div class="flex flex-col space-y-10">
      {#each group_question.questions as question, index}
        <div class="">
          <div class="question">
            <span>{question.number}</span>
            <span class="icon w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" font-size="18" color="blue100" data-testid="SvgComponent" class="IconArrowsArrowRight-sc-71dgak-0 kroQxV"><path fill="currentColor" fill-rule="evenodd" d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z" clip-rule="evenodd"></path></svg>
            </span>
            <span class="font-semibold text-$primary text-sm">
              Paragraph <span class="uppercase">{alphabet[index]}</span>
            </span>
          </div>
          <div class="mt-2 flex items-end space-x-1">
            <span class="ml-6 {group_question.questions[index].answer ? 'text-blue-500' : 'text-gray-300'}">
              <svg width="43" height="70" fill="none" data-testid=""><path d="M15.631 8c0 3.988-3.315 7.25-7.44 7.25C4.063 15.25.75 11.988.75 8S4.064.75 8.19.75c4.127 0 7.441 3.262 7.441 7.25z" fill="#fff" stroke="currentColor" stroke-width="1.5"></path><ellipse cx="8.19" cy="8" rx="4.095" ry="4" fill="currentColor" data-testid="ellipse"></ellipse><path d="M8 16v10c0 9.941 8.059 18 18 18h9" stroke="currentColor" stroke-width="2" stroke-dasharray="4 5" data-testid=""></path><path d="M42.25 44c0 3.988-3.314 7.25-7.44 7.25s-7.44-3.262-7.44-7.25c0-3.987 3.314-7.25 7.44-7.25s7.44 3.263 7.44 7.25z" fill="#fff" stroke="currentColor" stroke-width="1.5"></path><ellipse cx="34.81" cy="44" rx="4.095" ry="4" fill="currentColor" data-testid="ellipse"></ellipse></svg>
            </span>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div 
              class="drop-box mb-2 flex items-center space-x-1 cursor-pointer text-sm"
              on:click|preventDefault|stopPropagation={(e) => openModalChooseAnswer(e, index)}
              on:drop={(e) => dropAnswerItemModal(e, index)}
              on:dragover|preventDefault={() => {}}
              on:dragenter|preventDefault={(e) => dragenterAnswerItemModal(e)}
              on:dragleave|preventDefault={(e) => dragleaveAnswerItemModal(e)}
            >
              {#if group_question.questions[index].answer}
                {@const answer = suggestions.find(v => v.value == group_question.questions[index].answer)}
                <span class="flex-none grid place-items-center w-6 h-6 rounded-full bg-blue-500 text-white">
                  {answer?.label}
                </span>
                <span class="text-gray-400 font-normal pointer-events-none text-$primary">{answer?.value}</span>
              {:else}
                <span class="circle flex-none inline-block w-6 h-6 rounded-full border border-dashed bg-gray-100"></span>
                <span class="text text-gray-400 font-normal pointer-events-none">Click here or drop your answer</span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div bind:this={answer_modal_el} class="w-96 absolute right-4 top-4 pb-4 shadow rounded bg-white">
    <div class="flex flex-col space-y-2 text-sm">
      <div id="answerModalHeader" class="flex items-center space-x-2 p-4 text-$primary cursor-move">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 11h-5V6h3l-4-4-4 4h3v5H6V8l-4 4 4 4v-3h5v5H8l4 4 4-4h-3v-5h5v3l4-4-4-4z"></path></svg>
        </span>
        <span class="text-base font-semibold">Drag option to the question</span>
      </div>

      {#each suggestions as suggestion}
        <div 
          class="flex items-center space-x-2 rounded cursor-pointer mx-2 px-2 py-2 hover:bg-blue-200 select-none"
          draggable="true"
          on:dragstart={(e) => dragAnswerItemModal(e, suggestion)}
        >
          <span class="flex-none grid place-items-center w-6 h-6 rounded-full bg-blue-500 text-white">
            {suggestion?.label}
          </span>
          <span class="text-gray-400 font-normal pointer-events-none text-$primary">{suggestion?.value}</span>
        </div>
      {/each}
    </div>
  </div>
</div>

{#if modal_choose_answer != null}
  <div 
    transition:scale="{{ duration: 500 }}"
    bind:this={modal_choose_answer_el}
    class="fixed rounded shadow bg-white z-10"
    use:clickOutside on:click_outside={closeModalChooseAnswer}
  >
    <div class="min-w-[200px] max-h-52 flex flex-col space-y-2 p-4 overflow-y-auto">
      {#each suggestions as suggestion}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div 
          class="flex items-center space-x-3 p-1 rounded-full hover:bg-blue-50 cursor-pointer"
          on:click|preventDefault={() => chooseAnswer(suggestion)}
        >
          <span class="grid place-items-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">{suggestion.label}</span>
          <span class="text-sm">{suggestion.value}</span>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style lang="postcss">
  .drop-box { 
    @apply px-2 py-1 border border-dashed border-transparent rounded;
  }
  :global(.drop-box.is-drag-over) {
    @apply border-blue-500 bg-blue-100 ;
  }
  :global(.drop-box.is-drag-over .circle) {
    @apply !bg-blue-200;
  }
  :global(.drop-box.is-drag-over .text) {
    @apply !text-blue-500;
  }
</style>