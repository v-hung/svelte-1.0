<script lang="ts">
	import { clickOutside } from "$lib/utils/clickOutSide";
	import { tick } from "svelte";
	import { scale } from "svelte/transition";

  export let group_question
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const suggestions = group_question.options.suggestions.map((v,i) => {
    return {
      label: alphabet[i],
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
</script>

<div class="flex -mx-2 rounded-xl px-4 py-3 bg-white">
  <div class="flex-grow min-w-0 px-2 mb-4">
    <div class="flex flex-col space-y-10">
      {#each group_question.questions as question, index}
        <div class="">
          <div class="question">
            <span>{question.number}</span>
            <span class="icon w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" font-size="18" color="blue100" data-testid="SvgComponent" class="IconArrowsArrowRight-sc-71dgak-0 kroQxV"><path fill="currentColor" fill-rule="evenodd" d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z" clip-rule="evenodd"></path></svg>
            </span>
            <span class="font-normal text-primary text-sm">
              Paragraph <span class="uppercase">{alphabet[index]}</span>
            </span>
          </div>
          <div class="mt-2 flex items-end space-x-1">
            <span class="ml-6">
              <svg width="43" height="70" fill="none" data-testid=""><path d="M15.631 8c0 3.988-3.315 7.25-7.44 7.25C4.063 15.25.75 11.988.75 8S4.064.75 8.19.75c4.127 0 7.441 3.262 7.441 7.25z" fill="#fff" stroke="#E9E9EC" stroke-width="1.5"></path><ellipse cx="8.19" cy="8" rx="4.095" ry="4" fill="#E9E9EC" data-testid="ellipse"></ellipse><path d="M8 16v10c0 9.941 8.059 18 18 18h9" stroke="#E9E9EC" stroke-width="2" stroke-dasharray="4 5" data-testid=""></path><path d="M42.25 44c0 3.988-3.314 7.25-7.44 7.25s-7.44-3.262-7.44-7.25c0-3.987 3.314-7.25 7.44-7.25s7.44 3.263 7.44 7.25z" fill="#fff" stroke="#E9E9EC" stroke-width="1.5"></path><ellipse cx="34.81" cy="44" rx="4.095" ry="4" fill="#E9E9EC" data-testid="ellipse"></ellipse></svg>
            </span>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div 
              class="mb-2 flex items-center space-x-1 cursor-pointer"
              on:click|preventDefault|stopPropagation={(e) => openModalChooseAnswer(e, index)}
            >
              <span class="inline-block w-6 h-6 rounded-full border border-dashed bg-gray-100"></span>
              <span class="text-gray-400 font-normal pointer-events-none">Click here or drop your answer</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="flex-none w-96 px-2 mb-4">
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