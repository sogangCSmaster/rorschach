const cognitive_mediation = require('../lower_section/cognitive_mediation.js');
const ideation = require('../lower_section/ideation.js');
const special_scores = require('../upper_section/special_scores.js');
const core = require('../lower_section/core.js');

function getXAperChecked(scores) {
  // XA% < 0.70 and WDA% < 0.75
  cognitive_mediation.getXAper(scores) < 0.70 && cognitive_mediation.getWDAper(scores) < 0.75;
}
exports.getXAperChecked = getXAperChecked;

function getXminusperChecked(scores) {
  // X-% > 0.29
  return cognitive_mediation.getXminusper(scores) > 0.29;
}
exports.getXminusperChecked = getXminusperChecked;

function getLevel2Checked(scores) {
  // Level2 > 2 and FABCOM2 > 0
  return ideation.getLv2(scores) > 2 && special_scores.getFABCOM2(scores) > 0;
}
exports.getLevel2Checked = getLevel2Checked;

function getRChecked(scores) {
  // (R < 17 and WSUM6 > 12) or  (R > 16 and WSUM6 > 17)
  const R = core.getR(scores);
  const WSum6 = ideation.getWSum6(scores);
  return (R < 17 && WSum6 > 12) || (R > 16 && WSum6 > 17);
}
exports.getRChecked = getRChecked;

function getMChecked(scores) {
  // M- > 1 or X-% > 0.40
  return ideation.getMminus(scores) > 1 || cognitive_mediation.getXminusper(scores) > 0.4;
}
exports.getMChecked = getMChecked;
