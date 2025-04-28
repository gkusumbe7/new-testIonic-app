import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonHeader, IonContent, IonMenu, IonItem, IonIcon, IonLabel, IonTitle, IonList } from '@ionic/angular/standalone';
import { FooterPage } from "./shared/footer/footer.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonList, IonTitle, IonLabel, IonIcon, IonItem, IonContent, IonHeader, IonToolbar, IonApp, IonRouterOutlet , IonMenu],
})
export class AppComponent {
  constructor() {}
}
