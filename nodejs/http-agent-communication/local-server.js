const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;
  const path = url.split('?')[0];
  const options = {
    port: 3000,
    method: 'POST',
    path,
    headers: {
      'Content-type': 'application/json'
    }
  };

  if (path === '/') {
    const view = fs.readFileSync('./index.html', 'utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write(view);
    response.end();
  } else {
    const fromExternalServerResponse = http.request(options, (res) => {
      res.setEncoding('utf8');
      let postData = '';
      res.on('data', (chunk) => {
        postData += chunk.toString();
      });
      res.on('end', () => {
        // 返回給 client
        if (path === '/api/frontend') {
          response.statusCode = 200;
          response.end(postData);
        }
      });
    });
    fromExternalServerResponse.end('getData');   
  }
});

server.listen('8085', () => {
  console.log('Agent Server')
});
