import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { ItemsService } from '../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  brands: any[];
  categories: any[];
  madeInCountries: any[];
  messages: any[];

  constructor(
    private fb: FormBuilder,
    private itemsService: ItemsService
  ) {
    this.addItemForm = this.fb.group({
      brand: ['', Validators.required],
      category: [''],
      madeIn: [''],
      description: [''],
      imageUrl: [''],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.itemsService.getBrands().subscribe(
      res => {
        this.brands = res;
      }
    );
    this.itemsService.getCountries().subscribe(
      res => {
        this.madeInCountries = res;
      }
    );
    this.itemsService.getCategories().subscribe(
      res => {
        this.categories = res;
      }
    );
  }

  onSubmit() {
    const value = this.addItemForm.value;
    this.itemsService.addItem({
      brand: value.brand,
      category: value.category ? value.category._id : null,
      madeIn: value.madeIn ? value.madeIn._id : null,
      name: value.name,
      description: value.description || null,
      imageUrl: value.imageUrl
    }).subscribe(
      res => {
        this.messages = [
          {
            severity: 'success',
            detail: 'The item is added.'
          }
        ];
      },
      err => {
        console.error(err);
      }
    );
  }
}
