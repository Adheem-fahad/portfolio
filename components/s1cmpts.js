import { el, css, prependChild } from '../utilities/utilities'
import chromeSrc from '../assets/chromeop.png'

export default class WindowCreate {
    constructor(root, fn, visibility, aspectRat = 0) {
        this.root = root;
        this.aspectRat = aspectRat
        this.DOM(fn);
        if(visibility) this.open()
        else this.close()
    }
    close() {
        this.windowMain.style.display = 'none'
        this.windowMain.style.scale = '0.3'
        this.visibility = false;
    }
    open() {
        this.windowMain.style.display = 'block'
        this.visibility = true;
    }
    DOM(fn) {
        this.windowMain = el('div', this.root, ['class', 'window']);

        if(this.aspectRat == 0) {
            // do nothing
        } else {
            this.windowMain.style.aspectRatio = `${this.aspectRat}`
        }

        let something = fn(this.windowMain)
    }
    eventToBtn(fn) {
        document.querySelector('#fileItem').addEventListener('click', e => fn(e), false);
    }
}

const getHAndW = async function (url) {
    let tempStore = new Image();
    tempStore.src = url;
    let returnedObj
    await new Promise(function(resolve) {
        tempStore.onload = function(e) {
            returnedObj = ({
                width: this.naturalWidth,
                height: this.height
            })
            resolve()
        }
    })

    return returnedObj;
}
export async function fileExplorerCnt(element) {
    element.classList.add('fileEx')
    element.innerHTML = `
    <div style="background-image: url(&quot;/assets/filenavbar.png&quot;); width: 100%; aspect-ratio: 5.35577 / 1;"></div>
    <div class="flex">
    <div style="background-image: url(&quot;/assets/filetask.png&quot;); width: 25%; aspect-ratio: 0.503891 / 1;"></div>
    <div style="width: 70%; height: 219px;">
    <div id="fileItem">📁 portfolio-webite</div>
    <div id="fileItem">📁 starter project</div>
    <div id="fileItem">📁 STAI aqua</div>
    <div id="fileItem">📁 KFC website</div>
    <div id="fileItem">📁 Backend project</div>
    </div>
    </div>
    `;
    return document.querySelector('#fileItem')
}

export async function vsCodeCnt(element) {
    console.log('vs code')
    element.classList.add('vsCode')
    element.innerHTML = `
    <div style="background-image: url(&quot;/assets/vsnav.png&quot;); width: 100%; aspect-ratio: 18.8793 / 1;"></div>
    <div class="flex">
    <div style="background-image: url(&quot;/assets/vstask.png&quot;); width: 30%; aspect-ratio: 0.596273 / 1;"></div>
    <div style="width: 70%; height: 0px;">
    <div style="background-image: url(&quot;/assets/vsfilesnav.png&quot;); width: 100%; aspect-ratio: 11.6333 / 1;"></div>
    <div style="width: 100%; height: 0px;"></div>
    </div>
    </div>
    <div class="flex" style="justify-content: space-between;">
    <div style="background-image: url(&quot;/assets/vssettings.png&quot;); width: 80%; aspect-ratio: 27.1471 / 1;"></div>
    <div style="background-image: url(&quot;/assets/vsLive.png&quot;); width: 10%; aspect-ratio: 3.62931 / 1;" id="live-server"></div>
    </div>
    `
}

export async function chromeCnt(element) {
    console.log('chrome')
    element.classList.add('chrome')
    element.style.backgroundImage = `url(${chromeSrc})`
    css(element, {
        top: `${(element.parentElement.clientHeight - element.clientHeight)/2}px`,
        left: `${(element.parentElement.clientWidth - element.clientWidth)/2}px`
    })
}
