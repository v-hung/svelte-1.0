<script lang="ts">
  import { page } from "$app/stores";
  export let data

  let checked_entries = []
  $: check_all = checked_entries.length == data.entries.length

  const toggleAll = () => {
    if (check_all) {
      checked_entries = []
    }
    else {
      checked_entries = data.entries.map((v,i) => v = i)
    }
  }
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
    <button class="btn-icon pr-2">
      <span class="icon w-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
      </span>
      <span class="icon w-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
      </span>
    </button>
  </div>
</section>

<section class="mt-4">
  {#if data.entries.length > 0}
    <div class="w-full overflow-x-auto border rounded overflow-hidden shadow-sm px-6 bg-white">
      <table>
        <thead>
          <tr>
            <td>
              <input type="checkbox" name="" on:click={toggleAll} checked={check_all}>
            </td>
            <th>id</th>
            <th>
              fsadf
            </th>
            <th>Id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {#each data.entries as a,i}
            <tr class="cursor-pointer transition-colors hover:border-orange-600">
              <td>
                <input type="checkbox" name="product" bind:group={checked_entries} value="{i}">
              </td>
              <td>
                4
              </td>
              <td>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aliquam vel quam asperiores optio assumenda harum odit ut. Earum perferendis illo quo voluptatem, enim molestiae non animi aspernatur soluta inventore.</p>
              </td>
              <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aliquam vel quam asperiores optio assumenda harum odit ut. Earum perferendis illo quo voluptatem, enim molestiae non animi aspernatur soluta inventore.</p></td>
              <td>
                <div class="flex items-center space-x-1">
                  <span class="icon w-6 p-1 hover:text-blue-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path></svg>
                  </span>
                  <span class="icon w-6 p-1 hover:text-orange-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>
                  </span>
                  <span class="icon w-6 p-1 hover:text-rose-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                  </span>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="">No Quizzes found</p>
  {/if}
</section>