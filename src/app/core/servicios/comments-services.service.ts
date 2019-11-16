import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Comments } from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsServicesService {

  constructor(private http: HttpClient) { }


  getRawComments(){
    return this.http.get<Comments>(`${environment.bUrl_tc}/pages/163?_fields=_links&_embed`);
  }
}
