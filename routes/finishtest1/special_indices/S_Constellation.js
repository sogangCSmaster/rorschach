const core = require('../lower_section/core.js');
const self_perception = require('../lower_section/self_perception.js');
const information_processing = require('../lower_section/information_processing.js');
const affection = require('../lower_section/affection.js');
const interpersonal = require('../lower_section/interpersonal.js');
const cognitive_mediation = require('../lower_section/cognitive_mediation.js');
const color_shading = require('./color_shading.js');

function getUp8Checked(scores) {
  let checked = 0;
  checked += getFVPlusVFPlusVPlusFDChecked(scores);
  checked += getColorShadingBlendsChecked(scores);
  checked += getEgoChecked(scores);
  checked += getMORChecked(scores);
  checked += getZdChecked(scores);
  checked += getesChecked(scores);
  checked += getCFChecked(scores);
  checked += getXplusperChecked(scores);
  checked += getSChecked(scores);
  checked += getPChecked(scores);
  checked += getPureHChecked(scores);
  checked += getRChecked(scores);

  // 14세 이상 수검자만 해당
  return checked >= 8;
}
exports.getUp8Checked = getUp8Checked;

function getFVPlusVFPlusVPlusFDChecked(scores) {
  // FV + VF + V + FD > 2 이면 1 아니면 0
  //
  return (core.getSumV(scores) + self_perception.getFD(scores)) > 2;
}
exports.getFVPlusVFPlusVPlusFDChecked = getFVPlusVFPlusVPlusFDChecked;

function getColorShadingBlendsChecked(scores) {
  // CS-blends > 0
  return color_shading.getBlends(scores) > 0;
}
exports.getColorShadingBlendsChecked = getColorShadingBlendsChecked;

function getEgoChecked(scores) {
  // egocentricity index < .31 or > .44
  const ego = self_perception.getEgocentricityIndex(scores);
  if (ego > 0.44 || ego < 0.31) {
    return true;
  } else {
    return false;
  }
}
exports.getEgoChecked = getEgoChecked;

function getMORChecked(scores) {
  return self_perception.getMOR(scores) > 3;
}
exports.getMORChecked = getMORChecked;

function getZdChecked(scores) {
  // Zd > +3.5 or Zd < -3.5
  const Zd = information_processing.getZd(scores);
  if (Zd > 3.5 || Zd < -3.5) {
    return true;
  } else {
    return false;
  }
}
exports.getZdChecked = getZdChecked;

function getesChecked(scores) {
  // es > EA
  return core.getes(scores) > core.getEA(scores);
}
exports.getesChecked(scores);

function getCFChecked(scores) {
  // CF + C > FC
  affection.getFCCFCRight(scores) > affection.getFCCFCLeft(scores);
}
exports.getCFChecked = getCFChecked;

function getXplusperChecked(scores) {
  // X+% < 0.70
  return cognitive_mediation.getXplusper(scores) < 0.7;
}
exorts.getXplusperChecked = getXplusperChecked;

function getSChecked(scores) {
  // S > 3
  return affection.getS(scores) > 3;
}

function getPChecked(scores) {
  // P < 3 or P > 8
  const P = cognitive_mediation.getP(scores);
  return P < 3 || P > 8;
}
exports.getPChecked = getPChecked;

function getPureHChecked(scores) {
  interpersonal.getPureH(scores) < 2;
}
exports.getPureHChecked = getPureHChecked;

function getRChecked(scores) {
  return core.getR(scores) < 17;
}
exports.getRChecked = getRChecked;
