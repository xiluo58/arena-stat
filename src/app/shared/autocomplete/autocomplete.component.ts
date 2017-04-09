import { Component, OnInit, OnChanges, Input, ContentChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnChanges {
  @Input() placeholder: string;
  @Input() options: any;
  @Input() formCtrl: FormControl;
  @Input() formGroup: FormGroup;
  @Input() displayField: string;
  @Input() errorMessages;

  @ContentChild(TemplateRef) optionTemplate: TemplateRef<any>;

  filteredOptions: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    // fix options are get from API and assigned after init
    // filterOptions is undefined, click input doesn't show complete
    // start filteredOptions after get input options
    if (changes.options) {
      if (changes.options.currentValue) {
        this.filteredOptions = this.formCtrl.valueChanges
          .startWith(null)
          .map(option => this.filterOptions(option));
      }
    }
  };


  filterOptions(val: string) {
    return val ? this.options.filter(s => new RegExp(`${val}`, 'gi').test(this.getDisplayValue(s)))
      : this.options;
  }

  getDisplayValue = (option) => {
    if (!option) {
      return '';
    } else if (this.displayField) {
      return option[this.displayField];
    } else {
      return option;
    }
  }

}
