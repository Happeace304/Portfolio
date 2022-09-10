import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-item-list',
  templateUrl: './header-item-list.component.html',
  styleUrls: ['./header-item-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderItemListComponent {
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
}
