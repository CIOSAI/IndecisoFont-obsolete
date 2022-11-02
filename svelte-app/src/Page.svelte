<script lang="ts">
	export let col: string = "012345";
  $: bgcol = "#"+col;
</script>

<main style:--bgcol={bgcol}><slot></slot></main>

<style>
  main{
    width: 100vw;
    height: 100vh;
    background-color: var(--bgcol);
  }
</style>