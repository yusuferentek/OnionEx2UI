export class BaseTagResponseModel {
  id: number;
  name: string;
  createdDate: Date;
  updatedDate: Date;
  constructor(id: number, name: string, createdDate: Date, updatedDate: Date) {
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
  }
}