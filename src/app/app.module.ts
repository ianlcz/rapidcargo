import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { MovementEntryComponent } from './components/movement-entry/movement-entry.component';
import { MovementExitComponent } from './components/movement-exit/movement-exit.component';
import { MovementHistoryComponent } from './components/movement-history/movement-history.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementEntryComponent,
    MovementExitComponent,
    MovementHistoryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
