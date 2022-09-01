import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent {}
