import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from "./components/characters-list/characters-list";
import { Character } from './shared/service/character';
import { Characters } from './shared/models/characters.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // On injecte le servec précédemment créé.
  private characterService = inject(Character);
  private cdr = inject(ChangeDetectorRef);

  // On stock tous les personnages dans un tableau.
  protected characters!: Characters[]; // ! est pour indiquer qu'on initialise à rien

  protected stringTest: string = "Je suis une variable";

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((charactersFromApi: Characters[]) => {
      this.characters = charactersFromApi;
      this.cdr.detectChanges();
    });
  }
}
