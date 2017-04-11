import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../items.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item;

  constructor(
    private itemsService: ItemsService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  favorite(item) {
    if (!this.accountService.isLoggedIn()) {
      alert('You must logged in to favorite an item');
    } else {
      this.itemsService.favItem(item._id).subscribe(
        res => {
          item.isFavorite = true;
        }
      );
    }
  }

  unfavorite(item) {
    if (!this.accountService.isLoggedIn()) {
      alert('You must log in first.');
    } else {
      this.itemsService.unfavItem(item._id).subscribe(
        res => {
          item.isFavorite = false;
        }
      );
    }
  }
}
