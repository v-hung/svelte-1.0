<script>
	import './styles.css';
</script>

<div id="app">
  <slot />
</div>

<style lang="postcss">
  #app {
    color: #333;
  }

  :global(input, select, textarea) {
    background: transparent;
  }
  :global(input:focus, textarea:focus, a:focus) {
    outline: none;
	}
</style>