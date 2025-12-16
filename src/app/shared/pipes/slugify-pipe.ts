import { Pipe, PipeTransform } from '@angular/core';

// Décorateur Pipe.
@Pipe({
  name: 'slugify', // Nom de la pipe.
})
export class SlugifyPipe implements PipeTransform {

  // Méthode transform OBLIGATOIRE pour créer une pipe. On transforme la valeur.
  transform(value: string |undefined  ): string | undefined  {
    if (!value) return '';
    return value.toLowerCase().replace(/\s+/g, '-');
  }

}
