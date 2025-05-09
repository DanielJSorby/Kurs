<script>
    let count = 0;

    function increment() {
        count += 1;
    }
</script>

<style>
    /* Bruker farger og stil direkte fra styleguiden */
    main {
        min-height: 100vh;
        background-color: #1D1E23; /* Hovedbakgrunnsfarge */
        color: #FDFFFF; /* Primær tekstfarge */
        font-family: "EB Garamond", serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-family: "Dress Code", serif;
        font-size: 3.2rem; /* H1 størrelse fra styleguiden */
        font-weight: 600;
        color: #FDFFFF; /* Primær tekstfarge */
        margin-bottom: 2rem;
    }

    button {
        background-color: #FF3E00; /* Primær aksentfarge */
        color: #FDFFFF; /* Primær tekstfarge */
        font-family: "Dress Code", serif;
        font-size: 1rem; /* Knappetekst størrelse fra styleguiden */
        font-weight: 500;
        border: none;
        border-radius: 26px; /* Border radius fra styleguiden */
        padding: 0.8rem 1.5rem;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;
    }

    button:hover {
        background-color: #FF5C2B; /* Hover-farge for knapper */
        transform: scale(1.05);
    }

    button:active {
        transform: scale(0.95);
    }

 

    p {
        font-family: "EB Garamond", serif;
        font-size: 1.1rem; /* Brødtekst størrelse fra styleguiden */
        color: #e9e9eb; /* Sekundær tekstfarge */
        margin-top: 1rem;
        text-align: center;
    }
</style>

<main>
    <h1>IF-BLOCKS</h1>
    <div class="boks">
        <button on:click={increment}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
        </button>

 
        {#if count > 10}    /* koden sier vis talet er større enn 10 så viser den teksten under */
            <p>{count} is greater than 10</p>
        {/if}

    </div>
</main>