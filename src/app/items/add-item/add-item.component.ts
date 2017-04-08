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
  brandCtrl: FormControl;
  brands = [
    {
      name: 'SK-II',
      id: '123'
    },
    {
      name: 'Estee Lauder',
      id: '345'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private itemsService: ItemsService
  ) {
    this.addItemForm = this.fb.group({
      brand: ['', Validators.required],
      name: ['', Validators.required]
    });
    // this.brandCtrl = new FormControl();
  }

  ngOnInit() {
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
