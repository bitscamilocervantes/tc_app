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

  getRawPosts(page:number = 0) : Observable<Posts[]>{
    this.posts = page > 0 ? this.posts : [];
    let link:string = (page > 0 ? '/posts?categories=1615&_embed&_fields=date,link,title,content,excerpt,_links,_embedded&per_page=5&page='+page : '/posts?categories=1615&_embed&_fields=date,link,title,content,excerpt,_links,_embedded' )
    return this.http.get<any>(environment.bUrl_tc+link).pipe(
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

  getPostsByCategoryId(id:number,page:number = 0) : Observable<Posts[]>{
    this.posts = page > 0 ? this.posts : [];
    let link:string = page > 0 ? '/posts?categories='+id+'&_embed&_fields=date,link,title,content,excerpt,_links,_embedded&per_page=5&page='+page : '/posts?categories='+id+'&_embed&_fields=date,link,title,content,excerpt,_links,_embedded';
    return this.http.get<any>(environment.bUrl_tc+link).pipe(
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
