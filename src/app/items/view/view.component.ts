import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  items: any[];
  constructor(
    private itemsService: ItemsService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(
      res => {
        this.items = res;
      }
    );
  }

  favorite(item) {
    const token = this.accountService.getToken();
    if (!token) {
      alert('You must logged in to favorite an item');
    } else {
      this.itemsService.favItem(item._id, token).subscribe(
        res => {
          console.log(res);
        }
      );
    }
  }
}
