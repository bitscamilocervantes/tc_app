import { Component, OnInit, ViewChild } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts';
import { PostsService } from 'src/app/core/servicios/posts.service';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-lnews',
  templateUrl: './lnews.page.html',
  styleUrls: ['./lnews.page.scss'],
})
export class LnewsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  posts:Posts[];
  title: string = "Últimas noticias";
  flag:boolean = true;
  page = 1;
  maximumPages = 3;

  constructor(
    protected postsService: PostsService, 
    ) { }

  fetchPosts(event?) {
    this.postsService.getRawPosts(this.page).subscribe(
      (data) => {
        this.flag = false;
        this.posts = data;
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
    this.fetchPosts(event);
 
    if (this.page === this.maximumPages) {
      event.target.disabled = true;
    }
  }

  ngOnInit() {                  
    this.fetchPosts();
  }

}
