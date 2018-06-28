/**
 * Example A - Promises
 */

import axios from 'axios'

const service = {
    getPosts: () => axios({ url: 'http://localhost:3004/posts' }),
    getComments: () => axios({ url: 'http://localhost:3004/comments' })
}

function promisesExampleA() {
    let obj = {}

    service.getPosts()
        .then(response => {
            obj.posts = response.data
            return service.getComments()
        })
        .then(response => {
            obj.comments = response.data
            console.log('Example A\n', obj)
        })
        .catch(err => {
            console.log(err)
        })
}

promisesExampleA()