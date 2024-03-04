import { Component } from '@angular/core';
import { CharacterFormComponent } from "./character-form/character-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CharacterFormComponent]
})
export class AppComponent {
  title = 'AngularJDR';
}
