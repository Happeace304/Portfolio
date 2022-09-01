import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import { GridContainerComponent } from './grid-container/grid-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RowComponent, ColumnComponent, GridContainerComponent],
  exports: [RowComponent, ColumnComponent, GridContainerComponent]
})
export class GridLayoutModule {}
