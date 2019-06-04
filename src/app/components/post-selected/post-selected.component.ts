import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css']
})
export class PostSelectedComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
