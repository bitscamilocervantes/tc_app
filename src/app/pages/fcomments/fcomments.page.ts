import { Component, OnInit } from '@angular/core';
import { CommentsServicesService } from '../../core/servicios/comments-services.service';

@Component({
  selector: 'app-fcomments',
  templateUrl: './fcomments.page.html',
  styleUrls: ['./fcomments.page.scss'],
})
export class FcommentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hola");
  }

}
