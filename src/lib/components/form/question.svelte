<script lang="ts">
	import Collapse from "../collapse.svelte";
  export let label = 'Questions'
  export let data: any[] = []
  export let is_add = true

  const addToData = () => {
    data = [...data, {
      title: '',
      answer: null,
      option_a: '',
      option_b: '',
      option_c: '',
      option_d: ''
    }]

    show_item = data.length - 1
  }

  let show_item = null
</script>

<div>
  <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
    {label} <span class="text-red-600">*</span>
  </p>
  <div class="list-rounded flex flex-col">
    {#each data as item, index}
      <div class="border bg-white {show_item == index ? 'show' : ''}">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div 
          class="item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none"
          on:click|preventDefault={() => show_item = (show_item == index ? null : index)}
        >
          <span class="icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform {show_item == index ? 'rotate-180' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
          </span>
          <span class="font-semibold">Question</span>
          <span 
            class="!ml-auto icon w-6 h-6 p-1 cursor-pointer hover:text-red-600"
            on:click|preventDefault|stopPropagation={() => data = data.filter((v,i) => i != index)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
          </span>
          <span class="icon w-6 h-6 p-1 hover:text-blue-600 cursor-move">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"></path></svg>
          </span>
        </div>

        <Collapse show={show_item == index}>
          <div class="bg-orange-100 px-4 py-6">
            <slot {index} />
          </div>
        </Collapse>
      </div>
    {/each}

    {#if is_add}
      <button 
        class="flex items-center justify-center space-x-2 border px-4 py-2 cursor-pointer bg-white text-orange-600 transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-600"
        on:click|preventDefault={addToData}
      >
        <span class="icon w-4 h-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
        </span>
        <span class="font-semibold">Add new question</span>
      </button>
    {/if}
  </div>
</div>

<style lang="postcss">
  .list-rounded > * {
    @apply border-b-0;
  }
  .list-rounded > *:hover:not(button),
  .list-rounded > *.show {
    @apply border-b border-orange-600 bg-orange-200 ;
  }

  .list-rounded > *:hover:not(button) .item-title,
  .list-rounded > *.show .item-title {
    @apply text-orange-600;
  }


  .list-rounded > *:hover + * {
    @apply border-t-0;
  }

  .list-rounded > *:first-child {
    @apply rounded-t;
  }
  .list-rounded > *:last-child {
    @apply rounded-b border-b;
  }
</style>