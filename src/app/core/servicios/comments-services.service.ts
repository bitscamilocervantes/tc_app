import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comments } from '../interfaces/comments';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsServicesService {

  constructor(private http: HttpClient) { }

  comments:Comments[] = [];

  getRawComments(page:number = 0) : Observable<Comments[]>{
    let link = page > 0 ? '/pages/163?_fields=_links&_embed&per_page=5&page'+page : '/pages/163?_fields=_links&_embed' ;
    return this.http.get<any>(environment.bUrl_tc+link).pipe(
      map(item => {
        item = item._embedded.replies;
        item[0].forEach(i => {
          let comment:Comments;
          comment = {
            author_name: i.author_name,
            date: i.date,
            rendered_comment: i.content.rendered,
            avatar_url: i.author_avatar_urls[48],
            permalink: i.link
          };   
          this.comments.push(comment);  
        }); 
        return this.comments;
      })
    );
  }
}
