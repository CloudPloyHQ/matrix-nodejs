const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (_req, res) => res.send('ok'));
app.get('/', (_req, res) => res.send('<h1>cloudploy-matrix-nodejs</h1>'));

app.listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));
