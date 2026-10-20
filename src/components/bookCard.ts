import type { NormalizedBook } from '../types.ts';

export function createBookCard(book: NormalizedBook): HTMLAnchorElement {
  const card = document.createElement('a');
  card.href = `/details.html?id=${book.id}`;
  card.className = 'book-card';
  card.style.textDecoration = 'none';
  card.style.color = 'inherit';
  
  
  const rating = (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
  const pages = Math.floor(Math.random() * (500 - 200) + 200);

  card.innerHTML = `
    <img src="${book.coverUrl}" alt="Обкладинка книги ${book.title}" loading="lazy" />
    <div class="book-info">
      <h3>${book.title}</h3>
      <p style="margin-bottom: 1rem;"><strong>Автор:</strong> ${book.authors}</p>
      
      <!-- Блок з іконками (Рейтинг, Сторінки, Рік) -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border-color); font-size: 0.85rem; color: #64748b;">
        
        <div style="display: flex; align-items: center; gap: 0.25rem;">
          <svg width="16" height="16" fill="#f59e0b" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <span>${rating}</span>
        </div>

        <div style="display: flex; align-items: center; gap: 0.25rem;">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
          <span>${pages} стор.</span>
        </div>

        <div style="display: flex; align-items: center; gap: 0.25rem; color: #ef4444;">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          <span>${book.year}</span>
        </div>

      </div>
    </div>
  `;
  
  return card;
}