import { Component, OnInit } from '@angular/core';
import { EdicionesService } from '../../core/servicios/ediciones.service';
import { Ediciones } from 'src/app/core/interfaces/ediciones';

@Component({
  selector: 'app-ediciones',
  templateUrl: './ediciones.page.html',
  styleUrls: ['./ediciones.page.scss'],
})
export class EdicionesPage implements OnInit {
  ediciones:Ediciones[];
  title:string = 'Ediciones';

  constructor(
    protected edicionesService:EdicionesService
    ) { }

  fetchEdiciones() {
    this.edicionesService.getRawEdiciones().subscribe(
      (data) => {
        this.ediciones = data;
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
