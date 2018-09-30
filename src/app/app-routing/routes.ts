import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import {MinistersViewComponent} from '../ministers-view/ministers-view.component';
import {MinisterViewComponent} from '../minister-view/minister-view.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'ministers/:id',  component: MinistersViewComponent },
  { path: 'minister/:id',  component: MinisterViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
