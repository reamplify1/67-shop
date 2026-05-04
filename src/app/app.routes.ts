import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page-component/home-page.component';
import { FilmDetailsPageComponent } from './components/film-details-page-component/film-details-page.component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { AboutComponent } from './components/about-component/about-component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
  {
    path: 'film/:id',
    component: FilmDetailsPageComponent,
  },
  { path: '**',
    component: NotFoundComponent }
];
