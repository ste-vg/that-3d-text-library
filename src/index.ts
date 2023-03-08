class That3DText {
  private element: HTMLElement;
  private wordString: string = '';
  private letters: string[] = [];
  private layers: number = 1;

  constructor(element: HTMLElement) {
    this.element = element;
    this.init();
  }

  private init() {
    this.wordString = this.element.innerHTML;
    this.element.innerHTML = '';
    this.element.setAttribute('aria-label', this.wordString);
  }

  public get word() {
    return this.wordString;
  }
}

export { That3DText };
