import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<Posts[]> {
  return this
      .httpClient
      .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
