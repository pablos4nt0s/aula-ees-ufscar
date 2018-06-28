/**
 * Example B - Async / Await with Promise.all()
 */

import axios from 'axios'

const service = {
    getPosts: () => axios({ url: 'http://localhost:3004/posts' }),
    getComments: () => axios({ url: 'http://localhost:3004/comments' })
}

async function asyncAwaitExampleB() {
    try {
        const values = await Promise.all([service.getPosts(), service.getComments()])
        console.log('Example B\n', values.map(v => v.data))
    } catch (err) {
        console.error(err)
    }
}

asyncAwaitExampleB()
