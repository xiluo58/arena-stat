import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  favorite() {
    if (!this.accountService.isLoggedIn()) {
      alert('You must logged in to favorite an item');
    } else {
      this.itemsService.favItem(this.item._id).subscribe(
        res => {
          this.item.isFavorite = true;
        }
      );
    }
  }

  unfavorite() {
    if (!this.accountService.isLoggedIn()) {
      alert('You must log in first.');
    } else {
      this.itemsService.unfavItem(this.item._id).subscribe(
        res => {
          this.item.isFavorite = false;
        }
      );
    }
  }

  goToDetails() {
    this.router.navigate(['/items/detail/' + this.item._id]);
  }
}
