import { Component, OnInit } from '@angular/core';
import { EdicionesService } from 'src/app/core/servicios/ediciones.service';
import { Ediciones } from 'src/app/core/interfaces/ediciones';

@Component({
  selector: 'app-digitales',
  templateUrl: './digitales.page.html',
  styleUrls: ['./digitales.page.scss'],
})
export class DigitalesPage implements OnInit {
  title:string = 'Ediciones digitales';
  ediciones_digitales:Ediciones[];

  constructor(
    protected edicionesService:EdicionesService
  ) { }

  fetchEdiciones() {
    this.edicionesService.getRawEdiciones(1619).subscribe(
      (data) => {
        this.ediciones_digitales = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    this.fetchEdiciones();
  }

}
