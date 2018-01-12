var expect = require('chai').expect;
var TodoList = require('./models/codeFrequency.js');

describe('codeFrequncy Calculator', function() {
  var todoList;

  beforeEach(function() {
    codeFrequency = new codeFrequency();
  });

  it('codeFrequency instance created', function() {
    expect(codeFrequency).to.exist;
  });
});
