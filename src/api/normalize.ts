import type { Book, NormalizedBook } from '../types.ts';

export function normalizeBook(book: Book): NormalizedBook {
  return {
    id: book.key.replace('/works/', ''),
    title: book.title,
    authors: book.author_name ? book.author_name.join(', ') : 'Невідомий автор',
    year: book.first_publish_year || 'Рік невідомий',
    
    
    coverUrl: book.cover_i 
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` 
      : 'https://via.placeholder.com/250x350?text=Немає+обкладинки'
  };
}

export function normalizeBooks(books: Book[]): NormalizedBook[] {
  return books.map(normalizeBook);
}