import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/core/interfaces/comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: Comments;
  constructor() { }

  ngOnInit() {}

}
