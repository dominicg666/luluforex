import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ApiInstanceService } from "../api/api-instance.service";
import { Rates } from "../model/rates.model"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rates?: (Rates) | null;
  form: FormGroup;
  convertRateMyr: any = 0;
  selectedValue: any = 0
  selectedCurrency: any = "";
  constructor(private api: ApiInstanceService, public _fb: FormBuilder, ) {
    this.formInit();
  }

  ngOnInit() {

  }
  formInit() {
    this.form = this._fb.group({
      rate: ['']
    });
  }

  ionViewDidEnter() {
    this.initialize()
  }
  initialize() {
    this.api.getData(
    ).subscribe((res: any) => {
      if (res[0].code == 200) {
        this.rates = res[0].payload;
        console.log(this.rates);

      } else {
      }
    }, err => {

    });

  }
  changeRate(event) {
    console.log(event);
    // 1 AED=1.14 MYR
    if (this.form.get('rate').value != "") {
      this.selectedValue = this.form.get('rate').value.toFixed(5)
      this.convertRateMyr = ((1 / this.form.get('rate').value) * 1.14).toFixed(10);
    } else {
      this.selectedValue = this.convertRateMyr = ""
    }

    let value = this.rates.rates.find(data => data.rate == this.form.get('rate').value);
    if (value) {
      this.selectedCurrency = value.toccy;
    }

  }
}
