import { el, css, prependChild } from '../utilities/utilities'

export default class Cursor {
    constructor(root, target1) {
        this.cursor(root, target1[0], target1[1])
    }
    cursor(root, target1, targetPa) {
        this.cursorEl = el('div', root, ['class', 'cursor'])
        css(this.cursorEl, {
            left: `${root.clientWidth - this.cursorEl.clientWidth}px`,
            top: `${root.clientHeight - this.cursorEl.clientHeight}px`
        })
        
        setTimeout(() => {
            css(this.cursorEl, {
                left: `${target1.offsetLeft + targetPa.offsetLeft + 2 * this.cursorEl.clientWidth}px`,
                top: `${target1.offsetTop + target1.offsetTop + 2 * this.cursorEl.clientHeight}px`
            })
            setTimeout(() => {
                target1.classList.add('hover-file-item')

                setTimeout(() => {
                    this.cursorEl.style.transition = `0.1s linear`;
                    this.cursorEl.style.scale = 0.8
                    setTimeout(() => {
                        target1.click()
                        this.cursorEl.style.scale = 1
                    }, 200)
                }, 500);
            }, 900)

            
        }, 1000)
    }
}