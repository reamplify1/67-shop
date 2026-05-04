import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective {

  constructor(
    private el: ElementRef,

  ) {}

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }

}
