<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
  import logo from '$lib/images/svelte-logo.svg';
	import { clickOutside } from '$lib/utils/clickOutSide';
  import { page } from "$app/stores";
	import { slide } from 'svelte/transition';

  export let data
  
  $: pathname = ($page.url.pathname + "/").split('/')[1]
  $: show_header = !["practice"].includes(pathname)

  let toggle_user = false
</script>

<div id="client">
  {#if show_header}
    <div class="fixed top-0 left-0 w-full h-16 px-8 shadow-sm shadow-gray-200 bg-white">
      <div class="flex items-center space-x-6">
        <a href="/" class="flex-none flex items-center space-x-1 py-3">
          <img src="{logo}" alt="" class="w-10 h-10 rounded">
          <div class="logo-title">
            <h1 class="text-lg font-semibold">Việt Hùng IT</h1>
            <h5 class="text-xs text-gray-500">Developer . Transporter</h5>
          </div>
        </a>
    
        <div class="!ml-auto self-stretch flex items-stretch space-x-6">
          <div class="nav-link">English News</div>
          <div class="dropdown">
            <div class="text">
              <span>IELTS Online Test</span>
              <span class="icon w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
            </div>
            <div class="menu">
              <div class="item">IELTS Full Test</div>
              <div class="item">IELTS Listening Practice</div>
              <div class="item">IELTS Reading Practice</div>
            </div>
          </div>
          <div class="nav-link">Spell copy</div>
          <div class="dropdown">
            <div class="text">
              <span>IELTS Writing Sample</span>
              <span class="icon w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
            </div>
            <div class="menu">
              <div class="item">IELTS Writing Sample Task 1</div>
              <div class="item">IELTS Writing Sample Task 2</div>
              <div class="item">IELTS Writing Sample Task 3</div>
            </div>
          </div>
          <div class="dropdown">
            <div class="text">
              <span>IELTS Speaking Sample</span>
              <span class="icon w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
            </div>
            <div class="menu">
              <div class="item">IELTS Speaking Part 1</div>
              <div class="item">IELTS Speaking Part 2</div>
              <div class="item">IELTS Speaking Part 3</div>
            </div>
          </div>
        </div>
    
        <!-- user -->
        {#if data.user}
          <div class="relative" use:clickOutside on:click_outside={() => toggle_user = false}>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="flex space-x-1 items-center" on:click|preventDefault={() => toggle_user = !toggle_user}>
              <div class="w-10 h-10 border rounded-full overflow-hidden cursor-pointer">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src={data.user?.image} alt="Photo by {data.user?.name}" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <span class="icon transition-all cursor-pointer {toggle_user ? 'rotate-180' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
              </span>
            </div>
            {#if toggle_user}
              <div transition:slide={{ duration: 300 }} class="absolute top-full right-0 z-10">
                <div class="min-w-[10rem] flex flex-col space-y-2 mt-1 p-3 bg-white shadow text-sm rounded">
                  <a href="/user" class="user-link bg-orange-100 text-orange-700 hover:!bg-orange-200">
                    <span class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
                    </span>
                    <span>User Information</span>
                  </a>
                  <a href="/" class="user-link {pathname == "settings" ? "active" : ''}">
                    <span class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
                    </span>
                    <span>Pro Account</span>
                  </a>
                  <form action="/auth/login?/logout" method="post"
                    use:enhance={({ form, data, action, cancel }) => {
                      return async ({ result, update }) => {
                        await applyAction(result)
                        await invalidateAll()
                      };
                    }}
                    class=""
                  >
                    <button type="submit" class="w-full user-link text-sm">
                      <span class="logout-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
                      </span>
                      <span>Logout</span>
                    </button>
                  </form>
                </div>
              </div>
            {/if}
          </div>
        {:else}
          <a href="/auth/login" class="btn btn-red rounded-lg">Sign up</a>
        {/if}
      </div>
    </div>
    <div class="flex-none w-full h-16 shadow-lg shadow-gray-200"></div>
  {/if}
  
  <div class="flex-grow min-h-0 flex flex-col">
    <slot/>
  </div>
</div>

<style lang="postcss">
  #client {
    @apply flex flex-col min-h-screen bg-white text-[#333];
  }

  :global(h1,h2,h3,h4,h5) {
    color: inherit;
  }

  .nav-link {
    color: #333;
    @apply relative h-full inline-flex items-center border-b-2 border-transparent hover:border-b-orange-600 font-semibold cursor-pointer;
  }

  .dropdown {
    @apply relative;
  }
  .dropdown .text {
    color: #333;
    @apply h-full flex items-center border-b-2 border-transparent hover:border-b-orange-600 font-semibold space-x-1 cursor-pointer;
  }
  .dropdown::before {
    content: '';
    @apply absolute w-full h-2 top-full left-0;
  }
  .dropdown .menu {
    @apply hidden w-60 absolute left-1/2 top-[calc(100%+.5rem)] -translate-x-1/2 bg-white shadow py-2 rounded;
  }
  .dropdown:hover .menu {
    @apply block;
  }

  .dropdown .menu .item {
    @apply px-4 py-2 hover:bg-gray-100 w-full truncate cursor-pointer;
  }

  .user-link {
    @apply flex items-center space-x-2 px-2 py-2 rounded hover:bg-gray-200 font-semibold;
  }
  .user-link.active {
    @apply bg-orange-100 text-orange-700 hover:bg-orange-200;
  }

  .user-link > span {
    @apply truncate;
  }

  .user-link .icon {
    @apply w-5 h-5 flex-none;
  }
</style>