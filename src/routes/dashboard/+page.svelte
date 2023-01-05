<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { goto, invalidate, invalidateAll } from "$app/navigation";
  import { page } from "$app/stores"
	import { redirect } from "@sveltejs/kit";

  // console.log($page.data?.user)
</script>

<div class="flex -mx-2">
  <div class="w-1/3 px-2 mb-4">
    <div class="w-full h-60 bg-white rounded p-4 shadow"></div>
  </div>
  <div class="w-1/3 px-2 mb-4">
    <div class="w-full h-60 bg-white rounded p-4 shadow"></div>
  </div>
  <div class="w-1/3 px-2 mb-4">
    <div class="w-full h-60 bg-white rounded p-4 shadow"></div>
  </div>
</div>

<div class="w-full h-96 bg-white rounded p-4 shadow mb-4"></div>

<div class="w-full h-96 bg-white rounded p-4 shadow mb-4"></div>