import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-login',
  imports: [Footer, Header],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
