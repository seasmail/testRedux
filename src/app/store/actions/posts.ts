import { Action } from '@ngrx/store';
import {Post} from '../../models';

export const SELECT = '[Posts] Select';
export const ADD_ONE = '[Posts] Add One';
export const LOAD_POSTS = '[Posts] Load';
export const LOAD_SUCCESS = '[Posts] Success';
export const REMOVE = '[Posts] Remove';

export class Select implements Action {
  readonly type = SELECT;
  constructor(public payload: number) { }
}

export class LoadPosts implements Action {
  readonly type = LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class RemovePost implements Action {
  readonly type = REMOVE;
  constructor(public payload: number) {}
}
export type Action =  Select | LoadPosts | RemovePost | LoadPostsSuccess;
