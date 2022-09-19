import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// place holder for the data
const app = express()
const users = []
const port = 3080

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../../F123/public')));

app.get('/api/message', (_, res) => {
  return res.json({
    data: 'Hello from the server!',
  })
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../../F123/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
