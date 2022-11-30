import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-petWithoutHouse',
  templateUrl: './petWithoutHouse.component.html',
  styleUrls: ['./petWithoutHouse.component.css']
})
export class PetWithoutHouseComponent implements OnInit {

  constructor( private dataService: DataService ) { }
  ngOnInit() {
    this.getAllPets();
  }

  async getAllPets() {
    const pets = await this.dataService.getAllPetsWithoutOwner();
    console.log( pets );
  }

}
