import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layouts/main/main.component';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [MainComponent, DropdownMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [DropdownMenuComponent],
})
export class SharedModule {}
