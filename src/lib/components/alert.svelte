<script lang="ts">
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { alertStore } from "../../stores/alert";
</script>

<div class="fixed w-full h-screen top-0 right-0 z-50 pointer-events-none overflow-hidden px-2">
  <div class="flex flex-col w-full max-w-md float-right py-2 space-y-2">
    {#each $alertStore.slice().reverse() as alert (alert.id)}
      <div 
        class="alert w-full flex space-x-4 items-center p-2 bg-white shadow-md rounded-md pointer-events-auto"
        in:fly="{{ y: -200, duration: 500 }}"
        out:fly="{{ x: 200, duration: 500 }}"
        animate:flip="{{duration: 500}}"
      >
        <div class="self-stretch w-1.5 
          {alert.type == "success" ? "bg-green-500" : alert.type == "warning" ? "bg-yellow-500" : "bg-red-500"}"
        ></div>
        <span class="icon rounded-full p-1 text-white
          {alert.type == "success" ? "bg-green-500" : alert.type == "warning" ? "bg-yellow-500" : "bg-red-500"}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
        </span>
        <div>
          <h5 class="font-semibold">{alert.title}</h5>
          <h5 class="text-gray-500 text-sm">{alert.description}</h5>
        </div>
        <button class="!ml-auto icon w-12 h-12 p-2"
          on:click|preventDefault={() => alertStore.delAlert(alert.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </button>
      </div>
    {/each}
  </div>
</div>