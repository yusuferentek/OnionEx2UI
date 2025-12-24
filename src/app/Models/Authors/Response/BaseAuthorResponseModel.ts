export class BaseAuthorResponseModel {
  id: number;
  name: string;
  surname: string;
  createdDate: Date;
  updatedDate: Date;
  constructor(id: number, name: string, surname: string, createdDate: Date, updatedDate: Date) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
  }
}