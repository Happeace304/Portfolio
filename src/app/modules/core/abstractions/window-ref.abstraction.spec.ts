import { WindowRef } from './window-ref.abstraction';

class WindowRefTest extends WindowRef {
  public constructor() {
    super();
  }
}

describe('WindowRef', () => {
  it('should throw exception when calling nativeWindow without implementation', () => {
    const windowRef = new WindowRefTest();

    expect(() => windowRef.nativeWindow).toThrowError('Not implemented.');
  });
});
