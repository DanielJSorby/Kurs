<script>
  export let label = '';
  export let type = 'text';
  export let placeholder = '';
</script>

<div class="input-container">
  <label for={label}>{label}</label>
  <input {type} id={label} {placeholder} />
</div>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    color: var(--color-text-1);
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: 1rem;
  }

  input {
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--color-bg-2);
    border-radius: var(--border-radius);
    background-color: var(--color-bg-1);
    color: var(--color-text-1);
    font-family: var(--font-body);
    font-size: 1.1rem;
    transition: all 0.2s ease;
  }

  input:focus {
    outline: none;
    border-color: var(--color-theme-1);
    box-shadow: 0 0 0 2px rgba(255, 62, 0, 0.2);
  }

  input::placeholder {
    color: var(--color-text-2);
  }
</style>