import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  noFunciona(evt: any) {
    evt.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Creo que al desarrolador le dio pereza esta parte',
    })
  }

}
