import { FormGroup } from '@angular/forms';

export abstract class BaseFormComponentAbstraction {
  private readonly _formGroup!: FormGroup;

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  protected constructor() {
    this._formGroup = this.defineFormGroup();
  }

  protected abstract defineFormGroup(): FormGroup;
}
