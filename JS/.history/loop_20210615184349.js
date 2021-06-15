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

const For = (i, final) => {
    for (i; i <= final; i++) {
        console.log(i)
    }
}

const ForEach = () => {

}

module.exports = {
    doWhile,
    While,
    For,
    ForEach
}