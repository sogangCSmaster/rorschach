const core = require('./core.js');
const form_quality = require('../upper_section/form_quality.js');

function getXAper(scores) {
  const FQx = form_quality.getFQx(scores);
  //return ((FQx['+'] + FQx['o'] + FQx['u']) / core.getR(scores)).toFixed(2);
  return roundTo((FQx['+'] + FQx['o'] + FQx['u']) / core.getR(scores), 2);
}
exports.getXAper = getXAper;

function getWDAper(scores) {
  // W, WS, D, DS 를 센다.
  let count = 0;
  scores.forEach((score) => {
    if (score.loc == 'W' ||
      score.loc == 'WS' ||
      score.loc == 'D' ||
      score.loc == 'DS'
    ) {
      count += 1;
    }
  })
  const WPlusD = form_quality.getWPlusD(scores);
  return roundTo((WPlusD['+'] + WPlusD['o'] + WPlusD['u']) / count, 2);
  //return ((WPlusD['+'] + WPlusD['o'] + WPlusD['u']) / count).toFixed(2);
}
exports.getWDAper = getWDAper;

function getXminusper(scores) {
  const FQx = form_quality.getFQx(scores);
  return FQx['-'] / core.getR(scores);
}
exports.getXminusper = getXminusper;

function getSminus(scores) {
  let total = 0;
  scores.forEach((score) => {
    if (score.loc == 'WS' && score.fq == '-') {
      total += 1;
    } else if (score.loc == 'DS' && score.fq == '-') {
      total += 1;
    } else if (score.loc == 'DdS' && score.fq == '-') {
      total += 1;
    }
  });
  return total;
}
exports.getSminus = getSminus;

function getP(scores) {
  let P = 0;
  scores.forEach((score) => {
    if (score && score.p && score.p == 'P') {
      P += 1;
    }
  });
  return P;
}
exports.getP = getP;

function getXplusper(scores) {
  const FQx = form_quality.getFQx(scores);
  return roundTo((FQx['+'] + FQx['o']) / core.getR(scores), 2);
  //return ((FQx['+'] + FQx['o']) / core.getR(scores)).toFixed(2);
}
exports.getXplusper = getXplusper;

function getXuper(scores) {
  const FQx = form_quality.getFQx(scores);
  return roundTo(FQx['u'] / core.getR(scores), 2);
  //return (FQx['u'] / core.getR(scores)).toFixed(2);
}
exports.getXuper = getXuper;
