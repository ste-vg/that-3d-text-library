import { LETTER_ERRORS, That3DLetter } from '../letter';

test('Create letter layers', () => {
  document.body.innerHTML = `<div class="container"></div>`;

  const testElement = document.querySelector('.container') as HTMLElement;
  const that3DLetter = new That3DLetter('S', 4, testElement, 0);

  expect(testElement.childNodes.length).toBe(4);
});

test('Throw error if incorrect character length', () => {
  document.body.innerHTML = `<div class="container"></div>`;

  const testElement = document.querySelector('.container') as HTMLElement;

  const tooLong = () => {
    new That3DLetter('too long', 1, testElement, 0);
  };

  const tooShort = () => {
    new That3DLetter('', 1, testElement, 0);
  };

  expect(tooLong).toThrow(LETTER_ERRORS.characterLength);
  expect(tooShort).toThrow(LETTER_ERRORS.characterLength);
});

test('Attributes added to letter layers', () => {
  document.body.innerHTML = `<div class="container"></div>`;

  const testElement = document.querySelector('.container') as HTMLElement;
  const a = new That3DLetter('a', 4, testElement, 0);
  const b = new That3DLetter('b', 4, testElement, 1);
  const s = new That3DLetter(' ', 4, testElement, 2);

  expect(testElement.childNodes.length).toBe(12);

  const a1 = testElement.childNodes[0] as HTMLElement;
  const a4 = testElement.childNodes[3] as HTMLElement;
  const b2 = testElement.childNodes[5] as HTMLElement;
  const space = testElement.childNodes[10] as HTMLElement;

  expect(a4.dataset[`mod-3`]).toBe('true');
  expect(a1.dataset[`mod-2`]).toBe('true');

  expect(a1.dataset.depth).toBe('0');
  expect(a4.dataset.depth).toBe('3');
  expect(b2.dataset.depth).toBe('1');
  expect(space.dataset.depth).toBe('2');

  expect(a1.dataset.index).toBe('0');
  expect(a4.dataset.index).toBe('0');
  expect(b2.dataset.index).toBe('1');
  expect(space.dataset.index).toBe('2');

  expect(a1.dataset.character).toBe('a');
  expect(a4.dataset.character).toBe('a');
  expect(b2.dataset.character).toBe('b');
  expect(space.dataset.character).toBe(' ');

  expect(a1.classList.contains('that-3d-letter')).toBe(true);
  expect(a4.classList.contains('that-3d-letter')).toBe(true);
  expect(b2.classList.contains('that-3d-letter')).toBe(true);
  expect(space.classList.contains('that-3d-letter')).toBe(true);

  expect(a1.getAttribute('aria-hidden')).toBe('true');
  expect(a4.getAttribute('aria-hidden')).toBe('true');
  expect(b2.getAttribute('aria-hidden')).toBe('true');
  expect(space.getAttribute('aria-hidden')).toBe('true');

  expect(a1.innerHTML).toBe('a');
  expect(a4.innerHTML).toBe('a');
  expect(b2.innerHTML).toBe('b');
  expect(space.innerHTML).toBe('&nbsp;');

  expect(a1.classList.contains('front')).toBe(true);
  expect(a1.classList.contains('under')).toBe(false);
  expect(a1.classList.contains('back')).toBe(false);

  expect(a4.classList.contains('front')).toBe(false);
  expect(a4.classList.contains('under')).toBe(true);
  expect(a4.classList.contains('back')).toBe(true);

  expect(b2.classList.contains('front')).toBe(false);
  expect(b2.classList.contains('under')).toBe(true);
  expect(b2.classList.contains('back')).toBe(false);

  expect(space.classList.contains('front')).toBe(false);
  expect(space.classList.contains('under')).toBe(true);
  expect(space.classList.contains('back')).toBe(false);

  const a1Style = getComputedStyle(a1);
  const a4Style = getComputedStyle(a4);
  const b2Style = getComputedStyle(b2);
  const spaceStyle = getComputedStyle(space);

  expect(a1Style.getPropertyValue('--layer')).toBe('4');
  expect(a4Style.getPropertyValue('--layer')).toBe('1');
  expect(b2Style.getPropertyValue('--layer')).toBe('3');
  expect(spaceStyle.getPropertyValue('--layer')).toBe('2');
});
