import { BaseAuthorViewModel } from './BaseAuthorViewModel';

export class UpdateAuthorRequestModel extends BaseAuthorViewModel {
  id: number;
  constructor(id: number, name: string, surname: string) {
    super(name, surname);
    this.id = id;
  }
}
