import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentsServicesService } from '../../core/servicios/comments-services.service';
import { Comments } from 'src/app/core/interfaces/comments';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-fcomments',
  templateUrl: './fcomments.page.html',
  styleUrls: ['./fcomments.page.scss'],
})
export class FcommentsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  comments:Comments[] = [];
  title: string = "Comentarios destacados";
  flag:boolean = true;
  page = 1;
  maximumPages = 3;

  constructor(
    protected commentService: CommentsServicesService
  ) { 
   
  }

  fetchComments(event?) {
    this.commentService.getRawComments(this.page).subscribe(
      (data) => {
        this.comments = data;
        this.flag = false;
        console.log(data);
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }


  loadMore(event) {
    this.page++;
    this.fetchComments(event);
 
    if (this.page === this.maximumPages) {
      event.target.disabled = true;
    }
  }

  ngOnInit() {    
    this.fetchComments();
  }

}
