<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
  import logo from '$lib/images/svelte-logo.svg';
	import { clickOutside } from '$lib/utils/clickOutSide';
  import { page } from "$app/stores";
  
  $: pathname = ($page.url.pathname + "/").split('/')[1]
  $: show_header = !["practice"].includes(pathname)

  let toggle_user = false

  let passages = [1,2,3]

  const getPercent = (a) => {
    a = a < 0 ? 0 : ((a > 100) ? 100 : a)

    return 292.796 / 100 * a
  }
</script>

<div class="flex-none sticky w-full h-16 px-8 shadow-sm shadow-gray-200 bg-white">
  <div class="flex items-center space-x-6">
    <span class="icon w-8 h-8 p-1 bg-gray-200 rounded-full cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </span>

    <div class="flex-none flex items-center space-x-1 py-3">
      <img src="{logo}" alt="" class="w-10 h-10 rounded">
      <div class="logo-title">
        <h1 class="text-lg font-semibold">Việt Hùng IT</h1>
        <h5 class="text-xs text-gray-500">Developer . Transporter</h5>
      </div>
    </div>

    <div class="!ml-auto">
      <div class="flex items-center space-x-1 text-red-600 rounded-lg border px-2 py-1">
        <span class="font-semibold">60 : 00</span>
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m20.145 8.27 1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 0 0-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"></path></svg>
        </span>
      </div>
    </div>
  </div>
</div>

<section class="flex-grow">
  <div class="practice-container">a</div>
</section>

<section class="shadow-sm shadow-gray-200">
  <div class="practice-container">
    <div class="flex items-stretch space-x-4 py-2">
      <div class="flex space-x-2">
        <div class="w-8 bg-gray-200"></div>
        <div class="w-36">
          <h5 class="font-semibold truncate">CAM16 - Reading Test 4</h5>
          <p class="text-sm text-gray-500">Roman tunnels</p>
        </div>
      </div>

      {#each passages as passage, index}
        <div class="passage flex items-center space-x-2 {index == 0 ? 'active' : ''}">
          <div class="relative w-11 h-11">
            <span class="icon w-full h-full">
              <svg class="ant-progress-circle" viewBox="0 0 100 100">
                <path class="ant-progress-circle-trail" d="M 50,50 m 0,-46.6
                a 46.6,46.6 0 1 1 0,93.2
                a 46.6,46.6 0 1 1 0,-93.2" stroke="#E9E9EC" stroke-linecap="round" stroke-width="6.8" fill-opacity="0"
                   style="stroke: rgb(233, 233, 236); stroke-dasharray: 292.796px, 292.796px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s;">
                </path>
                <path class="ant-progress-circle-path" d="M 50,50 m 0,-46.6
                a 46.6,46.6 0 1 1 0,93.2
                a 46.6,46.6 0 1 1 0,-93.2" stroke="" stroke-linecap="round" stroke-width="6.8" opacity="1" fill-opacity="0"
                   style="stroke: currentColor; stroke-dasharray: {getPercent(10)}px, 292.796px; stroke-dashoffset: 0px; transition-property: stroke-dashoffset, stroke-dasharray, stroke, stroke-width, opacity; transition-duration: 0.3s, 0.3s, 0.3s, 0.06s; transition-timing-function: ease, ease, ease, ease, ease; transition-delay: 0s, 0s, 0s, 0.3s, 0s;">
                </path>  
             </svg>
            </span>
            <span class="absolute w-full h-full top-0 left-0 grid place-items-center text-xs">
              0 / 13
            </span>
          </div>
          <div class="mb-1">
            <h5 class="text-sm font-semibold truncate uppercase">passage {index}</h5>
            <p class="text-xs">13 questions</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="">
      
    </div>
  </div>
</section>

<style>
  .practice-container {
    @apply w-full max-w-[1680px] mx-auto px-4;
  }

  .passage {
    @apply text-gray-500 select-none cursor-pointer;
  }
  .passage.active {
    @apply text-red-600;
  }
</style>