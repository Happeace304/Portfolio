import { ChangeDetectionStrategy, Component, Host, HostBinding, Input, Optional } from '@angular/core';

import { RowComponent } from '../row/row.component';
import { ScreenSizeModel } from './screen-size.model';
import { SpanModel } from './span.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent {
  @Input() public mdSpan: SpanModel = '12';
  @Input() public smSpan: SpanModel = '12';
  @Input() public xsSpan: SpanModel = '12';

  @HostBinding('attr.class') get classes(): string {
    return [this.getXsSpanClass(), this.getSmSpanClass(), this.getMdSpanClass()].join(' ');
  }

  public constructor(@Optional() @Host() private rowComponent: RowComponent) {
    if (!rowComponent) {
      throw new Error('A colonial-column must have a colonial-row as parent');
    }
  }

  private getMdSpanClass(): string {
    return this.getSpanClass('md', this.mdSpan);
  }

  private getSmSpanClass(): string {
    return this.getSpanClass('sm', this.smSpan);
  }

  private getXsSpanClass(): string {
    return this.getSpanClass('xs', this.xsSpan);
  }

  private getSpanClass(type: ScreenSizeModel, span: SpanModel): string {
    return `col-${type}-${span}`;
  }
}
