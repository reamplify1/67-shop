import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
  standalone: true
})
export class AboutComponent {

  private breadcrumbsService: BreadcrumbsService = inject(BreadcrumbsService);
  private location: Location = inject(Location);

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.breadcrumbsService.setBreadcrumbs([
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' }
    ]);
  }

}
