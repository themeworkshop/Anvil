import Anvil, { ComponentConfig } from './anvil';

const componentHTML = `
  <html>
    <head>
      <title>Test</title>
    </head>
    <body>
      <div data-component="mock-component">
        2
      </div>
    </body>
  </html>
`;

const noComponentHTML = `
  <html>
    <head>
      <title>Test</title>
    </head>
    <body>
      <div data-component="not-mock-component">
        2
      </div>
    </body>
  </html>
`;

class MockComponent {
  content: string;
  options: object;

  constructor(config: ComponentConfig) {
    this.content = config.element.textContent;
    this.options = config.options;
  }
}

describe('Anvil', () => {
  it('will be constructed correctly', () => {
    const anvil = new Anvil();
    expect(anvil).toHaveProperty('components');
  });

  it('will bind the component to a DOM element', () => {
    document.write(componentHTML);
    const anvil = new Anvil();
    anvil.register({
      selector: 'mock-component',
      constructor: MockComponent
    });
    expect(anvil.components).toHaveProperty('mock-component-0');
  });

  it('will pass options through to the component', () => {
    document.write(componentHTML);
    const anvil = new Anvil();
    anvil.register({
      selector: 'mock-component',
      constructor: MockComponent,
      options: {
        testOption: 23,
        testOption2: 'hello'
      }
    });

    const component = anvil.components['mock-component-0'] as any;
    expect(component.options.testOption).toBe(23);
    expect(component.options.testOption2).toBe('hello');
  });

  it('will not bind if there is no match DOM element', () => {
    document.write(noComponentHTML);
    const anvil = new Anvil();
    anvil.register({
      selector: 'mock-component',
      constructor: MockComponent
    });
    expect(anvil.components).toEqual({});
  });
});
