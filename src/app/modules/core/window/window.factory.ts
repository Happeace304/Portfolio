import { isPlatformBrowser } from '@angular/common';

import { WindowRef } from '../abstractions/window-ref.abstraction';

export function windowFactory(browserWindowRef: WindowRef, platformId: Record<string, unknown>): Window {
  return <Window>(isPlatformBrowser(platformId) ? browserWindowRef.nativeWindow : {});
}
