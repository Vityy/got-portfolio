import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from "./components/characters-list/characters-list";
import { Character } from './shared/service/character';
import { Characters } from './shared/models/characters.model';
import { ContinentsList } from "./components/continents-list/continents-list";
import { Continent } from './shared/service/continent';
import { Continents } from './shared/models/continents.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList, ContinentsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // On injecte le service précédemment créé.
  private characterService = inject(Character);
  private cdr = inject(ChangeDetectorRef);

  private continentService = inject(Continent);

  // On stock tous les personnages dans un tableau.
  protected characters!: Characters[]; // ! est pour indiquer qu'on initialise à rien
  protected continents!: Continents[];

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((charactersFromApi: Characters[]) => {
      this.characters = charactersFromApi;
      this.cdr.detectChanges();
    });

    this.continentService.getContinents().subscribe((continentsFromApi: Continents[]) => {
      this.continents = continentsFromApi;
      this.cdr.detectChanges();
    })
  }
}
