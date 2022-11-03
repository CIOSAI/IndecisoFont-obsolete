<script lang="ts">
    import { each } from "svelte/internal";
  import DownloadButton from "./DownloadButton.svelte"
  import SourceButton from "./SourceButton.svelte";

  export let language:number = 0;
</script>

<main>
  <span id="logo">
    {#each Array.from("Indeciso") as i}
      <span class="logo-char">{i}</span>
    {/each}
  </span>
  {#if language==0}
    <span id="sub">A monospaced font that is a little too funky for a monospaced font</span>
  {:else if language==1}
    <span id="sub">This monospaced font cursive lah so funky sia</span>
  {:else if language==2}
    <span id="sub">Chi̍t-ê m̄ kan-goān chèng-keng bô-liâu ê kâng-khoah-tō&#856; jī-thé</span>
  {:else}
    <span id="sub">Tsi̍t-ê m̄ kan-guān tsìng-king bô-liâu ê kâng-khuah-tōo jī-thé</span>
  {/if}
  <div style="height: 10%;"></div>
  <div id="button-container">
    <DownloadButton language={language}></DownloadButton>
    <SourceButton language={language}></SourceButton>
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @keyframes blink {
  0%, 65% {
    color: var(--text);
  }

  70% {
    color: var(--highlight);
  }

  75%, 100% {
    color: var(--text);
  }}
  
  #logo{
    font-size: 16vw;
  }

  .logo-char{
    animation: blink 3s linear 0s infinite;
  }

  #logo .logo-char:nth-child(1) { animation-delay: .1s }
  #logo .logo-char:nth-child(2) { animation-delay: .2s }
  #logo .logo-char:nth-child(3) { animation-delay: .3s }
  #logo .logo-char:nth-child(4) { animation-delay: .4s }
  #logo .logo-char:nth-child(5) { animation-delay: .5s }
  #logo .logo-char:nth-child(6) { animation-delay: .6s }
  #logo .logo-char:nth-child(7) { animation-delay: .7s }
  #logo .logo-char:nth-child(8) { animation-delay: .8s }

  #sub{
    text-align: center;
    max-width: 30%;
    font-size: max(2vw, 18px);
  }

  #button-container{
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: space-between;
  }
</style>