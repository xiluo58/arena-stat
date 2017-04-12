import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MessagesModule} from 'primeng/primeng';

import { SharedModule } from '../shared/shared.module';

import { AddItemComponent } from './add-item/add-item.component';
import { ItemsService } from './items.service';
import { ItemDetailsResolverService } from './item-details-resolver.service';
import { ViewComponent } from './view/view.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


@NgModule({
  providers: [
    ItemsService,
    ItemDetailsResolverService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    MessagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent
      },
      {
        path: 'add',
        component: AddItemComponent
      },
      {
        path: 'detail/:id',
        component: ItemDetailsComponent,
        resolve: {
          itemDetails: ItemDetailsResolverService
        }
      }
    ])
  ],
  declarations: [AddItemComponent, ViewComponent, ItemCardComponent, ItemDetailsComponent],
  exports: [
    ItemCardComponent,
    RouterModule
  ]
})
export class ItemsModule { }
