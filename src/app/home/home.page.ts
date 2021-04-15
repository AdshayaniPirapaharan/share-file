import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Share } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  async basicShare() {
    await Share.share({
      title: 'Report On .......',
      text: 'Find the report below in the attachemnt',
      url: 'https://ionicacademy.com/'
     


    });
  }

  async shareLocalFile() {

  }



}
