<script lang="ts">
  import { xlink_attr } from "svelte/internal";
import {RandText} from "./RandText";

	export let fore: string = "ffddee";
	export let back: string = "00ff00";
  $: forecol = "#"+fore;
  $: backcol = "#"+back;

  let chars:string[][] = [];
  let rtCopy = Array.from(RandText+RandText);
  let rtDimension:number = Math.sqrt(rtCopy.length/2);
  for(let y=0; y<rtDimension*2; y++){
    let column = []
    for(let x=0; x<rtDimension; x++){
      rtCopy.sort(()=>Math.random()-0.5);
      column.push(rtCopy.pop());
    }
    chars.push(column)
  }
  console.log(chars)

  let charsize:number = 48;
  let w:number = 0;
  let h:number = 0;
  let gridw:number = 16;
  let gridh:number = 32;
  let countout:Array<number> = Array(gridw*gridh);

  $: {
    charsize = Math.max(w*0.5, h*0.5)/12;
    gridw = Math.floor(w*0.5/charsize)*2;
    gridh = Math.floor(h*0.5/charsize)*2;
  }
</script>

<main 
  bind:clientWidth={w} bind:clientHeight={h}
  style:--forecol={forecol} style:--backcol={backcol} 
  style:--charsize={charsize+"px"} 
  style:--versize={w/gridw+"px"} style:--horsize={h/gridh+"px"}
  >
  {#each countout as v, i}
    <span style="
      grid-column: {1+i%gridw} / span 1;
      grid-row: {1+Math.floor(i/gridw)} / span 1;
    ">{ 
      gridw?chars[(i%gridw)%(gridw/2)][Math.floor(i/(gridw))%(gridh/2)]:''
    }</span> 
  {/each}
</main>

<style>
  @keyframes loopingX {
  from {
    left: 0;
  }

  to {
    left: -100vw;
  }}
  @keyframes loopingY {
  from {
    top: 0;
  }

  to {
    top: -100vh;
  }}

  main{
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 200vw;
    height: 400vh;
    color: var(--forecol);
    background-color: var(--backcol);
    font-size: calc(var(--charsize)*0.75);
    user-select: none;
    display: grid;
    grid-auto-columns: var(--versize);
    grid-auto-rows: var(--horsize);
    animation: loopingX 9s linear 0s infinite normal, loopingY 36s linear 0s infinite normal;
  }

  span{
    width: 1fr;
    height: 1fr;
    text-align: center;
  }
</style>