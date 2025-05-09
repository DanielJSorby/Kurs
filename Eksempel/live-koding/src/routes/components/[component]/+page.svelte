<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte';
  import { page } from '$app/stores';
  import { componentCode } from '$lib/componentCode';

  type ComponentName = keyof typeof componentCode;
  
  $: componentName = $page.params.component as ComponentName;
  $: code = componentCode[componentName] || 'Komponent ikke funnet';
</script>

<div class="component-page">
  <header>
    <h1>{componentName.charAt(0).toUpperCase() + componentName.slice(1)}</h1>
    <p class="description">
      Her er koden for {componentName}-komponenten. Klikk på "Kopier" for å kopiere koden til utklippstavlen.
    </p>
  </header>

  <div class="preview">
    <h2>Forhåndsvisning</h2>
    <div class="preview-content">
      {#if componentName === 'navbar'}
        <nav>
          <ul>
            <li><a href="/">Hjem</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
      {:else if componentName === 'input'}
        <div class="input-preview">
          <label for="example">Eksempel Input</label>
          <input type="text" id="example" placeholder="Skriv noe her..." />
        </div>
      {/if}
    </div>
  </div>

  <div class="code-section">
    <h2>Kode</h2>
    <CodeBlock {code} />
  </div>
</div>

<style>
  .component-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  header {
    margin-bottom: 3rem;
    text-align: center;
  }

  header h1 {
    color: #FDFFFF;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }

  .description {
    color: var(--color-text-2);
    margin-top: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .preview {
    background-color: var(--color-bg-1);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin-bottom: 3rem;
    border: 1px solid var(--color-bg-2);
  }

  .preview h2 {
    margin-bottom: 1.5rem;
    color: #FDFFFF;
  }

  .preview-content {
    background-color: var(--color-bg-0);
    border-radius: var(--border-radius);
    padding: 2rem;
    border: 1px solid var(--color-bg-2);
  }

  .code-section h2 {
    margin-bottom: 1.5rem;
    color: #FDFFFF;
  }

  /* Preview styles */
  nav {
    background-color: var(--color-bg-1);
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
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
    color: var(--color-text-1);
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-theme-1);
  }

  .input-preview {
    width: 100%;
    max-width: 400px;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-text-1);
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: 1rem;
  }

  input {
    width: 100%;
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--color-bg-2);
    border-radius: var(--border-radius);
    background-color: var(--color-bg-1);
    color: var(--color-text-1);
    font-family: var(--font-body);
    font-size: 1.1rem;
    transition: all 0.2s ease;
  }

  input:focus {
    outline: none;
    border-color: var(--color-theme-1);
    box-shadow: 0 0 0 2px rgba(255, 62, 0, 0.2);
  }

  input::placeholder {
    color: var(--color-text-2);
  }

  @media (max-width: 768px) {
    .component-page {
      padding: 1rem;
    }

    .preview {
      padding: 1.5rem;
    }

    .preview-content {
      padding: 1.5rem;
    }
  }
</style> 