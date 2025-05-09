<script>
  const components = [
    {
      title: 'Navbar',
      description: 'En responsiv navigasjonsmeny med logo og lenker',
      path: '/components/navbar'
    },
    {
      title: 'Input',
      description: 'Tilpassede input-felt med støtte for ulike typer',
      path: '/components/input'
    },
    {
      title: 'Page',
      description: 'Eksempel på en innloggingsside som bruker komponentene',
      path: '/components/page'
    },
    {
      title: 'Layout',
      description: 'Grunnleggende layout-komponent med TypeScript-støtte',
      path: '/components/layout'
    },
    {
      title: 'App CSS',
      description: 'Global CSS med grunnleggende reset og styling',
      path: '/components/appcss'
    }
  ];
</script>

<div class="home">
  <header>
    <h1>Komponentbibliotek</h1>
    <p class="subtitle">
      Utforsk og kopier kode fra våre tilpassede Svelte-komponenter
    </p>
  </header>

  <div class="components-grid">
    {#each components as component}
      <a href={component.path} class="component-card">
        <h2>{component.title}</h2>
        <p>{component.description}</p>
      </a>
    {/each}
  </div>
</div>

<style>
  .home {
    padding: 2rem 0;
    min-height: calc(100vh - 4rem);
  }

  header {
    text-align: center;
    margin-bottom: 4rem;
    padding: 2rem 0;
  }

  .subtitle {
    color: var(--color-text-2);
    font-size: 1.2rem;
    margin-top: 1rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem 0;
  }

  .component-card {
    background-color: var(--color-bg-1);
    border-radius: var(--border-radius);
    padding: 2rem;
    text-decoration: none;
    color: var(--color-text-1);
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--color-bg-2);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .component-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
    border-color: var(--color-theme-1);
  }

  .component-card h2 {
    margin: 0;
    color: var(--color-theme-1);
    font-size: 1.8rem;
  }

  .component-card p {
    color: var(--color-text-2);
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .home {
      padding: 1rem 0;
    }

    header {
      margin-bottom: 2rem;
      padding: 1rem 0;
    }

    .components-grid {
      gap: 1rem;
    }

    .component-card {
      padding: 1.5rem;
    }
  }
</style>
