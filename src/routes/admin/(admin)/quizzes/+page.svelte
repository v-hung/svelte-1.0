<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { invalidateAll } from "$app/navigation";
  import { page } from "$app/stores";
	import Collapse from "$lib/components/collapse.svelte";
	import { clickOutside } from "$lib/utils/clickOutSide";
	import { fade } from "svelte/transition";
	import { alertStore } from "../../../../stores/alert";
  export let data

  let checked_entries = []
  $: check_all = checked_entries.length == data.entries.length

  const toggleAll = () => {
    if (check_all) {
      checked_entries = []
    }
    else {
      checked_entries = data.entries.slice().map((v: any,i) => v = i)
    }
  }

  let form_delete: string | null = null
  let form_loading = false

  let displayed_fields_show = false
  let displayed_fields = Object.keys(data.entries[0] || {})

  $:console.log(displayed_fields)
</script>

<section class="flex justify-between items-end">
  <div>
    <h3 class="text-xl font-semibold">Quizzes</h3>
    <p class="text-gray-600">{data.entries.length} entries found</p>
  </div>

  <a href="{$page.url.pathname}/create" class="btn-icon btn-orange">
    <span class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
    </span>
    <span>Add new Articles</span>
  </a>
</section>

<section class="flex justify-between items-center mt-6">
  <div class="relative">
    <button class="btn-icon">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path></svg>
      </span>
      <span>Filter</span>
    </button>
  </div>
  <div class="relative">
    <button class="btn-icon pr-2" on:click|preventDefault={() => displayed_fields_show = !displayed_fields_show}>
      <span class="icon w-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
      </span>
      <span class="icon w-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
      </span>
    </button>
    <Collapse show={displayed_fields_show} class="absolute bg-white shadow right-0 w-max">
      <div class="p-1 flex flex-col border rounded w-40">
        {#each Object.keys(data.entries[0]) as key, i}
          <label for="displayedFields{i}" class="flex items-center space-x-4 px-4 py-2 hover:bg-orange-200 rounded">
            <input type="checkbox" id="displayedFields{i}" value="{key}" bind:group={displayed_fields}>
            <span>{key}</span>
          </label>
        {/each}
      </div>
    </Collapse>
  </div>
</section>

<section class="mt-4">
  {#if data.entries.length > 0}
    <div class="w-full overflow-x-auto border rounded overflow-hidden shadow-sm px-6 bg-white">
      <table class="table">
        <thead>
          <tr>
            <td>
              <input type="checkbox" name="" on:click={toggleAll} checked={check_all}>
            </td>
            <th>No</th>
            {#each displayed_fields as key, i}
              <th>{key}</th>
            {/each}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {#each data.entries as entrie,i}
            <!-- <tr class="cursor-pointer transition-colors hover:border-orange-600"> -->
            <a href="{$page.url.pathname}/{entrie.id}/edit" class="table-row cursor-pointer transition-colors hover:border-orange-600">
              <td class="pointer-events-none">
                <input type="checkbox" bind:group={checked_entries} value="{i}" 
                  on:click|stopPropagation={() => {}} class="pointer-events-auto"
                >
                <!-- <input type="checkbox" name="" id="cbx{i}" class="sr-only">
                <label class="checkbox" for="cbx{i}" on:click|stopPropagation={() => {}}></label> -->
              </td>

              <td>{(data.page - 1) * data.total + i + 1}</td>

              {#each displayed_fields as key, i}
                <td>{entrie[key]}</td>
              {/each}
              
              <td>
                <div class="!flex items-center space-x-1">
                  <a href="{$page.url.pathname}/{entrie.id}/edit" class="icon w-7 h-7 p-1 hover:text-blue-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path></svg>
                  </a>
                  <button class="icon w-7 h-7 p-1 hover:text-orange-600 cursor-pointer" on:click|preventDefault={() => {}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>
                  </button>
                  <button class="icon w-7 h-7 p-1 hover:text-rose-600 cursor-pointer pointer-events-auto"
                    on:click|preventDefault={() => form_delete = entrie.id}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                  </button>
                </div>
              </td>
            </a>
            <!-- </tr> -->
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="">No Quizzes found</p>
  {/if}
</section>

{#if form_delete}
  <div transition:fade class="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black/10 z-50">
    <div class="w-full max-w-md bg-white p-8 rounded shadow"
      use:clickOutside on:clickOutside={() => form_delete = null}
    >
      <form action="{$page.url.pathname}/${form_delete}?/delete" method="post"
        use:enhance={({ form, data, action, cancel }) => {
          form_loading = true

          return async ({ result, update }) => {
            await applyAction(result)
            // console.log(result)
            form_loading = false

            if (result.type == "success") {
              alertStore.addAlert({
                type: "success",
                title: result.data?.message
              })
              form_delete = null
              await invalidateAll()
            }
            else if (result.type == "failure") {
              alertStore.addAlert({
                type: "warning",
                title: result.data?.error
              })
            }
          };
        }}
        class="flex flex-col items-center space-y-4"
      >
        <input type="hidden" name="id" value="{form_delete}">
        <span class="icon w-20 h-20 p-4 border-4 border-red-500 text-red-500 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
        </span>
        <h5 class="text-3xl font-semibold">Delete?</h5>
        <p class="text-gray-600 text-base">Are you sure you want to delete the record ""?</p>
        <div class="w-full flex justify-between !mt-10">
          <button class="btn !px-8" on:click|preventDefault={() => form_delete = null}>Cancel</button>
          <button type="submit" class="btn btn-red !px-8">Delete</button>
        </div>
      </form>
    </div>
  </div>
{/if}

{#if form_loading}
  <div transition:fade class="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black/10 z-50">
    <span class="icon w-6 h-6 animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path></svg>
    </span>
  </div>
{/if}