/**
 * Example - Callback 
 */

 const  request = require('request')

function callbackExample() {
    const obj = {}

    console.time('timer')

    request.get({ url: 'http://localhost:3004/posts', json: true }, (err, response, body) => {
        if (err) {
            console.error(err)
        } else {
            obj.posts = body

            request.get({ url: 'http://localhost:3004/comments', json: true }, (err, response, body) => {
                if (err) {
                    console.error(err)
                } else {
                    obj.comments = body
                    console.log('Example\n', obj)
                }
                console.timeEnd('timer')
            })
        }
    })
}

callbackExample()