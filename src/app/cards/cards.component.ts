import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  card : Card = {
  	id: 1,
  	name: 'My first Note',
  	content: '',
    status: 'all',
    dateCreated: 'now'
  }

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
        $(".remove").on("click", function(){
          console.log("clicked");
          $(".remove").parent().parent().remove();
        });
    });
  }
}