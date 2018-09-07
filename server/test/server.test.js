const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

var testTodos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(testTodos);
  }).then(() => done());
});

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

        Todo.find({text}).then((docs) => {
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
          expect(docs.length).toBe(2);
          done();
        }).catch((err) => done(err))
      })
  });
});

describe('GET /todos', () => {
  it('Should return all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });

  describe('GET /todos/:id', () => {
    it('Should return todo for valid id', (done) => {
      request(app)
        .get(`/todos/${testTodos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.todo.text).toBe(testTodos[0].text);
        })
        .end(done);
    });

    it('Should return 404 when no todo found', (done) => {
      request(app)
        .get(`/todos/${new ObjectID().toHexString()}`)
        .expect(404)
        .end(done);
    });

    it('Should return 404 for invalid todo id', (done) => {
      request(app)
        .get('/todos/123')
        .expect(404)
        .end(done);
    });

  });

});
