<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import Input from '$lib/components/input.svelte';
    console.log('Hello World');
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
        font-family: var(--font-heading);
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
        font-family: var(--font-heading);
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
        font-family: var(--font-body);
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
</style>