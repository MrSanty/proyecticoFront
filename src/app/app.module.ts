import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './home/home.component';
import { AdoptPetComponent } from './adoptPet/adoptPet.component';
import { PetWithoutHouseComponent } from './petWithoutHouse/petWithoutHouse.component';
import { MyPetsComponent } from './myPets/myPets.component';

@NgModule({
  declarations: [						
    AppComponent,
    LoginComponent,
      DashboardComponent,
      HomeComponent,
      AdoptPetComponent,
      PetWithoutHouseComponent,
      MyPetsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
