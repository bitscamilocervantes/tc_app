import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/servicios/posts.service';
import { Posts } from 'src/app/core/interfaces/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-digitaldetalle',
  templateUrl: './digitaldetalle.page.html',
  styleUrls: ['./digitaldetalle.page.scss'],
})
export class DigitaldetallePage implements OnInit {
  id = null;
  posts:Posts[];
  title:string;

  constructor(
    protected postsService:PostsService,
    private activatedRoute: ActivatedRoute, 
  ) { }

  fetchPosts(cid:number) {
    this.postsService.getPostsByCategoryId(cid).subscribe(
      (data) => {
        if(data.length == 0){
          this.posts = null;
          this.title = 'Edición digital';
        }
        else{
          this.posts = data;
          this.title = data[0].title;
        }    
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id > 0){
      this.fetchPosts(this.id);
    }
  }

}
