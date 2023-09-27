import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layouts/main/main.component';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { MinCurrentDateDirective } from './directives/min-current-date.directive';

@NgModule({
  declarations: [MainComponent, DropdownMenuComponent, MinCurrentDateDirective],
  imports: [CommonModule, RouterModule],
  exports: [DropdownMenuComponent, MinCurrentDateDirective],
})
export class SharedModule {}
