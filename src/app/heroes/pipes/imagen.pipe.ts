import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe?: string): string {

    let img: string = 'assets/heroes/' + heroe + '.jpg';
    return img;

  }

}
