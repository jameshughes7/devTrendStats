var expect = require('chai').expect;
var TodoList = require('../collaborators.js');

describe('collaborators Calculator', function() {
  var todoList;

  beforeEach(function() {
    collaborators = new collaborators();
  });

  it('collaborators instance created', function() {
    expect(collaborators).to.exist;
  });
});
