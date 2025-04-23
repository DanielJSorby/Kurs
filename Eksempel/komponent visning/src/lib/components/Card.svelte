<script lang="ts">
    interface Props {
        title: string;
        children?: import('svelte').Snippet;
    }

    let { title, children }: Props = $props();
</script>

<div class="card">
    <h3>{title}</h3>
    <div class="content">
        {@render children?.()}
    </div>
</div>

<style>
    .card {
        background: var(--color-bg-1);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        width: 100%;
        max-width: 400px;
        border: 1px solid var(--color-bg-2);
        transition: transform 0.2s ease;
    }

    .card:hover {
        transform: translateY(-2px);
    }

    h3 {
        color: var(--color-theme-1);
        margin: 0 0 1rem 0;
        font-size: 1.6rem;
        font-weight: 500;
        font-family: var(--font-heading);
    }

    .content {
        color: var(--color-text-1);
        line-height: 1.6;
        font-size: 1.1rem;
    }
</style> 