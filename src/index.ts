class That3DText {
  private element: HTMLElement;
  private _word: string = '';

  constructor(element: HTMLElement) {
    this.element = element;
    this.init();
  }

  private init() {
    this._word = this.element.innerHTML;
  }

  public get word() {
    return this._word;
  }
}

export { That3DText };
