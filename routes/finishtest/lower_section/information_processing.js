const location_features = require('../upper_section/location_features.js');
const special_scores = require('../upper_section/special_scores.js');
const dq = require('../upper_section/dq.js');

function getZf(scores) {
  return location_features.getZf(scores);
}
exports.getZf = getZf;

function getW(scores) {
  return location_features.getW(scores);
}
exports.getW = getW;

function getD(scores) {
  return location_features.getD(scores);
}
exports.getD = getD;

function getDd(scores) {
  return location_features.getDd(scores);
}
exports.getDd = getDd;

function getM(scores) {
  // M을, Mp, Ma-p를 센다
  let M = 0;
  scores.forEach((score) => {
    if (score.det &&
    (score.det.active1 || score.det.passive1 || score.det['a-p1'])
    ) {
      M += 1;
    }
  });
  return M;
}
exports.getM = getM;

function getZd(scores) {
  //return (location_features.getZSum(scores) - location_features.getZEst(scores)).toFixed(1);
  return roundTo(location_features.getZSum(scores) - location_features.getZEst(scores), 1);
}
exports.getZd = getZd;

function getPSV(scores) {
  return special_scores.getPSV(scores);
}
exports.getPSV = getPSV;

function getDQplus(scores) {
  return dq.getPlus(scores);
}
exports.getDQplus = getDQplus;

function getDQv(scores) {
  return dq.getV(scores);
}
exports.getDQv = getDQv;
