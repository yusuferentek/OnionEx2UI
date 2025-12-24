import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../api.config';
import { lastValueFrom } from 'rxjs';

import { TagResponseModel } from '../Models/Tags/Response/TagResponseModel';
import { CreateTagRequestModel } from '../Models/Tags/CreateTagRequestModel';
import { UpdateTagRequestModel } from '../Models/Tags/UpdateTagRequestModel';

@Injectable({ providedIn: 'root' })
export class TagApi {
  private http = inject(HttpClient);
  private readonly url = `${apiConfig.baseUrl}/${apiConfig.endpoints.tag}`;

  async GetAll(): Promise<TagResponseModel> {
    return lastValueFrom(this.http.get<TagResponseModel>(this.url));
  }

  async Create(createTagRequestModel: CreateTagRequestModel): Promise<TagResponseModel> {
    return lastValueFrom(this.http.post<TagResponseModel>(this.url, createTagRequestModel));
  }

  async Delete(id: number): Promise<TagResponseModel> {
    return lastValueFrom(this.http.delete<TagResponseModel>(`${this.url}/${id}`));
  }

  async Update(updateTagRequestModel: UpdateTagRequestModel): Promise<TagResponseModel> {
    return lastValueFrom(
      this.http.put<TagResponseModel>(
        `${this.url}/${updateTagRequestModel.id}`,
        updateTagRequestModel
      )
    );
  }
}
