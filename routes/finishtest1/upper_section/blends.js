function getBlendsArray(scores) {
  // [['F','Ma'], ['FC']] 처럼 표시
  arr = []
  scores.forEach((score) => {
    if (score.det && Object.keys(score.det) >= 2) {
      row = []
      Object.keys(score.det).forEach((key) => {
        row.push(score.det[key].value);
      })
      arr.push(row);
    }
  });
  return arr;
}
exports.getBlendsArray = getBlendsArray;
