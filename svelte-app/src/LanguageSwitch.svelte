<script lang="ts">
  import LanguageRadio from "./LanguageRadio.svelte";

  export let languageHandler;

  enum languages {
    EN_US,
    EN_SG,
    MN_POJ,
    MN_KIP
  }

  const langName = ["English", "English lah", "Pe\u030Dh-oē-jī", "Tâi-lô"]

  let language: number = 0;
  $: languageHandler(language);
  let buttonValueHander =(val)=>{return ()=> {language = val}} ;
</script>

<main class="dropdown">
  <span>{langName[language]}</span>
  <div class="dropdown-content">
    <LanguageRadio text="English" valueHandler={buttonValueHander(languages.EN_US)} selected={language==languages.EN_US}/>
    <LanguageRadio text="English lah" valueHandler={buttonValueHander(languages.EN_SG)} selected={language==languages.EN_SG}/>
    <LanguageRadio text="Pe̍h-oē-jī" valueHandler={buttonValueHander(languages.MN_POJ)} selected={language==languages.MN_POJ}/>
    <LanguageRadio text="Tâi-lô" valueHandler={buttonValueHander(languages.MN_KIP)} selected={language==languages.MN_KIP}/>
  </div>
</main>

<style>
  main{
    position: fixed;
    top: 2vh;
    right: 2vh;
    height: 1em;
    background-color: var(--bg);
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    border: 6px solid var(--bg3);
    border-radius: 1em 1em 0em 0em;
  }

  .dropdown{
    width: 180px;
    height: 60px;
    font-size: 22px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropdown-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 54px;
    right: -6px;
    width: 180px;
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