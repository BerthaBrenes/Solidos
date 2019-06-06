import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video4',
  templateUrl: './video4.page.html',
  styleUrls: ['./video4.page.scss'],
})
export class Video4Page implements OnInit {

  trustedVideoUrl: SafeResourceUrl;
  

    constructor(public navCtrl: NavController,
                private domSanitizer: DomSanitizer) {
                  
                }

  
  ngOnInit() {
  }

}
