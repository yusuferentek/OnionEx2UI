import { Component, inject, signal } from '@angular/core';
import { AuthorApi } from '../../DataAccess/author-api';
import { AuthorResponseModel } from '../../Models/Authors/Response/AuthorResponseModel';
import { CreateAuthorRequestModel } from '../../Models/Authors/CreateAuthorRequestModel';
import { UpdateAuthorRequestModel } from '../../Models/Authors/UpdateAuthorRequestModel';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-author-operations',
  imports: [DatePipe, FormsModule],
  templateUrl: './author-operations.html',
  styleUrl: './author-operations.css',
})
export class AuthorOperations {
  private authorApi = inject(AuthorApi);
  authors = signal<AuthorResponseModel | null>(null);

  createAuthorRequestModel = signal<CreateAuthorRequestModel>(new CreateAuthorRequestModel('', ''));
  async ngOnInit() {
    const authors = await this.getAuthors();
    this.authors.set(authors);
  }
  async getAuthors(): Promise<AuthorResponseModel> {
    const authors = await this.authorApi.GetAll();
    return authors;
  }
  async createAuthor() {
    console.log(this.createAuthorRequestModel());
    const response = await this.authorApi.Create(this.createAuthorRequestModel());
    if (response.isSuccess) {
      this.createAuthorRequestModel.set(new CreateAuthorRequestModel('', ''));
      const authors = await this.getAuthors();
      this.authors.set(authors);
    }
  }
  async deleteAuthor(id: number) {
    const response = await this.authorApi.Delete(id);
    if (response.isSuccess) {
      const authors = await this.getAuthors();
      this.authors.set(authors);
    }
  }
  async editAuthor(id: number) {
    const author = this.authors()?.data.find((a) => a.id === id);
    if (author) {
      this.editAuthorRequestModel.set(
        new UpdateAuthorRequestModel(author.id, author.name, author.surname)
      );
    }
  }
  async updateAuthor() {
    console.log(this.editAuthorRequestModel());
    const response = await this.authorApi.Update(this.editAuthorRequestModel());
    if (response.isSuccess) {
      const authors = await this.getAuthors();
      this.authors.set(authors);
    } else {
      alert(response.message);
    }
  }
  async cancelEdit() {
    this.editAuthorRequestModel.set(new UpdateAuthorRequestModel(0, '', ''));
  }
  editAuthorRequestModel = signal<UpdateAuthorRequestModel>(
    new UpdateAuthorRequestModel(0, '', '')
  );
}
