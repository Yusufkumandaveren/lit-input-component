import { LitElement, html, css } from 'lit';

export class MyInput extends LitElement {
    static styles = css`
    :host { display: flex; justify-content: center; align-items: center; height: 100vh; }
    .container { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 10px; font-family: sans-serif; padding: 1rem; max-width: 300px; border: 1px solid #ccc; border-radius: 8px; }
    input { padding: 0.5rem; font-size: 1rem; border-radius: 6px; border: 1px solid #ccc; }
    .output { font-size: 1.2rem; font-weight: bold; color: #333; }
  `;

    static properties = { text: { type: String } };
    constructor() { super(); this.text = ''; }
    handleInput(e) { this.text = e.target.value; }

    render() {
        return html`
      <div class="container">
        <div class="output">${this.text}</div>
        <input type="text" placeholder="Type something..." @input=${this.handleInput}/>
      </div>
    `;
    }
}

customElements.define('my-input', MyInput);
