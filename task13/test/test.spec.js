let mongoose = require("mongoose");
let Blog = require('../models/blog');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Blogs', () => {
  beforeEach((done) => {
    Blog.remove({}, (err) => {
      done();
    });
  });

  describe('/GET blogs', () => {
    it('get all works', (done) => {
      chai.request(server)
      .get('/posts')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });

  describe('/POST blog', () => {
    it('post works', (done) => {
      let post = {
        'author': 'User ololo',
        'content': 'Content of the post'
      };

      chai.request(server)
      .post('/posts')
      .send(post)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.equal('post');
        done();
      });
    });
  });

  describe('/GET/:id blog', () => {
    it('get by id works', (done) => {
      let item = new Blog({
        'author': 'User ololo',
        'content': 'Content of the post',
        'blogId': '102103104'
      });
      item.save((err, item) => {
        chai.request(server)
        .get('/posts/' + item.blogId)
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('author');
          res.body.should.have.property('content');
          res.body.should.have.property('blogId');
          done();
        });
      });
    });
  });

  describe('/PUT/:id blog', () => {
    it('put works', (done) => {
      let item = new Blog({
        'author': 'Author',
        'content': 'Content',
        'blogId': '88005553535'
      });
      item.save((err, item) => {
        chai.request(server)
        .put('/posts/' + item.blogId)
        .send({
          'author': 'Updated Author',
          'content': 'Updated Content'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.blog.author.should.eql('Updated Author');
          res.body.blog.content.should.eql('Updated Content');
          done();
        });
      });
    });
  });

  describe('/DELETE/:id blog', () => {
    it('delete works', (done) => {
      let item = new Blog({
        'author': 'Author',
        'content': 'Content',
        'blogId': '88005553535'
      });
      item.save((err, item) => {
        chai.request(server)
        .delete('/posts/' + item.blogId)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('delete ' + item.blogId);
          done();
        });
      });
    });
  });
});