
const express = require('express');
const axios = require('axios');

const app = express();

// async/await version

async function getAuthorsAsync() {
    const res = await axios.get(`http://localhost:3004/authors`);
    return { authors: res.data, found: res.status === 200 && res.data.length > 0 };
}

async function getObjectAsync(url) {
    const res = await axios.get(url);
    console.log(`${url}\n`);
    return res.data;
}

app.get('/api/async-await/authors', async (req, res) => {
    try {
        const authorResult = await getAuthorsAsync();

        if (!authorResult.found) {
            res.status(404).end();
            return;
        }

        // Processando array em sequência
        
        const { authors } = authorResult;
        const countAuthors = authorResult.authors.length;
        for (let i = 0; i < countAuthors; i++) {
            authors[i].posts = await getObjectAsync(authors[i].posts_url);
            authors[i].followers = await getObjectAsync(authors[i].followers_url);
        }

        /*
        // Processando array em sequência
        const { authors } = authorResult;
        for (const author of authors) {
            author.posts = await getObjectAsync(author.posts_url);
            author.followers = await getObjectAsync(author.followers_url);
         }
         */

        /*
        // Processando array em paralelo
        let { authors } = authorResult;
        authors = await Promise.all(authors.map(async(author) => {
            author.posts = await getObjectAsync(author.posts_url);                 
            author.followers = await getObjectAsync(author.followers_url);
            return author;
         }));
         */

        // Processando array em paralelo
        /*
        const { authors } = authorResult;
        const promises = authors.map(async (author) => {
            author.posts = await getObjectAsync(author.posts_url)
            author.followers = await getObjectAsync(author.followers_url)
        });
        await Promise.all(promises);
        */

        res.send(authors);
    } catch (e) {
        console.log(e)
        res.status(500).end();
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`));