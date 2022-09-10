import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponentAbstraction } from '@shared/bases/base-form.component.abstraction';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent extends BaseFormComponentAbstraction {
  public constructor() {
    super();
  }

  protected override defineFormGroup(): FormGroup {
    return new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.email])
    });
  }
}
