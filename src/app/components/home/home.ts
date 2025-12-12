import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { Character } from '../../shared/service/character';
import { Continent } from '../../shared/service/continent';
import { Characters } from '../../shared/models/characters.model';
import { Continents } from '../../shared/models/continents.model';
import { ContinentsList } from "../continents-list/continents-list";
import { CharactersList } from "../characters-list/characters-list";

@Component({
  selector: 'app-home',
  imports: [ContinentsList, CharactersList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  // On injecte le service précédemment créé.
  private characterService = inject(Character);
  private cdr = inject(ChangeDetectorRef);

  private continentService = inject(Continent);

  // On stock tous les personnages dans un tableau.
  protected characters!: Characters[]; // ! est pour indiquer qu'on initialise à rien
  protected continents!: Continents[];
  protected filteredCharacters!: Characters[];
  protected filteredCharactersCount!: number;
  protected filteredCharactersString = signal(0);

  protected isToggled = false;

  protected onExerciceClick(){
    this.isToggled = !this.isToggled;
  }

  ngOnInit(): void {
    this.getAllContinentsInTemplate();
    this.getCharactersInTemplate();
  }

  protected onSearch(term: string) : void {
    this.filteredCharacters = this.characters.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase());
    })

    this.filteredCharactersCount = this.filteredCharacters.length;
    this.filteredCharactersString.update(signal(this.filteredCharactersCount));
  }

  private getAllContinentsInTemplate(){
    this.continentService.getContinents().subscribe((continentsFromApi: Continents[]) => {
      this.continents = continentsFromApi;
      this.cdr.detectChanges();
    })
  }

  private getCharactersInTemplate(){
    this.characterService.getCharacters().subscribe((charactersFromApi: Characters[]) => {
      this.characters = charactersFromApi;
      this.filteredCharacters = charactersFromApi;
      this.filteredCharactersCount = this.filteredCharacters.length;
      this.filteredCharactersString.update(signal(this.filteredCharactersCount));
      this.cdr.detectChanges();
    });
  }
}
