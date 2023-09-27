import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
  ValidatorFn,
} from '@angular/forms';
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

  constructor() {
    this.product = defaultProduct;
  }

  onSubmit(f: NgForm) {
    for (var name in f.controls) {
      f.controls[name].markAsTouched({ onlySelf: true });
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

  checkField(fieldName: string) {
    switch (fieldName) {
      case 'id':
        return false;
      case 'name':
        return false;
      case 'description':
        return false;
      case 'logo':
        return false;
      case 'release-check':
        return false;
      case 'review-check':
        return false;
      default:
        return true;
    }
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

  get minDateRelease() {
    return new Date();
  }
}
