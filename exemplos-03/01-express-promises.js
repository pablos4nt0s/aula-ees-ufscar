const express = require('express');
const axios = require('axios');

const app = express();

// promises version

function getAuthor(authorname) {
    return axios.get(`http://localhost:3004/authors?name=${authorname}`)
        .then(res => {
            return { author: res.data[0], found: res.status === 200 && res.data.length === 1 }
        });
}

function getObject(url) {
    return axios.get(url).then(res => res.data);
}

app.get('/api/promises/authors/:authorname', (req, res) => {
    const { authorname } = req.params;
    getAuthor(authorname)
        .then(authorResult => {
            if (!authorResult.found) {
                res.status(404).end();
                return;
            }

            const { author } = authorResult;
            const { posts_url, followers_url } = author;
            return Promise.all([getObject(posts_url), getObject(followers_url)])
                .then(results => {
                    const [posts, followers] = results;
                    author.posts = posts;
                    author.followers = followers;
                    res.send(author);
                })
        })
        .catch(e => {
            console.log(e)
            res.status(500).end()
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`));