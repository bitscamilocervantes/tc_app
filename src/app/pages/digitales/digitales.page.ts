import { Component, OnInit, ViewChild } from '@angular/core';
import { EdicionesService } from 'src/app/core/servicios/ediciones.service';
import { Ediciones } from 'src/app/core/interfaces/ediciones';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-digitales',
  templateUrl: './digitales.page.html',
  styleUrls: ['./digitales.page.scss'],
})
export class DigitalesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  title:string = 'Ediciones digitales';
  ediciones_digitales:Ediciones[];
  flag:boolean = true;
  page = 1;
  maximumPages = 3;

  constructor(
    protected edicionesService:EdicionesService
  ) { }

  fetchEdiciones(event?) {
    this.edicionesService.getRawEdiciones(1619, this.page).subscribe(
      (data) => {
        this.ediciones_digitales = data;
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
