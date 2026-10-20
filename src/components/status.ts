export function renderError(container: HTMLElement, message: string): void {
  container.innerHTML = `
    <div style="text-align: center; color: var(--error-color); padding: 2rem; background: #fee2e2; border-radius: 0.5rem; margin-top: 2rem;">
      <h3>❌ Помилка пошуку</h3>
      <p>${message}</p>
    </div>
  `;
}

export function clearStatus(container: HTMLElement): void {
  container.innerHTML = '';
}