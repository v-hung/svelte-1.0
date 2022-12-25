<script lang="ts">
  import { signOut } from "@auth/sveltekit/client"
  import { page } from "$app/stores"

  console.log($page.data.session?.user)
</script>

<p>{$page.data.session?.user?.name}</p>
<p>{$page.data.session?.user?.email}</p>
<p>Session expiry: {$page.data.session?.expires}</p>
<button on:click={() => signOut()}>Logout</button>