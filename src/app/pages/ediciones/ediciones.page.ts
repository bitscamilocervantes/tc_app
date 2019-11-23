import { Component, OnInit, ViewChild } from '@angular/core';
import { EdicionesService } from '../../core/servicios/ediciones.service';
import { Ediciones } from 'src/app/core/interfaces/ediciones';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-ediciones',
  templateUrl: './ediciones.page.html',
  styleUrls: ['./ediciones.page.scss'],
})
export class EdicionesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  ediciones:Ediciones[];
  title:string = 'Archivo de noticias';
  flag:boolean = true;
  page = 1;
  maximumPages = 3;

  constructor(
    protected edicionesService:EdicionesService
    ) { }

  fetchEdiciones(event?) {
    this.edicionesService.getRawEdiciones(1617,this.page).subscribe(
      (data) => {
        this.ediciones = data;
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
    this.fetchEdiciones(event);
 
    if (this.page === this.maximumPages) {
      event.target.disabled = true;
    }
  }

  ngOnInit() {
    this.fetchEdiciones();
  }

  
}
