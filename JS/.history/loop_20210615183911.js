const While = (limit) => {
    let i = 0
    while (i <= limit) {
        console.log(i++)
    }
}

const doWhile = (limit) => {
    let i = 0
    do {
        console.log(i++)
    }
    while (i <= limit)
}

const For = (init, final) => {

}

module.exports = {
    doWhile,
    While
}