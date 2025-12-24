export abstract class BaseResponseModel<T> {
  data: T;
  message: string;
  totalCount: number;
  isSuccess: boolean;
  constructor(data: T, message: string, totalCount: number, isSuccess: boolean) {
    this.data = data;
    this.message = message;
    this.totalCount = totalCount;
    this.isSuccess = isSuccess;
  }
}
