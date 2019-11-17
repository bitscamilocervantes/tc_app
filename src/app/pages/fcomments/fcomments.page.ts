import { Component, OnInit } from '@angular/core';
import { CommentsServicesService } from '../../core/servicios/comments-services.service';

@Component({
  selector: 'app-fcomments',
  templateUrl: './fcomments.page.html',
  styleUrls: ['./fcomments.page.scss'],
})
export class FcommentsPage implements OnInit {
  comments: any = [];
  

  constructor(
    protected commentService: CommentsServicesService
  ) { 
   
  }

  ngOnInit() {    
    this.commentService.getRawComments().subscribe(
      (data) => {
        this.comments = data['results'];
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
