import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  selectedCard: Card;

  cards : Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    /*$(document).ready(function(){
        $(".remove").on("click", function(){
          console.log("clicked");
          $(".remove").parent().parent().remove();
        });
    });*/
    this.getCards();
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  delete(card: Card): void {
    this.cards = this.cards.filter(h => h !== card);
    this.cardService.deleteCard(card).subscribe();
  }

}