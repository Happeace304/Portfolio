import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { filterNumberString, formatStringWithPattern, removeTrailingCharacters } from '@shared/utils/string.utils';

import { BaseInputComponentAbstraction } from '../../../bases/base-input.component.abstraction';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true
    }
  ]
})
export class PhoneInputComponent extends BaseInputComponentAbstraction<string> {
  @Input() mask: string = '###-###-####';
  @Input() prefix: string = '(+84)';

  @HostListener('keydown', ['$event'])
  private onPress(event: KeyboardEvent) {
    const { key, ctrlKey } = event;

    return ['Backspace'].includes(key) || ctrlKey || (this.value.length < this.patternLength && !isNaN(Number(key)));
  }
  @HostListener('paste', ['$event'])
  private onPaste(event: ClipboardEvent) {
    const text = event.clipboardData?.getData('text') || '';

    return this.isStringWithPattern(text) && text.length === this.mask.length;
  }

  public get patternLength(): number {
    return this.mask.length + this.prefix.length;
  }

  public constructor(protected override changeDetector: ChangeDetectorRef) {
    super(changeDetector);
  }

  public override updateValue(value: string) {
    super.updateValue(this.getValueWithPattern(value));
  }

  private getValueWithPattern(value: string): string {
    const noPrefixValue = value.replace(this.prefix, '');

    if (!noPrefixValue) {
      return '';
    }

    return `${this.prefix}${removeTrailingCharacters(
      formatStringWithPattern(filterNumberString(noPrefixValue), this.mask),
      '[^0-9]'
    )}`;
  }

  private isStringWithPattern(value: string): boolean {
    return this.getValueWithPattern(value) === value;
  }
}
