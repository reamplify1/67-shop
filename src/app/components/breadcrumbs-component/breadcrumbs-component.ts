import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '../../services/breadcrumbs-service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs-component.html',
  styleUrl: './breadcrumbs-component.scss',
  standalone: true,
})
export class BreadcrumbsComponent {

  public breadcrumbsService: BreadcrumbsService = inject(BreadcrumbsService);

}
