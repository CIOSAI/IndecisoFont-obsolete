<script lang="ts">
  export let link:string = "";
  export let name:string = "";
</script>

<a href={link}>
  <slot></slot>
  <span id="button-text">{name}</span>
</a>

<style>
  a{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: inherit;
  }

  /* selected link */
  a:active {
    text-decoration: none;
    color: inherit;
  }
</style>