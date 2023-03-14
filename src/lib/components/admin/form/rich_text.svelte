<script >
  // import tinymce from 'tinymce';
  import Editor from "@tinymce/tinymce-svelte";
	import { onMount } from 'svelte';
  // import tiny from "$lib/utils/tinymce.min.js";
  export let label = ''
  export let height = 500
  export let data = ""
  export let name = ""

  let config_tinymce = {
    "height": height,
    "plugins": [
      "advlist","autolink",
      "lists","link","image","charmap","preview","anchor","searchreplace","visualblocks",
      "fullscreen","insertdatetime","media","table","help","wordcount"
    ],

    "toolbar": "undo redo | a11ycheck casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | " +
    "bullist numlist checklist outdent indent | removeformat | code table help"
  }
</script>

<div>
  <p class="text-xs font-semibold text-$primary mb-1.5 capitalize">
    {label} <span class="text-red-600">*</span>
    <!-- <span class="icon inline-block w-3 h-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>
    </span> -->
  </p>

  <input type="text" name={name} value={data} class="sr-only">
  <Editor id={name} scriptSrc="/js/tinymce/tinymce.min.js" bind:value={data} conf={config_tinymce} />

  <!-- <textarea name="mytextarea" id="mytextarea" cols="30" rows="10"></textarea> -->
</div>

<style>
  :global(.tox-tinymce) {
    border-width: 1px !important;
    border-color: inherit !important;
  }
</style>