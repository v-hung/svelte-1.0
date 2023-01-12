<script lang="ts">
  import { page } from '$app/stores';
	import Container from '$lib/components/container.svelte';
</script>

<Container class="py-12">
  <h3 class="text-5xl text-center text-red-500 font-bold">IELTS Online Test</h3>

  <p class="max-w-md mx-auto mt-6 text-lg text-center text-primary">
    Practice IELTS Practice Tests for free at tuhocielts.dolenglish.vn created by DOL IELTS Dinh Luc. DOL provides IELTS mock tests, answers, detailed explanations, and vocabulary for all IELTS online tests. 
  </p>

  <div class="mt-24">
    <div class="flex items-center space-x-2">
      <span class="icon w-8 h-8 text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" color="purple100" data-testid="SvgComponent" class="IconArrowsTrending-sc-33d2yu-0 rtTpi"><path fill="currentColor" fill-rule="evenodd" d="M1.414 16.432L0 15.018l7.071-7.071 6.364 6.364 4.243-4.243-1.743-1.742 6.692-1.793-1.793 6.692-1.742-1.742-5.657 5.656-6.364-6.364-5.657 5.657z" clip-rule="evenodd"></path></svg>
      </span>
      <span class="text-3xl font-bold text-primary">Recent work</span>
    </div>
  </div>

  <div class="mt-7">
    <div class="flex -mx-4">
      <div class="w-1/2 px-4 mb-8">
        <h3 class="text-xl font-bold">CAM16 - Reading Test 4</h3>
        <p class="mt-2 mb-3 text-gray-500">12K Lượt Làm</p>
        <a href="/practice/cam16" class="cam-btn">
          <span class="icon text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m9 17 8-5-8-5z"></path></svg>
          </span>
          <span>Làm bài</span>
        </a>
      </div>
    </div>
  </div>
</Container>

<div class="h-screen"></div>

<style lang="postcss">
  .cam-btn {
    @apply inline-flex space-x-2 items-center p-3 rounded-lg border hover:border-red-600;
  }
</style>