import { BaseTagViewModel } from './BaseTagViewModel';
export class CreateTagRequestModel extends BaseTagViewModel {
  constructor(name: string) {
    super(name);
  }
}
