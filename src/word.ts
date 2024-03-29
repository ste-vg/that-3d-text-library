import { That3DLetter } from './letter';
class That3DWord {
  public element: HTMLElement;
  private wordString: string = '';
  private letters: That3DLetter[] = [];
  private layers: number = 8;

  constructor(element: HTMLElement, layers?: number) {
    this.element = element;

    const style = getComputedStyle(this.element);

    if (layers) {
      this.layers = layers;
    } else if (this.element.dataset.layers) {
      const newLayersValue = Number(this.element.dataset.layers);
      if (!isNaN(newLayersValue)) this.layers = newLayersValue;
    } else {
      const customPropLayers = style.getPropertyValue('--layers');
      if (customPropLayers) this.layers = Number(customPropLayers);
    }

    this.element.style.setProperty('--layers', this.layers.toString());

    if (navigator && navigator.vendor.startsWith('Apple'))
      this.element.classList.add('safari');

    this.init();
  }

  private init() {
    this.wordString = this.element.innerHTML;
    this.element.innerHTML = '';
    this.element.setAttribute('aria-label', this.wordString);

    this.element.classList.add('that-3d-word');

    const letterStrings = this.wordString.split('');

    this.letters = letterStrings.map(
      (letter, i) => new That3DLetter(letter, this.layers, this.element, i),
    );

    this.resize();
    setTimeout(() => {
      this.resize();
      this.element.setAttribute('data-text-ready', 'true');
    }, 100);
  }

  public reset() {
    this.init();
  }

  public resize() {
    this.element.style.setProperty(
      '--width',
      this.element.clientWidth.toString(),
    );
    this.element.style.setProperty(
      '--height',
      this.element.clientHeight.toString(),
    );
    this.letters.forEach((letter) => letter.resize());
  }

  public get word() {
    return this.wordString;
  }
}

export { That3DWord };
