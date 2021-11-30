import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CardItemComponent } from './board/card-item/card-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanService } from './service/kanban.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    LoginComponent,
    CardItemComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [KanbanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
