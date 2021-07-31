const http = require('http')

const externalServer = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/api/frontend') {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      console.log(postData);
    })

    res.end(
      JSON.stringify({
        code: 200,
        data: {
          type: 'frontend',
          stack: ['Vue.js', 'React.js', 'Angular.js'],
        },
      })
    )
  }
})

externalServer.listen(3000, () => {
  console.log('External Server');
})
