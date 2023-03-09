import { That3DLetter } from './letter';
class That3DWord {
  public element: HTMLElement;
  private wordString: string = '';
  private letters: That3DLetter[] = [];
  private layers: number = 0;

  constructor(element: HTMLElement, layers?: number) {
    this.element = element;

    if (layers) this.layers = layers;
    this.init();
  }

  private init() {
    this.wordString = this.element.innerHTML;
    this.element.innerHTML = '';
    this.element.setAttribute('aria-label', this.wordString);
    this.element.classList.add('that-3d-word');

    const letterStrings = this.wordString.split('');
    const style = getComputedStyle(this.element);
    if (!this.layers) this.layers = Number(style.getPropertyValue('--layers'));

    this.letters = letterStrings.map(
      (letter, i) => new That3DLetter(letter, this.layers, this.element, i),
    );
  }

  public reset() {
    this.init();
  }

  public onResize() {
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
