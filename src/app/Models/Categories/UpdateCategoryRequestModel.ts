import { BaseCategoryViewModel } from './BaseCategoryViewModel';

export class UpdateCategoryRequestModel extends BaseCategoryViewModel {
  id: number;
  constructor(id: number, name: string) {
    super(name);
    this.id = id;
  }
}
