import { Component, input } from '@angular/core';

//mis cambios
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-course',
  imports: [],
  templateUrl: './card-course.html',
  styleUrl: './card-course.css'
})
export class CardCourse {
  @Input() nombre: String = '';
  @Input() imagen: String = '';
  @Input() descripcion: String = '';
}
