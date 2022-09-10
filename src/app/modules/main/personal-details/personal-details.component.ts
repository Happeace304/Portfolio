import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponentAbstraction } from '@shared/bases/base-form.component.abstraction';
import { PHONE_PATTERN, PHONE_PREFIX } from '@core/constants/phone.constants';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent extends BaseFormComponentAbstraction {
  public readonly phonePattern = PHONE_PATTERN;
  public readonly phonePrefix = PHONE_PREFIX;

  public constructor() {
    super();
  }

  protected override defineFormGroup(): FormGroup {
    return new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      phone: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(PHONE_PATTERN.length + PHONE_PREFIX.length),
        Validators.maxLength(PHONE_PATTERN.length + PHONE_PREFIX.length)
      ])
    });
  }
}
