import { Component, OnInit } from '@angular/core';
import Alert from '../helpers/Alert';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-myPets',
  templateUrl: './myPets.component.html',
  styleUrls: ['./myPets.component.css']
})
export class MyPetsComponent implements OnInit {
  data: any = [];
  loading: boolean = true;
  id: number = 0;
  name: string = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getAllOwnerPets();
  }

  async getAllOwnerPets() {
    this.loading = true;
    this.data = [];
    setTimeout(async () => {
      const pets = await this.dataService.getAllClientPets();
      this.data = pets;
      this.loading = false;
    }, 1000);
  }

  selectPet( petId: number ) {
    this.id = petId;
  }

  async updatePetName() {
    if ( this.name === '' ) Alert.error('¡Error!', 'El nombre no puede estar vacío');
    const updated = await this.dataService.updateOwnerPetName( this.id, this.name );
    console.log( updated );
    this.getAllOwnerPets(); 
  }

  async deletePet( petId: number ) {
    if ( await Alert.delete() ) {
      await this.dataService.deleteOwnerPet( petId );
      this.getAllOwnerPets();
    }
  }
}
