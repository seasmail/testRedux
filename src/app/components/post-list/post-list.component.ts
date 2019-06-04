import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {Observable} from 'rxjs';
import * as fromReducer from '../../store/reducers';
import { Store } from '@ngrx/store';
import {State} from '../../store/reducers';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnChanges {
  @Input() posts: Post[];
  @Input() label: String;
  @Output() select = new EventEmitter();

  constructor() {
  }



  ngOnInit() {
  }

  ngOnChanges(changes) {
  }
}
