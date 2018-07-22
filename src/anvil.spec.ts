import Anvil from './anvil';

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

  constructor(_index, element) {
    this.content = element.textContent;
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
    anvil.register('mock-component', MockComponent);
    expect(anvil.components).toHaveProperty('mock-component-0');
  });

  it('will not bind if there is no match DOM element', () => {
    document.write(noComponentHTML);
    const anvil = new Anvil();
    anvil.register('mock-component', MockComponent);
    expect(anvil.components).toEqual({});
  });
});
