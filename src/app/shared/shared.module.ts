import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ItemCardComponent } from './item-card/item-card.component';

import { FavoriteService } from './item-card/favorite.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    FavoriteService
  ],
  declarations: [
    AutocompleteComponent,
    ItemCardComponent,
  ],
  exports: [
    AutocompleteComponent,
    ItemCardComponent,
  ]
})
export class SharedModule { }
