const core = require('../lower_section/core.js');
const self_perception = require('../lower_section/self_perception.js');
const ideation = require('../lower_section/ideation.js');
const interpersonal = require('../lower_section/interpersonal.js');

function getUp5Checked(scores) {
  let checked = 0;
  checked += getUp5Checked(scores);
  checked += getFVChecked(scores);
  checked += getColorShadingBlendsChecked(scores);
  checked += getEgoChecked(scores);
  checked += getAfrChecked(scores);
  checked += getSumShadingChecked(scores);
  checked += getMORChecked(scores);
  checked += getCOPChecked(scores);
  return checked >= 5;
}
exports.getUp5Checked = getUp5Checked;

function getFVChecked(scores) {
  // (FV + VF + V > 0) or (FD > 2)
  return core.getSumV(scores) > 0 || self_perception.getFD(scores) > 2;
}
exports.getFVChecked = getFVChecked;

function getColorShadingBlendsChecked(scores) {
  // Color-Shading Blends > 0 or S > 2
}
exports.getColorShadingBlendsChecked = getColorShadingBlendsChecked;

function getEgoChecked(scores) {
  // egocentricity index > 0.44 and Fr + rF = 0 or egocentricity index < 0.33
  const ego = self_perception.getEgocentricityIndex(scores);
  return (ego > 0.44 && self_perception.getReflections(scores) == 0) || ego < 0.33;
}
exports.getEgoChecked = getEgoChecked;

function getAfrChecked(scores) {
  // Afr < 0.46 or Blends < 4
}
exports.getAfrChecked = getAfrChecked;

function getSumShadingChecked(scores) {
  // Sum Shading > FM + m or SumC' > 2
}
exports.getSumShadingChecked = getSumShadingChecked;

function getMORChecked(scores) {
  // MOR > 2 or 2 * AB + Art + Ay > 3
  return self_perception.getMOR(scores) > 2 || ideation.twoABplusArtplusAy(scores) > 3;
}
exports.getMORChecked = getMORChecked;

function getCOPChecked(scores) {
  // COP < 2 or [Bt + 2 * Cl + Ge + Ls + 2 * Na] / R > 0.24
  return interpersonal.getCOP(scores) < 2 || interpersonal.getISOIndex(scores) > 0.24;
}
exports.getCOPChecked = getCOPChecked;
