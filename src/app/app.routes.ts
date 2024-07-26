import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementEntryComponent } from './components/movement-entry/movement-entry.component';
import { MovementHistoryComponent } from './components/movement-history/movement-history.component';

export const routes: Routes = [
  { path: 'entry', component: MovementEntryComponent },
  { path: 'list', component: MovementHistoryComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
