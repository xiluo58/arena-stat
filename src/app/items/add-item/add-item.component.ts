import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

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

  constructor() {
    this.brandCtrl = new FormControl();
  }

  ngOnInit() {
  }

}
