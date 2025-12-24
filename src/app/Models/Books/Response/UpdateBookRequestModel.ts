import { BaseBookRequestModel } from '../BaseBookRequestModel';

export class UpdateBookRequestModel extends BaseBookRequestModel {
  id: number;
  constructor(id: number, title: string, authorId: number, categoryId: number) {
    super(title, authorId, categoryId);
    this.id = id;
  }
}
