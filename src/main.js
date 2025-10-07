import './style.css'
import { setupCounter } from './counter.js'
import './MyInput.js';

document.querySelector('#app').innerHTML = `
  <h2>Lit Input Component Demo</h2>
  <my-input></my-input>
`

setupCounter(document.querySelector('#counter'))
