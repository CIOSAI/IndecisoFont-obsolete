<script lang="ts">
  import Page from "./Page.svelte";
  import LanguageSwitch from "./LanguageSwitch.svelte";
  import ScrollingBG from "./ScrollingBG.svelte";
  import Title from "./Title.svelte";
  import ShowCase from "./ShowCase.svelte";
  import PlayGround from "./PlayGround.svelte";

  let language:number = 0;

  function handleLang(l:number){
    language = l
  }
</script>

<main>
  <ScrollingBG/>
  <LanguageSwitch languageHandler={handleLang}/>
  <Page>
    <Title language={language}/>
  </Page>
  <Page>
    <ShowCase/>
  </Page>
  <Page>
    <PlayGround language={language}/>
  </Page>
</main>

<style>
  :global(body, html){
    margin: 0;
    padding: 0;
  }    
  :global(:root){
    --bg: #012;
    --bg2: #124;
    --bg3: #335;
    --secondary: rgb(49, 95, 95);
    --secondary2: #4a9;
    --text: #bcc;
    --highlight: #eef;
  }
	main {
    display: flex;
    flex-wrap: wrap;
    color: var(--text);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>