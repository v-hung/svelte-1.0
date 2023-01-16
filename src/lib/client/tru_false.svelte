<script lang="ts">
  export let group_question
</script>

<div class="flex flex-col space-y-4">
  {#each group_question.questions as question, index}
    <div class="rounded-xl px-4 py-3 bg-white">
      <div class="question">
        <span>{question.number}</span>
        <span class="icon w-4 h-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" font-size="18" color="blue100" data-testid="SvgComponent" class="IconArrowsArrowRight-sc-71dgak-0 kroQxV"><path fill="currentColor" fill-rule="evenodd" d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="font-semibold text-primary text-sm">{question.question_name}</span>
      </div>

      <div class="flex flex-col space-y-1 -mx-3 mt-2">
        <button 
          class="flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg 
          {question.answer == 'true' ? 'active' : ''}"
          on:click={() => question.answer = 'true'}
        >
          <span class="grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm">A</span>
          <span class="text-sm">True</span>
        </button>
        <button 
          class="flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg 
          {question.answer == 'false' ? 'active' : ''}"
          on:click={() => question.answer = 'false'}
        >
          <span class="grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm">B</span>
          <span class="text-sm">False</span>
        </button>
        <button 
          class="flex items-center space-x-2 px-3 py-1 hover:bg-gray-100 rounded-lg 
          {question.answer == 'not_give' ? 'active' : ''}"
          on:click={() => question.answer = 'not_give'}
        >
          <span class="grid place-items-center w-6 h-6 rounded-full bg-gray-200 text-sm">C</span>
          <span class="text-sm">Not give</span>
        </button>
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
  button.active {
    @apply bg-blue-50 hover:bg-blue-50;
  }

  button.active span:first-child {
    @apply bg-blue-500 text-white;
  }
</style>