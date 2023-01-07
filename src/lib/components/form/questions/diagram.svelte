<script lang="ts">
	import Image from "../image.svelte";
 import Question from "../question.svelte";

</script>

<div class="flex flex-wrap -mx-2">
  <div class="w-2/5 px-2 mb-4">
    <Image />
  </div>
  <div class="w-3/5 px-2 mb-4">
    <Question label="questions" />
  </div>
</div>