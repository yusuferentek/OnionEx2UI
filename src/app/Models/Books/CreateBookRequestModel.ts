import { BaseBookRequestModel } from './BaseBookRequestModel';
export class CreateBookRequestModel extends BaseBookRequestModel {
  constructor(title: string, authorId: number, categoryId: number) {
    super(title, authorId, categoryId);
  }
}
