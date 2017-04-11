import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from './favorite.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item;

  constructor(
    private favoriteService: FavoriteService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  favorite(item) {
    if (!this.accountService.isLoggedIn()) {
      alert('You must logged in to favorite an item');
    } else {
      this.favoriteService.favItem(item._id).subscribe(
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
      this.favoriteService.unfavItem(item._id).subscribe(
        res => {
          item.isFavorite = false;
        }
      );
    }
  }
}
