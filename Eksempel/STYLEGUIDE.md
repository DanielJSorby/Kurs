# Styleguide

## Fargepalett

### Primærfarger

-   `#FF3E00` - Primær aksent, brukes for CTA og viktige elementer
-   `#FDFFFF` - Primær tekstfarge
-   `#8D8D94` - Sekundær tekstfarge, brukes for mindre viktig innhold
-   `#1D1E23` - Hovedbakgrunnsfarge

### Bakgrunnsvariasjoner

-   `#25262b` - Bakgrunn nivå 1, brukes for kort og seksjoner
-   `#2d2e33` - Bakgrunn nivå 2, brukes for interaktive elementer

## Typografi

### Fonter

-   **Dress Code** - Overskrifter og navigasjon
    -   Vekter: 400 (regular), 500 (medium), 600 (semibold)
-   **EB Garamond** - Brødtekst og generelt innhold
    -   Vekter: 400 (regular), 500 (medium), 600 (semibold)
-   **Fira Code** - Kodeblokker og teknisk innhold
    -   Vekter: 400 (regular), 500 (medium)

### Størrelsesskala

-   H1: 3.2rem (Dress Code, 600)
-   H2: 2.2rem (Dress Code, 500)
-   H3: 1.6rem (Dress Code, 500)
-   Brødtekst: 1.1rem (EB Garamond, 400)
-   Knapper: 1rem (Dress Code, 500)
-   Labels: 1rem (Dress Code, 500)

## Komponenter

### Generelle Spesifikasjoner

-   Alle komponenter har en border radius på 26px for et konsistent, moderne utseende

### Button

```svelte
<Button variant="primary|secondary|ghost">Tekst</Button>
```

-   **Varianter:**
    -   `primary`: Oransje bakgrunn (#FF3E00)
    -   `secondary`: Transparent med oransje border
    -   `ghost`: Transparent med hover-effekt

### Card

```svelte
<Card title="Kort Tittel">Innhold her</Card>
```

-   Border radius: 26px
-   Padding: 1.5rem
-   Skygge: 0 4px 6px rgba(0, 0, 0, 0.3)
-   Hover: Subtle løft-effekt

### Input

```svelte
<Input
  type="text|password"
  label="Label tekst"
  placeholder="Placeholder tekst"
/>
```

-   Border radius: 26px
-   Border: 2px solid
-   Fokus-tilstand: Oransje outline med subtil glow

## CSS Variabler

```css
--color-bg-0: #1d1e23;
--color-bg-1: #25262b;
--color-bg-2: #2d2e33;
--color-theme-1: #ff3e00;
--color-theme-2: #ff5c2b;
--color-text-1: #fdffff;
--color-text-2: #8d8d94;
--font-heading: "Dress Code", serif;
--font-body: "EB Garamond", serif;
--font-code: "Fira Code", monospace;
--border-radius: 26px;
```
