import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Posts } from '../interfaces/posts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  posts:Posts[] = [];

  getRawPosts() : Observable<Posts[]>{
    return this.http.get<any>(environment.bUrl_tc+'/posts?categories=1615&_embed&_fields=date,link,title,content,excerpt,_links,_embedded').pipe(
      map(data => {        
        data.forEach(i => {
          let post:Posts;
          post = {
            date: i.date,
            link: i.link,
            title: i.title.rendered,
            content: i.content.rendered,
            excerpt: i.excerpt.rendered,
            featured_media_thumb: i._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url,
            featured_media_full: i._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url,
          };   
          this.posts.push(post);  
        }); 
        return this.posts;
      })
    );
  }

  getPostsByCategoryId(id:number) : Observable<Posts[]>{
    return this.http.get<any>(environment.bUrl_tc+'/posts?categories='+id+'&_embed&_fields=date,link,title,content,excerpt,_links,_embedded').pipe(
      map(data => {        
        data.forEach(i => {
          let post:Posts;
          post = {
            date: i.date,
            link: i.link,
            title: i.title.rendered,
            content: i.content.rendered,
            excerpt: i.excerpt.rendered,
            featured_media_thumb: i._embedded['wp:featuredmedia'] != null ? i._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : '',
            featured_media_full: i._embedded['wp:featuredmedia'] != null ? i._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url: '',
          };   
          this.posts.push(post);  
        }); 
        return this.posts;
      })
    );
  }
}
