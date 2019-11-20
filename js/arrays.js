let array = (arr) => {
    let object = {
        avg: (arr.reduce((a, b) => a + b, 0)) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length

    }
    return object;
}

export { array }