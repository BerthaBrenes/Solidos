import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Conceptos Basicos',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Fuerzas',
      url: '/conceptos',
      icon: 'list'
    },
    {
      title: 'Esfuerzos y Deformaciones',
      url: '/esfuerzos',
      icon: 'list'
    },
    {
      title: 'Solicitudes Especiales',
      url: '/solicitudes',
      icon: 'list'
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
