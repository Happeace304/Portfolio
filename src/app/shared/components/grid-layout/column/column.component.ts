import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ScreenSizeModel } from './models/screen-size.model';
import { SpanModel } from './models/span.model';
import { XsSpanModel } from './models/xs-span.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent implements OnChanges {
  private _cssClasses = '';

  @Input() public mdSpan!: SpanModel;
  @Input() public smSpan!: SpanModel;
  @Input() public xsSpan!: XsSpanModel;

  @HostBinding('attr.class') get classes(): string {
    return this._cssClasses;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this._cssClasses = this.getCssClasses();
    }
  }

  private getCssClasses(): string {
    return [this.getXsSpanClass(), this.getSmSpanClass(), this.getMdSpanClass()].join(' ');
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

  private getSpanClass(type: ScreenSizeModel, span: number): string {
    if (!span) {
      throw new Error(`Please provide span for ${type.toUpperCase()} type`);
    }

    return `col-${type}-${span}`;
  }
}
