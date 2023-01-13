<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
  import logo from '$lib/images/svelte-logo.svg';
	import { clickOutside } from '$lib/utils/clickOutSide';
  import { page } from "$app/stores";
	import Diagram from '$lib/client/diagram.svelte';

  export let data
  console.log(data)
  
  let passage_index = 0
  let question_index = 0
  let passages = data.quizze.passages.map((v,i) => {
    let question_count = v.group_questions.reduce((a,c) => {
      return a + c.questions.length
    },0)

    return {
      title: v.title,
      content: v.content,
      question_count: question_count,
      group_question_index: 0,
      group_questions: v.group_questions.map((v2,i2) => {
        return {
          image: v2.image,
          options: v2.options,
          title: v2.title,
          type: v2.type,
          questions: v2.questions.map((v3,i3) => {
            return {
              ...v3,
              number : ++question_index,
              answer: ''
            }
          })
        }
      })
    }
  })

  const getPercent = (passages) => {
    let answer_count = passages.group_questions.reduce((a,c) => {
      return a + c.questions.filter(v => v.answer).length
    },0)

    let a = answer_count / passages.question_count * 100
    a = a < 0 ? 0 : ((a > 100) ? 100 : a)

    return 292.796 / 100 * a
  }
</script>

<div class="w-full h-screen flex flex-col">
  <div class="flex-none sticky w-full h-16 px-8 shadow-sm shadow-gray-200 bg-white">
    <div class="flex items-center space-x-6">
      <span class="icon w-8 h-8 p-1 bg-gray-200 rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </span>
  
      <div class="flex-none flex items-center space-x-1 py-3">
        <img src="{logo}" alt="" class="w-10 h-10 rounded">
        <div class="logo-title">
          <h1 class="text-lg font-semibold">Việt Hùng IT</h1>
          <h5 class="text-xs text-gray-500">Developer . Transporter</h5>
        </div>
      </div>
  
      <div class="!ml-auto">
        <div class="flex items-center space-x-1 text-red-600 rounded-lg border px-2 py-1">
          <span class="font-semibold">60 : 00</span>
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m20.145 8.27 1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 0 0-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"></path></svg>
          </span>
        </div>
      </div>
    </div>
  </div>
  
  <section class="flex-grow min-h-0" style="background: linear-gradient(to right, white 40%, rgb(243 244 246) 0%);">
    <div class="practice-container h-full">
      <div class="flex h-full -mx-4">
        <div class="w-5/12 content py-4 px-4 overflow-y-auto bg-white">
          {@html passages[passage_index].content}
        </div>
        <div class="w-7/12 py-4 px-4 overflow-y-auto">
          {#if passages}
            {@const group_question = passages[passage_index].group_questions[passages[passage_index].group_question_index]}
            <div class="rounded-xl bg-red-500 text-white px-4 py-3">
              <span class="text-xl font-semibold">Question {group_question.questions[0].number} - {group_question.questions.at(-1).number}</span>
              <span class="pl-4">{group_question.title}</span>
            </div>
            
            <div class="mt-4 rounded-xl px-4 py-3 bg-white">
              {#if group_question.type == 'diagram'}
                <Diagram bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]}/>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
  
  <section class="flex-none border-t border-gray-200 bg-white">
    <div class="practice-container">
      <div class="flex items-stretch space-x-4 py-2">
        <div class="flex space-x-2">
          <div class="w-8 bg-gray-200">
            <img src="https://suijm9clouobj.vcdn.cloud/PRIVATE/MEDIA/7606d599-4920-4860-8fb1-de3ee721bf85.png" alt="" class="w-full h-full object-cover">
          </div>
          <div class="w-36">
            <h5 class="font-semibold truncate">CAM16 - Reading Test 4</h5>
            <p class="text-sm text-gray-500">Roman tunnels</p>
          </div>
        </div>
  
        {#each passages as passage, index}
          {@const percent = getPercent(passage) }
          <button
            class="passage flex items-center space-x-2 {index == passage_index ? 'active' : ''}"
            on:click|preventDefault={() => passage_index = index}
          >
            <div class="relative w-11 h-11">
              <span class="icon w-full h-full">
                <svg class="ant-progress-circle" viewBox="0 0 100 100">
                  <path class="ant-progress-circle-trail" d="M 50,50 m 0,-46.6
                  a 46.6,46.6 0 1 1 0,93.2
                  a 46.6,46.6 0 1 1 0,-93.2" stroke="#E9E9EC" stroke-linecap="round" stroke-width="6.8" fill-opacity="0"
                     style="stroke: rgb(233, 233, 236); stroke-dasharray: 292.796px, 292.796px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s;">
                  </path>
                  <path class="ant-progress-circle-path" d="M 50,50 m 0,-46.6
                  a 46.6,46.6 0 1 1 0,93.2
                  a 46.6,46.6 0 1 1 0,-93.2" stroke="" stroke-linecap="round" stroke-width="6.8" opacity="{percent ? '1' : '0'}" fill-opacity="0"
                     style="stroke: currentColor; stroke-dasharray: {percent}px, 292.796px; stroke-dashoffset: 0px; transition-property: stroke-dashoffset, stroke-dasharray, stroke, stroke-width, opacity; transition-duration: 0.3s, 0.3s, 0.3s, 0.06s; transition-timing-function: ease, ease, ease, ease, ease; transition-delay: 0s, 0s, 0s, 0.3s, 0s;">
                  </path>
               </svg>
              </span>
              <span class="absolute w-full h-full top-0 left-0 grid place-items-center text-xs">
                0 / 13
              </span>
            </div>
            <div class="mb-1">
              <h5 class="text-sm font-semibold truncate uppercase">passage {index}</h5>
              <p class="text-xs">{passage.question_count} questions</p>
            </div>
          </button>
        {/each}
  
        <div class="!ml-auto">
          <button class="flex items-center px-4 py-2 rounded-lg border-2 font-semibold hover:border-red-600 hover:text-red-600">
            <span>Question 7 - 10</span>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <section class="flex-none bg-gray-50">
    <div class="practice-container py-2">
      <div class="flex space-x-8">
        {#each passages[passage_index].group_questions as group_question, index}
          <div class="text-xs">
            <p class="text-gray-500">{group_question.title}</p>
            <div class="flex space-x-2">
              {#each group_question.questions as question}
                <button 
                  class="w-6 h-6 rounded-full border bg-gray-200 grid place-items-center 
                  {question.answer ? 'border-blue-600 bg-blue-200' : ''}"
                  on:click|preventDefault={() => passages[passage_index].group_question_index = index}
                >
                  {question.number}
                </button>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .practice-container {
    @apply w-full max-w-[1680px] mx-auto px-4;
  }

  .passage {
    @apply text-gray-500 select-none cursor-pointer;
  }
  .passage.active {
    @apply text-red-600;
  }

  :global(.content h3) {
    @apply text-2xl mb-4;
  }

  :global(.content p) {
    @apply mb-4;
  }
</style>