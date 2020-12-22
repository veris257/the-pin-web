// TODO: Implement Local Storage interface


export function getPinsFromLocalStorage() {
    let pins = []

    let localPinstList = localStorage.getItem('AllThePins')
    if (!localPinstList) {
        localStorage.setItem('AllThePins', pins)
    } else {
        pins = JSON.parse(localPinstList)
    }

    return pins
}
