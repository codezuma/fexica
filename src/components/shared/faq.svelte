<!-- FAQ.svelte -->
<script>
  export let question;
  export let answer;

  let isOpen = false;

  function toggleAnswer() {
    isOpen = !isOpen;
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="rounded p-4 mb-4 border-b border-gray-200" on:click={toggleAnswer}>
  <div class="flex text-lg cursor-pointer py-2 justify-between w-full">
    <h3 class="text-gray-900 font-semibold">
      {question}
    </h3>
    <span class="ml-2">{isOpen ? "-" : "+"}</span>
  </div>

  {#if isOpen}
    <p class="mt-2 font-medium text-gray-600">{answer}</p>
  {/if}
</div>
