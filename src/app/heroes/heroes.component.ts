import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[];

  getHeroes(): void {

    // this.heroes = this.heroService.getHeroes(); -- for array
    
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(salutation: string, name: string, designation: string): void {

    salutation = salutation.trim();
    name = name.trim();
    designation = designation.trim();
    if (!name) { return; }
    this.heroService.addHero({ salutation, name, designation } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // selectedHero: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  
  // constructor() { }
  constructor(private heroService: HeroService) { }

  // ngOnInit() {
  // }
  ngOnInit() {
    this.getHeroes();
  }
}
