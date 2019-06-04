import { Component } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Post} from './models/post';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as postAction from './store/actions/posts';
import {PostService} from './services/post.service';
import {State} from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts$: Observable<Post[]>;
  selected$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.posts$ = store.select(fromRoot.getAllPosts);
    this.selected$ = store.select(fromRoot.getSelectedPost);
    this.store.dispatch(new postAction.LoadPosts());
  }

  onSelect (id: number) {
    this.store.dispatch(new postAction.Select(id));
  }



  loadAllPosts() {
  }
}
