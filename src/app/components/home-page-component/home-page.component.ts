import { Component, inject, OnInit } from '@angular/core';
import { FilmCardComponent } from '../film-card-component/film-card.component';
import { films } from '../../data/films';
import { IFilm } from '../../interfaces/IFilms';
import { AutofocusDirective } from '../../directives/autofocus';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsService } from '../../services/breadcrumbs-service';
import { FilmsService } from '../../services/films-service';

@Component({
  selector: 'app-home-page',
  imports: [FilmCardComponent, AutofocusDirective, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true
})
export class HomePageComponent implements OnInit {

  private breadcrumbsService: BreadcrumbsService = inject(BreadcrumbsService)
  public filmsService: FilmsService = inject(FilmsService);

  get searchQuery(): string {
    return this.filmsService.searchQuery();
  }

  set searchQuery(value: string) {
    this.filmsService.searchQuery.set(value);
  }

  ngOnInit(): void {
      this.breadcrumbsService.setBreadcrumbs([
      { label: 'Home', url: '/' }
    ]);
  }

  handleFavorite(id: number): void {
    this.filmsService.toggleFavorite(id);
  }

}
