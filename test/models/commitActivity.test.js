var expect = require('chai').expect;
var TodoList = require('../commitActivity.js');

describe('commitActivity Calculator', function() {
  var todoList;

  beforeEach(function() {
    commitActivity = new commitActivity();
  });

  it('commitActivity instance created', function() {
    expect(commitActivity).to.exist;
  });
});
