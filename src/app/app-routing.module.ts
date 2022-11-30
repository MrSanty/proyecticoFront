import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptPetComponent } from './adoptPet/adoptPet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PetWithoutHouseComponent } from './petWithoutHouse/petWithoutHouse.component';

const routesDashboard: Routes = [
  { path: 'pets', component: AdoptPetComponent },
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: routesDashboard },
  { path: 'pets', component: PetWithoutHouseComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
