enum LETTER_ERRORS {
  characterLength = 'letterString should have a length of 1',
}

class That3DLetter {
  private container: HTMLElement;
  private mainElement: HTMLElement | null = null;
  private elements: HTMLElement[] = [];

  public character: string;
  public index: number;

  constructor(
    letterString: string,
    count: number,
    container: HTMLElement,
    index: number,
  ) {
    this.container = container;
    this.character = letterString;

    this.index = index;

    if (this.character.length !== 1)
      throw new Error(LETTER_ERRORS.characterLength);

    this.createLayers(count);
  }

  private createLayers(count: number) {
    for (let i = 0; i < count; i++) {
      const layer = i;

      const span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      span.classList.add('that-3d-letter');
      span.classList.add(i === 0 ? 'front' : 'under');
      if (i === count - 1) span.classList.add('back');
      span.innerHTML = this.character === ' ' ? '&nbsp;' : this.character;
      span.dataset.depth = layer.toString();
      span.dataset.index = this.index.toString();
      span.dataset.character = this.character;
      span.style.setProperty('--layer', (count - layer).toString());
      span.style.setProperty(
        '--centerOffset',
        ((layer - (count - 1) * 0.5) / ((count - 1) * 0.5)).toString(),
      );

      this.elements.push(span);

      if (i === 0) {
        this.mainElement = span;
      }

      this.container.appendChild(span);
    }
  }

  public resize() {
    if (this.mainElement) {
      const x = this.mainElement.offsetLeft;
      const y = this.mainElement.offsetTop;

      this.elements.forEach((span) => {
        span.style.setProperty('--xPos', x.toString());
        span.style.setProperty('--yPos', y.toString());
      });
    }
  }
}

export { That3DLetter, LETTER_ERRORS };
