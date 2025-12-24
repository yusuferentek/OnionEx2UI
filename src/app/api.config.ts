export const apiConfig = {
  baseUrl: 'https://localhost:7121/api',
  endpoints: {
    author: 'Author',
    book: 'Book',
    category: 'Category',
    tag: 'Tag',
    bookTag: 'BookTag',
  },
} as const;
