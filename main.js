import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <span>${import.meta.env.VITE_API_KEY}</span>
  </div>
`

setupCounter(document.querySelector('#counter'))
