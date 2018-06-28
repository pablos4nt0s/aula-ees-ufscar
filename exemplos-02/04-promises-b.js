/**
 * Example B - Promises with Promise.all()
 */

import axios from 'axios'

const service = {
    getPosts: () => axios({ url: 'http://localhost:3004/posts' }),
    getComments: () => axios({ url: 'http://localhost:3004/comments' })
}

function promisesExampleB() {
    Promise.all([service.getPosts(), service.getComments()])
        .then(values => {
            console.log('Example B\n', values.map(v => v.data))
        })
        .catch(err => {
            console.log(err)
        })
}

promisesExampleB()
