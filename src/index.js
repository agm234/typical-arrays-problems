
exports.min = function min(array) {
  if (array == 'undefined' || array.length == 0) {
    return 0;
  }
  let mine = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < mine) {
      mine = array[i];
    }
  }
  return mine;
}

exports.max = function max(array) {
  if (array == 'undefined' || array.length == 0) {
    return 0;
  }
  let maxe = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxe) {
      maxe = array[i];
    }
  }
  return maxe;
}

exports.avg = function avg(array) {
  if (array == 'undefined' || array.length == 0) {
    return 0;
  }
  let summ = 0;
  let avge = 0;
  for (let i = 0; i < array.length; i++) {
    summ = summ + array[i];
  }
  avge = summ / array.length;
  return avge;
}

