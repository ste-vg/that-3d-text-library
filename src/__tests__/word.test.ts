import { That3DWord } from '../word';

test('Set aria-label', () => {
  document.body.innerHTML = `
    <div>
      <span id="test">Hello</span>
    </div>
  `;

  const testElement = document.querySelector('#test') as HTMLElement;
  const that3DTEXT = new That3DWord(testElement);

  expect(that3DTEXT.word).toBe('Hello');
  expect(testElement.getAttribute('aria-label')).toBe('Hello');
});

test('Create all letters', () => {
  document.body.innerHTML = `
    <div>
      <span id="test">Hello</span>
    </div>
  `;

  const testElement = document.querySelector('#test') as HTMLElement;
  const that3DTEXT = new That3DWord(testElement);

  expect(testElement.childNodes.length).toBe(5 * 3);
});

test('Set layers correctly', () => {
  document.body.innerHTML = `
    <div>
      <span id="default">Hello</span>
      <span id="customProp" style="--layers: 8">Hello</span>
      <span id="data" data-layers="2">Hello</span>
    </div>
  `;

  const defaultElement = document.querySelector('#default') as HTMLElement;
  const customPropElement = document.querySelector(
    '#customProp',
  ) as HTMLElement;
  const dataElement = document.querySelector('#data') as HTMLElement;

  const defaultWord = new That3DWord(defaultElement);
  const customWord = new That3DWord(customPropElement);
  const definedWord = new That3DWord(customPropElement, 6);
  const dataWord = new That3DWord(dataElement);

  const styleDefault = getComputedStyle(defaultWord.element);
  const styleCustom = getComputedStyle(customWord.element);
  const styleDefined = getComputedStyle(definedWord.element);
  const styleData = getComputedStyle(dataWord.element);

  // expect(styleDefault.getPropertyValue('--layers')).toBe('3');
  // expect(styleCustom.getPropertyValue('--layers')).toBe('8');
  // expect(styleDefined.getPropertyValue('--layers')).toBe('6');
  // expect(styleData.getPropertyValue('--layers')).toBe('2');
});
