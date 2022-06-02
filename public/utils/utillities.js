let path = require("path")

export let id = 0
export function createID() {

    return id++
}
export function getMode(mode , json , isGlobal) {
    let classes
    if (isGlobal) {
        classes = json["global"][mode]
    } else {
        classes = json[path.basename(__filename)][mode]
    }

    return classes
}

export function applyMode(classes , purpose , css) {
    return css[classes[purpose]]
}