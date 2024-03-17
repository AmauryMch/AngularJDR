import { Component } from '@angular/core';
import { CharacterFormComponent } from "./character-form/character-form.component";
import { AttributeFormComponent } from "./attribute-form/attribute-form.component";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CharacterFormComponent, AttributeFormComponent]
})
export class AppComponent {
  title = 'AngularJDR';

  save() {
    const element = document.getElementById('contentToConvert');
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const pdfWidth = 210;

    const pdfButton = document.getElementById('pdfButton');
    const dicebutton = document.getElementById('dice')!;

    if (pdfButton) {
      pdfButton.style.display = 'none';
      dicebutton.style.display = 'none';
    }

    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const img = new Image();
        img.src = imgData;

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        const ratio = pdfWidth / imgWidth;
        const pdfHeight = imgHeight * ratio;

        const pdf = new jsPDF('p', 'mm', 'a4');

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        pdf.save(`fiche_personnage_${date}.pdf`);

        if (pdfButton) {
          pdfButton.style.display = 'block';
          dicebutton.style.display = 'block';
        }
      });
    } else {
      console.error('Element with id "contentToConvert" not found.');
    }
  }

}
