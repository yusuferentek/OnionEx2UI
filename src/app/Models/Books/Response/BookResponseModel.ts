import { BaseResponseModel } from '../../BaseResponseModel';
import { BaseBookResponseModel } from './BaseBookResponseModel';

export class BookResponseModel extends BaseResponseModel<BaseBookResponseModel[]> {
  constructor(
    data: BaseBookResponseModel[],
    message: string,
    totalCount: number,
    isSuccess: boolean
  ) {
    super(data, message, totalCount, isSuccess);
  }
}
