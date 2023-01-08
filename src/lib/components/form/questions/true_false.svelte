<script lang="ts">
	import Image from "../image.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  export let group_index
  export let passage_index
  let active = null;
</script>

<Question label="questions" let:index>
  <Text label="question name"/>

  <div class="mt-4">
    <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
      answer <span class="text-red-600">*</span>
    </p>
    <div class="flex -mx-2 flex-wrap">
      <div class="w-1/3 px-2 mb-4">
        <input 
          type="radio" 
          name="passage[{passage_index}]group[{group_index}]question_answer[{index}]" 
          id="passage[{passage_index}]group[{group_index}]question_answer[{index}]true" 
          value="true" 
          class="sr-only"
        >
        <label class="item-answer" for="passage[{passage_index}]group[{group_index}]question_answer[{index}]true" >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">A</span>
          <span>True</span>
        </label>
      </div>

      <div class="w-1/3 px-2 mb-4">
        <input 
          type="radio" 
          name="passage[{passage_index}]group[{group_index}]question_answer[{index}]" 
          id="passage[{passage_index}]group[{group_index}]question_answer[{index}]false" 
          value="false" 
          class="sr-only"
        >
        <label class="item-answer" for="passage[{passage_index}]group[{group_index}]question_answer[{index}]false" >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">B</span>
          <span>False</span>
        </label>
      </div>

      <div class="w-1/3 px-2 mb-4">
        <input 
          type="radio" 
          name="passage[{passage_index}]group[{group_index}]question_answer[{index}]" 
          id="passage[{passage_index}]group[{group_index}]question_answer[{index}]notGive" 
          value="not_give" 
          class="sr-only"
        >
        <label class="item-answer" for="passage[{passage_index}]group[{group_index}]question_answer[{index}]notGive">
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">C</span>
          <span>Not give</span>
        </label>
      </div>
    </div>
  </div>
</Question>

<style lang="postcss">
  .item-answer {
    @apply w-full flex items-center space-x-2 rounded border bg-white py-1 px-2 cursor-pointer font-semibold;
  }
  .item-answer:hover,
  input[type="radio"]:checked + .item-answer {
    @apply border-orange-600 text-orange-600;
  }
</style>