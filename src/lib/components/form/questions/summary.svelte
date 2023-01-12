<script lang="ts">
	import Image from "../image.svelte";
	import LongText from "../long_text.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  export let data
  export let options

  if (!options.summary_title) {
    options.summary_title = ''
  }

  if (!options.summary_content) {
    options.summary_content = ''
  }

  if (!options.suggestions) {
    options.suggestions = []
  }

  const changeQuestion = (long_text) => {
    let count = (long_text.split("__") || []).length - 1
    
    if (count > data.length) {
      let temp = new Array(count - data.length).fill({})
      data = [...data, ...temp]

      if (data.length > options.suggestions.length) {
        let temp = new Array(data.length - options.suggestions.length).fill('')
        options.suggestions = [...options.suggestions, ...temp]
      }
    }
    else if (count < data.length) {
      data = data.filter((v,i) => i < count)
    }
  }

  $: changeQuestion(options.summary_content)
</script>

<Text bind:data={options.summary_title} label="Summary title" placeholder="Studies on digital screen use" />
<div class="mt-4">
  <LongText bind:data={options.summary_content} label="content"/>
</div>
<p class="mt-2 text-xs s-9Y9hJpp9NSMc">Use the __ symbol for the answer position.</p>

<div class="mt-4 flex flex-wrap -mx-2">
  <div class="w-1/2 px-2 mb-4">
    <Question label="suggestions" bind:data={options.suggestions} let:index>
      <div class="">
        <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
          answer <span class="text-red-600">*</span>
        </p>
        <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
          <input type="text" bind:value={options.suggestions[index]['answer']} class="w-full px-4 py-2" placeholder="canal">
        </div>
      </div>
    </Question>
  </div>
  <div class="w-1/2 px-2 mb-4">
    <Question bind:data={data} let:index is_add={false}>
      <div class="">
        <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
          answer <span class="text-red-600">*</span>
        </p>
        <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
          <input type="text" bind:value={data[index]['answer']} class="w-full px-4 py-2" placeholder="canal">
        </div>
      </div>
    </Question>

    {#if data.length == 0}
      <p>No question</p>
    {/if}
  </div>
</div>