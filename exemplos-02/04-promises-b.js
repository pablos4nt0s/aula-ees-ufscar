/**
 * Example B - Promises with Promise.all()
 */

const axios = require ('axios')

const service = {
    getPosts: () => axios({ url: 'http://localhost:3004/posts' }),
    getComments: () => axios({ url: 'http://localhost:3004/comments' })
}

function promisesExampleB() {
    console.time('timer')
    Promise.all([service.getPosts(), service.getComments()])
        .then(values => {
            console.log('Example B\n', values.map(v => v.data))
        })
        .then (() => {
            console.timeEnd('timer')
        })
        .catch(err => {
            console.log(err)
        })
}

promisesExampleB()
