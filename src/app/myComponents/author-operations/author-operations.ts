import { Component,inject,signal } from '@angular/core';
import { AuthorApi } from '../../DataAccess/author-api';
import { AuthorResponseModel } from '../../Models/Authors/Response/AuthorResponseModel';

@Component({
  selector: 'app-author-operations',
  imports: [],
  templateUrl: './author-operations.html',
  styleUrl: './author-operations.css',
})
export class AuthorOperations {
  private authorApi = inject(AuthorApi);
  authors = signal<AuthorResponseModel | null>(null);
}
