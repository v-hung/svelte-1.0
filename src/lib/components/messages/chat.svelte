<script lang="ts">
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import { io } from '$lib/socket-io';
	import { onDestroy, onMount } from "svelte";
	import { afterUpdate, dataset_dev } from "svelte/internal";
	import Messages from "../messages.svelte";
	import ListMessage from "./list_message.svelte";

  export let room
  let info = room?.users.find(v => v.id != $page.data?.user?.id)

  let textHolder = ""

  let observer: IntersectionObserver | null = null
  let loadingMessage = false

  if (browser) {
    observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let elem = entry.target;
  
          if (entry.intersectionRatio >= 0.75) {
            fetchMessage()
          }
        }
      });
    });
  }

  const fetchMessage = async () => {
    try {
      if (loadingMessage) return
      loadingMessage = true
      const res = await fetch('/api/v1/messages/' + room?.id)
      const body = await res.json()

      room.messages = [...body.messages, ...room.messages]
      if (body.messages.length < body.perPage) {
        room.page = null
      }
      else {
        room.page++
      }

    } 
    catch(e) {
      console.log(e)
    }
    finally {
      loadingMessage = false
    }
  }

  const sendMessage = () => {
    io.emit("message", {
      roomId:  room.id,
      userId: $page.data.user.id,
      body: textHolder
    })  

    textHolder = ""
  }

  let messagesLoadMore: HTMLElement | null = null;

  onMount(() => {
    if (observer && messagesLoadMore)
      observer.observe(messagesLoadMore)
  })

  onDestroy(() => {
    if (observer)
      observer.disconnect()
  })
</script>

{#if room.show}
  <div class="flex-none flex flex-col bg-white shadow rounded w-80 max-h-96 h-full text-sm pointer-events-auto">
    <div class="flex-none flex items-center justify-between space-x-2 px-2 shadow">
      <div class="flex-none py-2">
        <img src="{info?.image}" alt=" " class="w-9 h-9 rounded-full object-cover border" loading="lazy">
      </div>
      <div class="flex-grow">{room?.name || info?.name}</div>
      <button on:click|preventDefault={() => room.show = false}><span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </span></button>
    </div>

    <ListMessage messages={room.messages} pageChat={room.page} users={room.users} bind:messagesLoadMore={messagesLoadMore} />

    <form 
      class="flex-none flex space-x-2 items-center px-2 py-2 text-gray-500"
      on:submit|preventDefault={sendMessage}
    >
      <span class="flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
      </span>

      <div class="flex-none flex space-x-2 items-center w-[88px] transition-all overflow-hidden {textHolder != "" ? "!w-0 !-ml-2" : ""}">
        <span class="flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path><path d="m12 12-1-1-2 3h10l-4-6z"></path></svg>
        </span>
        <span class="flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9zm7 16.5c0 .827-.673 1.5-1.5 1.5-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7v7.5z"></path><circle cx="9" cy="10" r="2"></circle><circle cx="15" cy="10" r="2"></circle></svg>
        </span>
        <span class="flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z"></path></svg>
        </span>
      </div>

      <div class="flex-grow min-w-0 flex items-center rounded-full bg-gray-100 pl-3 py-1">
        <input type="text" placeholder="Aa" bind:value={textHolder} class="flex-grow min-w-0 text-$primary">
        <span class="flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M14.829 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.042 6.042 0 0 0 2.415 0 5.972 5.972 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4.017 4.017 0 0 1-.489.592z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle></svg>
        </span>
      </div>

      {#if textHolder != ""}
        <button type="submit" class="flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg class="xsrhx6k" height="20px" viewBox="0 0 24 24" width="20px"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path></svg>
        </button>
      {:else}
        <span class="flex-none icon w-6 h-6 p-0.5 rounded-full hover:bg-gray-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path></svg>
        </span>
      {/if}
    </form>
  </div>
{/if}