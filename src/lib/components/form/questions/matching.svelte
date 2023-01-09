<script lang="ts">
	import Image from "../image.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  export let data
  $: data.map(v => ({...v, answer: v.question_name}))
</script>

<Question bind:data={data} let:index>
  <Text bind:data={data[index]['question_name']} label="question name & answer" placeholder="An increasing divergence of attitudes towards Al"/>
</Question>