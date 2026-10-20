export function createSkeletonCard(): HTMLElement {
  const skeleton = document.createElement('article');
  skeleton.className = 'book-card skeleton-card';
  skeleton.innerHTML = `
    <div class="skeleton-img"></div>
    <div class="book-info">
      <div class="skeleton-text skeleton-title"></div>
      <div class="skeleton-text skeleton-author"></div>
      <div class="skeleton-text skeleton-year"></div>
    </div>
  `;
  return skeleton;
}

export function renderSkeletons(container: HTMLElement, count: number = 8): void {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    container.appendChild(createSkeletonCard());
  }
}