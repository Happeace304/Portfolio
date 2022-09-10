import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {}
