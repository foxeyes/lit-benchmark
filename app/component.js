import {LitElement, html} from './exports.js';

export class MyComponent extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
      },
    };
  }
  render() {
    return html`<div>${this['text']}</div>`;
  }
}
window.customElements.define('my-component', MyComponent);
