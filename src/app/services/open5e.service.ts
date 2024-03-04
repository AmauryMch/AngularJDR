import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    search: "https://api.open5e.com/v1/search/?format=json"
  }

  public getAllClasses(): Observable<Object> {
    return this.http.get(this.apiRoutes.classes);
  }

  public getAllRaces(): Observable<Object> {
    return this.http.get(this.apiRoutes.races);
  }
}
