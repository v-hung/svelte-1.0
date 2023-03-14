<script lang="ts" setup>
	import { applyAction, enhance } from "$app/forms";
	import { alertStore } from "../../../stores/alert";

  let loading = false
</script>

<form
  class="mt-10 flex max-w-xl flex-col space-y-6"
  method="post"
  action="?/login"
  use:enhance={({ form, data, action, cancel }) => {
    loading = true

    return async ({ result, update }) => {
      loading = false

      if (result.type == "failure") {
        alertStore.addAlert({
          type: "warning",
          title: result.data.error
        })
      }
      else if (result.type == "redirect") {
        alertStore.addAlert({
          type: "success",
          title: "Đăng nhập thành công",
        })
      }
      await applyAction(result)
    };
  }}
>
  <div class="flex flex-row-reverse rounded-md border border-gray-200 bg-gray-100 px-4 py-2.5 focus-within:border-blue-500 focus-within:bg-white">
    <input id="email" name="email" type="text" class="bg-0 peer min-w-0 flex-grow focus:text-gray-800" placeholder="Email"/>
    <label for="email" class="icon mr-3 w-6 flex-none text-gray-400 peer-focus:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"
        />
      </svg>
    </label>
  </div>

  <div class="flex flex-row-reverse rounded-md border border-gray-200 bg-gray-100 px-4 py-2.5 focus-within:border-blue-500 focus-within:bg-white">
    <input id="password"type="password" name="password" class="bg-0 peer min-w-0 flex-grow focus:text-gray-800" placeholder="Password"/>
    <label for="password" class="icon mr-3 w-6 flex-none text-gray-400 peer-focus:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M3.433 17.325 3.079 19.8a1 1 0 0 0 1.131 1.131l2.475-.354C7.06 20.524 8 18 8 18s.472.405.665.466c.412.13.813-.274.948-.684L10 16.01s.577.292.786.335c.266.055.524-.109.707-.293a.988.988 0 0 0 .241-.391L12 14.01s.675.187.906.214c.263.03.519-.104.707-.293l1.138-1.137a5.502 5.502 0 0 0 5.581-1.338 5.507 5.507 0 0 0 0-7.778 5.507 5.507 0 0 0-7.778 0 5.5 5.5 0 0 0-1.338 5.581l-7.501 7.5a.994.994 0 0 0-.282.566zM18.504 5.506a2.919 2.919 0 0 1 0 4.122l-4.122-4.122a2.919 2.919 0 0 1 4.122 0z"
        />
      </svg>
    </label>
  </div>

  <button class="rounded-md bg-indigo-500 px-4 py-2.5 text-white hover:bg-indigo-400 relative overflow-hidden">
    <span>Continue</span>
    {#if loading}
      <div class="absolute w-full h-full top-0 left-0 grid place-items-center bg-indigo-400">
        <span class="icon animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
        </span>
      </div>
    {/if}
  </button>
</form>