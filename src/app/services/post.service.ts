import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../models';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const api = 'https://jsonplaceholder.typicode.com';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${api}/posts`)
      .pipe(catchError((err: any) => Observable.throw(err.json())));
  }
}
