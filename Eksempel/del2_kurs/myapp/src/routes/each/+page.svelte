<script>
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; /* color liste */
    let selected = colors[0]; // Endret fra $state til vanlig variabel
</script>
<main>
    <h1>Each</h1> 
    <h2 style="color: {selected}">Pick a colour</h2>

    <div>
        {#each colors as color, i} 
    <!-- går gjennom hver farge i colors-lista og kall hver farge for color og i er nummeret 
         på fargen i lista som 0, 1, 2 -->
            <button
                style="background: {color}"
                aria-label={color}
                aria-current={selected === color}
                on:click={() => (selected = color)}
            >
                {i + 1} <!--dette betyr ta nummeret i og legg til 1 -->
            </button>
        {/each}
    </div>
</main>



<style>
    main{
        min-height: 100vh;
        background-color: #1D1E23; /* Hovedbakgrunnsfarge */
        color: #FDFFFF; /* Primær tekstfarge */
        font-family: "EB Garamond", serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    /* Overskrift */
    h1 {
        font-family: "Dress Code", serif; /* Font fra styleguiden */
        font-size: 3.2rem; /* H1 størrelse fra styleguiden */
        font-weight: 600; /* Semibold */
        color: #FDFFFF; /* Primær tekstfarge */
        text-align: center;
        margin-bottom: 2rem;
    }

    h2 {
        transition: color 0.2s;
        font-size: 2.5rem; /* H2 størrelse fra styleguiden */
        font-weight: 600; /* Semibold */
        font-family: "Dress Code", serif; /* Font fra styleguiden */
        color: #FDFFFF; /* Primær tekstfarge */
        text-align: center;
        margin-bottom: 1rem;
    }

    /* Grid for knappene */
    div {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 10px;
        max-width: 400px;
        margin: 0 auto;
    }

    /* Knappestil */
    button {
        aspect-ratio: 1;
        border-radius: 26px; /* Border radius fra styleguiden */
        background: #25262B; /* Bakgrunn nivå 1 */
        transform: translate(-2px, -2px);
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
        transition: all 0.1s;
        color: #FDFFFF; /* Primær tekstfarge */
        font-family: "Dress Code", serif; /* Font fra styleguiden */
        font-weight: 500; /* Medium */
        font-size: 2rem; /* Knappe-størrelse fra styleguiden */
        cursor: pointer;
        border: none;
    }

    /* Hover-effekt for knapper */
    button:hover {
        transform: scale(1.05);
        filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.3));
        background: #2D2E33; /* Bakgrunn nivå 2 */
    }

    /* Aktiv knapp */
    button[aria-current="true"] {
        transform: none;
        filter: none;
        box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
        background-color: #FF3E00; /* Primær aksentfarge */
        color: #FDFFFF; /* Primær tekstfarge */
    }
</style>