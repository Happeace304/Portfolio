export function formatStringWithPattern(value: string, pattern: string): string {
  let index = 0;

  return pattern.replace(/#/g, () => value[index++] || '');
}

export function filterNumberString(value: string): string {
  return value.replace(/[^0-9]/g, '');
}

export function removeTrailingCharacters(value: string, stringPattern: string): string {
  return value.replace(new RegExp(`${stringPattern}+$`, 'g'), '');
}
