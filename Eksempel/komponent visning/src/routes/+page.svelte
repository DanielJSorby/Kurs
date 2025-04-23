<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
    import Input from '$lib/components/Input.svelte';
</script>

<div class="container">
    <header>
        <h1>MinSkole</h1>
        <p>Din digitale læringsplattform</p>
    </header>

    <main>
        <div class="content-grid">
            <section class="welcome-section">
                <h2>Velkommen til MinSkole</h2>
                <p>Din alt-i-ett plattform for læring og samarbeid. Logg inn for å:</p>
                <ul>
                    <li>Få tilgang til kursmateriale</li>
                    <li>Delta i diskusjoner</li>
                    <li>Levere oppgaver</li>
                    <li>Følge din progresjon</li>
                </ul>
            </section>

            <section class="auth-section">
                <Card title="Logg inn">
                    <div class="form-container">
                        <Input placeholder="din@epost.no" label="E-post" />
                        <Input type="password" placeholder="••••••••" label="Passord" />
                        <div class="button-group">
                            <Button variant="primary">Logg inn</Button>
                            <Button variant="ghost">Glemt passord?</Button>
                        </div>
                    </div>
                </Card>

                <Card title="Ny bruker?">
                    <p>Opprett en konto for å komme i gang med din digitale læring.</p>
                    <Button variant="secondary">Registrer deg</Button>
                </Card>
            </section>
        </div>
    </main>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    header {
        text-align: center;
        margin-bottom: 4rem;
    }

    h1 {
        font-size: 3.2rem;
        color: var(--color-theme-1);
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    header p {
        color: var(--color-text-2);
        font-size: 1.4rem;
    }

    .content-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
    }

    .welcome-section {
        padding: 2rem;
    }

    .welcome-section h2 {
        color: var(--color-text-1);
        margin-bottom: 1.5rem;
        font-size: 2.2rem;
    }

    .welcome-section p {
        color: var(--color-text-2);
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }

    .welcome-section ul {
        list-style-type: none;
        padding: 0;
    }

    .welcome-section li {
        color: var(--color-text-2);
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .welcome-section li::before {
        content: "•";
        color: var(--color-theme-1);
        font-weight: bold;
        margin-right: 0.5rem;
    }

    .auth-section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .button-group {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        .content-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
