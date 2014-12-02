'use strict';

var getTime = function() {
  function addZero(num) {
    return (num < 10 ? '0' : '') + num;
  }
  function localTime() {
    var currentDate = new Date();
    return addZero(currentDate.getHours()) + ':' + addZero(currentDate.getMinutes());
  }
  return 'Time: ' + localTime();
};

module.exports = getTime;
