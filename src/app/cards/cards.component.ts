import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Card } from '../card';
import { CARDS } from '../card-list';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  card : Card = CARDS[0];
  
  cards : Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {

    $(document).ready(function(){
        $(".remove").on("click", function(){
          console.log("clicked");
          $(this).parent().parent().remove();
        });
    });

    var cardTodo = CARDS.filter(function( obj ) {
      return obj.status == 'todo';
    });

    console.log(cardTodo);

    var cardProgress = CARDS.filter(function( obj ) {
      return obj.status == 'progress';
    });

    console.log(cardProgress);

    var cardCompleted = CARDS.filter(function( obj ) {
      return obj.status == 'completed';
    })

    console.log(cardCompleted);

    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  /*delete(card: Card): void {
    this.cards = this.cards.filter(h => h !== card);
    this.cardService.deleteCard(card).subscribe();
  }*/

}