import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  addName(name: string): void {
  	name = name.trim();
  	if(!name) { return; }
  	this.cardService.addCard({ name } as Card)
  		.subscribe(card => {
  			this.cards.push(card);
  		});
  }

}
