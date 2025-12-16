import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiPipe',
})
export class EmojiPipePipe implements PipeTransform {

  transform(value: string): string {
    return value + ' ⚔️';
  }

}
