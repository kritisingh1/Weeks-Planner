import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Card } from './card';
import { CARDS } from './card-list';

@Injectable()
export class CardService {

  private cardsUrl = 'api/cards';

  constructor(
  private http: HttpClient) { }

  addCard (card: Card): Observable<Card> {
  	return this.http.post<Card>(this.cardsUrl, card)
  }

  deleteCard (card: Card | number): Observable<Card> {
  	const id = typeof card === 'number' ? card: card.id;
  	const url = `${this.cardsUrl}/${id}`;
  	console.log("xyz");
  	return this.http.delete<Card>(url);
  }

  getCards (): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl);
  }
}
