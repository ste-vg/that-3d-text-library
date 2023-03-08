import { That3DText } from './index';

test('Set aria-label', () => {
  document.body.innerHTML = `
    <div>
      <span id="test">Hello</span>
    </div>
  `;

  const testElement = document.querySelector('#test') as HTMLElement;
  const that3DTEXT = new That3DText(testElement);

  expect(that3DTEXT.word).toBe('Hello');
  expect(testElement.getAttribute('aria-label')).toBe('Hello');
});
