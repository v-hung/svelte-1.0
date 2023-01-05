<script lang="ts">
	import './styles.css';
  import { navigating } from "$app/stores";

  let line_process: HTMLElement | null = null

  $: watchRoute($navigating)

  const watchRoute = (navigating) => {
    if (!line_process) return

    if (navigating) {
      // line_process.style.width = '0'
      line_process.style.transition = 'all 2s'
      line_process.style.width = '70%'
      // setTimeout(() => {
      // }, 0);
    }
    else {
      line_process.style.width = '100%'
      line_process.style.transition = 'all .1s'
      setTimeout(() => {
        line_process.style.width = '0'
        line_process.style.transition = null
      }, 100);
    }
  }
</script>

<div id="app">
  <div class="line">
    <div bind:this={line_process} class="line-process"></div>
  </div>
  <slot />
</div>

<style lang="postcss">
  .line {
    @apply fixed w-full h-1 top-0 left-0 z-50;
  }
  .line .line-process {
    @apply absolute w-0 h-full bg-orange-600 ease-out;
  }
</style>