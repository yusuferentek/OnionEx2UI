import { BaseCategoryViewModel } from "./BaseCategoryViewModel";
export class CreateCategoryRequestModel extends BaseCategoryViewModel {
  constructor(name: string) {
    super(name);
  }
}