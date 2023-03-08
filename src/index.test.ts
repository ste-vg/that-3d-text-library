import { That3DText } from './index';

test('That3DText', () => {
  document.body.innerHTML = `
    <div>
      <span id="test">Hello</span>
    </div>
  `;

  const testElement = document.querySelector('#test') as HTMLElement;

  expect(new That3DText(testElement).word).toBe('Hello');
});
