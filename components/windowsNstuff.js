import { el, css, prependChild } from '../utilities/utilities'
import fileNav from '../assets/filenavbar.png'
import filetask from '../assets/filetask.png'

// vs code importings
import vsFile from '../assets/vsfilesnav.png'
import vsNav from '../assets/vsnav.png'
import vsSetting from '../assets/vssettings.png'
import vsTask from '../assets/vstask.png'
import vsLive from '../assets/vsLive.png'

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

        fn(this.windowMain)
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
    let sections = {
        navBar: [
            el('div', element),
            fileNav,
            `100%`
        ]
    }
    const flexItem = el('div', element, ['class', 'flex'])
    sections.navTask =  [
        el('div', flexItem),
        filetask,
        `25%`
    ],
    sections.mainTask = [
        el('div', flexItem),
        false,
        `70%`
    ]
    for(let component in sections) {
        if(!sections[component][1]) {
            css(sections[component][0], {
                width: sections[component][2],
                height: `${element.clientHeight - sections.navBar[0].clientHeight}px`
            })
        } else {
            sections[component][0].style.backgroundImage = `url(${sections[component][1]})`
            let hAndwW = await getHAndW(sections[component][1])
            css(sections[component][0], {
                width: sections[component][2],
                aspectRatio: hAndwW.width/hAndwW.height,
            })
        }
    }
    // sections.mainTask is the main div
    const FILE_ITEMS = [
        "portfolio-webite",
        "starter project",
        "STAI aqua",
        "KFC website",
        "Backend project"
    ]

    FILE_ITEMS.map((item) => {
        let curItem = el('div', sections.mainTask[0], ['id', 'fileItem'])
        curItem.textContent = `📁 ${item}`
    })

/* <div style="background-image: url(&quot;/assets/filenavbar.png&quot;); width: 100%; aspect-ratio: 5.35577 / 1;"></div>
<div class="flex">
  <div style="background-image: url(&quot;/assets/filetask.png&quot;); width: 25%; aspect-ratio: 0.503891 / 1;"></div>
  <div style="width: 70%; height: 219px;">
    <div id="fileItem">📁 portfolio-webite</div>
    <div id="fileItem">📁 starter project</div>
    <div id="fileItem">📁 STAI aqua</div>
    <div id="fileItem">📁 KFC website</div>
    <div id="fileItem">📁 Backend project</div>
  </div>
</div> */
}

export async function vsCodeCnt(element) {
    element.classList.add('vsCode')
    let sections = {
        navBar: [
            el('div', element),
            vsNav,
            `100%`
        ],
    }

    const MAIN_AREA = el('div', element);
    sections.fileSystem = [
        el('div', MAIN_AREA),
        vsTask,
        `30%`
    ];

    const WORKING_AREA = el('div', MAIN_AREA);
    sections.fileBar = [
        el('div', WORKING_AREA),
        vsFile,
        `100%`
    ];
    sections.codeSpace = [
        el('div', WORKING_AREA),
        false,
        `100%`
    ]
    css(
        WORKING_AREA,
        {
            width: `70%`,
            height: sections.fileSystem[0].clientHeight
        }
    )
    
    const BOT_AREA = el('div', element, ['class', 'flex']);
    sections.AppSet = [
        el('div', BOT_AREA),
        vsSetting,
        `80%`
    ]
    sections.LiveServer = [
        el('div', BOT_AREA),
        vsLive,
        `10%`
    ]
    BOT_AREA.style.justifyContent = 'space-between'

    MAIN_AREA.classList.add('flex')

    for(let component in sections) {
        if(!sections[component][1]) {
            css(sections[component][0], {
                width: sections[component][2],
                height: `${element.clientHeight - sections.navBar[0].clientHeight - sections.fileBar[0].clientHeight - sections.AppSet[0].clientHeight}px`
            })
        } else {
            sections[component][0].style.backgroundImage = `url(${sections[component][1]})`
            let hAndwW = await getHAndW(sections[component][1])
            css(sections[component][0], {
                width: sections[component][2],
                aspectRatio: hAndwW.width/hAndwW.height,
            })
        }
    }

    console.log(element.innerHTML)

    /* <div style="background-image: url(&quot;/assets/vsnav.png&quot;); width: 100%; aspect-ratio: 18.8793 / 1;"></div>
<div class="flex">
   <div style="background-image: url(&quot;/assets/vstask.png&quot;); width: 30%; aspect-ratio: 0.596273 / 1;"></div>
   <div style="width: 70%; height: 0px;">
      <div style="background-image: url(&quot;/assets/vsfilesnav.png&quot;); width: 100%; aspect-ratio: 11.6333 / 1;"></div>
      <div style="width: 100%; height: 0px;"></div>
   </div>
</div>
<div class="flex" style="justify-content: space-between;">
   <div style="background-image: url(&quot;/assets/vssettings.png&quot;); width: 80%; aspect-ratio: 27.1471 / 1;"></div>
   <div style="background-image: url(&quot;/assets/vsLive.png&quot;); width: 10%; aspect-ratio: 3.62931 / 1;"></div>
</div> */
}

export async function chromeCnt(element) {
    element.classList.add('chrome')
    element.style.backgroundImage = `url(${chromeSrc})`
    console.log(element.parentElement.innerHTML)
{/* <div class="window chrome" style="aspect-ratio: 1.55949 / 1; background-image: url(&quot;/assets/chromeop.png&quot;); display: block;"></div> */}
}
