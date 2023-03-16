<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
	import { browser } from "$app/environment";
	import { clickOutside } from "$lib/utils/clickOutSide";
	import type { Images } from "@prisma/client";
	import { prevent_default } from "svelte/internal";

  export let label = 'image'
  export let multipleImage = false
  export let data: any | null = null
  export let name = ""

  console.log(data)

  let showModal = false
  let view : "assets" | "upload" | "storage" | "selected" = "storage"
  let modalTab: "computer" | "url" = 'computer'

  const toggleModal = (value) => {
    if (view == "upload") {
      view = "assets"
      return
    }
    showModal = value ? value : !showModal
    document.body.style.overflow = showModal ? 'hidden' : null
  }

  // upload files

  let files     : FileList | null
  let imgFiles : {
    name: string,
    type: string,
    preview: string,
    file: File
  }[] = []

  $: changeFiles(files)

  const changeFiles = (files: FileList) => {
    if (files)
      Array.from(files || []).map((v,i) => {
        imgFiles =  [...imgFiles, {
          name: v.name,
          type: v.type,
          preview: URL.createObjectURL(v),
          file: v
        }]
      })

    if (imgFiles.length > 0) {
      view = "upload"
    }
  }

  const removeFileChange = (index) => {
    URL.revokeObjectURL(imgFiles[index].preview)
    imgFiles = imgFiles.filter((v,i) => i != index)
  }

  let uploadLoading = false

  const uploadFiles = async () => {
    uploadLoading = true

    var data: any = new FormData()
    imgFiles.map(v => {
      data.append('images[]', v.file)
    })

    await fetch('/storage', {
      method: 'post',
      body: data
    })
    .then(async res => {
      let body = await res.json()
      // storageFiles = [...storageFiles, ...body]
    })
    .catch(e => console.log(e))

    uploadLoading = false
    view = "storage"
    imgFiles = []
  }

  // view storage file

  let loadFilesLoading = false
  let storageFiles: Images[] = []

  const loadFiles = async () => {
    if (!browser) return
    loadFilesLoading = true

    await fetch('/storage')
    .then(async res => {
      storageFiles = await res.json()
    })
    .catch(e => console.log(e))

    loadFilesLoading = false
  }

  // loadFiles()

  $: if (view == "storage") {
    loadFiles()
  }

  let fileChoose = []
  let fileUrl = ""

  const chooseFile = (e, item) => {
    let checked = e.target.checked
    if (multipleImage) {
      fileChoose = checked 
        ? [...fileChoose, item]
        : fileChoose.filter(v => v != item)
    }
    else {
      fileChoose[0] = checked ? item : []
    }
  }

  const findChecked = (item) => fileChoose.findIndex(v => v == item) >= 0

  const finish = (type: "url" | "upload") => {
    if (multipleImage) {
      // data = storageFiles.find(v => fileChoose[0])
    }
    else {
      data = storageFiles.find(v => v.url == fileChoose[0])
      // console.log(data)
    }

    toggleModal(false)
  }

  // selected files
</script>

