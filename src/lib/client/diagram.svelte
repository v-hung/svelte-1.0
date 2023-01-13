<script lang="ts">
  export let group_question
</script>

<div class="flex -mx-2">
  <div class="flex-none w-96 px-2 mb-4">
    <img src="{group_question.image}" alt="" class="w-full">
  </div>
  <div class="flex-grow min-w-0 px-2 mb-4">
    <div class="flex flex-col space-y-10">
      {#each group_question.questions as question, index}
        {@const first_text = question.question_name.split("__")[0]}
        {@const last_text = question.question_name.split("__")[1]}
        <div class="flex flex-wrap items-center space-x-3">
          {#if first_text}
            <span>{first_text}</span>
          {/if}

          <div class="question">
            <span>{question.number}</span>
            <span class="icon w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" font-size="18" color="blue100" data-testid="SvgComponent" class="IconArrowsArrowRight-sc-71dgak-0 kroQxV"><path fill="currentColor" fill-rule="evenodd" d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z" clip-rule="evenodd"></path></svg>
            </span>
            <div class="input" contenteditable="true" bind:textContent={question.answer}></div>
          </div>

          {#if last_text}
            <span>{last_text}</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .question {
    @apply flex items-center space-x-2 text-sky-600 font-semibold;
  }

  .question .input {
    @apply min-w-[3.5rem] !ml-3 border-b-2 font-normal text-[#333] focus:outline-none focus:border-sky-600 whitespace-nowrap;
  }
</style>