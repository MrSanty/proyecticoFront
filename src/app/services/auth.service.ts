import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  static isAuthenticated() {
    return localStorage.getItem( 'auth' ) || sessionStorage.getItem( 'auth' )
  }

  async login( id: number, username: string, rememberMe: boolean ) { 
    const user = await this.searchUser( id );
    if ( !user ) return false;
    if ( user.username !== username ) return false;

    return this.setSession( rememberMe, id, username );
  }

  logout() {
    localStorage.removeItem( 'auth' );
    sessionStorage.removeItem( 'auth' );
  }

  async searchUser( id: number ) {
    try{
      const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${ id }`);
      return user.data;
    } catch ( error ) {
      return null;
    }
  }

  async setSession( rememberMe: boolean, code: number, username: string ) {
    try {
      const { data } = await axios.post('http://localhost:8000/api/auth/', { code, username });
      if ( rememberMe ) localStorage.setItem( 'auth', JSON.stringify( data.token ));
      else sessionStorage.setItem( 'auth', JSON.stringify( data.token ));

      return true;
    } catch ( error ) {
      console.log( error );
      return false;
    }
  }
}
