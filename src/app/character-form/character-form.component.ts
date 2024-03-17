import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Open5eService } from '../services/open5e.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css',
})
export class CharacterFormComponent implements OnInit {
  classes: any;
  races: any;

  constructor(private open5eService: Open5eService) { }

  ngOnInit(): void {
    this.getAllClasses();
    this.getAllRaces();
  }

  getAllClasses() {
    this.open5eService.getAllClasses().subscribe((data: any) => {
      this.classes = data.results;
    });
  }

  getAllRaces() {
    this.open5eService.getAllRaces().subscribe((data: any) => {
      this.races = data.results;
    });
  }

  onRaceSelectionChange(event: any): void {
    const selectedRace = event?.target?.value;
    this.open5eService.fetchRaceAttributes(selectedRace);
  }
}
