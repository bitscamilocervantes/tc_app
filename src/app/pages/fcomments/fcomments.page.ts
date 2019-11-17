import { Component, OnInit } from '@angular/core';
import { CommentsServicesService } from '../../core/servicios/comments-services.service';
import { Comments } from 'src/app/core/interfaces/comments';

@Component({
  selector: 'app-fcomments',
  templateUrl: './fcomments.page.html',
  styleUrls: ['./fcomments.page.scss'],
})
export class FcommentsPage implements OnInit {
  comments:Comments[] = [];
  title: string = "Comentarios destacados";

  constructor(
    protected commentService: CommentsServicesService
  ) { 
   
  }

  fetchComments() {
    this.commentService.getRawComments().subscribe(
      (data) => {
        this.comments = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {    
    this.fetchComments();
  }

}
