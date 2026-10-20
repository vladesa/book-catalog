export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
}


export interface NormalizedBook {
  id: string;
  title: string;
  authors: string;
  year: string | number;
  coverUrl: string;
}

export interface ApiResponse {
  numFound: number;
  docs: Book[];
}