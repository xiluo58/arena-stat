import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss']
})
export class FavoriteItemsComponent implements OnInit {
  favoriteItems;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getFavoriteItems().subscribe(
      res => {
        console.log(res);
        this.favoriteItems = res;
      }
    );
  }

}
