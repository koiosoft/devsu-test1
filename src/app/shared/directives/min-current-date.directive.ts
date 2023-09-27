import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[minCurrentDate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinCurrentDateDirective,
      multi: true,
    },
  ],
})
export class MinCurrentDateDirective implements Validator {
  @Input('min')
  minDate!: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;

    if (value !== null && value !== undefined) {
      const date = new Date(value);
      const minDate = new Date(this.minDate);

      if (this.minDate && date < minDate) {
        return {
          minDate: {
            releaseCheck: 'La fecha debe ser mayor o igual a ' + this.minDate,
          },
        };
      }
    }
    return null;
  }
}
