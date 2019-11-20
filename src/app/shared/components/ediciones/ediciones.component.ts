import { Component, OnInit, Input } from '@angular/core';
import { Ediciones } from '../../../core/interfaces/ediciones';

@Component({
  selector: 'app-edicion',
  templateUrl: './ediciones.component.html',
  styleUrls: ['./ediciones.component.scss'],
})
export class EdicionesComponent implements OnInit {
  @Input() edicion:Ediciones;
  @Input() digital:number;
  constructor() { }

  ngOnInit() {
    if(this.digital != 1){
      this.digital = null;
    }
  }

}
