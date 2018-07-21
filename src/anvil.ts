import {
  Class,
  BaseFunction,
  ClassDeclaration
} from '../node_modules/@types/estree/index';

interface AnvilRegistration {
  [key: string]: Object;
}

interface AnvilComponent {
  new (index: number, element: Element): Object;
}

class Anvil {
  components: AnvilRegistration = {};

  register(selector: string, ComponentConstructor: AnvilComponent) {
    const matchedElements: NodeListOf<Element> = document.querySelectorAll(
      `[data-component="${selector}"]`
    );

    console.log(matchedElements);

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
