import * as http from 'http';

const {PORT = 3000} = process.env;

http
  .createServer((req, res) => res.end('OK'))
  .listen(PORT, () => console.log(`Server starts listening on port ${PORT}`))
  .on('error', (err) => console.error(err));
