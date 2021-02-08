import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TovarAddComponent } from './components/tovar-add/tovar-add.component';
import { TovarListComponent } from './components/tovar-list/tovar-list.component';


const routes: Routes = [

  //Маршрут для пустого маршрута http://localhost:4200
  { path: '', pathMatch: 'full', redirectTo: '' },

  //Маршрут для адреса http://localhost:4200/items
  { path: 'add', component: TovarAddComponent },

  //Маршрут для адреса http://localhost:4200/users
  { path: 'catalog', component: TovarListComponent },

  //Маршрут по-умолчанию
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
