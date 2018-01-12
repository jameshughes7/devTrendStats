var expect = require('chai').expect;
var TodoList = require('../languages.js');

describe('languages Calculator', function() {
  var todoList;

  beforeEach(function() {
    languages = new languages();
  });

  it('languages instance created', function() {
    expect(languages).to.exist;
  });
});
