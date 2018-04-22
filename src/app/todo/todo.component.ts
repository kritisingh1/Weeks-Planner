import { Component, OnInit } from '@angular/core';
import { CARDS } from '../card-list';
import * as $ from 'jquery';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	var result = CARDS.filter(function( obj ) {
  		return obj.status == 'todo';
  	});
  	
  	$(document).ready(function() {
  	 	/*if(CARDS.map(a=>a.status))
        console.log(CARDS.map(a => a.status));*/
        console.log(result);

    });

  }
}
