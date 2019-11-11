function getR(scores) {
  let R = 0;
  scores.forEach((scores) => {
    if (scores.card >= 1 && scores.card <= 10) {
      R += 1;
    }
  })
  return R;
}
exports.getR = getR;

function getFM(scores) {
  // FM*을 센다
}
exports.getFM = getFM;

function getm(scores) {
  // m*을 센다

}
exports.getm = getm;
