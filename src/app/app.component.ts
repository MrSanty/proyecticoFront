import { Component } from '@angular/core';
import Alert from './helpers/Alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecticoFront';

  noFunciona( event: any ) {
    event.preventDefault();
    Alert.error('Oops...', 'Creo que al desarrolador le dio pereza esta parte');
  }
}
