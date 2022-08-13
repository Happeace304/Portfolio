export abstract class WindowRef {
  get nativeWindow(): Window {
    throw new Error('Not implemented.');
  }
}
