<script lang="ts">
    interface Props {
        type?: string;
        placeholder?: string;
        label?: string;
        value?: string;
    }

    let {
        type = 'text',
        placeholder = '',
        label = '',
        value = $bindable('')
    }: Props = $props();
</script>

<div class="input-group">
    {#if label}
        <label for="input">{label}</label>
    {/if}
    <input
        {type}
        {placeholder}
        bind:value
        id="input"
    />
</div>

<style>
    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        color: var(--color-text-1);
        font-size: 1rem;
        font-weight: 500;
        font-family: var(--font-heading);
    }

    input {
        padding: 0.5rem 1rem;
        border: 2px solid var(--color-bg-2);
        border-radius: 4px;
        background: var(--color-bg-1);
        color: var(--color-text-1);
        font-size: 1.1rem;
        font-family: var(--font-body);
        transition: all 0.2s ease;
    }

    input:focus {
        outline: none;
        border-color: var(--color-theme-1);
        box-shadow: 0 0 0 2px rgba(var(--color-theme-1-rgb), 0.2);
        background: var(--color-bg-2);
    }

    input::placeholder {
        color: var(--color-text-2);
    }
</style> 