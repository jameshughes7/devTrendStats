'use strict'

function CommitActivity() {

}

CommitActivity.prototype.winterCommitterFactor = function(commitData) {
  var restOfYearCommitArrayElements = commitData.slice(0,40); // 40
  var winterMonthsCommitArrayElements = commitData.slice(39,52); // 12
  return this.average(winterMonthsCommitArrayElements) / this.average(restOfYearCommitArrayElements);
};

CommitActivity.prototype.average = function(array) {
  var sumOfMonthsArray = array.reduce((a, b) => a + b, 0);
  return sumOfMonthsArray / array.length;
};

module.exports = CommitActivity;
