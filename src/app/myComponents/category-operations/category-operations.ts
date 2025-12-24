import { Component, inject, signal } from '@angular/core';
import { CategoryApi } from '../../DataAccess/category-api';
import { DatePipe } from '@angular/common';
import { CreateCategoryRequestModel } from '../../Models/Categories/CreateCategoryRequestModel';
import { FormsModule } from '@angular/forms';
import { CategoryResponseModel } from '../../Models/Categories/Response/CategoryResponseModel';
import { UpdateCategoryRequestModel } from '../../Models/Categories/UpdateCategoryRequestModel';
@Component({
  selector: 'app-category-operations',
  imports: [DatePipe, FormsModule],
  templateUrl: './category-operations.html',
  styleUrl: './category-operations.css',
})
export class CategoryOperations {
  private categoryApi = inject(CategoryApi);

  categories = signal<CategoryResponseModel | null>(null);
  createCategoryRequestModel = signal<CreateCategoryRequestModel>(new CreateCategoryRequestModel(''));
  async ngOnInit() {
    const categories = await this.getCategories();
    this.categories.set(categories);
  }
  async getCategories(): Promise<CategoryResponseModel> {
    const categories = await this.categoryApi.GetAll();
    return categories;
  }
  async createCategory() {
    console.log(this.createCategoryRequestModel());
    const response = await this.categoryApi.Create(this.createCategoryRequestModel());
    if(response.isSuccess) {
      this.createCategoryRequestModel.set(new CreateCategoryRequestModel(''));
      const categories = await this.getCategories();
      this.categories.set(categories);
    }else{
      alert(response.message);
      this.createCategoryRequestModel.set(new CreateCategoryRequestModel(''));
    }
  }


  async deleteCategory(id: number) {
    const response = await this.categoryApi.Delete(id);
    if(response.isSuccess) {
      const categories = await this.getCategories();
      this.categories.set(categories);
    }else{
      alert(response.message);
    }
  }

  editCategoryRequestModel = signal<UpdateCategoryRequestModel>(new UpdateCategoryRequestModel(0, ''));
  async editCategory(id: number) {
    const category = this.categories()?.data.find(c => c.id === id);
    if(category) {
      this.editCategoryRequestModel.set(new UpdateCategoryRequestModel(category.id, category.name));
    }
  }

  async updateCategory() {
    const response = await this.categoryApi.Update(this.editCategoryRequestModel());
    if(response.isSuccess) {
      const categories = await this.getCategories();
      this.categories.set(categories);
    }else{
      alert(response.message);
    }
  }
}
