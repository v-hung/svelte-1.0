<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { goto } from "$app/navigation";
  import { page } from "$app/stores"
	import { redirect } from "@sveltejs/kit";

  console.log($page.data?.user)
</script>

<p>{$page.data.user?.name}</p>
<img src="{$page.data.user?.image}" alt="">
<form action="/auth/login?/logout" method="post"
  use:enhance={({ form, data, action, cancel }) => {
    return async ({ result, update }) => {
      await applyAction(result)
      goto('/')
    };
  }}
>
  <button type="submit">Logout</button>
</form>