<script lang="ts">
	import Image from "../image.svelte";
  import Question from "../question.svelte";
	import Text from "../text.svelte";

  let active = null;
</script>

<Question label="questions">
  <Text label="question name" placeholder="What is the writer's main point in the first paragraph?"/>

  <div class="mt-4">
    <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
      answer <span class="text-red-600">*</span>
    </p>
    <div class="flex -mx-2 flex-wrap">
      <div class="w-1/2 px-2 mb-4">
        <input type="radio" name="answer" id="a" value="a" class="sr-only">
        <label class="item-answer" for="a" >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">A</span>
          <input type="text" class="w-full py-1" placeholder="Our use of technology is having a hidden effect on us.">
        </label>
      </div>

      <div class="w-1/2 px-2 mb-4">
        <input type="radio" name="answer" id="b" value="b" class="sr-only">
        <label class="item-answer" for="b" >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">B</span>
          <input type="text" class="w-full py-1" placeholder="Technology can be used to help youngsters to read.">
        </label>
      </div>

      <div class="w-1/2 px-2 mb-4">
        <input type="radio" name="answer" id="c" value="c" class="sr-only">
        <label class="item-answer" for="c" >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">C</span>
          <input type="text" class="w-full py-1" placeholder="Travellers should be encouraged to use technology on planes.">
        </label>
      </div>

      <div class="w-1/2 px-2 mb-4">
        <input type="radio" name="answer" id="d" value="d" class="sr-only">
        <label class="item-answer" for="d" >
          <span class="grid w-7 h-7 place-items-center rounded-full bg-gray-200">D</span>
          <input type="text" class="w-full py-1" placeholder="Playing games is a more popular use of technology than reading.">
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