export function randomizeArray(array) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    // Functional alternative to Fisher-Yates shuffle
    const randomizedArray = array
        .map((a) => ({
            sort: Math.random(),
            value: a,
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    return randomizedArray
}
