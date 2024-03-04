import { Component } from '@angular/core';
import { CharacterFormComponent } from "./character-form/character-form.component";
import { AttributeFormComponent } from "./attribute-form/attribute-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CharacterFormComponent, AttributeFormComponent]
})
export class AppComponent {
  title = 'AngularJDR';
}
