/**
 * Example - Callback 
 */

 import request from 'request'

function callbackExample() {
    const obj = {}

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
            })
        }
    })
}

callbackExample()