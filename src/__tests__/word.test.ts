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
