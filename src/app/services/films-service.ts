import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { films as mockFilms } from '../data/films';
import { IFilm } from '../interfaces/IFilms';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {

  private filmsSignal: WritableSignal<IFilm[]> = signal<IFilm[]>(mockFilms.map(f => ({ ...f, isFavorite: false })));

  films: Signal<IFilm[]> = this.filmsSignal.asReadonly();
  searchQuery: WritableSignal<string> = signal<string>('');

  favoriteFilms: Signal<IFilm[]> = computed(() =>
    this.filmsSignal().filter(film => film.isFavorite)
  );

  getFilmById(id: number): IFilm | undefined {
    return this.filmsSignal().find(f => f.id === id);
  }

  toggleFavorite(id: number): void {
    this.filmsSignal.update(films =>
      films.map(film =>
        film.id === id ? { ...film, isFavorite: !film.isFavorite } : film
      )
    );
  }

  filteredFilms: Signal<IFilm[]> = computed(() => {
    const query = this.searchQuery().toLowerCase(); // Приводим к нижнему регистру для поиска
    return this.filmsSignal().filter(film =>
      film.title.toLowerCase().includes(query)
    );
  });
}
