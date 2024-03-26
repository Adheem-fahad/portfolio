import WindowCreate, { vsCodeCnt, fileExplorerCnt, chromeCnt } from '../components/s1cmpts'
import Cursor from '../components/cursor'

export default class S1{
    constructor(root) {
        this.root = root
        this.fileWindow = new WindowCreate(
            root,
            fileExplorerCnt,
            true,
            14/9,
        )
        this.vsWindow = new WindowCreate(
            root,
            vsCodeCnt,
            false
        )
        this.chromeWindow = new WindowCreate(
            root,
            chromeCnt,
            false,
            1101/706
        )
        this.fileWindow.eventToBtn((e) => {
            this.vsWindow.open()
            this.vsWindow.windowMain.style.animation =  `Popup 0.4s cubic-bezier(1,0,.51,.8)`;
            this.vsWindow.windowMain.style.scale = 1
        })
        
        document.querySelector('#live-server').addEventListener('click', (e) => {
            this.chromeWindow.open()
            this.chromeWindow.windowMain.style.animation =  `Popup 0.4s cubic-bezier(1,0,.51,.8)`;
            this.chromeWindow.windowMain.style.scale = 1
        })
        new Cursor(
            root,
            [document.querySelector('#fileItem'), document.querySelector('.fileEx')],
            [document.querySelector('#live-server'), this.vsWindow.windowMain]
        )
    }
    cleanUp() {
        this.root.innerHTML = null
    }
} 

