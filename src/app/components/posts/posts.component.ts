import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../../core/interfaces/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() post: Posts;
  constructor() { }

  ngOnInit() {}

}
