import { WindowRef } from '../abstractions/window-ref.abstraction';

export class BrowserWindowRef extends WindowRef {
  override get nativeWindow(): Window {
    return window;
  }

  public constructor() {
    super();
  }
}
