export const componentCode = {
	navbar: `<script>
  // No props or logic needed
</script>

<nav>
  <ul>
    <li><a href="/">Hjem</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>

<style>
  nav {
    background-color: #25262b;
    padding: 1rem 2rem;
    border-radius: 26px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #FDFFFF;
    font-family: "Dress Code", serif;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #FF3E00;
  }
</style>`,

	input: `<script>
  export let label = '';
  export let type = 'text';
  export let placeholder = '';
</script>

<div class="input-container">
  <label for={label}>{label}</label>
  <input {type} id={label} {placeholder} />
</div>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    color: #FDFFFF;
    font-family: "Dress Code", serif;
    font-weight: 500;
    font-size: 1rem;
  }

  input {
    padding: 0.75rem 1.5rem;
    border: 2px solid #2d2e33;
    border-radius: 26px;
    background-color: #25262b;
    color: #FDFFFF;
    font-family: "EB Garamond", serif;
    font-size: 1.1rem;
    transition: all 0.2s ease;
  }

  input:focus {
    outline: none;
    border-color: #FF3E00;
    box-shadow: 0 0 0 2px rgba(255, 62, 0, 0.2);
  }

  input::placeholder {
    color: #8D8D94;
  }
</style>`,

	page: `<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import Input from '$lib/components/input.svelte';
</script>

<main>
  <Navbar />
  <div class="content">
    <h1>Velkommen til MinSkole</h1>
    <div class="form-container">
      <Input label="E-post" type="email" placeholder="test@test.com" />
      <Input label="Passord" type="password" placeholder="Passord" />
      <button class="login-button">Logg inn</button>
      <p class="signup-text">Har du ikke en konto? <a href="/signup">Registrer deg</a></p>
    </div>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    background-color: #1D1E23;
    color: #FDFFFF;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    font-family: "Dress Code", serif;
    font-weight: 600;
    font-size: 3.2rem;
    margin-bottom: 2rem;
    color: #FDFFFF;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 400px;
  }

  .login-button {
    background-color: #FF3E00;
    color: #FDFFFF;
    border: none;
    border-radius: 26px;
    padding: 0.75rem 1.5rem;
    font-family: "Dress Code", serif;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .login-button:hover {
    background-color: #ff5c2b;
    transform: translateY(-1px);
  }

  .signup-text {
    color: #8D8D94;
    font-family: "EB Garamond", serif;
    font-size: 1.1rem;
    text-align: center;
  }

  .signup-text a {
    color: #FF3E00;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .signup-text a:hover {
    color: #ff5c2b;
  }
</style>`,

	layout: `<script lang="ts">
  import '../app.css';
  
  interface Props {
    children?: import('svelte').Snippet;
  }
  
  let { children }: Props = $props();
</script>

{@render children?.()}

<style>
  :global(body) {
    background-color: #25262b;
  }
</style>`,

	appcss: `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}`,
} as const;
