const While = (limit) => {
    let i = 0
    while (i <= limit) {
        return i++
    }
}

const doWhile = (limit) => {
    let i = 0
    do {
        return i++
    }
    while (i <= limit)
}

module.exports = {
    doWhile,
    While
}