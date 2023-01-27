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

  const list_content = group_question.options.summary_content.split("__")

  let modal_choose_answer = null
  let modal_choose_answer_bot = true
  let modal_choose_answer_el: HTMLElement | null = null

  const openModalChooseAnswer = async (e: MouseEvent, index) => {
    if (modal_choose_answer == index) return

    modal_choose_answer = index

    await tick()

    if (modal_choose_answer_el) {
      let position = (e.target as HTMLElement).getBoundingClientRect()

      modal_choose_answer_el.style.left = position.x + 80 + 'px'

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

<div class="rounded-xl px-4 py-3 bg-white">
  <p class="text-xl text-$primary">Suggest</p>
  <div class="flex flex-wrap -mx-2 mt-4">
    {#each suggestions as suggestion}
      <div class="w-1/3 px-2 mb-4 text-sm">
        <div class="flex items-center space-x-3">
          <span class="grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm">{suggestion.label}</span>
          <span class="text-sm">{suggestion.value}</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="mt-4 rounded-xl px-4 py-3 bg-white">
  <p class="text-xl text-$primary font-semibold">{group_question.options.summary_title}</p>
  <div class="mt-4">
    {#each list_content as text,text_index}
      <span class="whitespace-pre-wrap leading-loose">{text}</span>

      {#if text_index < list_content.length - 1}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div 
          class="choose-answer inline cursor-pointer px-4 relative"
          on:click|preventDefault|stopPropagation={(e) => openModalChooseAnswer(e, text_index)}
        >
          <div class="question !inline-flex w-max pointer-events-none">
            <span>{group_question.questions[text_index].number}</span>
            <span class="icon w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" font-size="18" color="blue100" data-testid="SvgComponent" class="IconArrowsArrowRight-sc-71dgak-0 kroQxV"><path fill="currentColor" fill-rule="evenodd" d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z" clip-rule="evenodd"></path></svg>
            </span>
            
            {#if group_question.questions[text_index].answer}
              {@const label = suggestions.find(v => v.value == group_question.questions[text_index].answer)?.label}
              <span class="grid place-items-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
                {label}
              </span>
            {:else}
              <span class="block w-6 h-6 rounded-full border border-dashed bg-gray-100"></span>
            {/if}
          </div>
          {#if group_question.questions[text_index].answer}
            <span class="text-blue-600 font-normal pointer-events-none">{group_question.questions[text_index].answer}</span>
          {:else}
            <span class="text-gray-400 font-normal pointer-events-none text-sm">Click here to choose your answer</span>
          {/if}
        </div>
      {/if}
    {/each}
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
  /* .input {
    @apply min-w-[3.5rem] !ml-3 border-b-2 font-normal text-[#333] whitespace-nowrap focus:outline-none focus:border-sky-600;
  } */
</style>