import './style.css'
import './utilities/utilities.css'

import S1 from './pages/s1.js'

let obj = new S1(
    document.querySelector('#app')
)

document.addEventListener('keydown', () => { obj.cleanUp(); })