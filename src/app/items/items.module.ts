import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AddItemComponent } from './add-item/add-item.component';
import { ItemsService } from './items.service';
import { ViewComponent } from './view/view.component';
import { ItemCardComponent } from './item-card/item-card.component';


@NgModule({
  providers: [
    ItemsService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent
      },
      {
        path: 'add',
        component: AddItemComponent
      }
    ])
  ],
  declarations: [AddItemComponent, ViewComponent, ItemCardComponent],
  exports: [
    ItemCardComponent,
    RouterModule
  ]
})
export class ItemsModule { }
