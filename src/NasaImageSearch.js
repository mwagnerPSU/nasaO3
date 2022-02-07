import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/accent-card';

export class NasaImageSearch extends LitElement {
  static get tag() {
    return 'nasa-image-search';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.returnDataOnly = false;
    this.searchWords = "Moon Landing";
    this.checked = false;
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      returnDataOnly: { type: Boolean },
      searchWords: { type: String },
      checked: { type: Boolean, reflect: true },

      arrayOfData: { type: Array },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      // if (propName === 'view') {
      //   if (this.view === 'card') {
      //     console.log('card!');
      //   }
      // }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  __clicked() {
    this.checked = !this.checked;
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([name='partner']) {
        color: yellow;
        background-color: black;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="searchArea">
        <input type="text" value="${this.searchWords}">
        <button class="searchButton">Search</button>
        <label for="dataCheck">Return Data Only</label>
        <input type="checkbox" id="dataCheck" .checked="${this.checked}" @click="${this.__clicked}">
      </div>
      <div class="searchReturnArea">
        ${this.checked
          ? html` <ul class="listArea"></ul> `
          : html`
              <accent-card
                image-src="https://webcomponents.psu.edu/styleguide/elements/accent-card/demo/images/image7.jpg"
                accent-color="green"
                horizontal
                style="max-width:600px;"
              >
                <div slot="heading">Magna Donec</div>
                <div slot="content">
                  Luctus vel iaculis orci porttitor. Blandit semper phasellus eu
                  nunc viverra vitae. Tincidunt amet quis volutpat fusce? Donec
                  lobortis id mauris nisl nec et euismod. Purus purus accumsan
                  at.
                </div>
              </accent-card>
            `}
      </div>
    `;
  }
}

customElements.define(NasaImageSearch.tag, NasaImageSearch);
