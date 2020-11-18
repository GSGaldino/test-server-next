const { createServer } = require('http');
const next = require('next');
const {parse} = require('url');

const fs = require('fs');

const dev = process.env.NODE_ENV =! 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    if(req.headers.host === 'localhost:3000'){
      return handle(req, res, parsedUrl);
    }else {
      return res.end('Internal Server Error 500')
    }
  }).listen(3000, err => {
    if(err) throw err;
    console.log('> Ready on http://localhost:3000')
  })
})
