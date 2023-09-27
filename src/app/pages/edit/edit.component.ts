import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
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
      return 'El campo tiene errores';
    }
    return '';
  }
}
