interface AnvilRegistration {
  [key: string]: object;
}

interface AnvilComponent {
  new (index: number, element: Element): object;
}

class Anvil {
  components: AnvilRegistration = {};

  register(selector: string, ComponentConstructor: AnvilComponent) {
    const matchedElements: NodeListOf<Element> = document.querySelectorAll(
      `[data-component="${selector}"]`
    );

    if (matchedElements.length > 0) {
      for (let i = 0; i < matchedElements.length; i++) {
        this.components[`${selector}-${i}`] = new ComponentConstructor(
          i,
          matchedElements[0]
        );
      }
    }
  }
}

export default Anvil;
