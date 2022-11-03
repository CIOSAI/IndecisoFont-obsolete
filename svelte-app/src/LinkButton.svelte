<script lang="ts">
  export let link:string = "";
  export let name:string = "";
</script>

<a href={link}>
  <slot></slot>
  <span style="width: 5%;"></span>
  <span id="button-text">{name}</span>
</a>

<style>
  @keyframes highlight{
    from{
      color: var(--text);
    }
    to{
      color: var(--highlight);
    }
  }

  @keyframes dim-down{
    from{
      color: var(--highlight);
    }
    to{
      color: var(--text);
    }
  }

  @keyframes bob{
    from{
      scale: 1;
    }
    to{
      scale: 1.05;
    }
  }

  @keyframes bobdown{
    from{
      scale: 1.05;
    }
    to{
      scale: 1;
    }
  }

  #button-text{
    font-size: 2em;
  }

  a{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    animation: dim-down 200ms linear, bobdown 150ms cubic-bezier(0,1.19,.51,1.18);
    color: var(--text);
    margin: 1em;
    background-color: var(--bg3);
    border-radius: 0em 1em 0em 0em;
  }
   /* unvisited link */
  a:link {
    text-decoration: none;
    color: inherit;
  }

  /* visited link */
  a:visited {
    text-decoration: none;
    color: inherit;
  }

  /* mouse over link */
  a:hover {
    text-decoration: none;
    animation: highlight 200ms linear, bob 150ms cubic-bezier(0,1.19,.51,1.18);
    color: var(--highlight);
    scale: 1.05;
  }
</style>