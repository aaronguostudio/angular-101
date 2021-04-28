import { Injectable } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../mock/heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = of(HEROES.find(h => h.id === id))
    return hero
  }
}
