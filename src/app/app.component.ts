import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Últimas noticias',
      url: '',
      icon: 'home'
    },
    {
      title: 'Comentarios destacados',
      url: '/featured_comments',
      icon: 'chatbubbles'
    },
    {
      title: 'Archivo de noticias',
      url: '/ediciones',
      icon: 'archive'
    },
    {
      title: 'Ediciones digitales',
      url: '/digitales',
      icon: 'paper'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
