import { That3DWord } from './word';

class Those3DTexts {
  public words: That3DWord[] = [];

  constructor(selector: string = '[data-3d-text]') {
    const elements = [...document.querySelectorAll(selector)];
    this.words = elements
      .filter((element) => (element ? true : false))
      .map((element) => new That3DWord(element as HTMLElement));

    if (window) window.addEventListener('resize', () => this.onResize());
  }

  private onResize() {
    this.words.forEach((word) => word.resize());
  }
}

export { Those3DTexts };
