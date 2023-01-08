<script lang="ts">
	import Image from "../image.svelte";
	import LongText from "../long_text.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  let long_text = ""
  let question_data = []

  const changeQuestion = (long_text) => {
    let count = (long_text.match(/__\s/g) || []).length
    
    if (count > question_data.length) {
      let temp = new Array(count - question_data.length).fill({})
      question_data = [...question_data, ...temp]
    }
    else if (count < question_data.length) {
      question_data = question_data.filter((v,i) => i < count)
    }
  }

  $: changeQuestion(long_text)
</script>

<div class="flex flex-wrap -mx-2">
  <div class="w-2/3 px-2 mb-4">
    <Text label="title" placeholder="Studies on digital screen use" />
    <LongText bind:data={long_text} label="content"/>
    <p class="mt-2 text-xs s-9Y9hJpp9NSMc">Use the __ symbol for the answer position.</p>
  </div>
  <div class="w-1/3 px-2 mb-4">
    <Question bind:data={question_data} label="questions" is_add={false}>
      <div class="">
        <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
          answer <span class="text-red-600">*</span>
        </p>
        <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
          <input type="text" name="answer" class="w-full px-4 py-2" placeholder="canal">
        </div>
      </div>
    </Question>

    {#if question_data.length == 0}
      <p>No question</p>
    {/if}
  </div>
</div>