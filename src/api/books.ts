import type { ApiResponse } from '../types';
import { CacheManager } from './cache';

export async function fetchBooksQuery(query: string): Promise<ApiResponse> {
  
  const cachedData = CacheManager.get(query);
  if (cachedData) {
    console.log('Отримано з кешу! 🚀');
    return cachedData;
  }

  
  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=12`);
  
  if (!response.ok) {
    throw new Error('Помилка підключення до сервера. Спробуйте пізніше.');
  }

  const data: ApiResponse = await response.json();

  if (data.docs.length === 0) {
    throw new Error('За вашим запитом нічого не знайдено. Спробуйте іншу назву.');
  }

  
  CacheManager.set(query, data);

  return data;
}