<script lang="ts">
  import logo from '$lib/images/svelte-logo.svg';
</script>

<div class="flex w-full min-h-screen bg-gray-200">
  <div class="flex-none bg-white">
    <div class="flex items-center py-4 px-3 space-x-2 border-b border-gray-300">
      <img src="{logo}" alt="" class="w-8 h-8 rounded">
      <div class="text-sm">
        <h1 class="font-semibold">Việt It Dashboard</h1>
        <h5 class="text-xs text-gray-500">Workplace</h5>
      </div>
    </div>

    <div class="px-3 py-4">
      <a href="link">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 4C6.486 4 2 8.486 2 14a9.89 9.89 0 0 0 1.051 4.445c.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555A9.89 9.89 0 0 0 22 14c0-5.514-4.486-10-10-10zm7.41 13H4.59A7.875 7.875 0 0 1 4 14c0-4.411 3.589-8 8-8s8 3.589 8 8a7.875 7.875 0 0 1-.59 3z"></path><path d="M10.939 12.939a1.53 1.53 0 0 0 0 2.561 1.53 1.53 0 0 0 2.121-.44l3.962-6.038a.034.034 0 0 0 0-.035.033.033 0 0 0-.045-.01l-6.038 3.962z"></path></svg>
        </span>
      </a>
    </div>
  </div>
  <div class="flex-grow min-w-0">
    <slot></slot>
  </div>
</div>

<style lang="postcss">
  .link {
    @apply px-4 py-2 rounded hover:bg-gray-200;
  }
</style>