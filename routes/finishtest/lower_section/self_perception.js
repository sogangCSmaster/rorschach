const single = require('../upper_section/single.js');
const core = require('./core.js');
const contents = require('../upper_section/contents.js');
const special_scores = require('../upper_section/special_scores.js');

function getEgocentricityIndex(scores) {
  return ((getReflections(scores) * 3 + single.get2(scores)) / core.getR(scores)).toFixed(2);
}
exports.getEgocentricityIndex = getEgocentricityIndex;

function getReflections(scores) {
  let reflection = 0;
  scores.forEach((score) => {
    if (score.det && (
      score.det.reflection1 || score.det.reflection2
    )) {
      reflection += 1;
    }
  })
  return reflection;
}
exports.getReflections = getReflections;

function getSumV(scores) {
  // FV, VF, V
  let sumV = 0;
  scores.forEach((score) => {
    if (score.det && (score.det.vista1 || score.det.vista2 || score.det.vista3)) {
      sumV += 1;
    }
  });
  return sumV;
}
exports.getSumV = getSumV;

function getFD(scores) {
  let FD = 0;
  scores.forEach((score) => {
    if (score.form2) {
      FD += 1;
    }
  });
  return FD;
}
exports.getFD = getFD;

function getAnPlusXy(scores) {
  const cont = contents.getContents(scores);
  return cont['An'] + cont['Xy'];

}
exports.getAnPlusXy = getAnPlusXy;

function getMOR(scores) {
  return special_scores.getMOR(scores);
}
exports.getMOR = getMOR;

function getH(scores) {
  const cont = contents.getContents(scores);
  return cont['H'];
}
exports.getH = getH;

function getHrest(scores) {
  // (H)+Hd+(Hd)
  const cont = contents.getContents(scores);
  return cont['(H)'] + cont['Hd'] + cont['(Hd)'];
}
exports.getHrest = getHrest;
