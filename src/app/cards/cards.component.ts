import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Card } from '../card';
import { CardService } from '../card.service';
import { CARDS } from '../card-list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

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

    var cardProgress = CARDS.filter(function( obj ) {
      return obj.status == 'progress';
    });

    var cardConpleted = CARDS.filter(function( obj ) {
      return obj.status == 'completed';
    })

    this.getCards();
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