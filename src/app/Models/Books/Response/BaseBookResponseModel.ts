export class BaseBookResponseModel {
  id: number;
  title: string;
  authorId: number;
  categoryId: number;
  createdDate: Date;
  updatedDate: Date;
  authorName: string;
  categoryName: string;
  constructor(
    id: number,
    title: string,
    authorId: number,
    categoryId: number,
    createdDate: Date,
    updatedDate: Date,
    authorName: string,
    categoryName: string
  ) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
    this.categoryId = categoryId;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.authorName = authorName;
    this.categoryName = categoryName;
  }
}
