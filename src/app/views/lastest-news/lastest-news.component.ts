import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastest-news',
  templateUrl: './lastest-news.component.html',
  styleUrls: ['./lastest-news.component.sass']
})
export class LastestNewsComponent implements OnInit {

  constructor() { }
  products = [
    { name: 'Laptop', price: 1500, category: 'Electronics' },
    { name: 'Phone', price: 800, category: 'Electronics' },
    { name: 'Shoes', price: 120, category: 'Apparel' },
    { name: 'Watch', price: 200, category: 'Accessories' }
  ];
  latest = [
    {
      date:'2025/01/06',
      status:true,
      news:'新臺幣授信業務手續費收費標準調整公告'
    },
    {
      date:'2024/12/23',
      status:true,
      news:'113年度消保教育圖卡及影片'
    },
    {
      date:'2024/11/01',
      status:true,
      news:'全國農業金庫2024年永續發展報告書重大主題問卷調查'
    },
  ]

  ngOnInit(): void {
  }

}
