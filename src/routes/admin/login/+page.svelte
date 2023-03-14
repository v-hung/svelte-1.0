<script lang="ts">
	import AuthFormLogin from "./_auth_form_login.svelte";


  // PUBLIC_BASE_URL="http://localhost:5173"
  // DATABASE_URL="mysql://root:Admin123!@viethung.fun:3306/sveltekit-1.0"

</script>

<div class="w-full h-[1px] min-h-screen flex items-stretch">
  <div class="w-full flex min-h-full h-max">
    <div class="flex w-full items-stretch text-gray-600 overflow-x-hidden">
      <div class="flex w-5/12 items-center justify-center bg-gray-50 px-8 py-8">
        <img src="/images/bg-auth.png" alt="auth login" class="w-full" />
      </div>
    
      <div class="w-7/12 px-20 py-8 bg-white">
        <div class="flex h-full w-full flex-col justify-between space-y-8">
          <div class="my-auto">
            <h3 class="text-2xl uppercase">LOGIN</h3>
            <h5 class="mt-4 text-4xl font-semibold text-gray-800">Welcome Back</h5>
            <p class="mt-4">Please enter your account details</p>
        
            <AuthFormLogin />
        
            <p class="!mt-12 text-gray-500">This site is protected by reCaptcha v3 and the Google</p>
            <p class="!mt-2 text-gray-500">
              <a href="/" class="underline">Privacy Policy</a>
              <span> and </span>
              <a href="/" class="underline">Teams of Use</a>
            </p>
          </div>
        
          <div class="flex items-center space-x-8">
            <a href="/" class="hover:underline">Teams Of Use</a>
            <a href="/" class="hover:underline">Privacy Policy</a>
            <a href="/" class="hover:underline">Cookie Policy</a>
            <a href="/" class="hover:underline">Status Page</a>
            <a href="/" class="hover:underline">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>