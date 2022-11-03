<script lang="ts">
  import DownloadButton from "./DownloadButton.svelte"
  import SourceButton from "./SourceButton.svelte";

  export let language:number = 0;
</script>

<main>
  <span id="logo">Indeciso</span>
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
  
  #logo{
    font-size: 16vw;
  }

  #sub{
    text-align: center;
    max-width: 30%;
    font-size: 2vw;
  }

  #button-container{
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: space-between;
  }
</style>