import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [CommonModule, RouterModule.forChild(PagesRoutes), SharedModule],
  exports: [],
})
export class PagesModule {}
