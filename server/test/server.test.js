const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(() => done());
})

describe('POST /todos', () => {
  it('Should save new todo', (done) => {
    var text = 'test todo';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((error, res) => {
        if(error) {
          return done(error);
        }

        Todo.find().then((docs) => {
          expect(docs.length).toBe(1);
          expect(docs[0].text).toBe(text);
          done();
        }).catch((err) => done(err))
      })
  });

  it('Sould not create new todo with invalid data', (done) => {

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((error, res) => {
        if(error) {
          return done(error);
        }

        Todo.find().then((docs) => {
          expect(docs.length).toBe(0);
          done();
        }).catch((err) => done(err))
      })
  });
});
