import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

const defaultProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  reviewCheck: null,
  releaseCheck: null,
};

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  product: IProduct;
  success: boolean = false;
  failed: boolean = false;
  submited: boolean = false;

  constructor(private router: Router) {
    this.product = defaultProduct;
  }

  onSubmit(f: NgForm) {
    console.log('on Submit', f);

    for (var name in f.controls) {
      f.controls[name].markAsTouched({ onlySelf: true });
    }
    if (f.valid) {
      f.control.disable();
      this.success = true;
      setTimeout(() => {
        this.router.navigate(['/products']);
      }, 3000);
    }
  }

  reset(f: NgForm) {
    f.reset();
    f.resetForm();
  }

  hasErrors(field: NgModel) {
    if (field.invalid && (field.dirty || field.touched)) {
      return true;
    }
    return false;
  }

  getErrorField(field: NgModel) {
    if (field.invalid && (field.dirty || field.touched)) {
      return `${this.getErrorLabel(field.name)}`;
    }
    return '';
  }

  getErrorLabel(fieldName: string) {
    switch (fieldName) {
      case 'id':
        return 'ID no válido!';
      case 'name':
        return 'Nombre no válido!';
      case 'description':
        return 'Descripción no válido!';
      case 'logo':
        return 'Logo no válido';
      case 'release-check':
        return 'Fecha de Liberación no válida!';
      case 'review-check':
        return 'Fecha de Revisión no válida!';
      default:
        return 'Campo no válido!';
    }
  }

  get minDateRelease(): Date {
    return new Date();
  }
  get minDateReview(): Date {
    return new Date(this.minDateRelease.getTime() + 1000 * 60 * 60 * 24 * 365);
  }

  isWellFilled(field: NgModel): boolean {
    return field.value == null || this.hasErrors(field);
  }
}
