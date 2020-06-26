const core = require('../lower_section/core.js');
const self_perception = require('../lower_section/self_perception.js');
const ideation = require('../lower_section/ideation.js');
const interpersonal = require('../lower_section/interpersonal.js');
const affection = require('../lower_section/affection.js');
const color_sharing = require('./color_shading');

function getUp5Checked(scores, age) {
  let checked = 0;
  checked += getFVChecked(scores);
  checked += getColorShadingBlendsChecked(scores);
  checked += getEgoChecked(scores, age);
  checked += getAfrChecked(scores, age);
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
  return color_sharing.getBlends(scores) > 0 || affection.getS(scores) > 2;
}
exports.getColorShadingBlendsChecked = getColorShadingBlendsChecked;

function getEgoChecked(scores, age) {
  // egocentricity index > 0.44 and Fr + rF = 0 or egocentricity index < 0.33
  const ego = self_perception.getEgocentricityIndex(scores);
    if (age == 5) {
      return (ego > 0.83 && self_perception.getReflections(scores) == 0) || ego < 0.55;
    } else if (age == 6) {
      return (ego > 0.82 && self_perception.getReflections(scores) == 0) || ego < 0.52;
    } else if (age == 7) {
      return (ego > 0.77 && self_perception.getReflections(scores) == 0) || ego < 0.52;
    } else if (age == 8) {
      return (ego > 0.74 && self_perception.getReflections(scores) == 0) || ego < 0.48;
    } else if (age == 9) {
      return (ego > 0.69 && self_perception.getReflections(scores) == 0) || ego < 0.45;
    } else if (age == 10) {
      return (ego > 0.63 && self_perception.getReflections(scores) == 0) || ego < 0.45;
    } else if (age == 11) {
      return (ego > 0.58 && self_perception.getReflections(scores) == 0) || ego < 0.45;
    } else if (age == 12) {
      return (ego > 0.58 && self_perception.getReflections(scores) == 0) || ego < 0.38;
    } else if (age == 13) {
      return (ego > 0.56 && self_perception.getReflections(scores) == 0) || ego < 0.38;
    } else if (age == 14) {
      return (ego > 0.54 && self_perception.getReflections(scores) == 0) || ego < 0.37;
    } else if (age == 15) {
      return (ego > 0.50 && self_perception.getReflections(scores) == 0) || ego < 0.33;
    } else if (age == 16) {
      return (ego > 0.48 && self_perception.getReflections(scores) == 0) || ego < 0.33;
    } else {
      return (ego > 0.44 && self_perception.getReflections(scores) == 0) || ego < 0.33;
    }
}
exports.getEgoChecked = getEgoChecked;

function getAfrChecked(scores, age) {
  // Afr < 0.46 or Blends < 4
    if (age >= 5 && age <= 6) {
      return affection.getAfr(scores) < 0.57 || affection.getBlends(scores) < 4;
    } else if (age >= 7 && age <= 9) {
      return affection.getAfr(scores) < 0.55 || affection.getBlends(scores) < 4;
    } else if (age >= 10 && age <= 13) {
      return affection.getAfr(scores) < 0.53 || affection.getBlends(scores) < 4;
    } else {
      return affection.getAfr(scores) < 0.46 || affection.getBlends(scores) < 4;
    }
}
exports.getAfrChecked = getAfrChecked;

function getSumShadingChecked(scores) {
  // Sum Shading > FM + m or SumC' > 2
  return core.getebRight(scores) > core.getebLeft(scores) || core.getSumCprime(scores) > 2;
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
