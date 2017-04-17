import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav;
  accountInfo: '';
  currentLanguageCode: string;
  languages = [
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'zh-CN',
      name: '简体中文'
    }
  ];



  constructor(
    private accountService: AccountService,
    private translate: TranslateService
  ) {
    this.currentLanguageCode = this.translate.currentLang;
  }

  ngOnInit() {
    this.accountInfo = this.accountService.getInfo();
  }

  onLanguageChange(languageCode: string) {
    this.translate.use(languageCode);
  }
}
