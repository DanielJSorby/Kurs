<script>
  export let code = '';
  export let language = 'svelte';
</script>

<div class="code-block">
  <div class="code-header">
    <span class="language">{language}</span>
    <button class="copy-button" on:click={() => navigator.clipboard.writeText(code)}>
      Kopier
    </button>
  </div>
  <pre><code>{code}</code></pre>
</div>

<style>
  .code-block {
    background-color: var(--color-bg-1);
    border-radius: var(--border-radius);
    margin: 1.5rem 0;
    overflow: hidden;
    border: 1px solid var(--color-bg-2);
  }

  .code-header {
    background-color: var(--color-bg-2);
    padding: 0.75rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-bg-1);
  }

  .language {
    color: var(--color-text-2);
    font-family: var(--font-code);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .copy-button {
    background: none;
    border: none;
    color: var(--color-theme-1);
    cursor: pointer;
    font-family: var(--font-heading);
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .copy-button:hover {
    background-color: var(--color-bg-1);
    color: var(--color-theme-2);
  }

  .copy-button:active {
    transform: translateY(1px);
  }

  pre {
    margin: 0;
    padding: 1.5rem;
    overflow-x: auto;
    background-color: var(--color-bg-1);
  }

  code {
    display: block;
    white-space: pre;
    color: var(--color-text-1);
    line-height: 1.6;
  }

  /* Syntax highlighting */
  :global(code .keyword) { color: var(--color-theme-1); }
  :global(code .string) { color: var(--color-theme-2); }
  :global(code .comment) { color: var(--color-text-2); }
  :global(code .tag) { color: var(--color-theme-1); }
  :global(code .attr) { color: var(--color-theme-2); }
</style> 