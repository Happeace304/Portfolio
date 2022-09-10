import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { GridLayoutTypeModel } from '../grid-layout-type.model';
import { GridLayoutStore } from '../grid-layout.store';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent {
  @Input() set type(value: GridLayoutTypeModel) {
    this.gridLayoutStore.setLayoutType(value);
  }

  @HostBinding('attr.class') get classes(): string {
    return this.gridLayoutStore.layoutType;
  }

  public constructor(private gridLayoutStore: GridLayoutStore) {}
}
