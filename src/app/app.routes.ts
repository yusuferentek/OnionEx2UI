import { Routes } from '@angular/router';
import { AuthorOperations } from './myComponents/author-operations/author-operations';
import { BookOperations } from './myComponents/book-operations/book-operations';
import { CategoryOperations } from './myComponents/category-operations/category-operations';
import { TagOperations } from './myComponents/tag-operations/tag-operations';

export const routes: Routes = [
  { path: '', component: AuthorOperations },
  { path: 'book', component: BookOperations },
  { path: 'category', component: CategoryOperations },
  { path: 'tag', component: TagOperations },
];
