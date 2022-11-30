import { Component, OnInit } from '@angular/core';
import Alert from '../helpers/Alert';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-petWithoutHouse',
  templateUrl: './petWithoutHouse.component.html',
  styleUrls: ['./petWithoutHouse.component.css']
})
export class PetWithoutHouseComponent implements OnInit {
  data: any = [];
  loading: boolean = true;
  name: string = '';
  age: number = 0;
  type: string = '';

  constructor( private dataService: DataService ) { }
  ngOnInit() {
    this.getAllPets();
  }

  async getAllPets() {
    this.loading = true;
    setTimeout(async () => {
      const pets = await this.dataService.getAllPetsWithoutOwner();
      console.log(pets);
      this.data = pets;
      this.loading = false;
    }, 1000);
  }

  async addPet() {
    if ( this.name === '' && this.age === 0 && this.type === '' ) Alert.error('¡Error!', 'Todos los campos son requeridos');
    await this.dataService.createNewPet( this.name, this.age, this.type );
    await Alert.success('¡Muy bien!', 'Se ha creado una nueva mascota');
    this.getAllPets();
  }

}
