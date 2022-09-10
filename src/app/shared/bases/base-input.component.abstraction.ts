import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export abstract class BaseInputComponentAbstraction<T> implements ControlValueAccessor {
  private _onTouch!: () => void;
  private _onChange!: (value: T) => void;
  private _isFocused = false;
  private _required = false;
  private _isDisabled = false;
  private _value!: T;

  @Input() public fieldName = '';
  @Input() set required(value: unknown) {
    this._required = coerceBooleanProperty(value);
  }
  public get required(): boolean {
    return this._required;
  }
  @HostBinding('class.valued') get isControlValued(): boolean {
    return !!this._value;
  }
  @HostBinding('class.focused') get isControlFocused(): boolean {
    return this._isFocused;
  }
  @HostListener('focusin')
  public onFocusIn(): void {
    this._isFocused = true;
    this._onTouch();
  }
  @HostListener('focusout')
  public onFocusOut(): void {
    this._isFocused = false;
  }

  public get value(): T {
    return this._value;
  }

  public registerOnChange(fn: (value: T) => void) {
    this._onChange = fn;
  }

  public updateValue(value: T): void {
    this._value = value;
    this._onChange(value);
  }

  public registerOnTouched(fn: () => void) {
    this._onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  public writeValue(value: T): void {
    this._value = value;
  }
}
