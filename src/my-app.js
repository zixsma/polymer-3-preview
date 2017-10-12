import { Element as PolymerElement }
    from '../node_modules/@polymer/polymer/polymer-element.js';

export class MyApp extends PolymerElement {

    static get template() {
        return `<div>This is my [[name]] app.</div>`
    }

    constructor() {
        super();
        this.name = '3.0 preview';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('my-app', MyApp);