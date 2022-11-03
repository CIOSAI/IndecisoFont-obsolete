<script lang="ts">
  import DownloadButton from "./DownloadButton.svelte";
</script>

<main>
  <div id="container">
    <h1 class="noMargin" contenteditable="true" spellcheck="false">Try It Out!</h1>
    <br>
    <h2 class="noMargin" contenteditable="true" spellcheck="false">You Can Edit Any Text Here!</h2>
    <br>
    <div id="download-button">
      <DownloadButton/>
    </div>
    <p class="noMargin" contenteditable="true" spellcheck="false">
      A monospaced font, also called a fixed-pitch, fixed-width, or non-proportional font, is a font whose letters and characters each occupy the same amount of horizontal space. This contrasts with variable-width fonts, where the letters and spacings have different widths. 
    </p>
      <br><br>
    <p class="noMargin" contenteditable="true" spellcheck="false">
      Monospaced fonts were widely used in early computers and computer terminals, which often had extremely limited graphical capabilities. Hardware implementation was simplified by using a text mode where the screen layout was addressed as a regular grid of tiles, each of which could be set to display a character by indexing into the hardware's character map. Some systems allowed colored text to be displayed by varying the foreground and background color for each tile. Other effects included reverse video and blinking text. Nevertheless, these early systems were typically limited to a single console font.
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
      Even though computers can now display a wide variety of fonts, the majority of IDEs and software text editors employ a monospaced font as the default typeface. This increases the readability of source code, which is often heavily reliant on distinctions involving individual symbols, and makes differences between letters more unambiguous in situations like password entry boxes where typing mistakes are unacceptable. Monospaced fonts are also used in terminal emulation and for laying out tabulated data in plain text documents. In technical manuals and resources for programming languages, a monospaced font is often used to distinguish code from natural-language text. Monospaced fonts are also used by disassembler output, causing the information to align in vertical columns.
    </p>
      <br><br>
    <p id="footnote" contenteditable="true" spellcheck="false">Text from Wikipedia</p>
  </div>
</main>

<style>
  main{
    height: 100%;
  }
  #container{
    padding: 2% 5%;
  }
  h1{
    font-size: 96px;
  }
  h2{
    font-size: 48px;
  }
  p{
    font-size: 18px;
  }
  .noMargin{
    margin: 0;
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
    margin: 2%;
    font-size: larger;
  }
  #footnote{
    text-align: right;
    position: relative;
    bottom: 0;
  }
</style>