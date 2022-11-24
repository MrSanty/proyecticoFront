import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecticoFront';

  noFunciona(evt: any) {
    evt.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Creo que el desarrolador le dio pereza esta parte',
      footer: '<a href="">Intentalo en otra ocacion..</a>'
    })
  }
}
