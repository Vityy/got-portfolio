import { Component, Input } from '@angular/core';
import { Characters } from '../../shared/models/characters.model';
import { EmojiPipePipe } from "../../pipes/emoji-pipe-pipe";

@Component({
  selector: 'app-characters-list',
  imports: [EmojiPipePipe],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  @Input() charactersFromApi!: Characters[];
}
