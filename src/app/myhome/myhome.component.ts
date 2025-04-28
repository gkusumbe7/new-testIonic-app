import { Component, OnInit } from '@angular/core';
import { IonTitle , IonToolbar, IonHeader, IonContent, IonButtons , IonMenuButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-myhome',
  standalone:true,
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss'],
  imports:[IonToolbar , IonHeader , IonTitle , IonContent , IonButtons , IonMenuButton]
})
export class MyhomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
