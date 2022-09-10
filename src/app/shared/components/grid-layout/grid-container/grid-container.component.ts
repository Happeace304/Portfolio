import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { GridLayoutTypeModel } from '../grid-layout-type.model';
import { GridLayoutStore } from '../grid-layout.store';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GridLayoutStore]
})
export class GridContainerComponent {
  @Input() set type(value: GridLayoutTypeModel) {
    this.gridLayoutStore.setLayoutType(value);
  }

  @HostBinding('attr.class') get classes(): string {
    return this.gridLayoutStore.layoutType;
  }

  public constructor(private gridLayoutStore: GridLayoutStore) {}
}
