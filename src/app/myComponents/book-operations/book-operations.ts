import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookApi } from '../../DataAccess/book-api';
import { BookResponseModel } from '../../Models/Books/Response/BookResponseModel';
import { CreateBookRequestModel } from '../../Models/Books/CreateBookRequestModel';
import { UpdateBookRequestModel } from '../../Models/Books/Response/UpdateBookRequestModel';
import { AuthorResponseModel } from '../../Models/Authors/Response/AuthorResponseModel';
import { CategoryResponseModel } from '../../Models/Categories/Response/CategoryResponseModel';
import { AuthorApi } from '../../DataAccess/author-api';
import { CategoryApi } from '../../DataAccess/category-api';
@Component({
  selector: 'app-book-operations',
  imports: [DatePipe, FormsModule],
  templateUrl: './book-operations.html',
  styleUrl: './book-operations.css',
})
export class BookOperations {
  private bookApi = inject(BookApi);
  private authorApi = inject(AuthorApi);
  private categoryApi = inject(CategoryApi);

  books = signal<BookResponseModel | null>(null);
  createBookRequestModel = signal<CreateBookRequestModel>(new CreateBookRequestModel('', 0, 0));
  authorList = signal<AuthorResponseModel | null>(null);
  categoryList = signal<CategoryResponseModel | null>(null);
  editBookRequestModel = signal<UpdateBookRequestModel>(new UpdateBookRequestModel(0, '', 0, 0));
  async ngOnInit() {
    const books = await this.getBooks();
    this.books.set(books);
    const authors = await this.getAuthorList();
    this.authorList.set(authors);
    const categories = await this.getCategoryList();
    this.categoryList.set(categories);
  }
  async getBooks(): Promise<BookResponseModel> {
    const books = await this.bookApi.GetAll();
    return books;
  }

  async getAuthorList(): Promise<AuthorResponseModel> {
    const authors = await this.authorApi.GetAll();
    return authors;
  }
  async getCategoryList(): Promise<CategoryResponseModel> {
    const categories = await this.categoryApi.GetAll();
    return categories;
  }
  async createBook() {
    const response = await this.bookApi.Create(this.createBookRequestModel());
    if (response.isSuccess) {
      const books = await this.getBooks();
      this.books.set(books);
    }
  }
  async deleteBook(id: number) {
    const response = await this.bookApi.Delete(id);
    if (response.isSuccess) {
      const books = await this.getBooks();
      this.books.set(books);
    }
  }
  async editBook(id: number) {
    const book = this.books()?.data.find((b) => b.id === id);
    if (book) {
      this.editBookRequestModel.set(
        new UpdateBookRequestModel(book.id, book.title, book.authorId, book.categoryId)
      );
    }
  }
  async cancelEdit() {
    this.editBookRequestModel.set(new UpdateBookRequestModel(0, '', 0, 0));
  }
  async updateBook() {
    const response = await this.bookApi.Update(this.editBookRequestModel());
    if (response.isSuccess) {
      const books = await this.getBooks();
      this.books.set(books);
    }
  }
}
