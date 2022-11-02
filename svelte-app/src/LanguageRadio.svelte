<script lang="ts">
	export let text:string;
  export let valueHandler;
</script>


<div class="language-select-item">
  <button class="language-select-button" name="language-select" on:click={valueHandler}>{text}</button>
</div>

<style>
  .language-select-item {
    width: 120px;
    height: 40px;
  }
  
  .language-select-button{
    width: 100%;
    height: 100%;
  }
</style>