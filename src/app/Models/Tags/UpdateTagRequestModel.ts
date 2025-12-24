import { BaseTagViewModel } from './BaseTagViewModel';
export class UpdateTagRequestModel extends BaseTagViewModel {
  id: number;
  constructor(id: number, name: string) {
    super(name);
    this.id = id;
  }
}
