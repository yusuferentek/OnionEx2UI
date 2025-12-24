import { BaseResponseModel } from '../../BaseResponseModel';
import { BaseTagResponseModel } from './BaseTagResponseModel';

export class TagResponseModel extends BaseResponseModel<BaseTagResponseModel[]> {
  constructor(
    data: BaseTagResponseModel[],
    message: string,
    totalCount: number,
    isSuccess: boolean
  ) {
    super(data, message, totalCount, isSuccess);
  }
}
