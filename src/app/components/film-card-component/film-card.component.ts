import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IFilm } from '../../interfaces/IFilms';
import { Router } from '@angular/router';
import { TimeCustomPipe } from '../../pipes/time-custom-pipe-pipe';

@Component({
  selector: 'app-film-card',
  imports: [TimeCustomPipe],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  standalone: true,
})
export class FilmCardComponent {

  @Input({required: true}) film!: IFilm;
  @Output() toggleFavorite: EventEmitter<number> = new EventEmitter<number>();

  private router: Router = inject(Router);

  onFavoriteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.toggleFavorite.emit(this.film.id);
  }

  goToDetails(): void {
    this.router.navigate(['film', this.film.id]);
  }

}
