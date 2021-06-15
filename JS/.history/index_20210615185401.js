const actions = require('./actions.js')
const loop = require('./loop.js')

let a = 9
let b = 5

let y = [
    'Anupam', 'Vinay', 'Anvesh'
]

let z = [{
        name: 'Anvesh'
    },
    {
        name: 'Vinay'
    }
]


loop.ForEach(y)