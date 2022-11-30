import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-adoptPet',
  templateUrl: './adoptPet.component.html',
  styleUrls: ['./adoptPet.component.css']
})
export class AdoptPetComponent implements OnInit {
  data: any = [];
  loading: boolean = true;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getAllPets();    
  }

  async getAllPets() {
    this.loading = true;
    this.data = [];
    setTimeout(async () => {
      const pets = await this.dataService.getAllPetsWithoutOwner();
      this.data = pets;
      this.loading = false;
    }, 1000);
  }

  async adoptPet( petId: number ) {
    const adopted = await this.dataService.adopteANewPet( petId );
    console.log( adopted );
    this.getAllPets();
  }

}
