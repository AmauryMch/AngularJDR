import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {

  characterForm = new FormGroup({
    characterName: new FormControl(''),
    classAndLevel: new FormControl(''),
    race: new FormControl(''),
    background: new FormControl(''),
    alignment: new FormControl(''),
    playerName: new FormControl(''),
    experiencePoints: new FormControl(''),
  })

  selectedRace = "";

  onSelected(value: string): void {
    this.selectedRace = value;
  }

}
