export async function initDetailsPage(): Promise<void> {
  const detailsContainer = document.getElementById('book-details') as HTMLElement;
  const loadingState = document.getElementById('loading-state') as HTMLElement;
  const errorState = document.getElementById('error-state') as HTMLElement;

  if (!detailsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('id');

  if (!bookId) {
    loadingState.classList.add('hidden');
    errorState.classList.remove('hidden');
    errorState.textContent = 'Книгу не знайдено.';
    return;
  }

  try {
    const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
    if (!response.ok) throw new Error('Помилка завантаження даних.');
    
    const data = await response.json();
    
    const description = typeof data.description === 'string' 
      ? data.description 
      : data.description?.value || 'Опис для цієї книги відсутній у базі даних.';

    
    const coverId = data.covers && data.covers.length > 0 ? data.covers[0] : null;
    const coverUrl = coverId 
      ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` 
      : 'https://via.placeholder.com/350x500?text=Немає+обкладинки';

    
    detailsContainer.innerHTML = `
      <div class="details-layout">
        <div class="details-image">
          <img src="${coverUrl}" alt="Обкладинка ${data.title}" />
        </div>
        <div class="details-content">
          <h2>${data.title}</h2>
          <div class="description">${description}</div>
        </div>
      </div>
    `;
  } catch (error: any) {
    errorState.classList.remove('hidden');
    errorState.textContent = error.message;
  } finally {
    loadingState.classList.add('hidden');
  }
}