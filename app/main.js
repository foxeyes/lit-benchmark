import {LitElement, html} from './exports.js';
import { } from './component.js';

const TOTAL = 1000;
const START_TIME = Date.now();

let data = {};
for (let i = 0; i < TOTAL; i++) {
  data['entry' + i] = 'TEXT ' + i;
}

class MainApp extends LitElement {
  static get properties() {
    return {
      data: {
        type: Object,
      },
    };
  }
  constructor() {
    super();
    this.data = data;
  }
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        .viewport {
          padding: 10px;
        }
      </style>
      <button @click="${this.refresh}">UPDATE ALL</button>
      <div class="viewport">
        ${Object.keys(this.data).map((key) => html`<my-component text="${this.data[key]}"></my-component>`)}
      </div>
    `;
  }
  refresh() {
    let startTime = Date.now();
    for (let key in data) {
      data[key] = 'TEXT ' + startTime;
    }
    this.data = {...data};
    // @ts-ignore
    window.requestIdleCallback(() => {
      console.log(Date.now() - startTime);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    // @ts-ignore
    window.requestIdleCallback(() => {
      console.log(Date.now() - START_TIME);
    });
  }
}
window.customElements.define('main-app', MainApp);

