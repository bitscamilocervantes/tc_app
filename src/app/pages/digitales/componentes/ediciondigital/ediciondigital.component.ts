import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-ediciondigital',
  templateUrl: './ediciondigital.component.html',
  styleUrls: ['./ediciondigital.component.scss'],
})
export class EdiciondigitalComponent implements OnInit {
  @Input() post:Posts;

  constructor() { }

  async openURL(){
    await Browser.open({ url : this.post.link});
  }

  ngOnInit() {
    console.log(this.post);
  }

}
