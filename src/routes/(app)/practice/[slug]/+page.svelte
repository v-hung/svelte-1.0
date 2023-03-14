<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
  import logo from '$lib/images/svelte-logo.svg';
	import { clickOutside } from '$lib/utils/clickOutSide';
  import { page } from "$app/stores";
	import Diagram from '$lib/components/web/questions/diagram.svelte';
	import TruFalse from '$lib/components/web/questions/tru_false.svelte';
	import Short from '$lib/components/web/questions/short.svelte';
	import Single from '$lib/components/web/questions/single.svelte';
	import Summary from '$lib/components/web/questions/summary.svelte';
	import YesNo from '$lib/components/web/questions/yes-no.svelte';
	import Matching from '$lib/components/web/questions/matching.svelte';
	import { slide } from 'svelte/transition';

  export let data
  // console.log(data)

  let all_qeustion_info = true
  
  let passage_index = 0
  let question_index = 0
  let passages = data.quiz.passages.map((v,i) => {
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

  const getPercent = (passage) => {
    let answer_count = passage.group_questions.reduce((a,c) => {
      return a + c.questions.filter(v => v.answer).length
    },0)

    let a = answer_count / passage.question_count * 100
    a = a < 0 ? 0 : ((a > 100) ? 100 : a)

    return 292.796 / 100 * a
  }

  let group_question_prev = null,
      group_question_next = null
  
  const watchGroupQuestion = (passages, passage_index) => {
    if (passage_index == 0 ) {
      if (passages[passage_index].group_question_index != 0)
        group_question_prev = passages[passage_index].group_questions[passages[passage_index].group_question_index - 1]
      else 
        group_question_prev = null
    } else {
      if (passages[passage_index].group_question_index != 0) {
        group_question_prev = passages[passage_index].group_questions[passages[passage_index].group_question_index - 1]
      }
      else {
        group_question_prev = passages[passage_index - 1].group_questions.at(-1)
      }
    }

    if (passage_index == passages.length - 1 ) {
      if (passages[passage_index].group_question_index != passages[passage_index].group_questions.length - 1)
        group_question_next = passages[passage_index].group_questions[passages[passage_index].group_question_index + 1]
      else 
        group_question_next = null
    } else {
      if (passages[passage_index].group_question_index != passages[passage_index].group_questions.length - 1) {
        group_question_next = passages[passage_index].group_questions[passages[passage_index].group_question_index + 1]
      }
      else {
        group_question_next = passages[passage_index + 1].group_questions[0]
      }
    }
  }

  $: watchGroupQuestion(passages, passage_index)

  const changeGroupQuestion = (type: 'next' | 'prev') => {
    if (type == 'prev') {
      if (passages[passage_index].group_question_index != 0) {
        passages[passage_index].group_question_index -= 1
      }
      else {
        passage_index -= 1
        passages[passage_index].group_question_index = (passages[passage_index].group_questions.length - 1)
      }
    }
    else if (type == "next") {
      if (passages[passage_index].group_question_index != passages[passage_index].group_questions.length - 1) {
        passages[passage_index].group_question_index += 1
      }
      else {
        passage_index += 1
        passages[passage_index].group_question_index = 0
      }
    }
  }

  let check_submit = false
  let unanswered_question = 0

  const submit = () => {
    let answer_count = 0,
        question_count = 0

    passages.forEach(v => {
      v.group_questions.forEach(v2 => {
        question_count += v2.questions.length
        answer_count += v2.questions.filter(v => v.answer).length
      })
    })

    unanswered_question = question_count - answer_count
    if (unanswered_question) {
      check_submit = true
    }
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
            
            <div class="mt-4 group-question-wrapper">
              {#if group_question.type == 'diagram'}
                <Diagram bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]}/>
              {:else if group_question.type == 'true-false'}
                <TruFalse bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]} />
              {:else if group_question.type == 'short'}
                <Short bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]} />
              {:else if group_question.type == 'single'}
                <Single bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]} />
              {:else if group_question.type == 'summary'}
                <Summary bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]} />
              {:else if group_question.type == 'yes-no'}
                <YesNo bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]} />
              {:else if group_question.type == 'matching'}
                <Matching bind:group_question={passages[passage_index].group_questions[passages[passage_index].group_question_index]} />
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
            <h5 class="font-semibold truncate">{data.quiz.title}</h5>
            <p class="text-sm text-gray-500">Roman tunnels</p>
          </div>
        </div>
  
        {#each passages as passage, index}
          {@const percent = getPercent(passage) }
          {@const answer_count = passage.group_questions.reduce((a,c) => {
            return a + c.questions.filter(v => v.answer).length
          },0)}
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
                {answer_count}/{passage.question_count}
              </span>
            </div>
            <div class="mb-1">
              <h5 class="text-sm font-semibold truncate uppercase">passage {index}</h5>
              <p class="text-xs">{passage.question_count} questions</p>
            </div>
          </button>
        {/each}
  
        <div class="!ml-auto flex items-center space-x-4">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span 
            class="icon w-10 h-10 border-2 border-gray-300 p-2 rounded-full hover:bg-gray-300 cursor-pointer"
            on:click={() => all_qeustion_info = !all_qeustion_info}
          >
            <svg class="transition-transform {all_qeustion_info ? 'rotate-180' : ''}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
          </span>

          <!-- {#if passages[passage_index].group_questions[passages[passage_index].group_question_index]}
            
          {/if} -->

          {#if group_question_prev}
            <button 
              class="flex items-center px-4 py-2 rounded-lg border-2 font-semibold hover:border-red-600 hover:text-red-600"
              on:click|preventDefault={() => changeGroupQuestion("prev")}
            >
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
              </span>
              <span>Question {group_question_prev.questions[0].number} - {group_question_prev.questions.at(-1).number}</span>
            </button>
          {/if}

          {#if group_question_next}
            <button 
              class="flex items-center px-4 py-2 rounded-lg border-2 font-semibold hover:border-red-600 hover:text-red-600"
              on:click|preventDefault={() => changeGroupQuestion("next")}
            >
              <span>Question {group_question_next.questions[0].number} - {group_question_next.questions.at(-1).number}</span>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
              </span>
            </button>
          {:else}
            <button 
              class="flex items-center px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-400"
              on:click|preventDefault={submit}
            >
              <span>Submit</span>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
              </span>
            </button>
          {/if}
        </div>
      </div>
    </div>
  </section>
  
  {#if all_qeustion_info}
    <section 
      class="flex-none bg-gray-50"
      transition:slide
    >
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
  {/if}
</div>

{#if check_submit}
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-black/70">
    <div class="w-full max-w-lg mx-auto rounded-xl bg-white p-6 text-$primary">
      <div class="flex items-center space-x-4">
        <span class="icon w-10 h-10 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
        </span>
        <span class="font-semibold text-xl">Missing sentence</span>
      </div>

      <div class="mt-6 font-medium">
        You are still missing {unanswered_question} unfinished questions
      </div>

      <form action="?/submit" class="mt-6 flex space-x-4 justify-end" method="post"
        use:enhance={({ form, data, action, cancel }) => {

          return async ({ result, update }) => {
            // await applyAction(result)
            // browser.history.deleteAll()
            goto('/static/test/jktkrn43fadf', { replaceState: true });
            // document.location.replace("/static/test/jktkrn43fadf")
            // await invalidateAll()
          };
        }}
      >
        <button 
          class="px-4 py-2 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200"
          on:click|preventDefault={() => check_submit = false}
        >Review</button>

        <button type="submit" class="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-400">Submit regardless</button>
      </form>
    </div>
  </div>
{/if}

<style>
  .practice-container {
    @apply w-full max-w-[1680px] mx-auto px-4;
  }

  .group-question-wrapper :global(.question) {
    @apply flex items-center space-x-2 text-sky-600 font-semibold;
  }

  .group-question-wrapper :global(.question .input) {
    margin-left: .75rem;
    @apply min-w-[3.5rem] border-b-2 font-normal text-[#333] whitespace-nowrap;
  }

  .group-question-wrapper :global(.question .input:focus) {
    @apply outline-none border-sky-600;
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
