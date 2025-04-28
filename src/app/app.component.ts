import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonHeader, IonContent, IonMenu, IonItem, IonIcon, IonLabel, IonTitle, IonList } from '@ionic/angular/standalone';
import { FooterPage } from "./shared/footer/footer.page";
import { addIcons , } from 'ionicons';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: 'app.component.html',
  imports: [   RouterLink ,IonList, IonTitle, IonLabel, IonIcon, IonItem, IonContent, IonHeader, IonToolbar, IonApp, IonRouterOutlet , IonMenu],
})
export class AppComponent {
  constructor() {
    addIcons({
      
    })
  }
}
