import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-item-list',
  templateUrl: './header-item-list.component.html',
  styleUrls: ['./header-item-list.component.scss']
})
export class HeaderItemListComponent implements OnInit {
  public readonly headerItems: HeaderItem[] = [
    {
      label: 'Home',
      url: '#'
    },
    {
      label: 'About me',
      url: '#'
    }
  ];

  public constructor() {}

  ngOnInit(): void {}
}
