<script lang="ts">
	import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import slugify from "slugify";
	import Passage from "$lib/components/form/passage.svelte";
	import RichText from "$lib/components/form/rich_text.svelte";
	import Text from "$lib/components/form/text.svelte";

  const back = () => goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')))

  const getLinkAction = (pathname) => {
    let array_pathname = pathname.split('/')

    return array_pathname.join('/')
  }

  $: link_action = getLinkAction($page.url.pathname)

  let title = ''
  $: slug = slugify(title, '_')

  let quiz = {}
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
    <p class="text-gray-600">API ID : product</p>
  </div>

  <button class="btn btn-orange">
    <span>Save</span>
  </button>
</section>

<section class="mt-4">
  <div class="flex -mx-2">
    <div class="w-3/4 px-2 mb-4">
      <div class="w-full border rounded shadow-sm px-6 py-4 bg-white">
        <form action="{link_action}?/created">
          <div class="flex -mx-2">
            <div class="w-1/2 px-2 mb-4">
              <Text label="title" bind:data={title} />
            </div>
            <div class="w-1/2 px-2 mb-4">
              <Text label="slug" bind:data={slug} />
            </div>
          </div>

          <div class="mb-4">
            <Passage label="passages" />
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