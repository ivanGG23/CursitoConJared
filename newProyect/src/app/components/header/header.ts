import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(
    private router: Router
  ) {}

  sendToLogin(event: Event) {
    event.preventDefault(); // previene que se muestren otras paginas y que solo se muestre la de login
    this.router.navigate(['login']);

  }
}
