import { BaseResponseModel } from "../../BaseResponseModel";
import { BaseAuthorResponseModel } from "./BaseAuthorResponseModel";

export class AuthorResponseModel extends BaseResponseModel<BaseAuthorResponseModel[]> {
  constructor(
    data: BaseAuthorResponseModel[],
    message: string,
    totalCount: number,
    isSuccess: boolean
  ) {
    super(data, message, totalCount, isSuccess);
  }
}
