import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/core/interfaces/posts';
import { PostsService } from 'src/app/core/servicios/posts.service';
import { EdicionesService } from 'src/app/core/servicios/ediciones.service';
import { Ediciones } from 'src/app/core/interfaces/ediciones';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-edicionesposts',
  templateUrl: './edicionesposts.page.html',
  styleUrls: ['./edicionesposts.page.scss'],
})
export class EdicionespostsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  id = null;
  posts:Posts[];
  edicion:Ediciones;
  nombre_edicion:string;
  title: string = "Noticias de la edición";
  flag:boolean = true;
  page = 1;
  maximumPages = 3;

  
  constructor(
    private activatedRoute: ActivatedRoute, 
    protected postsService: PostsService,
    protected edicionesService: EdicionesService
    ) { }

  fetchPostsByEdicionId(cid:number) {
    this.postsService.getPostsByCategoryId(cid,this.page).subscribe(
      (data) => {
        this.posts = data;
        this.flag = false;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchEdicionById(cid:number) {
    this.edicionesService.getEdicionById(cid).subscribe(
      (data) => {
        this.edicion = data;
        this.nombre_edicion = this.edicion.nombre;
        console.log(this.edicion.nombre);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadMore(event) {
    this.page++;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id > 0){
      this.fetchPostsByEdicionId(this.id);
    }
 
    if (this.page === this.maximumPages) {
      event.target.disabled = true;
    }
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id > 0){
      this.fetchPostsByEdicionId(this.id);
      this.fetchEdicionById(this.id);
    }
  }

}
