<script lang="ts">
  import { signIn } from "$lib/oauth2"
  import { applyAction, enhance } from '$app/forms'
	import logo from '$lib/images/svelte-logo.svg';

  export let data
  export let form

  let loading = false
  let show = false
  let input_pass: HTMLInputElement | null = null

  const toggleShowPass = () => {
    show = !show
    if (input_pass) {
      input_pass.type = show ? 'text' : 'password'
    }
  }

  console.log({data})
</script>

<div class="w-full min-h-screen bg-gray-100 py-16">
	<div class="w-full max-w-lg mx-auto rounded-lg shadow px-12 py-8 bg-white">
		<div class="flex flex-col justify-center items-center">
			<img src={logo} alt="logo" class="w-20" />

			<h1 class="text-4xl font-semibold mt-4 mb-2">Welcome to ViệtIT!</h1>
			<p class="text-gray-600">Log in to your ViệtIT account</p>
		</div>

    {#if data?.user}
      <form action="?/logout" class="mt-8" method="post" use:enhance>
        <p class="mb-4">You are logged in</p>

        <div class="mb-4 pt-2">
          <button class="btn" type="submit">Logout</button>
        </div>
      </form>

    {:else}

      <form action="?/login" class="mt-8 {loading ? 'form-loading' : ''}" method="post"
        use:enhance={({ form, data, action, cancel }) => {

          loading = true

          return async ({ result, update }) => {
            await applyAction(result)
            loading = false
          };
        }}
      >
        <div class="mb-4">
          <label for="email" class="label required">Email</label>
          <div class="input-login mt-1">
            <input
              id="email"
              name="email"
              type="text"
              class="flex-grow min-w-0 px-4 py-2"
              placeholder="e.g. viet@doe.com"
            />
          </div>
        </div>

        <div class="mb-4">
          <label for="password" class="label required">Password</label>
          <div class="input-login mt-1">
            <input bind:this={input_pass} id="password" name="password" type="password" class="flex-grow min-w-0 px-4 py-2" />
            <div class="flex-none px-2">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <span 
                class="icon w-8 h-8 cursor-pointer p-1.5 text-gray-700 hover:text-orange-600"
                on:click={toggleShowPass}
              >
                {#if show}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path><path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"></path></svg>
                {:else}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.315c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM12.043 7H12a5 5 0 0 1 5 5 4.894 4.894 0 0 1-.852 2.734l-.721-.721A3.919 3.919 0 0 0 16 11.999c0-.474-.099-.925-.255-1.349A.985.985 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.965 3.965 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-.72-.72C10.053 7.326 10.982 7 12 7h-.043L12 6.998l.043.002zm-7.969 4.999c.103-.235.274-.586.521-.989l5.867 5.867c-4.213-.647-5.939-3.842-6.388-4.878zm9.247 4.908-7.48-7.48a8.146 8.146 0 0 1 1.188-.984l8.055 8.055a8.835 8.835 0 0 1-1.763.409z"></path></svg>
                {/if}
              </span>
            </div>
          </div>
        </div>

        {#if form?.error}
          <p class="mb-4 text-red-500 text-sm">* {form?.error}</p>
        {/if}

        {#if form?.success}
          <p  class="mb-4 text-green-500 text-sm">Successfully logged in! Welcome back</p>
        {/if}

        <div class="mb-4 pt-2">
          <button class="btn {loading ? 'btn-loading' : ''}" type="submit">Login</button>
        </div>

        <hr>

        <div class="mb-4 pt-4">
          <button 
            class="btn-2 bg-blue-700 hover:bg-blue-600 text-white"
          >
            <span class="btn-icon"><img src="/images/google.png" alt=""></span>
            <span class="btn-text">Login with Google</span>
          </button>
        </div>

        <div class="mb-4">
          <button class="btn-2 bg-sky-700 hover:bg-sky-600 text-white">
            <span class="btn-icon"><img src="/images/facebook.png" alt=""></span>
            <span class="btn-text">Login with Facebook</span>
          </button>
        </div>

        <div class="mb-4">
          <button 
            class="btn-2 bg-stone-800 hover:bg-stone-700 text-white"
            on:click|preventDefault={() => signIn('github')}
          >
            <span class="btn-icon"><img src="/images/github.png" alt=""></span>
            <span class="btn-text">Login with Github</span>
          </button>
        </div>
      </form>
    {/if}
	</div>
</div>

<style lang="postcss">
  .form-loading {
    @apply pointer-events-none;
  }
	.label {
		@apply text-sm;
	}
	.label.required {
		@apply after:content-['*'] after:text-red-600;
	}

	.input-login {
		@apply w-full flex items-center border border-gray-300 rounded ring-orange-600 overflow-hidden;
	}
	.input-login input {
		@apply placeholder:text-sm;
	}

	.input-login:focus-within {
		@apply ring-2;
	}

  .btn {
    @apply block w-full text-center px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-400;
  }
  .btn-2 {
    @apply w-full flex items-center px-4 py-2 rounded;
  }

  .btn-2 .btn-icon {
    @apply w-8 h-8 rounded bg-white p-1;
  }

  .btn-2 .btn-text {
    @apply flex-grow min-w-0 text-center font-semibold px-2;
  }

  .btn-loading {
    @apply relative overflow-hidden;
  }
  .btn-loading::after {
    @apply content-[''] absolute block w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white border-l border-l-transparent;
    animation: btn-loading 1s infinite linear;
  }
  .btn-loading::before {
    @apply content-[''] absolute block w-full h-full top-0 left-0 bg-inherit;
  }

  @keyframes -global-btn-loading {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>
