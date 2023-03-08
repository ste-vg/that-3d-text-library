import { Those3DTexts } from './index';

test('Create words using default selector', () => {
  document.body.innerHTML = `
    <div>
      <span data-3d-text>Lorem</span>
      <span data-3d-text>Ipsum</span>
    </div>
  `;

  const texts = new Those3DTexts();

  expect(texts.words.length).toBe(2);
  expect(texts.words[0].element.getAttribute('aria-label')).toBe('Lorem');
  expect(texts.words[1].element.getAttribute('aria-label')).toBe('Ipsum');
});
