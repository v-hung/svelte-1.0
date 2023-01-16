<script lang="ts">
	import { clickOutside } from "$lib/utils/clickOutSide";


  export let group_question

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  console.log({group_question})

  const suggestions = group_question.options.suggestions.map((v,i) => {
    return {
      label: alphabet[i],
      value: v.title
    }
  })

  const list_content = group_question.options.summary_content.split("__")

  let modal_choose_answer = null
  let modal_choose_answer_bot = true

  const openModalChooseAnswer = (e: MouseEvent, index) => {
    if (window.innerHeight - e.clientY <= 208) {
      modal_choose_answer_bot = false
    }
    else {
      modal_choose_answer_bot = true
    }

    modal_choose_answer = index
  }
</script>

<div class="rounded-xl px-4 py-3 bg-white">
  <p class="text-xl text-primary">Suggest</p>
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
  <p class="text-xl text-primary font-semibold">{group_question.options.summary_title}</p>
  <div class="mt-4">
    {#each list_content as text,text_index}
      <span class="whitespace-pre-wrap leading-loose">{text}</span>

      {#if text_index < list_content.length - 1}
        <button 
          class="inline cursor-pointer px-4 relative"
          on:click|preventDefault={(e) => openModalChooseAnswer(e, text_index)}
        >
          <div class="question !inline-flex w-max">
            <span>{group_question.questions[text_index].number}</span>
            <span class="icon w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" font-size="18" color="blue100" data-testid="SvgComponent" class="IconArrowsArrowRight-sc-71dgak-0 kroQxV"><path fill="currentColor" fill-rule="evenodd" d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z" clip-rule="evenodd"></path></svg>
            </span>
            
            <span class="block w-6 h-6 rounded-full border border-dashed bg-gray-100"></span>
          </div>
          <span class="text-gray-400 font-normal">Click here to choose your answer</span>

          {#if modal_choose_answer == text_index}
            <div 
              class="absolute left-1/2 -translate-x-1/2 {modal_choose_answer_bot ? 'top-full' : 'bottom-full'} rounded shadow bg-white z-10"
              use:clickOutside on:click_outside={() => modal_choose_answer = null}
            >
              <div class="min-w-[200px] max-h-52 flex flex-col space-y-2 p-4 overflow-y-auto">
                {#each suggestions as suggestion}
                  <div class="flex items-center space-x-3 p-1 rounded-full hover:bg-blue-50">
                    <span class="grid place-items-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">{suggestion.label}</span>
                    <span class="text-sm">{suggestion.value}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        </button>
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  /* .input {
    @apply min-w-[3.5rem] !ml-3 border-b-2 font-normal text-[#333] whitespace-nowrap focus:outline-none focus:border-sky-600;
  } */
</style>