import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCustomPipe',
  standalone: true
})
export class TimeCustomPipe implements PipeTransform {

  transform(minutes: number): string {

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0 && mins === 0) {
      return `${hours}h`;
    }

    if (hours === 0) {
      return `${mins}min`;
    }

    return `${hours}h ${mins}min`;
  }

}
