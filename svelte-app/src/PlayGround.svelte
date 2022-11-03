<script lang="ts">
  import DownloadButton from "./DownloadButton.svelte";

  export let language:number = 0;
</script>

<main>
  <div id="container">
    <h1 class="noMargin" contenteditable="true" spellcheck="false">
      {#if language==0}
        Try It Out!
      {:else if language==1}
        Come Try!
      {:else if language==2}
        Chhì Khòaⁿ Māi!
      {:else}
        Tshì Khuànn Māi!
      {/if}
    </h1>
    <br>
    <h2 class="noMargin" contenteditable="true" spellcheck="false">
      {#if language==0}
        You Can Edit Any Text Here!
      {:else if language==1}
        Here All Can Edit!
      {:else if language==2}
        Chia ê Lāi-Iông Lóng Ē-Sái Kái!
      {:else}
        Tsia ê Lāi-Iông Lóng Ē-Sái Kái!
      {/if}
    </h2>
    <br>
    <div id="download-button">
      <DownloadButton language={language}/>
    </div>
    <p class="noMargin" contenteditable="true" spellcheck="false">
      {#if language<=1}
        A monospaced font, also called a fixed-pitch, fixed-width, or non-proportional font, is a font whose letters and characters each occupy the same amount of horizontal space. This contrasts with variable-width fonts, where the letters and spacings have different widths. 
      {:else if language==2}
        Kâng-khoah-tō&#856;, Mā hō-chò kò&#856;-tēng-khoah-tō&#856;, Piáu-sī chit-ê jī-thé ê muí chi̍t jī chiàm kâng-khòan khong-kan. Án-ne kah ī-khoah jī-thé to̍h ū chha, ī-khoah tīo-sī it-poaⁿ khòaⁿ tio̍h, bô-kâng jī chiàm bô-kâng khong-kan ê hit-khòan. 
      {:else}
        Kâng-khuah-tōo, Mā hō-tsò kòo-tīng-khuah-tōo, Piáu-sī tsit-ê jī-thé ê muí tsi̍t jī tsiàm kâng-khuàn khong-kan. Án-ne kah ī-khuah jī-thé to̍h ū tsha, ī-khuah tīo-sī it-puann khuànn tio̍h, bô-kâng jī tsiàm bô-kâng khong-kan ê hit-khuàn. 
      {/if}
    </p>
      <br><br>
    <p class="noMargin" contenteditable="true" spellcheck="false">
      {#if language<=1}
        Monospaced fonts were widely used in early computers and computer terminals, which often had extremely limited graphical capabilities. Hardware implementation was simplified by using a text mode where the screen layout was addressed as a regular grid of tiles, each of which could be set to display a character by indexing into the hardware's character map. Some systems allowed colored text to be displayed by varying the foreground and background color for each tile. Other effects included reverse video and blinking text. Nevertheless, these early systems were typically limited to a single console font.
      {:else if language==2}
        Í-chêng ê tiān-náu tāi-pō͘-hūn lóng iōng kâng-khoah-tō͘ jī-thé, Ín-ūi hit-chūn ê tiān-náu bô chit-má ê hiá-nī gâu ōe-tô͘. Nā sú-iōng "bûn-jī" bô͘-sek, tiō-sī kā êng-bō͘ hun chò keh-á, múi chi̍t-ê keh-á lāi to̍h khì jī-bó-piáu chhōe chèng-khak ê jī lâi khǹg, hián-sī bûn-jī to̍h khah khin-sang. Mā ū tiān-náu ē-sái lī-iōng pōe-kéng chiân-kéng ê sek lâi ōe chhái-sek ê jī. Kî-thaⁿ piàn-hōa pau-koat tian-tò sek kah siám sek. Hoán-tit, hit-chūn ê tiān-náu ki-pún-siōng chí-ū chi̍t-ê jī-thé thang iōng.
      {:else}
        Í-tsîng ê tiān-náu tāi-pōo-hūn lóng iōng kâng-khuah-tōo jī-thé, Ín-uī hit-tsūn ê tiān-náu bô tsit-má ê hiá-nī gâu uē-tôo. Nā sú-iōng "bûn-jī" bôo-sik, tiō-sī kā îng-bōo hun tsò keh-á, muí tsi̍t-ê keh-á lāi to̍h khì jī-bó-piáu tshuē tsìng-khak ê jī lâi khǹg, hián-sī bûn-jī to̍h khah khin-sang. Mā ū tiān-náu ē-sái lī-iōng puē-kíng tsiân-kíng ê sik lâi uē tshái-sik ê jī. Kî-thann piàn-huā pau-kuat tian-tò sik kah siám sik. Huán-tit, hit-tsūn ê tiān-náu ki-pún-siōng tsí-ū tsi̍t-ê jī-thé thang iōng.
      {/if}
    </p>
      <div id="code-block" contenteditable="true" spellcheck="false">
        {`bitbleed = (a, b) => {`}<br>
        &nbsp;&nbsp;{`let gradient = [];`}<br>
        &nbsp;&nbsp;{`while(a!=b){`}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{`let mask = 1 << Math.floor(Math.random()*32);`}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{`if ((a^b)&mask) {a ^= mask; gradient.push(a);}`}<br>
        &nbsp;&nbsp;{`}`}<br>
        &nbsp;&nbsp;{`return gradient;`}<br>
        {`};`}<br>
      </div>
      <br><br>
    <p class="noMargin" contenteditable="true" spellcheck="false">
      {#if language<=1}
        Even though computers can now display a wide variety of fonts, the majority of IDEs and software text editors employ a monospaced font as the default typeface. This increases the readability of source code, which is often heavily reliant on distinctions involving individual symbols, and makes differences between letters more unambiguous in situations like password entry boxes where typing mistakes are unacceptable. Monospaced fonts are also used in terminal emulation and for laying out tabulated data in plain text documents. In technical manuals and resources for programming languages, a monospaced font is often used to distinguish code from natural-language text. Monospaced fonts are also used by disassembler output, causing the information to align in vertical columns.
      {:else if language==2}
        Kàu-taⁿ, tiān-náu ē-sái ōe chiok chē bô-kâng ê jī-thé ah, tān-sī IDE kah bûn-jī phian-chip khì iû-jiân sú-iōng kâng-khoah-tō͘ jī-thé. Án-ne lâi kā thêng-sek chit-khoàn su-iàu hû-hō͘ hun-pia̍t ê bûn-jī khòaⁿ hō͘ chheng, chiūⁿ su-ji̍p bi̍t-bé ê sî-chūn mā sī. Kâng-khoah-tō͘ jī-thé mā sek-ha̍p tiān-náu terminal, choân bûn-jī bûn-su lāi ê piáu-kih, thêng-sek gí-giân ê chhiú-chheh ah-sī ha̍k-si̍p chu-goân, hun-pia̍t it-poaⁿ bûn-jī kah thêng-sek, disassembler ê su-chhut, etc.
      {:else}
        Kàu-tann, tiān-náu ē-sái uē tsiok tsē bô-kâng ê jī-thé ah, tān-sī IDE kah bûn-jī phian-tsip khì iû-jiân sú-iōng kâng-khuah-tōo jī-thé. Án-ne lâi kā thîng-sik tsit-khuàn su-iàu hû-hōo hun-pia̍t ê bûn-jī khuànn hōo tshing, tsiūnn su-ji̍p bi̍t-bé ê sî-tsūn mā sī. Kâng-khuah-tōo jī-thé mā sik-ha̍p tiān-náu terminal, tsuân bûn-jī bûn-su laī ê piáu-kih, thîng-sik gí-giân ê tshiú-tsheh ah-sī ha̍k-si̍p tsu-guân, hun-pia̍t it-puann bûn-jī kah thîng-sik, disassembler ê su-tshut, etc.
      {/if}
    </p>
      <br><br>
    <p id="footnote" contenteditable="true" spellcheck="false">
      {#if language<=1}
        Text from Wikipedia      
      {:else if language==2}
        Lâi-gôan : Wikipedia
      {:else}
        Lâi-guân : Wikipedia
      {/if}
    </p>
  </div>
</main>

<style>
  main{
    height: 100%;
    background-color: var(--secondary);
  }
  #container{
    padding: 2% 5%;
  }
  h1{
    font-size: 96px;
    outline: none;
  }
  h2{
    font-size: 48px;
    outline: none;
  }
  p{
    font-size: 18px;
    outline: none;
  }
  .noMargin{
    margin: 0;
  }

  *:focus{
    color: var(--highlight);
  }

  #download-button{
    width: 24em;
    height: 8em;
    float: right;
    margin: 2%;
  }
  #code-block{
    width: 24em;
    height: 9em;
    float: left;
    padding: 1%;
    margin: 1%;
    font-size: larger;
    outline: none;
  }
  #code-block:focus{
    background-color: var(--bg2);
  }
  #footnote{
    text-align: right;
    position: relative;
    bottom: 0;
  }
</style>