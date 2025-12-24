export abstract class BaseResponseModel<T> {
  data: T;
  message: string;
  totalCount: number;
  constructor(data: T, message: string, totalCount: number) {
    this.data = data;
    this.message = message;
    this.totalCount = totalCount;
  }
}
