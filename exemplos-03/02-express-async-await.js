
const express = require('express');
const axios = require('axios');

const app = express();

// async/await version

async function getAuthorAsync(authorname) {
    const res = await axios.get(`http://localhost:3004/authors?name=${authorname}`);
    return { author: await res.data[0], found: res.status === 200 && res.data.length === 1 };
}

async function getObjectAsync(url) {
    const res = await axios.get(url);
    return res.data;
}

app.get('/api/async-await/authors/:authorname', async (req, res) => {
    try {
        const { authorname } = req.params;
        const authorResult = await getAuthorAsync(authorname);

        if (!authorResult.found) {
            res.status(404).end();
            return;
        }

        const { author } = authorResult;
        const { posts_url, followers_url } = author;
        const [posts, followers] =
            await Promise.all([getObjectAsync(posts_url), getObjectAsync(followers_url)]);

        author.posts = posts;
        author.followers = followers;

        res.send(author);
    } catch (e) {
        res.status(500).end();
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`));