<script lang="ts">
  import { onMount } from 'svelte';
	import { io } from '$lib/socket-io';
	import { page } from '$app/stores';
	import { json } from '@sveltejs/kit';
  import { fly } from "svelte/transition";
	import Chat from './messages/chat.svelte';

  let isShowRooms = false
  let tabShowRoom: 1 | 2 = 1

  let contacts = []
  let rooms = []

  let listShowRoom = []

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/v1/users')
      const body = await res.json()

      return body.users.filter(v => v.id != $page.data.user.id)
    }
    catch(e) {
      return []
    }
  }

  const fetchRooms = async () => {
    try {
      const res = await fetch('/api/v1/rooms')
      const body = await res.json()

      return body.rooms
    }
    catch(e) {
      return []
    }
  }

  const createRoom = async (userId) => {
    let roomIndex = rooms.findIndex(room => {
      // console.log(room, room?.users.findIndex(v => v.id == userId))
      return room?.users.findIndex(v => v.id == userId) >= 0 ? true : false
    })

    let room = null
    if (roomIndex < 0) {
      try {
        const res = await fetch('/api/v1/rooms', {
          method: 'post',
          body: JSON.stringify({
            contactId: userId
          })
        })
        const body = await res.json()

        room = body.room
      } 
      catch(e) {
        console.log(e)
      }
    }
    else {
      room = rooms[roomIndex]
    }
    
    if (room) {
      let roomIndex2 = listShowRoom.findIndex(v => v.id == room.id)

      if (roomIndex2 < 0) {
        listShowRoom = [...listShowRoom, {
          ...room, 
          show: true,
          messages: [],
          page: 1
        }]
      }
      else {
        listShowRoom[roomIndex2].show = true
      }

      tabShowRoom = 2
      isShowRooms = false
    }
  }

  const showRoom = (roomId) => {
    let room = rooms.find(v => v.id == roomId)
    let roomIndex2 = listShowRoom.findIndex(v => v.id == roomId)

    if (roomIndex2 < 0) {
      listShowRoom = [...listShowRoom, {
        ...room, 
        show: true,
        messages: [],
        page: 1
      }]
    }
    else {
      listShowRoom[roomIndex2].show = true
    }

    tabShowRoom = 2
    isShowRooms = false
  }

  onMount(async () => {
    io.on("message", data => {
      let findIndex = listShowRoom.findIndex(v => v.id == data.message.roomId)

      if (findIndex >= 0) {
        listShowRoom[findIndex].messages = [data.message, ...listShowRoom[findIndex].messages]
      }
    })

    if ($page.data?.user) {
      io.emit("join", $page.data?.user?.id)
    }

    [contacts, rooms] = await Promise.all([
      await fetchContacts(),
      await fetchRooms()
    ])
  })
</script>

<div class="fixed right-0 bottom-0 left-0 top-0 p-4 pointer-events-none">
  <div class="flex w-full h-full items-end justify-end space-x-4">
    {#if isShowRooms}
      <div class="flex-none flex flex-col bg-white shadow rounded py-4 min-w-[250px] max-h-96 h-full text-sm pointer-events-auto">
        <div class="flex-none flex justify-between space-x-4 px-4">
          <h5>New message</h5>
          <button on:click|preventDefault={() => isShowRooms = false}><span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
          </span></button>
        </div>
        <div class="flex-none flex justify-between space-x-4 p-4 border-b">
          <span class="flex-none">Send: </span>
          <input type="text" class="border-none flex-grow min-w-0">
        </div>

        <div class="flex-none flex shadow">
          <button 
            on:click|preventDefault={() => tabShowRoom = 1} 
            class="w-1/2 text-center py-4 border-b-4 border-transparent {tabShowRoom == 1 ? "border-blue-500 text-blue-500" : ""}"
          >Contacts</button>
          <button 
            on:click|preventDefault={() => tabShowRoom = 2} 
            class="w-1/2 text-center py-4 border-b-4 border-transparent {tabShowRoom == 2 ? "border-blue-500 text-blue-500" : ""}"
          >Rooms</button>
        </div>

        <div class="flex-grow">
          {#if tabShowRoom == 1}
            <div class="flex flex-col">
              {#each contacts as contact}
                <button 
                  class="flex text-left space-x-2 py-2 px-4 hover:bg-blue-100"
                  on:click|preventDefault={() => createRoom(contact.id)}
                >
                  <div class="flex-none">
                    <img src="{contact?.image}" alt="" class="w-10 h-10 rounded-full object-cover" loading="lazy">
                  </div>
                  <div class="flex-grow flex flex-col">
                    <h3 class=" truncate">{contact?.name}</h3>
                    <span class="text-gray-500 text-xs truncate">last seen in 12 minutes ago</span>
                  </div>
                </button>
              {/each}
            </div>
          {:else if tabShowRoom == 2}
            <div class="flex flex-col">
              {#each rooms as room}
                {@const info = room?.users.find(v => v.id != $page.data?.user?.id)}
                <button 
                  class="flex text-left space-x-2 py-2 px-4 hover:bg-blue-100"
                  on:click|preventDefault={() => showRoom(room.id)}
                >
                  <div class="flex-none">
                    <img src="{room?.image || info?.image}" alt="" class="w-10 h-10 rounded-full object-cover" loading="lazy">
                  </div>
                  <div class="flex-grow flex flex-col">
                    <h3 class=" truncate">{room?.name || info?.name}</h3>
                    <span class="text-gray-500 text-xs truncate">last seen in 12 minutes ago</span>
                  </div>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/if}

    {#each listShowRoom as room}
      <Chat room={room} />
    {/each}

    <div class="flex-none flex flex-col space-y-4 pointer-events-auto">
      {#each listShowRoom as room}
        {@const info = room?.users.find(v => v.id != $page.data?.user?.id)}

        <button 
          class="w-12 h-12 rounded-full bg-white shadow overflow-hidden"
          on:click|preventDefault={() => room.show = true}
        >
          <img src="{room?.image || info?.image}" alt=" " class="w-full h-full object-cover" loading="lazy">
        </button>
      {/each}

      <button
        class="rounded-full"
        on:click|preventDefault={() => isShowRooms = true}
      >
        <span class="icon w-12 h-12 rounded-full bg-white shadow p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path></svg>
        </span>
      </button>
    </div>
  </div>
</div>