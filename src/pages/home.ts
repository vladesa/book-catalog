import { fetchBooksQuery } from '../api/books.ts';
import { normalizeBooks } from '../api/normalize.ts';
import { createBookCard } from '../components/bookCard.ts';
import { renderSkeletons } from '../components/skeleton.ts';
import { renderError, clearStatus } from '../components/status.ts';

export function initHomePage(): void {
  const searchForm = document.getElementById('search-form') as HTMLFormElement;
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const booksContainer = document.getElementById('books-container') as HTMLElement;
  const errorState = document.getElementById('error-state') as HTMLElement;
  const loadingState = document.getElementById('loading-state') as HTMLElement;

  if (!searchForm) return;

  loadingState.style.display = 'none';

  
  async function loadInitialBooks() {
    try {
      renderSkeletons(booksContainer, 8);
      
      
      const lastQuery = sessionStorage.getItem('lastQuery') || 'The Hunger Games';
      
      
      if (sessionStorage.getItem('lastQuery')) {
        searchInput.value = lastQuery;
      }

      const data = await fetchBooksQuery(lastQuery);
      const normalizedData = normalizeBooks(data.docs);
      
      booksContainer.innerHTML = '';
      normalizedData.forEach(book => {
        booksContainer.appendChild(createBookCard(book));
      });
    } catch (error) {
      booksContainer.innerHTML = '';
    }
  }

  
  loadInitialBooks();

  
  searchForm.addEventListener('submit', async (event: SubmitEvent) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    
    if (query) {
      try {
        errorState.classList.add('hidden');
        clearStatus(errorState);
        renderSkeletons(booksContainer, 8);

        const data = await fetchBooksQuery(query);
        const normalizedData = normalizeBooks(data.docs);
        
       
        sessionStorage.setItem('lastQuery', query);

        booksContainer.innerHTML = '';
        normalizedData.forEach(book => {
          booksContainer.appendChild(createBookCard(book));
        });

      } catch (error: any) {
        booksContainer.innerHTML = '';
        errorState.classList.remove('hidden');
        renderError(errorState, error.message);
      }
    }
  });
}