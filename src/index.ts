class That3DText {
  private element: HTMLElement;
  private _word: string;

  constructor(element: HTMLElement) {
    this.element = element;
    this._word = element.innerHTML;
    this.init();
  }

  private init() {}

  public get word() {
    return this._word;
  }
}

export { That3DText };
