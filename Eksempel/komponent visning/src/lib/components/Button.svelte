<script lang="ts">
    interface Props {
        variant?: 'primary' | 'secondary' | 'ghost';
        children?: import('svelte').Snippet;
    }

    let { variant = 'primary', children }: Props = $props();
</script>

<button class={variant}>
    {@render children?.()}
</button>

<style>
    button {
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease;
        font-family: var(--font-heading);
        font-size: 1rem;
        letter-spacing: 0.02em;
    }

    .primary {
        background-color: var(--color-theme-1);
        color: var(--color-text-1);
    }

    .primary:hover {
        background-color: var(--color-theme-2);
        transform: translateY(-1px);
    }

    .secondary {
        background-color: var(--color-bg-2);
        color: var(--color-text-1);
        border: 2px solid var(--color-theme-1);
    }

    .secondary:hover {
        background-color: var(--color-bg-1);
        transform: translateY(-1px);
    }

    .ghost {
        background-color: transparent;
        color: var(--color-text-1);
        border: 1px solid var(--color-bg-2);
    }

    .ghost:hover {
        background-color: var(--color-bg-1);
        transform: translateY(-1px);
    }
</style> 