import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Comments } from '../interfaces/comments';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsServicesService {

  //comments:any = [];

  constructor(private http: HttpClient) { }


  getRawComments(){
    return this.http.get<any>(`${environment.bUrl_tc}/pages/163?_fields=_links&_embed`).pipe(
      map(model => {
        //this.comments = model._embedded.replies;
        return model._embedded.replies;
      })
    );
  }
}
