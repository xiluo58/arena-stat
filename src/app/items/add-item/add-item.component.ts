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
  madeInCountries: any[];

  constructor(
    private fb: FormBuilder,
    private itemsService: ItemsService
  ) {
    this.addItemForm = this.fb.group({
      brand: ['', Validators.required],
      madeIn: [''],
      name: ['', Validators.required]
    });
    // this.brandCtrl = new FormControl();
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
  }

  onSubmit() {
    this.itemsService.addItem(this.addItemForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
