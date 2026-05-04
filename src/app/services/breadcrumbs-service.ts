import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import type { IBreadcrumb } from '../interfaces/IBreadcrumb';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {

  private breadcrumbsSignal: WritableSignal<IBreadcrumb[]> = signal<IBreadcrumb[]>([]);

  breadcrumbs: Signal<IBreadcrumb[]> = this.breadcrumbsSignal.asReadonly();

  setBreadcrumbs(items: IBreadcrumb[]): void {
    this.breadcrumbsSignal.set(items);
  }

}
