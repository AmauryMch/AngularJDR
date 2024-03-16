import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-form',
  standalone: true,
  imports: [],
  templateUrl: './attribute-form.component.html',
  styleUrl: './attribute-form.component.css'
})
export class AttributeFormComponent {

  attributeValues: number[] = [];

  genererNombresAleatoires(): void {
    this.attributeValues = [];
    for (let i = 0; i < 6; i++) {
      this.attributeValues.push(Math.floor(Math.random() * 20) + 1);
    }
  }

}
