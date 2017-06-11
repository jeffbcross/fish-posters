import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.scss']
})
export class FishListComponent implements OnInit {
  fish = [{
    name: 'squid',
    pic: '/assets/squid-full.jpg'
  }, {
    name: 'halibut',
    pic: '/assets/halibut-full.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
