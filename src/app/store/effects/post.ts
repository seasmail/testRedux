import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap} from 'rxjs/operators';
import * as postActions from '../actions/posts';
import {PostService} from '../../services/post.service';
import {Observable} from 'rxjs';
import {Action} from 'rxjs/internal/scheduler/Action';

@Injectable()
export class Post {
  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}

  @Effect()
  loadPosts$ = this.actions$.pipe(
    ofType(postActions.LOAD_POSTS),
    switchMap(() => {
      return this.postService.getPosts()
        .pipe(
          map(posts => new postActions.LoadPostsSuccess(posts))
        );
    })
  );

}
