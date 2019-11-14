const cognitive_mediation = require('../lower_section/cognitive_mediation.js');
const ideation = require('../lower_section/ideation.js');

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
}
exports.getLevel2Checked = getLevel2Checked;

function getRChecked(scores) {
  // (R < 17 and WSUM6 > 12) or  (R > 16 and WSUM6 > 17)
}
exports.getRChecked = getRChecked;

function getMChecked(scores) {
  // M- > 1 or X-% > 0.40
}
exports.getMChecked = getMChecked;
