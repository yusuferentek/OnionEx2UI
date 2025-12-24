import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../api.config';
import { lastValueFrom } from 'rxjs';

import { BookResponseModel } from '../Models/Books/Response/BookResponseModel';
import { CreateBookRequestModel } from '../Models/Books/CreateBookRequestModel';
import { UpdateBookRequestModel } from '../Models/Books/Response/UpdateBookRequestModel';

@Injectable({ providedIn: 'root' })
export class BookApi {
  private http = inject(HttpClient);
  private readonly url = `${apiConfig.baseUrl}/${apiConfig.endpoints.book}`;

  async GetAll(): Promise<BookResponseModel> {
    return lastValueFrom(this.http.get<BookResponseModel>(this.url));
  }

  async Create(createBookRequestModel: CreateBookRequestModel): Promise<BookResponseModel> {
    return lastValueFrom(this.http.post<BookResponseModel>(this.url, createBookRequestModel));
  }

  async Delete(id: number): Promise<BookResponseModel> {
    return lastValueFrom(this.http.delete<BookResponseModel>(`${this.url}/${id}`));
  }

  async Update(updateBookRequestModel: UpdateBookRequestModel): Promise<BookResponseModel> {
    return lastValueFrom(
      this.http.put<BookResponseModel>(
        `${this.url}/${updateBookRequestModel.id}`,
        updateBookRequestModel
      )
    );
  }
}
