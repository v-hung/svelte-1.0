<script lang="ts">
	import Collapse from "../collapse.svelte";
	import Diagram from "./questions/diagram.svelte";
	import Matching from "./questions/matching.svelte";
	import Short from "./questions/short.svelte";
	import Single from "./questions/single.svelte";
	import Summary from "./questions/summary.svelte";
	import TrueFalse from "./questions/true_false.svelte";
	import YesNo from "./questions/yes_no.svelte";

  export let label = ''
  export let data: {
    type: string,
    label: string
  }[] = [
    {type: 'diagram',label: 'Diagram Label Completion'},
  ]

  let show_item = null
  let show_add = false

  const addToData = (item) => {
    data = [...data, {
      type: item.type,
      label: item.label
    }]
    show_add = false
  }

  const group_questions = [
    {type: 'diagram',label: 'Diagram Label Completion'},
    {type: 'true-false',label: 'True / False / Not given'},
    {type: 'short',label: 'Short Answer'},
    {type: 'single',label: 'Single Answer'},
    {type: 'summary',label: 'Summary, Note Completion With Hint'},
    {type: 'yes-no',label: 'Yes / No / Not Given'},
    {type: 'matching',label: 'Matching Heading'}
  ]
</script>

<div>
  <p class="text-xs font-semibold text-primary mb-1.5 capitalize">
    {label} <span class="text-red-600">*</span>
  </p>
  <div class="list-rounded-2 flex flex-col">
    {#each data as item, index}
      <div class="item border bg-white {show_item == index ? 'show' : ''}">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div 
          class="item-title flex items-center space-x-2 px-4 py-2 cursor-pointer select-none"
          on:click|preventDefault={() => show_item = (show_item == index ? null : index)}
        >
          <span class="icon w-6 h-6 p-1.5 rounded-full bg-gray-200 cursor-pointer transition-transform {show_item == index ? 'rotate-180' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
          </span>
          <span class="font-semibold">{item.label}</span>
          <span class="!ml-auto icon w-6 h-6 p-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
          </span>
          <span class="icon w-6 h-6 p-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"></path></svg>
          </span>
        </div>

        <Collapse show={show_item == index}>
          <div class="bg-orange-100 px-4 py-6">
            {#if item.type == "diagram"}
              <Diagram />
            {:else if item.type == "true-false"}
              <TrueFalse />
            {:else if item.type == "short"}
              <Short />
            {:else if item.type == "single"}
              <Single />
            {:else if item.type == "summary"}
              <Summary />
            {:else if item.type == "yes-no"}
              <YesNo />
            {:else if item.type == "matching"}
              <Matching />
            {/if}
          </div>
        </Collapse>
      </div>
      <div class="w-2 h-4 mx-auto bg-orange-200"></div>
    {/each}

    <div class="flex justify-center">
      <div class="btn-add {show_add ? 'show' : ''}">
        <button
          class="flex items-center justify-center space-x-2 w-full px-4 py-2 cursor-pointer text-orange-600 transition-colors"
          on:click|preventDefault={() => show_add = !show_add}
        >
          {#if !show_add}
            <span class="icon w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            </span>
            <span class="font-semibold">Add new entry</span>
          {:else}
            <span class="icon w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
            </span>
            <span class="font-semibold">Close</span>
          {/if}
        </button>

        <div class="grid p-4 gap-2 {!show_add ? '!hidden' : ''}" style="grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));">
          {#each group_questions as item}
            <button 
              class="flex flex-col items-center justify-center border p-2 rounded group cursor-pointer bg-gray-100 hover:bg-orange-100 hover:text-orange-600 hover:border-orange-600"
              on:click|preventDefault={() => addToData(item)}
            >
              <span class="icon w-10 h-10 p-1 rounded-full bg-gray-200 group-hover:bg-orange-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 10V7c0-1.103-.897-2-2-2h-3c0-1.654-1.346-3-3-3S8 3.346 8 5H5c-1.103 0-2 .897-2 2v4h1a2 2 0 0 1 0 4H3v4c0 1.103.897 2 2 2h4v-1a2 2 0 0 1 4 0v1h4c1.103 0 2-.897 2-2v-3c1.654 0 3-1.346 3-3s-1.346-3-3-3z"></path></svg>
              </span>
              <span class="mt-2 text-xs text-center">{item.label}</span>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .list-rounded-2 > .item {
    @apply rounded;
  }
  .list-rounded-2 > .item:hover,
  .list-rounded-2 > .item.show {
    @apply border-orange-600 bg-orange-200 ;
  }

  .list-rounded-2 > .item:hover .item-title,
  .list-rounded-2 > .item.show .item-title {
    @apply text-orange-600;
  }

  /* .list-rounded-2 .btn-add {
    @apply flex flex-col items-center justify-center;
  } */

  .list-rounded-2 .btn-add {
    @apply w-40 bg-white rounded-full border overflow-hidden;
  }
  .list-rounded-2 .btn-add:hover,
  .list-rounded-2 .btn-add.show {
    @apply border-orange-600 bg-white;
  }

  .list-rounded-2 .btn-add.show > button {
    @apply bg-orange-200;
  }

  .list-rounded-2 .btn-add > button:hover {
    @apply bg-orange-500 text-white;
  }

  .list-rounded-2 .btn-add.show{
    @apply w-full rounded;
  }
</style>