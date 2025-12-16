import {
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {Characters} from '../../shared/models/characters.model';
import {Continents} from '../../shared/models/continents.model';
import {ContinentsService} from '../../shared/services/continents-service';
import {CharacterService} from '../../shared/services/character';
import {CharactersList} from '../characters-list/characters-list';
import {ContinentsList} from '../continents-list/continents-list';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    CharactersList,
    ContinentsList,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  // Accès à un élément HTML par sa référence (#searchInput dans notre cas).
  @ViewChild('searchInput') private input! : ElementRef<HTMLInputElement>

  // On injecte les services précédemment créé.
  private charactersService = inject(CharacterService);
  private continentsService = inject(ContinentsService);
  private cdr = inject(ChangeDetectorRef);

  // Toutes nos variables de template.
  private subscriptions : Subscription[] = [];
  protected charactersToGiveToChild!: Characters[];
  protected continentsToGiveToChild!: Continents[];
  protected filteredCharacters!: Characters[];

  // On subscribe() uniquement sur les Observables.
  ngOnInit() {
    this.getCharactersInTemplate();
    this.getAllContinentsInTemplate();
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  protected onSearch(term: string) : void {
    this.filteredCharacters = this.charactersToGiveToChild.filter((character: Characters) => {
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase())
    })
  }

  private getAllContinentsInTemplate () {
    this.subscriptions.push(this.continentsService.getAllContinents().subscribe((continentsFromApi: Continents[]) => {
      this.continentsToGiveToChild = continentsFromApi;
      this.cdr.detectChanges();
    }));
  }

  private getCharactersInTemplate () {
    this.subscriptions.push(this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[]) => {
      this.charactersToGiveToChild = charactersFromApi;
      this.filteredCharacters = charactersFromApi;
      this.cdr.detectChanges();
    }));
  }

  ngOnDestroy () {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
