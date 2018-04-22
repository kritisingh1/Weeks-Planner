import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllComponent } from './all/all.component';
import { TodoComponent } from './todo/todo.component';
import { CardService } from './card.service';
import { ProgressComponent } from './progress/progress.component';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DashboardComponent,
    AllComponent,
    TodoComponent,
    ProgressComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
