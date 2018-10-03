/**
 * Example A - Async / Await
 */

const axios = require('axios')

const service = {
    getPosts: () => axios({ url: 'http://localhost:3004/posts' }),
    getComments: () => axios({ url: 'http://localhost:3004/comments' })
}

async function asyncAwaitExampleA() {
    console.time('timer')
    try {
        const posts = await service.getPosts()
        const comments = await service.getComments()

        console.log('Example A\n', {
            posts: posts.data,
            comments: comments.data
        })
        console.timeEnd('timer')
    } catch (err) {
        console.error(err)
    }
}

asyncAwaitExampleA()