import { BrowserWindowRef } from './browser-window-ref';
import { windowFactory } from './window.factory';

describe('Window factory', () => {
  it('should return current window when in browser platform', () => {
    const browserWindowRef = new BrowserWindowRef();

    expect(windowFactory(browserWindowRef, <Record<string, unknown>>('browser' as unknown))).toBe(window);
  });

  it('should return empty object when not in browser platform', () => {
    const browserWindowRef = new BrowserWindowRef();

    expect(windowFactory(browserWindowRef, <Record<string, unknown>>('server' as unknown))).toEqual(<Window>{});
  });
});
