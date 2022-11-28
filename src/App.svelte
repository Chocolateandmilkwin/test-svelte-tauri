<script lang="ts">
  import Greet from "./lib/Greet.svelte";

  let test: string = "more";
  setTimeout(() => {
    test = "fuck you";
  }, 2000);
</script>

<main class="container">
  <h1>Welcome to Taursi!</h1>

  <div class="row">
    <a href="https://vitejs.dev"> a </a>
    <a href="https://tauri.app"> b </a>
    <a href="https://svelte.dev"> c </a>
  </div>

  <p>Click on the Tauri, Vite, and Svelte logos to learn {test}.</p>

  <div class="row">
    <Greet />
  </div>
</main>

<style>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }
</style>
