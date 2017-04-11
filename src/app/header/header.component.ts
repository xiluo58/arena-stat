import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav;
  accountInfo: '';



  constructor(
    private accountService: AccountService
  ) {
  }

  ngOnInit() {
    this.accountInfo = this.accountService.getInfo();
  }

}
