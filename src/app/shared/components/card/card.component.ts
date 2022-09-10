import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {}
