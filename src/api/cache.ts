import type { ApiResponse } from '../types';

export const CacheManager = {
  
  set(query: string, data: ApiResponse): void {
    localStorage.setItem(`book_search_${query.toLowerCase()}`, JSON.stringify(data));
  },


  get(query: string): ApiResponse | null {
    const cached = localStorage.getItem(`book_search_${query.toLowerCase()}`);
    return cached ? JSON.parse(cached) : null;
  }
};