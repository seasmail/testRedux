import {Post} from '../../models/post';
import {Action, ActionReducer} from '@ngrx/store';
import * as postAction from '../actions/posts';
import construct = Reflect.construct;

export interface State {
 /* ids: number[];
  posts: {[id: number]: Post};
  */
 posts: Post[];
 selected: number;
}

export const initialState: State = {
  // ids: [],
  posts: [],
  selected: null
  /*ids: [1, 2, 3],
  posts: {
    1: {userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur' +
        ' expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    2: {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil ' +
        'vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    3: {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel ac' +
        'cusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    }
  },
  selected: null,*/
};

export function reducer(state = initialState,
                        action: postAction.Action) {
  switch (action.type) {
    case postAction.LOAD_SUCCESS: {
      const posts: Post[] = action.payload;

      return {
        ...state,
        posts: posts
      };
    }
    case postAction.REMOVE: {
      const id = action.payload;

    }
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      }
    case postAction.SELECT: {
      const id = action.payload;

      return {
        ...state,
        selected: id
      };
    }
    default:
      return state;
  }
}

export const getPosts = (state: State) => state.posts;
export const getSelected = (state: State) => state.selected;



