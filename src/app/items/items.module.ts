import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { ItemsRoutingModule } from './items-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsService } from './items.service';


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
    ItemsRoutingModule
  ],
  declarations: [AddItemComponent],
  exports: [
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
