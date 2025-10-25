import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { CardCourse } from "../../components/card-course/card-course";

@Component({
  selector: 'app-lading',
  imports: [Header, CardCourse],
  templateUrl: './lading.html',
  styleUrl: './lading.css'
})
export class Lading {

}
