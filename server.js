'use strict';

const http = require('http');
const url = require('url');
const queryString = require('querystring');

const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');

const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req,res){
  req.url = url.parse(req.url);
  req.url.query = queryString.parse(req.url.query);
  console.log('req.url', req.url);
  console.log('req.query', req.query);
  console.log('req.method', req.method);
  console.log('req.headers', req.headers);

  if (req.method === 'POST' && req.url.pathname === '/cowsay'){
    parseBody(req, function(err, body){
      if (err) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write(cowsay.say({text: 'bad request\n Callback error'}));
        res.end();
      }
      if(!req.body.text){
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write(cowsay.say({text: 'bad request\ntry: Must have valid text property in JSON'}));
        res.end();
      }
      if(req.body.text){
        console.log(body);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(cowsay.say({text: req.body.text, f: req.body.f}));
        res.end();
      }
    });
  }

  if (req.method === 'GET' && req.url.pathname === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(cowsay.say({text: 'hello world'}));
    res.end();
  }

  if (req.method === 'GET' && req.url.pathname === '/cowsay' && req.url.query.text){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(cowsay.say({text: req.url.query.text, f: req.url.query.f}));
    res.end();
  }

  if (req.method === 'GET' && req.url.pathname === '/cowsay' && !req.url.query.text){
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write(cowsay.say({text: 'bad request\ntry: localhost:3000/cowsay?text=howdy'}));
    res.end();
  }
});

server.listen(PORT, function(){
  console.log('Server running on PORT: ', PORT);
});
