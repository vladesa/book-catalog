import { describe, it, expect } from 'vitest';
import { normalizeBook, normalizeBooks } from '../src/api/normalize';
import type { Book } from '../src/types';

describe('Нормалізація однієї книги (normalizeBook)', () => {
  it('має замінювати відсутню обкладинку на плейсхолдер', () => {
    const book: Book = { 
      key: '/works/OL123W', 
      title: 'Книга без картинки' 
    };
    const result = normalizeBook(book);
    expect(result.coverUrl).toContain('via.placeholder.com');
  });

  it('має генерувати правильне посилання на обкладинку, якщо є cover_i', () => {
    const book: Book = { 
      key: '/works/OL123W', 
      title: 'Книга з обкладинкою', 
      cover_i: 123456 
    };
    const result = normalizeBook(book);
    expect(result.coverUrl).toBe('https://covers.openlibrary.org/b/id/123456-L.jpg');
  });

  it('має підставляти "Невідомий автор", якщо авторів немає у відповіді API', () => {
    const book: Book = { 
      key: '/works/OL123W', 
      title: 'Анонімна книга' 
    };
    const result = normalizeBook(book);
    expect(result.authors).toBe('Невідомий автор');
  });
});

describe('Нормалізація списку книг (normalizeBooks)', () => {
  it('має повертати порожній масив, якщо передано порожній масив', () => {
    expect(normalizeBooks([])).toEqual([]);
  });

  it('має успішно обробляти масив з кількох книг', () => {
    const books: Book[] = [
      { key: '/works/1', title: 'Книга 1' },
      { key: '/works/2', title: 'Книга 2', author_name: ['Автор 2'] }
    ];
    const result = normalizeBooks(books);
    
    expect(result.length).toBe(2);
    expect(result[0].id).toBe('1');
    expect(result[1].authors).toBe('Автор 2');
  });
});