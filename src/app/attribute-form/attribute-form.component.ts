import { Component } from '@angular/core';
import { IRace } from '../interfaces/IRace';
import { Open5eService } from '../services/open5e.service';

@Component({
  selector: 'app-attribute-form',
  standalone: true,
  imports: [],
  templateUrl: './attribute-form.component.html',
  styleUrl: './attribute-form.component.css'
})
export class AttributeFormComponent {

  attributeValues: number[] = [];

  raceAttributes: IRace | null = null;

  constructor(private open5eService: Open5eService) { }

  ngOnInit(): void {
    this.open5eService.getRaceAttributesObservable().subscribe((attributes: IRace | null) => {
      console.log(attributes);
      if (attributes) {
        this.raceAttributes = attributes;
      }
    });
  }


  genererNombresAleatoires(): void {
    this.attributeValues = [];
    for (let i = 0; i < 6; i++) {
      this.attributeValues.push(Math.floor(Math.random() * 20) + 1);
    }
  }

}
