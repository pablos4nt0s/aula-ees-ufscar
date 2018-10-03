/**
 * Example B - Async / Await with Promise.all()
 */

const axios = require('axios')

const service = {
    getPosts: () => axios({ url: 'http://localhost:3004/posts' }),
    getComments: () => axios({ url: 'http://localhost:3004/comments' })
}

async function asyncAwaitExampleB() {
    console.time('timer')
    try {
        const values = await Promise.all([service.getPosts(), service.getComments()])
        console.log('Example B\n', values.map(v => v.data))
        console.timeEnd('timer')
    } catch (err) {
        console.error(err)
    }
}

asyncAwaitExampleB()
