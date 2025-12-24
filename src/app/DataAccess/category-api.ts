import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../api.config';
import { lastValueFrom } from 'rxjs';

import { CategoryResponseModel } from '../Models/Categories/Response/CategoryResponseModel';
import { CreateCategoryRequestModel } from '../Models/Categories/CreateCategoryRequestModel';
import { UpdateCategoryRequestModel } from '../Models/Categories/UpdateCategoryRequestModel';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  private http = inject(HttpClient);
  private readonly url = `${apiConfig.baseUrl}/${apiConfig.endpoints.category}`;

  // Getlist
  async GetAll(): Promise<CategoryResponseModel> {
    return lastValueFrom(this.http.get<CategoryResponseModel>(this.url));
  }

  async Create(createCategoryRequestModel: CreateCategoryRequestModel): Promise<CategoryResponseModel> {
    return lastValueFrom(this.http.post<CategoryResponseModel>(this.url, createCategoryRequestModel));
  }

  async Delete(id: number): Promise<CategoryResponseModel> {
    return lastValueFrom(this.http.delete<CategoryResponseModel>(`${this.url}/${id}`));
  }

  async Update(updateCategoryRequestModel: UpdateCategoryRequestModel): Promise<CategoryResponseModel> {
    return lastValueFrom(this.http.put<CategoryResponseModel>(`${this.url}/${updateCategoryRequestModel.id}`, updateCategoryRequestModel));
  }
  
}
