import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import {Post} from '../../models';
import * as postAction from '../../store/actions/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.store.dispatch(new postAction.RemovePost(id));
  }


}
