<script lang="ts">
	import Image from "../image.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  export let data
  export let options

  if (!options.suggestions) {
    options.suggestions = []
  }

  $: if (data.length) {
    if (data.length > options.suggestions.length) {
      let temp = new Array(data.length - options.suggestions.length).fill({title: ''})
      options.suggestions = [...options.suggestions, ...temp]
    }
  }
</script>

<div class="flex flex-wrap -mx-2">
  <div class="w-1/2 px-2 mb-4">
    <Question label="suggestions" bind:data={options.suggestions} let:index>
      <div class="">
        <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
          suggestion <span class="text-red-600">*</span>
        </p>
        <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
          <input type="text" bind:value={options.suggestions[index]['title']} class="w-full px-4 py-2" placeholder="suggestion">
        </div>
      </div>
    </Question>
  </div>
  <div class="w-1/2 px-2 mb-4">
    <Question bind:data={data} let:index>
      <div class="">
        <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
          answer <span class="text-red-600">*</span>
        </p>
        <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
          <input type="text" bind:value={data[index]['answer']} class="w-full px-4 py-2" placeholder="canal">
        </div>
      </div>
    </Question>
  </div>
</div>