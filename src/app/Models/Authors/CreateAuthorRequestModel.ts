import { BaseAuthorViewModel } from "./BaseAuthorViewModel";

export class CreateAuthorRequestModel extends BaseAuthorViewModel {
  constructor(name: string, surname: string) {
    super(name, surname);
  }
}