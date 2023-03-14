<script lang="ts">
	import Image from "../image.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  export let data
</script>

<Question bind:data={data} let:index>
  <Text bind:data={data[index]['question_name']} label="question name" placeholder="What is the writer's main point in the first paragraph?"/>

  <div class="mt-4">
    <p class="text-xs font-semibold text-$primary mb-1.5 capitalize">
      answer <span class="text-red-600">*</span>
    </p>
    <div class="flex -mx-2 flex-wrap">
      <div class="w-1/2 px-2 mb-4">
        <button 
          class="item-answer {data[index]['answer'] == 'a' ? 'active' : ''}"
          on:click|preventDefault={() => data[index]['answer'] = 'a'}
        >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">A</span>
          <input type="text" bind:value={data[index]['option_a']} on:click|preventDefault|stopPropagation={() => {}} class="w-full py-1" placeholder="Our use of technology is having a hidden effect on us.">
        </button>
      </div>

      <div class="w-1/2 px-2 mb-4">
        <button 
          class="item-answer {data[index]['answer'] == 'b' ? 'active' : ''}"
          on:click|preventDefault={() => data[index]['answer'] = 'b'}
        >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">B</span>
          <input type="text" bind:value={data[index]['option_b']} on:click|preventDefault|stopPropagation={() => {}} class="w-full py-1" placeholder="Technology can be used to help youngsters to read.">
        </button>
      </div>

      <div class="w-1/2 px-2 mb-4">
        <button 
          class="item-answer {data[index]['answer'] == 'c' ? 'active' : ''}"
          on:click|preventDefault={() => data[index]['answer'] = 'c'}
        >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">C</span>
          <input type="text" bind:value={data[index]['option_c']} on:click|preventDefault|stopPropagation={() => {}} class="w-full py-1" placeholder="Travellers should be encouraged to use technology on planes.">
        </button>
      </div>

      <div class="w-1/2 px-2 mb-4">
        <button 
          class="item-answer {data[index]['answer'] == 'd' ? 'active' : ''}"
          on:click|preventDefault={() => data[index]['answer'] = 'd'}
        >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">D</span>
          <input type="text" bind:value={data[index]['option_d']} on:click|preventDefault|stopPropagation={() => {}} class="w-full py-1" placeholder="Playing games is a more popular use of technology than reading.">
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