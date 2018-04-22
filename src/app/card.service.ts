import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Card } from './card';
import { CARDS } from './card-list';

@Injectable()
export class CardService {
	
  getHeroes(): Observable<Card[]> {
  return of(CARDS);
}
  constructor() { }

}
