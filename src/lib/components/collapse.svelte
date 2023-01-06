<script lang="ts">
  export let show = false

  let el: HTMLElement | null = null

  let time = null
  const collapse = (show) => {
    if (!el) return
    // el.style.transition = 'height .3s ease'
    clearTimeout(time)

    if (show) {
      el.style.height = el.scrollHeight + 'px'

      time = setTimeout(() => {
        el.style.height = "auto"
      }, 300);
    }
    else {
      el.style.height = el.clientHeight + 'px'

      time = setTimeout(() => {
        el.style.height = "0px"
      }, 0);
    }
  }

  $: collapse(show)
</script>

<div bind:this={el} style="height: 0px; overflow: hidden; transition: height .3s ease;">
  <slot />
</div>