<div>
  <p class="text-xs font-semibold text-$primary mb-1.5 capitalize">
    {label} <span class="text-red-600">*</span>
    <span class="icon inline-block w-3 h-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>
    </span>
  </p>
  <div class="h-36 border rounded focus-within:ring-2 ring-orange-600 bg-white">
    <input type="hidden" name={name} value={multipleImage ? data.map(v => v.id) : data ? data.id : null} class="sr-only">
    <div 
      class="w-full h-full flex flex-col justify-center items-center cursor-pointer"
      on:click|preventDefault={toggleModal}
    >
      {#if typeof data == 'object'}
        <div class="w-full h-full p-2 bg-make-transparent">
          <img src="{data?.url}" alt="" class="w-full h-full object-contain">
        </div>
      {:else if Array.isArray(data)}
        <div class="w-full h-full p-2 bg-make-transparent">
          <!-- <img src="{data?.url}" alt="" class="w-full h-full object-contain"> -->
        </div>
      {:else}
        <span class="icon w-10 h-10 text-orange-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path><path d="m8 11-3 4h11l-4-6-3 4z"></path><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>
        </span>
        <span class="mt-2 text-xs font-semibold">Click to add an asset or drag and drop one in this area</span>
      {/if}
    </div>
  </div>
</div>

{#if showModal}
  <div class="fixed w-full h-full top-0 left-0 flex flex-col bg-black/10 z-50 overflow-auto">
    <div class="flex-grow"></div>
    <div
      class="flex-none min-h-0 w-full max-w-3xl mx-auto bg-white rounded border shadow-md" 
      use:clickOutside 
      on:clickOutside={() => toggleModal(false)}
    >
      <div class="flex items-center justify-between w-full px-6 py-4 bg-gray-100">
        <span class="font-semibold text-$primary">Add new assets</span>
        <button 
          class="btn-icon pr-2" 
          on:click|preventDefault={() => toggleModal(false)}
        >
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
          </span>
        </button>
      </div>
      <div class="px-8 py-6 border-y">
        {#if view == "storage"}
          <div class="flex items-center border-b">
            <button class="p-4 uppercase text-xs font-semibold text-orange-600 border-b border-orange-600"
              on:click|preventDefault={() => {}}
            >
              Browse
              <span class="px-1 py-0.5 bg-gray-100 text-$primary rounded">{storageFiles.length}</span>
            </button>

            <button class="p-4 uppercase text-xs font-semibold border-b"
            on:click|preventDefault={() => view = "selected"}
            >
              Selected files
              <span class="px-1 py-0.5 bg-gray-100 text-$primary rounded">{fileChoose.length}</span>
            </button>

            <button class="ml-auto btn btn-orange"
              on:click|preventDefault={() => view = "assets"}
            >Add more assets</button>
          </div>

          <div class="mt-4">
            <div class="relative">
              <div class="mt-8">
                <div class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));">
                  {#each storageFiles as item, index}
                    <div class="rounded border overflow-hidden">
                      <div class="relative w-full h-24 bg-make-transparent">
                        <img src="{item.url}" alt="" class="w-full h-full object-contain">
                        <div class="absolute top-2 left-2">
                          <input type="checkbox" name="fileChoose" 
                            on:click={(e) => chooseFile(e,item.url)} 
                            bind:group={fileChoose}
                            value={item.url}
                          >
                        </div>
                      </div>
                      <div class="p-4 py-2 flex justify-between space-x-2 items-start border-t">
                        <div class="text-xs">
                          <p class="font-semibold text-$primary">{item.name}</p>
                          <!-- <p class="uppercase">{item.type}</p> -->
                        </div>
                        <div class="text-[10px] p-1 py-0.5 font-semibold rounded bg-gray-100">IMAGE</div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
  
              {#if loadFilesLoading}
                <div class="absolute w-full h-full top-0 left-0 bg-black/5 grid place-items-center">
                  <span class="icon animate-spin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
                  </span>
                </div>
              {/if}
            </div>
          </div>
        {:else if view == "assets"}
          <div class="flex border-b">
            <button class="p-4 uppercase text-xs font-semibold"
              on:click|preventDefault={() => view = 'storage'}
            >Browse</button>
            <button class="p-4 uppercase text-xs font-semibold {modalTab == "computer" ? 'text-orange-600 border-b border-orange-600': ''}"
              on:click|preventDefault={() => modalTab = 'computer'}
            >From computer</button>
            <button class="p-4 uppercase text-xs font-semibold {modalTab == "url" ? 'text-orange-600 border-b border-orange-600': ''}"
              on:click|preventDefault={() => modalTab = 'url'}
            >From url</button>
          </div>

          <div class="mt-4">
            {#if modalTab == 'computer'}
              <div class="flex flex-col items-center justify-center w-full border border-dashed py-12 rounded bg-orange-50">
                <span class="icon w-20 h-20 text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path><path d="m8 11-3 4h11l-4-6-3 4z"></path><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>
                </span>
                <span class="mt-4 font-semibold">Click to add an asset or drag and drop one in this area</span>
                <label for="imageFile" class="btn btn-orange mt-4 cursor-pointer">Browse file</label>
                <input type="file" name="imageFile" id="imageFile" class="sr-only" multiple={true} accept="image/*" bind:files={files}>
              </div>
            {:else if modalTab == 'url'}
              <p class="mb-2 font-semibold text-$primary">URL</p>
              <div class="border rounded focus-within:ring-2 ring-orange-600 bg-white">
                <textarea name="url" bind:value={fileUrl} class="w-full h-24 px-4 py-2 resize-none"></textarea>
              </div>
              <p class="mt-2 text-xs">Separate your URL links by a commas (",").</p>
            {/if}
          </div>
        {:else if view == "upload"}
          <div class="relative">
            <div class="flex items-center justify-between">
              <div class="text-xs">
                <div class="text-$primary">{imgFiles.length} asset ready to upload</div>
                <p>Manage the assets before adding them to the Media Library</p>
              </div>
              <button class="btn btn-orange" on:click|preventDefault={() => view = "assets"}>Add new assets</button>
            </div>
            <div class="mt-8">
              <div class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));">
                {#each imgFiles as item, index}
                  <div class="rounded border overflow-hidden group">
                    <div class="relative w-full h-24 bg-make-transparent">
                      <img src="{item.preview}" alt="" class="w-full h-full object-contain">
                      <div class="hidden absolute top-2 right-2 group-hover:block">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="btn-icon pr-2 cursor-pointer"
                          on:click|preventDefault={() => removeFileChange(index)}
                        >
                          <span class="icon w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 py-2 flex justify-between items-start border-t">
                      <div class="text-xs">
                        <p class="font-semibold text-$primary">{item.name}</p>
                        <p class="uppercase">{item.type}</p>
                      </div>
                      <div class="text-[10px] p-1 py-0.5 font-semibold rounded bg-gray-100">IMAGE</div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            {#if uploadLoading}
                <div class="absolute w-full h-full top-0 left-0 bg-black/5 grid place-items-center">
                  <span class="icon animate-spin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
                  </span>
                </div>
              {/if}
          </div>
        {:else if view == "selected"}
          <div class="flex items-center border-b">
            <button class="p-4 uppercase text-xs font-semibold border-b"
              on:click|preventDefault={() => view = "storage"}
            >
              Browse
              <span class="px-1 py-0.5 bg-gray-100 text-$primary rounded">{storageFiles.length}</span>
            </button>

            <button class="p-4 uppercase text-xs font-semibold text-orange-600 border-b border-orange-600"
            on:click|preventDefault={() => view = "selected"}
            >
              Selected files
              <span class="px-1 py-0.5 bg-gray-100 text-$primary rounded">{fileChoose.length}</span>
            </button>

            <button class="ml-auto btn btn-orange"
              on:click|preventDefault={() => view = "assets"}
            >Add more assets</button>
          </div>
          <div class="relative mt-6">
            <div class="flex items-center justify-between">
              <div class="text-xs">
                <div class="text-$primary">{imgFiles.length} asset ready to upload</div>
                <p>Manage the assets before adding them to the Media Library</p>
              </div>
            </div>
            <div class="mt-8">
              <div class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));">
                {#each fileChoose as item, index}
                  <div class="rounded border overflow-hidden group">
                    <div class="relative w-full h-24 bg-make-transparent">
                      <img src="{item}" alt="" class="w-full h-full object-contain">
                      <div class="hidden absolute top-2 right-2 group-hover:block">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="btn-icon pr-2 cursor-pointer"
                          on:click|preventDefault={() => fileChoose = fileChoose.filter(v => v != item)}
                        >
                          <span class="icon w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 py-2 flex justify-between space-x-2 items-start border-t">
                      <div class="text-xs">
                        <p class="font-semibold text-$primary">{storageFiles.find(v => v.url == item)?.name}</p>
                        <p class="uppercase">{storageFiles.find(v => v.url == item)?.type}</p>
                      </div>
                      <div class="text-[10px] p-1 py-0.5 font-semibold rounded bg-gray-100">IMAGE</div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            {#if uploadLoading}
              <div class="absolute w-full h-full top-0 left-0 bg-black/5 grid place-items-center">
                <span class="icon animate-spin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
                </span>
              </div>
            {/if}
          </div>
        {/if}
      </div>

      <div class="flex justify-between w-full px-6 py-6 font-semibold text-$primary bg-gray-100">
        <button class="btn" on:click|preventDefault={() => toggleModal(false)}>Cancel</button>
        {#if view == "upload"}
          <button class="btn btn-orange" on:click|preventDefault={uploadFiles}>
            Upload {imgFiles.length} asset to the library
          </button>
        {:else if view == "storage" && fileChoose}
          <button class="btn btn-orange" on:click|preventDefault={() => finish("upload")}>Finish</button>
        {:else if modalTab == "url"}
          <button class="btn btn-orange" on:click|preventDefault={() => finish("url")}>Next</button>
        {/if}
      </div>
    </div>
    <div class="flex-grow"></div>
  </div>
{/if}

<style>
  .bg-make-transparent {
    background: repeating-conic-gradient(rgb(246, 246, 249) 0%, rgb(246, 246, 249) 25%, transparent 0%, transparent 50%) 50% center / 20px 20px;
  }
</style>