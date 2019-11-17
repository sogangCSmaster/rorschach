const interpersonal = require('./interpersonal.js');
const form_quality = require('../upper_section/form_quality.js');
const special_scores = require('../upper_section/special_scores');
const contents = require('../upper_section/contents')

function geta(scores) {
  return interpersonal.geta(scores);
}
exports.geta = geta;

function getp(scores) {
  return interpersonal.getp(scores);
}
exports.getp = getp;

function getMa(scores) {
  // Ma, Ma-p 를 센다.
  let Ma = 0;
  scores.forEach((score) => {
    if (score.det && score.det.active1) {
      Ma += 1;
    }
    if (score.det && score.det['a-p1']) {
      Ma += 1;
    }
  });
  return Ma;
}
exports.getMa = getMa;

function getMp(scores) {
  // Mp, Ma-p를 센다.
  let Mp = 0;
  scores.forEach((score) => {
    if (score.det && score.det.passive1) {
      Mp += 1;
    }
    if (score.det && score.det['a-p1']) {
      Mp += 1;
    }
  });
  return Mp;
}
exports.getMp = getMp;

function twoABplusArtplusAy(scores) {
  const cont = contents.getContents(scores);
  return special_scores.getAB(scores) * 2 + cont['Art'] + cont['Ay'];
}
exports.twoABplusArtplusAy = twoABplusArtplusAy;

function getMOR(scores) {
  return special_scores.getMOR(scores);
}
exports.getMOR = getMOR;

function getSum6(scores) {
  return special_scores.getSum6(scores);
}
exports.getSum6 = getSum6;

function getLv2(scores) {
  return special_scores.getDV2(scores) + special_scores.getINCOM2(scores) + special_scores.getDR2(scores) + special_scores.getFABCOM2(scores);
}
exports.getLv2 = getLv2;

function getWSum6(scores) {
  return special_scores.getWSum6(scores);
}
exports.getWSum6 = getWSum6;

function getMminus(scores) {
  const MQual = form_quality.getMQual(scores);
  return MQual['-'];
}
exports.getMminus = getMminus;

function getMnone(scores) {
  const MQual = form_quality.getMQual(scores);
  return MQual['none'];
}
exports.getMnone = getMnone;
