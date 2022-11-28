import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  termino: string = '';
  heroes: Heroe[] = [];
  heroeEmpty: Heroe | undefined;

  ngOnInit(): void {
  }

  buscando(){

    this.heroesService.getSuggestions(this.termino.trim())
        .subscribe(resp => {
          this.heroes = resp;
        });

  }

  optionSelected(event: MatAutocompleteSelectedEvent){

    if(event.option.value){
      this.heroeEmpty = undefined;
      return;
    }

    const hero: Heroe = event.option.value;
    this.termino = hero.superhero;

    this.heroesService.getHeroesById(hero.id!).
                       subscribe(resp => {
                        this.heroeEmpty = resp
                       });
  }

}
