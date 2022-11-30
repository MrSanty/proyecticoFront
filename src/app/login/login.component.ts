import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Alert from '../helpers/Alert';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId: number = 0;
  username: string = '';
  rememberMe: boolean = false;

  constructor( private authService: AuthService, private router: Router ) {}

  async login() {
    if (this.userId === 0 || this.username.length < 1) {
      Alert.error('Error', 'Por favor, ingrese su usuario y contraseña');
      return;
    }

    const login = await this.authService.login( this.userId, this.username, this.rememberMe );
    if ( login ) { 
      this.router.navigate(['/dashboard/pets']);
      Alert.success('Bienvenido', 'Iniciaste sesión correctamente');
    }
    else Alert.error('Error', 'Usuario o contraseña incorrectos');
  }

  checkCode( event: any ) {
    const code = parseInt( event.target.value );
    if ( !isNaN( code ) ) event.target.value = ( code < 1 ) ? 0 : code;
    else event.target.value = 0;
    this.userId = event.target.value;
  }
    

  noFunciona( event: any ) {
    event.preventDefault();
    Alert.error('Oops...', 'Creo que al desarrolador le dio pereza esta parte');
  }
}
