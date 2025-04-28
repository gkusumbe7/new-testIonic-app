import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonSearchbar, IonCard, IonImg, IonButtons , IonMenuButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButtons,  IonCard, IonHeader ,IonSearchbar, IonAvatar, IonToolbar , IonContent ,IonTitle , IonMenuButton]
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
    
  }
  
}
