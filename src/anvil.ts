interface AnvilRegistration {
  [key: string]: object;
}

interface AnvilComponent {
  new (index: number, element: Element, options: object): object;
}

interface AnvilConfig {
  selector: string;
  constructor: AnvilComponent;
  options?: object;
}

class Anvil {
  components: AnvilRegistration = {};

  register(config: AnvilConfig) {
    const ComponentConstructor = config.constructor;
    const matchedElements: NodeListOf<Element> = document.querySelectorAll(
      `[data-component="${config.selector}"]`
    );

    if (matchedElements.length > 0) {
      for (let i = 0; i < matchedElements.length; i++) {
        this.components[`${config.selector}-${i}`] = new ComponentConstructor(
          i,
          matchedElements[0],
          config.options
        );
      }
    }
  }
}

export default Anvil;
