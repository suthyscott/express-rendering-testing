import express from 'express' 
import path from 'path';
import url from 'url';

const app = express()

const port = 8000
// Need this to replace __dirname because we're using js modules here (see package.json line 2)
const rootDir = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    // path.join smartly joins the the roodDir (file path through the computer to this point) and the path to the file we're trying to render.
    res.sendFile(path.join(rootDir, './views/form.html'))
})

app.post('/fav-number', (req, res) => {
    const favNumber = req.body.favNumber;
    console.log('Saving favorite number to the database...');
  
    res.send(`Your favorite number is ${favNumber}.`);
  });

  app.post('/welcome', (req, res) => {
    const person = req.body.person;
    res.send(`Welcome, ${person}!`);
  });
  

app.listen(port, () => console.log(`Take me to warp ${port}`))