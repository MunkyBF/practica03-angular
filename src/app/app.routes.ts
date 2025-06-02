import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiscografiaComponent } from './components/discografia/discografia.component';
import { TiendaComponent } from './components/tienda/tienda.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  { path: 'discografia', component: DiscografiaComponent, title: 'Discografía' },
  { path: 'tienda', component: TiendaComponent, title: 'Tienda' },
  { path: '**', redirectTo: '' } 
];