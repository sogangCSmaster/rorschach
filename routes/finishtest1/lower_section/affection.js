const location_features = require('../upper_section/location_features.js');
const special_scores = require('../upper_section/special_scores.js');
function getFCCFCLeft(scores) {
  let FC = 0;
  scores.forEach((score) => {
    if (score.det && score.det.chromatic1) {
      FC += 1;
    }
  });
  return FC;
}
exports.getFCCFCLeft = getFCCFCLeft;

function getFCCFCRight(scores) {
  let CFC = 0;
  scores.forEach((score) => {
    if (score.det && score.det.chromatic2) {
      CFC += 1;
    }
    if (score.det && score.det.chromatic3) {
      CFC += 1;
    }
  });
  return CFC;
}
exports.getFCCFCRight = getFCCFCRight;

function getPureC(scores) {
  let C = 0;
  scores.forEach((score) => {
    if (score.det && score.det.chromatic3) {
      C += 1;
    }
  });
  return C;
}
exports.getPureC = getPureC;

function getSumCprime(scores) {
  // FC', C'F, C' 를 다 더함
  let sum = 0;
  scores.forEach((score) => {
    if (score.det && score.det.achromatic1) {
      sum += 1;
    }
    if (score.det && score.det.achromatic2) {
      sum += 1;
    }
    if (score.det && score.det.achromatic3) {
      sum += 1;
    }
  });
  return sum;
}
exports.getSumCprime = getSumCprime;

function getWSumC(scores) {
  // FC, CF, C
  let FC = 0;
  let CF = 0;
  let C = 0;
  scores.forEach((score) => {
    if (score.det && score.det.chromatic1) {
      FC += 1;
    }
    if (score.det && score.det.chromatic2) {
      CF += 1;
    }
    if (score.det && score.det.chromatic3) {
      C += 1;
    }
  });
  return FC * 0.5 + CF + C * 1.5;
}
exports.getWSumC = getWSumC;

function getAfr(scores) {
  let first = 0;
  let second = 0;
  scores.forEach((score) => {
    if (score.card == 8 || score.card == 9 || score.card == 10) {
      first += 1;
    } else {
      second += 1;
    }
  });
  return first / second;
}
exports.getAfr = getAfr;

function getS(scores) {
  return location_features.getS(scores);
}
exports.getS = getS;

function getBlends(scores) {
  // 2개 이상의 det를 갖는 score를 더함
  let total = 0;
  scores.forEach((score) => {
    if (score.det && Object.keys(score.det) > 1) {
      total += 1;
    }
  });
  return total;
}
exports.getBlends = getBlends;

function getCP(scores) {
  return special_scores.getCP(scores);
}
exports.getCP = getCP;
