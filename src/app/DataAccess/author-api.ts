import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../api.config';
import { lastValueFrom } from 'rxjs';

import { AuthorResponseModel } from '../Models/Authors/Response/AuthorResponseModel';
import { CreateAuthorRequestModel } from '../Models/Authors/CreateAuthorRequestModel';
import { UpdateAuthorRequestModel } from '../Models/Authors/UpdateAuthorRequestModel';

@Injectable({ providedIn: 'root' })
export class AuthorApi {
  private http = inject(HttpClient);
  private readonly url = `${apiConfig.baseUrl}/${apiConfig.endpoints.author}`;

  async GetAll(): Promise<AuthorResponseModel> {
    return lastValueFrom(this.http.get<AuthorResponseModel>(this.url));
  }

  async Create(createAuthorRequestModel: CreateAuthorRequestModel): Promise<AuthorResponseModel> {
    return lastValueFrom(this.http.post<AuthorResponseModel>(this.url, createAuthorRequestModel));
  }

  async Delete(id: number): Promise<AuthorResponseModel> {
    return lastValueFrom(this.http.delete<AuthorResponseModel>(`${this.url}/${id}`));
  }

  async Update(updateAuthorRequestModel: UpdateAuthorRequestModel): Promise<AuthorResponseModel> {
    return lastValueFrom(
      this.http.put<AuthorResponseModel>(
        `${this.url}/${updateAuthorRequestModel.id}`,
        updateAuthorRequestModel
      )
    );
  }
}
