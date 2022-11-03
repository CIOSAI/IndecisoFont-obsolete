<script lang="ts">
  let lookups:Map<string, string> = new Map([
    ["M", "ḾṀ"],
    ["u", "ùúûüũūŭůűųụȕȗ"],
    ["l", "ĺļľł"],
    ["t", "ŧťțţṭ"],
    ["i", "ìíîïĩīįĭịȉȋ"],
    ["n", "ńņňñṅŋ"],
    ["g", "ǵĝğġģ"],
    ["a", "àáâãäåāăąǻȁȃæǽ"],
    ["S", "ŚŜŠȘŞṢ"],
    ["p", "p"],
    ["o", "òóôõöøōŏőǿǫọȍȏœ"],
    ["r", "ŕŗřṛȑȓ"],
  ])

  let multilingual:string = "Ḿųłẗīĺìñģŭāļ";
  let support:string = "Şʉppøřť";

  function refresh(){
    multilingual = ""
    support = ""
    for(let i of Array.from("Multilingual")){
      let from = lookups.get(i)
      multilingual += from[Math.floor(Math.random()*from.length)]
    }
    for(let i of Array.from("Support")){
      let from = lookups.get(i)
      support += from[Math.floor(Math.random()*from.length)]
    }
  }
</script>

<main>
  <p on:mouseenter={refresh}>
    <span>{multilingual}</span>
    <br>
    <span>{support}</span>
    <br>
    <span>Tiếng việt được hỗ trợ!</span>
    <br>
    <span>Pe&#781;h-oē-jī mā ū chi-oān o&#856;h!</span>
  </p>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    text-align: center;
    font-size: 6vw;
  }

  @keyframes bob{
    from{
      font-size: 6vw;
    }
    to{
      font-size: 7vw;
    }
  }

  @keyframes bobdown{
    from{
      font-size: 7vw;
    }
    to{
      font-size: 6vw;
    }
  }

  span:hover{
    animation: bob 150ms cubic-bezier(0,1.19,.51,1.18);
    font-size: 7vw;
  }
  span:not(:hover){
    /* animation-direction: reverse; */
    animation: bobdown 150ms cubic-bezier(0,1.19,.51,1.18);
    font-size: 6vw;
  }
</style>