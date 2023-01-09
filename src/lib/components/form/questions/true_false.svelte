<script lang="ts">
	import Image from "../image.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  export let data

  const changeAnswer = (index,value) => {
    data[index]['answer'] = value
  }
</script>

<Question bind:data={data} label="questions" let:index>
  <Text bind:data={data[index]['question_name']} label="question name"/>

  <div class="mt-4">
    <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
      answer <span class="text-red-600">*</span>
    </p>
    <div class="flex -mx-2 flex-wrap">
      <div class="w-1/3 px-2 mb-4">
        <button 
          class="item-answer {data[index]['answer'] == 'true' ? 'active' : ''}" 
          on:click|preventDefault={() => changeAnswer(index, 'true')}
        >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">A</span>
          <span>True</span>
        </button>
      </div>

      <div class="w-1/3 px-2 mb-4">
        <button 
          class="item-answer {data[index]['answer'] == 'false' ? 'active' : ''}" 
          on:click|preventDefault={() => changeAnswer(index, 'false')}
        >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">B</span>
          <span>False</span>
        </button>
      </div>

      <div class="w-1/3 px-2 mb-4">
        <button 
          class="item-answer {data[index]['answer'] == 'not_give' ? 'active' : ''}" 
          on:click|preventDefault={() => changeAnswer(index, 'not_give')}
        >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">C</span>
          <span>Not give</span>
        </button>
      </div>
    </div>
  </div>
</Question>

<style lang="postcss">
  .item-answer {
    @apply w-full flex items-center space-x-2 rounded border bg-white py-1 px-2 cursor-pointer font-semibold;
  }
  .item-answer.active {
    @apply border-orange-600 text-orange-600;
  }
</style>