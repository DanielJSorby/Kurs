<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';
    import Input from '$lib/components/Input.svelte';
    
    function goBack() {
        history.back();
    }
</script>

<div class="container">
    <header>
        <h1>Komponent Fasit</h1>
        <p>Her er en oversikt over komponentene vi brukte i MinSkole-siden</p>
        <div class="nav-buttons">
            <a href="/"><Button variant="ghost">← Tilbake til hovedsiden</Button></a>
        </div>
    </header>

    <main>
        <section class="component-explanation">
            <h2>Kort (Card) Komponenten</h2>
            <div class="component-demo">
                <div class="component-preview">
                    <Card title="Eksempel på Card">
                        Dette er hvordan Card-komponenten ser ut. Den består av:
                        <ul>
                            <li>En tittel</li>
                            <li>Innhold i midten</li>
                            <li>Avrundede hjørner</li>
                            <li>Skyggeeffekt</li>
                        </ul>
                    </Card>
                </div>
                <div class="component-info">
                    <p>På hovedsiden brukte vi Card-komponenten to steder:</p>
                    <ul>
                        <li>Login-skjemaet</li>
                        <li>Registrerings-boksen</li>
                    </ul>
                    <code>&lt;Card title="Tittel"&gt;Innhold&lt;/Card&gt;</code>
                </div>
            </div>
        </section>

        <section class="component-explanation">
            <h2>Input Komponenten</h2>
            <div class="component-demo">
                <div class="component-preview">
                    <Input placeholder="Eksempel input" label="Standard Input" />
                    <Input type="password" placeholder="••••••••" label="Passord Input" />
                </div>
                <div class="component-info">
                    <p>Input-komponenten brukes for å samle inn data fra brukeren. Den har:</p>
                    <ul>
                        <li>En label over inputfeltet</li>
                        <li>Placeholder-tekst</li>
                        <li>Støtte for ulike typer (text, password)</li>
                    </ul>
                    <code>&lt;Input placeholder="tekst" label="Label" type="text" /&gt;</code>
                </div>
            </div>
        </section>

        <section class="component-explanation">
            <h2>Knapp (Button) Komponenten</h2>
            <div class="component-demo">
                <div class="component-preview">
                    <div class="button-group">
                        <Button variant="primary">Primær</Button>
                        <Button variant="secondary">Sekundær</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>
                <div class="component-info">
                    <p>Button-komponenten kommer i tre varianter:</p>
                    <ul>
                        <li>Primary: Hovedhandlinger (f.eks. "Logg inn")</li>
                        <li>Secondary: Alternative handlinger (f.eks. "Registrer")</li>
                        <li>Ghost: Subtile handlinger (f.eks. "Glemt passord")</li>
                    </ul>
                    <code>&lt;Button variant="primary"&gt;Tekst&lt;/Button&gt;</code>
                </div>
            </div>
        </section>

        <section class="tips">
            <Card title="Tips for å identifisere komponenter">
                <ul>
                    <li>Se etter gjentakende elementer med lik stil</li>
                    <li>Observer elementer som har samme struktur men ulikt innhold</li>
                    <li>Let etter interaktive elementer som knapper og input-felt</li>
                    <li>Merk deg elementer med konsistent styling og oppførsel</li>
                </ul>
            </Card>
        </section>
    </main>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .nav-buttons {
        margin-top: 1rem;
    }

    h1 {
        font-size: 3.2rem;
        color: var(--color-theme-1);
        margin-bottom: 0.5rem;
    }

    header p {
        color: var(--color-text-2);
        font-size: 1.4rem;
    }

    .component-explanation {
        margin-bottom: 4rem;
        background: var(--color-bg-1);
        border-radius: var(--border-radius);
        padding: 2rem;
    }

    h2 {
        color: var(--color-theme-1);
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }

    .component-demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-top: 1.5rem;
    }

    .component-preview {
        background: var(--color-bg-2);
        padding: 2rem;
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .component-info {
        color: var(--color-text-2);
    }

    .component-info p {
        margin-bottom: 1rem;
    }

    .component-info ul {
        list-style-type: none;
        padding: 0;
        margin-bottom: 1.5rem;
    }

    .component-info li {
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .component-info li::before {
        content: "•";
        color: var(--color-theme-1);
        position: absolute;
        left: 0;
    }

    code {
        display: block;
        padding: 1rem;
        background: var(--color-bg-0);
        border-radius: var(--border-radius);
        font-family: var(--font-code);
        margin-top: 1rem;
    }

    .button-group {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .tips {
        margin-top: 3rem;
    }

    .tips ul {
        list-style-type: none;
        padding: 0;
    }

    .tips li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .tips li::before {
        content: "→";
        color: var(--color-theme-1);
        position: absolute;
        left: 0;
    }

    @media (max-width: 768px) {
        .component-demo {
            grid-template-columns: 1fr;
        }
    }
</style> 