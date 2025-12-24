export const apiConfig = {
  baseUrl: 'http://localhost:7121/api',
  endpoints: {
    author: 'Author',
    book: 'Book',
    category: 'Category',
    tag: 'Tag',
    bookTag: 'BookTag',
  },
} as const;
