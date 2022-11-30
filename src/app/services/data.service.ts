import { Injectable } from '@angular/core';
import axios from 'axios';
import Alert from '../helpers/Alert';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    axios.defaults.baseURL = 'http://localhost:8000/api/';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem( 'auth' ) || sessionStorage.getItem( 'auth' );
  }

  updateTokenOnClient( token: string ) {
    ( localStorage.getItem( 'auth' ) ) ? localStorage.setItem( 'auth', token ) : sessionStorage.setItem( 'auth', token );
  }

  /* Pets */
  async getAllPetsWithoutOwner() {
    try {
      const { data: { token, pets }} = await axios.get('pet/');
      this.updateTokenOnClient( token );
      return Object.values( pets );
    } catch ( error: any ) {
      Alert.error('Ups! Algo salió mal', error.response.data.message );
      return null;
    }
  }

  async createNewPet( code: number, name: string, age: number, type: string ) {
    try {
      const { data: { token }} = await axios.post('pet/', { code, name, age, type });
      this.updateTokenOnClient( token );
      return true;
    } catch ( error: any ) {
      Alert.error('Ups! Algo salió mal', error.response.data.message );
      return null;
    }
  }

  /* Client */
  async getAllClientPets() {
    try {
      const { data: { token, pets } } = await axios.get('client/');
      this.updateTokenOnClient( token );
      return Object.values( pets );
    } catch ( error: any ) {
      Alert.error('Ups! Algo salió mal', error.response.data.message );
      return null;
    }
  }

  async adopteANewPet( code: number ) {
    try {
      const { data: { token } } = await axios.post(`client/${code}`);
      this.updateTokenOnClient( token );
      return true;
    } catch ( error: any ) {
      Alert.error('Ups! Algo salió mal', error.response.data.message );
      return null;
    }
  }

  async updateOwnerPetName( code: number, name: string ) {
    try {
      const { data: { token } } = await axios.put(`client/${code}`, { name });
      this.updateTokenOnClient( token );
      return true;
    } catch ( error: any ) {
      Alert.error('Ups! Algo salió mal', error.response.data.message );
      return null;
    }
  }

  async deleteOwnerPet( code: number ) {
    try {
      const { data: { token } } = await axios.delete(`client/${code}`);
      this.updateTokenOnClient( token );
      return true;
    } catch ( error: any ) {
      Alert.error('Ups! Algo salió mal', error.response.data.message );
      return null;
    }
  }
}
