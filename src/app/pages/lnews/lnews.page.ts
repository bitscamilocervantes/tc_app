import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts';
import { PostsService } from 'src/app/core/servicios/posts.service';

@Component({
  selector: 'app-lnews',
  templateUrl: './lnews.page.html',
  styleUrls: ['./lnews.page.scss'],
})
export class LnewsPage implements OnInit {
  posts:Posts[];
  title: string = "Últimas noticias";

  constructor(protected postsService: PostsService) { }

  fetchPosts() {
    this.postsService.getRawPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.fetchPosts();
  }

}
