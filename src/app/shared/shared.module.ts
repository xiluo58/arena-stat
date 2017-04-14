import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdAutocompleteModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';



@NgModule({
  imports: [
    CommonModule,
    MdAutocompleteModule,
    MdInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AutocompleteComponent
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class SharedModule { }
