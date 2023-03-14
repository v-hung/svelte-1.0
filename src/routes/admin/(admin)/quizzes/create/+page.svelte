<script lang="ts">
	import { goto, invalidateAll } from "$app/navigation";
  import { page } from "$app/stores";
  import slugify from "slugify";
	import Passage from "$lib/components/admin/form/passage.svelte";
	import Text from "$lib/components/admin/form/text.svelte";
	import { applyAction, enhance } from "$app/forms";
	import { fade } from "svelte/transition";

  export let form

  const back = () => goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')))

  let form_loading = false
  let title = ''
  $: slug = slugify(title, '_')

  let passages

  let submit_form_el: HTMLButtonElement | null
  const saveForm = () => {
    if (submit_form_el)
      submit_form_el.click()
  }

  $: console.log(form)
</script>

<button 
  class="flex items-center space-x-1 text-blue-500 hover:text-orange-600"
  on:click|preventDefault={back}
>
  <span class="icon w-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></span>
  <span>Back</span>
</button>

<section class="flex justify-between items-end mt-4">
  <div>
    <h3 class="text-xl font-semibold">Create an entry</h3>
    <p class="text-gray-600">API ID : quizzes</p>
  </div>

  <button class="btn btn-orange" on:click={saveForm}>
    <span>Save</span>
  </button>
</section>

<section class="mt-4">
  <div class="flex -mx-2">
    <div class="w-3/4 px-2 mb-4">
      <div class="w-full border rounded shadow-sm px-6 py-4 bg-white">
        <form action="?/create" method="post"
          use:enhance={({ form, data, action, cancel }) => {
            form_loading = true
            data.append('passages', JSON.stringify(passages))

            console.log(passages)

            return async ({ result, update }) => {
              await applyAction(result)
              // console.log(result)
              form_loading = false
            };
          }}
        >
          <div class="flex -mx-2">
            <div class="w-1/2 px-2 mb-4">
              <Text label="title" name="title" bind:data={title} />
            </div>
            <div class="w-1/2 px-2 mb-4">
              <Text label="slug" name="slug" bind:data={slug} />
            </div>
          </div>

          <div class="mb-4">
            <Passage label="passages" bind:data={passages} />
          </div>

          <div class="flex justify-end">
            <button bind:this={submit_form_el} type="submit" class="btn btn-orange">Submit</button>
          </div>
        </form>
      </div>
    </div>

    <div class="w-1/4 px-2 mb-4">
      <div class="w-full h-60 border rounded shadow-sm px-6 py-4 bg-white">
      </div>
    </div>
  </div>
</section>

{#if form_loading}
  <div transition:fade class="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black/10 z-50">
    <span class="icon w-6 h-6 animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path></svg>
    </span>
  </div>
{/if}
