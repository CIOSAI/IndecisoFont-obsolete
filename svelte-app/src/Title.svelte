<script lang="ts">
  import DownloadButton from "./DownloadButton.svelte"
  import SourceButton from "./SourceButton.svelte";
</script>

<main>
  <span id="logo">Indeciso</span>
  <span id="sub">A monospaced font that is a little too funky for a monospaced font</span>
  <div style="height: 10%;"></div>
  <div id="button-container">
    <DownloadButton></DownloadButton>
    <SourceButton></SourceButton>
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
    max-width: 50%;
    font-size: 2vw;
  }

  #button-container{
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: space-between;
  }
</style>