class Anvil {
  constructor () {
    this.components = {};
  }

  register (selector, ComponentConstructor) {
    const matchedElements = document.querySelectorAll(
      `[data-component="${selector}"]`
    );

    if (matchedElements.length > 0) {
      matchedElements.forEach((element, index) => {
        this.components[`${selector}-${index}`] = new ComponentConstructor(
          index,
          element
        );
      });
    }
  }
}

export default Anvil;
