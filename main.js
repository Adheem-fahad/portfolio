import './style.css'
import './utilities/utilities.css'
import WindowCreate, { vsCodeCnt, fileExplorerCnt, chromeCnt } from './components/windowsNstuff'


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
    setTimeout(() => {
        chromeWindow.open()
    }, 1500)
})

    