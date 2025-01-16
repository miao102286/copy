import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.sass']
})
export class DepositPageComponent implements OnInit {

  constructor() { }
  name: string = '';
  getData(data: any) {
    console.log(data);
    alert("轉出帳號:" + data.formAccoint + "\n轉入帳號:" + data.toAccount + "\n轉出金額:" + data.amount);
  }
  ngOnInit(): void {
  }

}
