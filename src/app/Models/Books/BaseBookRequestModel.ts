export class BaseBookRequestModel {
  title: string;
  authorId: number;
  categoryId: number;
  constructor(title: string, authorId: number, categoryId: number) {
    this.title = title;
    this.authorId = authorId;
    this.categoryId = categoryId;
  }
}
