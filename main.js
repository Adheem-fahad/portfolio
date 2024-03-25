import './style.css'
import './utilities/utilities.css'
import WindowCreate, { vsCodeCnt, fileExplorerCnt, chromeCnt } from './components/windowsNstuff'
import Cursor from './components/cursor'

let fileWindow = new WindowCreate(
    document.querySelector('#app'),
    fileExplorerCnt,
    // false,
    true,
    14/9,
)
let vsWindow = new WindowCreate(
    document.querySelector('#app'),
    vsCodeCnt,
    // true,
    false
)
let chromeWindow = new WindowCreate(
    document.querySelector('#app'),
    chromeCnt,
    // true,
    false,
    1101/706
)

fileWindow.eventToBtn(function(e) {
    vsWindow.open()
  vsWindow.windowMain.style.animation =  `Popup 0.4s cubic-bezier(1,0,.51,.8)`;
  vsWindow.windowMain.style.scale = 1
    setTimeout(() => {
        chromeWindow.open()
        chromeWindow.windowMain.style.animation =  `Popup 0.4s cubic-bezier(1,0,.51,.8)`;
        chromeWindow.windowMain.style.scale = 1
    }, 1500)
})

let cursor = new Cursor(
    document.querySelector('#app'),
    [document.querySelector('#fileItem'), document.querySelector('.fileEx')]
)