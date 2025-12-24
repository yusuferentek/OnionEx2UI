import { Component, inject, signal } from '@angular/core';
import { TagApi } from '../../DataAccess/tag-api';
import { TagResponseModel } from '../../Models/Tags/Response/TagResponseModel';
import { CreateTagRequestModel } from '../../Models/Tags/CreateTagRequestModel';
import { UpdateTagRequestModel } from '../../Models/Tags/UpdateTagRequestModel';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tag-operations',
  imports: [DatePipe, FormsModule],
  templateUrl: './tag-operations.html',
  styleUrl: './tag-operations.css',
})
export class TagOperations {
  private tagApi = inject(TagApi);
  tags = signal<TagResponseModel | null>(null);
  createTagRequestModel = signal<CreateTagRequestModel>(new CreateTagRequestModel(''));
  editTagRequestModel = signal<UpdateTagRequestModel>(new UpdateTagRequestModel(0, ''));
  async ngOnInit() {
    const tags = await this.getTags();
    this.tags.set(tags);
  }
  async getTags(): Promise<TagResponseModel> {
    const tags = await this.tagApi.GetAll();
    return tags;
  }
  async createTag() {
    const response = await this.tagApi.Create(this.createTagRequestModel());
    if (response.isSuccess) {
      const tags = await this.getTags();
      this.tags.set(tags);
    }
  }
  async deleteTag(id: number) {
    const response = await this.tagApi.Delete(id);
    if (response.isSuccess) {
      const tags = await this.getTags();
      this.tags.set(tags);
    }
  }
  async editTag(id: number) {
    const tag = this.tags()?.data.find((t) => t.id === id);
    if (tag) {
      this.editTagRequestModel.set(new UpdateTagRequestModel(tag.id, tag.name));
    }
  }
  async cancelEdit() {
    this.editTagRequestModel.set(new UpdateTagRequestModel(0, ''));
  }
  async updateTag() {
    const response = await this.tagApi.Update(this.editTagRequestModel());
    if (response.isSuccess) {
      const tags = await this.getTags();
      this.tags.set(tags);
    }
  }
}
