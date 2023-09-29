import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  _showModal = false;

  @Input('message')
  message = '';

  @Output('onconfirm') confirmEvent = new EventEmitter<string>();

  get showModal() {
    return this._showModal;
  }

  @Input('show')
  set showModal(value: any) {
    this._showModal = Boolean(value);
  }

  close() {
    this.showModal = false;
  }

  confirm() {
    console.log('paso');
    this.confirmEvent.emit('idididi');
  }
}
