import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.scss']
})
export class FishListComponent implements OnInit {
  fish = [{
    id: 0,
    name: 'squid',
    pic: '/assets/squid-full.jpg'
  }, {
    id: 1,
    name: 'halibut',
    pic: '/assets/halibut-full.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
