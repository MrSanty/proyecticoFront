import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  routerLink: string = 'Mis mascotas';

  constructor( private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute ) { 
    // @ts-ignore
    if ( this.activatedRoute.snapshot.routeConfig.path === 'mypets' ) this.routerLink = 'Adoptar mascota';
    else this.routerLink = 'Mis mascotas';
  }

  ngOnInit() {
  }

  link() {
    if ( this.routerLink === 'Mis mascotas' ) {
      this.router.navigate(['/dashboard/mypets']);
      this.routerLink = 'Adoptar mascota';
    } else {
      this.router.navigate(['/dashboard/pets']);
      this.routerLink = 'Mis mascotas';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }
}
