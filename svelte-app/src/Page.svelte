<script lang="ts">
	export let col: string = "012345";
  $: bgcol = "#"+col;
</script>

<main style:--bgcol={bgcol}><slot></slot></main>

<style>
  main{
    width: 100vw;
    min-height: 100vh;
    max-height: min-content;
    background-color: var(--bgcol);
  }
</style>