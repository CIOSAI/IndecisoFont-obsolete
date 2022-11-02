<script lang="ts">
  import Page from "./Page.svelte";
  import LangSwitch from "./LanguageSwitch.svelte";
    import LanguageSwitch from "./LanguageSwitch.svelte";
  let name:string = "asdoihfo";
</script>

<main>
  <LanguageSwitch col="558888"/>
  <Page col="89abcd">
    <h1>bruh {name}</h1>
  </Page>
  <Page col="cd89ab"></Page>
  <Page col="cdab89"></Page>
</main>

<style>
  :global(body, html){
    margin: 0;
    padding: 0;
  }
	main {
    display: flex;
    flex-wrap: wrap;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>