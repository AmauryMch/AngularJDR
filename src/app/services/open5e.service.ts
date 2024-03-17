import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRace } from '../interfaces/IRace';

@Injectable({
  providedIn: 'root'
})
export class Open5eService {

  constructor(private http: HttpClient) { }

  private apiRoutes: any = {
    manifest: "https://api.open5e.com/v1/manifest/?format=json",
    spells: "https://api.open5e.com/v1/spells/?format=json",
    spelllist: "https://api.open5e.com/v1/spelllist/?format=json",
    monsters: "https://api.open5e.com/v1/monsters/?format=json",
    documents: "https://api.open5e.com/v1/documents/?format=json",
    backgrounds: "https://api.open5e.com/v1/backgrounds/?format=json",
    planes: "https://api.open5e.com/v1/planes/?format=json",
    sections: "https://api.open5e.com/v1/sections/?format=json",
    feats: "https://api.open5e.com/v1/feats/?format=json",
    conditions: "https://api.open5e.com/v1/conditions/?format=json",
    races: "https://api.open5e.com/v1/races/?format=json",
    classes: "https://api.open5e.com/v1/classes/?format=json",
    magicitems: "https://api.open5e.com/v1/magicitems/?format=json",
    weapons: "https://api.open5e.com/v1/weapons/?format=json",
    armor: "https://api.open5e.com/v1/armor/?format=json",
    search: "https://api.open5e.com/v1/search/?format=json",
    racesByName: "https://api.open5e.com/races/?age=&age__icontains=&age__\
    iexact=&alignment=&alignment__icontains=&alignment__iexact=\
    &asi_desc=&asi_desc__icontains=&asi_desc__iexact=&desc=&desc__\
    icontains=&desc__iexact=&desc__in=&document__slug=&document__slug_\
    _iexact=&document__slug__in=&document__slug__not_in=&format=json&\
    languages=&languages__icontains=&languages__iexact=&name=&name__iexact\
    =&size=&size__icontains=&size__iexact=&slug=&slug__iexact=",
    racesByNameNext: "&slug__in=&speed_desc=&speed_desc__icontains=&speed_desc__iexact=&traits=&traits\
    __icontains=&traits__iexact=&vision=&vision__icontains=&vision__iexact=",
  }

  private _raceAttributes: BehaviorSubject<IRace | null> = new BehaviorSubject<IRace | null>(null);

  public getAllClasses(): Observable<Object> {
    return this.http.get(this.apiRoutes.classes);
  }

  public getAllRaces(): Observable<Object> {
    return this.http.get(this.apiRoutes.races);
  }

  public getAllBackgrounds(): Observable<Object> {
    return this.http.get(this.apiRoutes.backgrounds);
  }

  public getRaceByNames(raceName: String): Observable<Object> {
    return this.http.get(this.apiRoutes.racesByName + raceName + this.apiRoutes.racesByNameNext)
  }


  fetchRaceAttributes(selectedRace: string) {
    if (selectedRace) {
      const raceAttributes: IRace = {
        force: '',
        dexterite: '',
        constitution: '',
        intelligence: '',
        sagesse: '',
        charisme: ''
      };
      this.getRaceByNames(selectedRace).subscribe((data: any) => {
        if (data.results && data.results.length > 0) {
          data.results[0].asi.forEach((attribute: any) => {
            switch (attribute.attributes[0]) {
              case 'Strength':
                raceAttributes.force = attribute.value;
                break;
              case 'Dexterity':
                raceAttributes.dexterite = attribute.value;
                break;
              case 'Constitution':
                raceAttributes.constitution = attribute.value;
                break;
              case 'Intelligence':
                raceAttributes.intelligence = attribute.value;
                break;
              case 'Wisdom':
                raceAttributes.sagesse = attribute.value;
                break;
              case 'Charisma':
                raceAttributes.charisme = attribute.value;
                break;
            }
          });
          this._raceAttributes.next(raceAttributes);
        }
      });
    }
  }

  getRaceAttributesObservable(): Observable<IRace | null> {
    return this._raceAttributes.asObservable();
  }

}