<script lang="ts">
	import { page } from "$app/stores";
	import { afterUpdate } from "svelte";

  export let messages
  export let users
  export let pageChat
  export let messagesLoadMore

  const groupMessage = (messages) => {
    let unique = [];
    // Loop through messages
    if (messages.length <= 0) return []

    let senderID = messages[0].senderID
    unique.unshift({
      isMe: messages[0].senderID == $page.data.user.id,
      userId: messages[0].senderID,
      messages: []
    })

    messages.forEach((message) => {
      if (message.senderID != senderID) {
        unique.unshift({
          isMe: message.senderID == $page.data.user.id,
          userId: message.senderID,
          messages: []
        })
        senderID = message.senderID
      }

      unique[0].messages.unshift(message)
    });

    return unique
  }

  $: filterMessage = groupMessage(messages)
  
  let listMessage: HTMLElement | null = null;

  afterUpdate(() => {
		if(filterMessage) scrollToBottom(listMessage);
  });

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  }; 

  const getInfoUser = (userId) => {
    return users.find(v => v.id == userId) || null
  }
</script>

<div bind:this={listMessage} class="flex-grow min-h-0 basis-0 overflow-y-auto">
  <div class="flex flex-col justify-end text-[#333]">
    {#if pageChat}
      <div bind:this={messagesLoadMore} class="sr-only"></div>
    {/if}
    {#each filterMessage as group}
      <div class="flex w-full space-x-2 items-end {group.isMe ? 'message-is-me' : ''} px-2 py-2">
        <div class="flex-none sticky bottom-0">
          <img src="{getInfoUser(group.userId).image}" alt=" " class="message-img w-8 h-8 rounded-full border object-cover" loading="lazy">
        </div>
        <div class="flex-grow min-w-0 flex flex-col items-start space-y-1 max-w-[60%]">
          {#each group.messages as message, index}
            <div class="bg-gray-200 px-2.5 py-1.5 rounded rounded-r-full message-text
              {index == 0 ? 'message-first' : ''} {index == (group.messages.length - 1) ? 'message-last' : ''}"
            >{message.body}</div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .message-is-me {
    @apply justify-end;
  }

  .message-is-me > *:first-child {
    @apply order-last ml-2;
  }
  .message-is-me .message-img {
    @apply w-4 h-4;
  }

  .message-is-me > *:last-child {
    @apply text-end !items-end;
  }

  .message-is-me .message-text {
    @apply !rounded-r !rounded-l-full;
  }

  /* chat text */
  .message-first {
    @apply rounded-tl-full;
  }
  .message-last {
    @apply rounded-bl-full;
  }

  .message-is-me .message-first {
    @apply !rounded-tr-full;
  }
  .message-is-me .message-last {
    @apply !rounded-br-full;
  }
</style>