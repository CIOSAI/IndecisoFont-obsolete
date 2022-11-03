<script lang="ts">
	export let text:string;
  export let valueHandler;
  export let selected:boolean=false;
</script>

{#if selected}
  <div class="language-select-item_SELECTED">
    <button class="language-select-button_SELECTED" name="language-select" on:click={valueHandler}>{text}</button>
  </div>
{:else}
  <div class="language-select-item">
    <button class="language-select-button" name="language-select" on:click={valueHandler}>{text}</button>
  </div>
{/if}

<style>
  .language-select-item {
    width: 100%;
    height: 20%;
    background-color: var(--bg);
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    border: 6px solid var(--bg3);
    border-top: none;
  }
  
  .language-select-button {
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: inherit;
    border: none;
  }

  .language-select-item_SELECTED {
    width: 100%;
    height: 20%;
    color: var(--highlight);
    background-color: var(--bg);
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    border: 6px solid var(--secondary2);
    border-top: none;
  }
  
  .language-select-button_SELECTED {
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: inherit;
    border: none;
  }
</style>