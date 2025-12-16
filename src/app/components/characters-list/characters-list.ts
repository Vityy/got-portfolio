import {Component, Input} from '@angular/core';
import {Characters} from '../../shared/models/characters.model';
import {SlugifyPipe} from '../../shared/pipes/slugify-pipe';
import {SuffixPipePipe} from '../../shared/pipes/suffix-pipe-pipe';

@Component({
  selector: 'app-characters-list',
  imports: [
    SlugifyPipe,
    SuffixPipePipe
  ],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList  {
  @Input() charactersFromParent! : Characters[];
}
