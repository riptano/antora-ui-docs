import { r as registerInstance, h } from './index-24922380.js';

const gcxSchemaCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.loadSchemaData();
  }
  render() {
    return h("div", null, "Hello, World!");
  }
  loadSchemaData() {
    return fetch(this.uri)
      .then(response => response.json())
      .then(data => {
      console.log(data);
    });
  }
};
MyComponent.style = gcxSchemaCss;

export { MyComponent as gcx_schema };
