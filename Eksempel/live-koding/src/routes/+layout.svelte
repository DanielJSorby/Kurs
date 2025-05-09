<script>
  import '../app.css';
</script>

<div class="layout">
  <nav>
    <div class="nav-content">
      <a href="/" class="logo">Komponenter</a>
      <div class="nav-links">
        <a href="/components/navbar">Navbar</a>
        <a href="/components/input">Input</a>
        <a href="/components/page">Page</a>
        <a href="/components/layout">Layout</a>
        <a href="/components/appcss">App CSS</a>
      </div>
    </div>
  </nav>

  <main>
    <slot />
  </main>
</div>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-0);
  }

  nav {
    background-color: var(--color-bg-1);
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--color-bg-2);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text-1);
    text-decoration: none;
    transition: color 0.2s;
  }

  .logo:hover {
    color: var(--color-theme-1);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    color: var(--color-text-2);
    text-decoration: none;
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.2s;
    padding: 0.5rem 0;
    position: relative;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-theme-1);
    transition: width 0.2s;
  }

  .nav-links a:hover {
    color: var(--color-text-1);
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  main {
    flex: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 768px) {
    nav {
      padding: 1rem;
    }

    .nav-content {
      flex-direction: column;
      gap: 1rem;
    }

    .nav-links {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    main {
      padding: 1rem;
    }
  }
</style> 