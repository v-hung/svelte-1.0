<script lang="ts">
	import Image from "../image.svelte";
  import Question from "../question.svelte";

  export let data
  export let image
</script>

<div class="flex flex-wrap -mx-2">
  <div class="w-2/5 px-2 mb-4">
    <Image bind:data={image} />
  </div>
  <div class="w-3/5 px-2 mb-4">
    <Question bind:data={data} let:index>
      <div>
        <p class="text-xs font-semibold text-$primary mb-1.5 capitalize">
          question name <span class="text-red-600">*</span>
          <span class="icon inline-block w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>
          </span>
        </p>
        <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
          <input type="text" bind:value={data[index]['question_name']} class="w-full px-4 py-2" placeholder="Water runs into a __ used by local people">
        </div>
        <p class="mt-2 text-xs s-9Y9hJpp9NSMc">Use the __ symbol for the answer position.</p>
      </div>

      <div class="mt-4">
        <p class="text-xs font-semibold text-$primary mb-1.5 capitalize">
          answer <span class="text-red-600">*</span>
        </p>
        <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
          <input type="text" bind:value={data[index]['answer']['answer_name']} class="w-full px-4 py-2" placeholder="canal">
        </div>
      </div>
    </Question>
  </div>
</div>