import { That3DWord } from './word';

class Those3DTexts {
  public words: That3DWord[] = [];

  constructor(selector: string = '[data-3d-text]') {
    const elements = [...document.querySelectorAll(selector)];
    this.words = elements
      .filter((element) => (element ? true : false))
      .map((element) => new That3DWord(element as HTMLElement));
  }
}

export { Those3DTexts, That3DWord };
