/**
 * Example A - Promises
 */

const  axios = require('axios')

const service = {
    getPosts: () => axios({ url: 'http://localhost:3004/posts' }),
    getComments: () => axios({ url: 'http://localhost:3004/comments' })
}

function promisesExampleA() {
    console.time('timer')
    let obj = {}

    service.getPosts()
        .then(response => {
            obj.posts = response.data
            return service.getComments()
        })
        .then(response => {
            obj.comments = response.data
            console.log('Example A\n', obj)
            console.timeEnd('timer')
        })
        .catch(err => {
            console.log(err)
        })
}

promisesExampleA()