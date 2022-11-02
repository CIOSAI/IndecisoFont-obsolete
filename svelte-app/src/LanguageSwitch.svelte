<script lang="ts">
  import LanguageRadio from "./LanguageRadio.svelte";

	export let col: string = "012345";
  $: bgcol = "#"+col;

  enum languages {
    EN_US,
    EN_SG,
    MN_POJ,
    MN_KIP
  }

  const langName = ["English", "English lah", "Pe\u030Dh-oē-jī", "Kàu-io\u030Dk-pōo im-phiau"]

  let language: number = 0;
  $: console.log(language);
  let buttonValueHander =(val)=>{return ()=> {language = val}} ;
</script>

<main style:--bgcol={bgcol} class="dropdown">
  {langName[language]}
  <div class="dropdown-content">
    <LanguageRadio text="English US" valueHandler={buttonValueHander(languages.EN_US)}></LanguageRadio>
    <LanguageRadio text="English SG" valueHandler={buttonValueHander(languages.EN_SG)}></LanguageRadio>
    <LanguageRadio text="Hokkien POJ" valueHandler={buttonValueHander(languages.MN_POJ)}></LanguageRadio>
    <LanguageRadio text="Hokkien KIP" valueHandler={buttonValueHander(languages.MN_KIP)}></LanguageRadio>
  </div>
</main>

<style>
  main{
    position: fixed;
    top: 2vh;
    right: 2vh;
    height: 1em;
    background-color: var(--bgcol);
  }
  .dropdown-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    z-index: 1;
    transform-origin: top center;
    transform: scaleY(0);
  }

  @keyframes dropdown-anim {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }}

  .dropdown:hover .dropdown-content {
    animation: dropdown-anim 200ms cubic-bezier(.27,.83,.58,.97);
    transform: scaleY(1);
  }
</style>