<script lang="ts">
  import Page from "./Page.svelte";
  import LanguageSwitch from "./LanguageSwitch.svelte";
  import ScrollingBG from "./ScrollingBG.svelte";
  import Title from "./Title.svelte";
  import ShowCase from "./ShowCase.svelte";
</script>

<main>
  <ScrollingBG back="001122" fore="113355"/>
  <LanguageSwitch col="558888"/>
  <Page col="00000000">
    <Title/>
  </Page>
  <Page col="00000000">
    <ShowCase/>
  </Page>
  <Page col="664444">
    <h1>section 3</h1>
  </Page>
</main>

<style>
  :global(body, html){
    margin: 0;
    padding: 0;
  }
	main {
    display: flex;
    flex-wrap: wrap;
    color: #ddd;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>