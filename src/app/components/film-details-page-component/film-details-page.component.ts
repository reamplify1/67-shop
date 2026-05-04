import { BreadcrumbsService } from '../../services/breadcrumbs-service';
import { Component, computed, effect, inject, input, InputSignal, OnDestroy, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FilmsService } from '../../services/films-service';
import { TimeCustomPipe } from '../../pipes/time-custom-pipe-pipe';
import { IFilm } from '../../interfaces/IFilms';

@Component({
  selector: 'app-film-details-page',
  imports: [CommonModule, TimeCustomPipe],
  standalone: true,
  templateUrl: './film-details-page.component.html',
  styleUrl: './film-details-page.component.scss',
})
export class FilmDetailsPageComponent {

  private location: Location = inject(Location);
  private filmsService: FilmsService = inject(FilmsService);
  private breadcrumbsService: BreadcrumbsService = inject(BreadcrumbsService)

  id: InputSignal<string> = input.required<string>();

  film: Signal<IFilm | undefined> = computed(() => {
    const filmId = Number(this.id());
    return this.filmsService.films().find(f => f.id === filmId);
  });

  constructor() {
    effect(() => {
      const currentFilm = this.film();
      if (currentFilm) {
        this.breadcrumbsService.setBreadcrumbs([
          { label: 'Home', url: '/' },
          { label: currentFilm.title, url: `/film/${currentFilm.id}` }
        ]);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
