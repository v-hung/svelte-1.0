<script lang="ts">
  export let group_question
</script>

<div class="rounded-xl px-4 py-3 bg-white flex flex-col space-y-4">
  {#each group_question.questions as question, index}
    <div class="question">
      <span>{question.number}</span>
      <span class="icon w-4 h-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" font-size="18" color="blue100" data-testid="SvgComponent" class="IconArrowsArrowRight-sc-71dgak-0 kroQxV"><path fill="currentColor" fill-rule="evenodd" d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z" clip-rule="evenodd"></path></svg>
      </span>
      <span class="text-gray-600 font-normal text-sm">{question.question_name}</span>
      <div class="input" contenteditable="true" bind:textContent={question.answer}></div>
    </div>
  {/each}
</div>