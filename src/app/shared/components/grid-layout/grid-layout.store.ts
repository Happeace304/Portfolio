import { GridLayoutTypeModel } from './grid-layout-type.model';

export class GridLayoutStore {
  private _layoutType: GridLayoutTypeModel = 'stretch';

  get layoutType(): GridLayoutTypeModel {
    return this._layoutType;
  }

  public setLayoutType(value: GridLayoutTypeModel): void {
    this._layoutType = value;
  }
}
