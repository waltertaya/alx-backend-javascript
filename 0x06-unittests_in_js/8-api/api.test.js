const request = require('request');
const { expect } = require('chai');
const app = require('./api');

const PORT = 7865;

describe('index page', () => {
  let server;

  before((done) => {
    server = app.listen(PORT, done);
  });

  after((done) => {
    server.close(done);
  });

  it('should return status code 200', () => new Promise((done) => {
    request.get(`http://localhost:${PORT}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the correct result', () => new Promise((done) => {
    request.get(`http://localhost:${PORT}`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('should return content-type text/html', () => new Promise((done) => {
    request.get(`http://localhost:${PORT}`, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  }));
});
