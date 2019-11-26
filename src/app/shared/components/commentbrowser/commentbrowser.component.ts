import { Component, OnInit, Input } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-commentbrowser',
  templateUrl: './commentbrowser.component.html',
  styleUrls: ['./commentbrowser.component.scss'],
})
export class CommentbrowserComponent implements OnInit {
  @Input() url: string;
  @Input() text:string;
  @Input() slot:string;
  constructor() { }

  async openURL(){
    await Browser.open({ url : this.url});
  }

  ngOnInit() {}

}
