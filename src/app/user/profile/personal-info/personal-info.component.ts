import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  data = {};
  tokenInfo;

  constructor(
    private accountService: AccountService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.tokenInfo = this.accountService.getInfo();
    this.userService.getInfo().subscribe(
      res => {
        this.data = res;
      }
    );
  }

  onSubmit() {
    this.userService.updateInfo(this.data).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
