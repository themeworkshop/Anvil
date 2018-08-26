interface AnvilRegistration {
  [key: string]: object;
}

interface ComponentConfig {
  index: number;
  element: Element;
  options?: object;
}

interface Component {
  new (config: ComponentConfig): object;
}

interface RegisterConfig {
  selector: string;
  constructor: Component;
  options?: object;
}

class Anvil {
  components: AnvilRegistration = {};

  register(config: RegisterConfig) {
    const ComponentConstructor = config.constructor;
    const matchedElements: NodeListOf<Element> = document.querySelectorAll(
      `[data-component="${config.selector}"]`
    );

    if (matchedElements.length > 0) {
      for (let i = 0; i < matchedElements.length; i++) {
        this.components[`${config.selector}-${i}`] = new ComponentConstructor({
          index: i,
          element: matchedElements[0],
          options: config.options
        });
      }
    }
  }
}

export { ComponentConfig };
export default Anvil;
