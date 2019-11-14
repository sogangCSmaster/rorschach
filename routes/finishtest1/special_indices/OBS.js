const form_quality = require('../upper_section/form_quality.js');
const cognitive_mediation = require('../lower_section/cognitive_mediation.js');

function getDdChecked(scores) {
  // Dd > 3
}
exports.getDdChecked = getDdChecked;

function getZfChecked(scores) {
  // Zf > 12
}
exports.getZfChecked = getZfChecked;

function getZdChecked(scores) {
  // Zd > +3.0
}
exports.getZdChecked = getZdChecked;

function getPopularsChecked(scores) {
  // Populars > 7
}
exports.getPopularsChecked = getPopularsChecked;

function getFQplusChecked(scores) {
  // FQ+ > 1
}
exports.getFQplusChecked = getFQplusChecked;

function getUp1Checked(scores) {
  let checked = 0;
  checked += getAllChecked(scores);
  checked += getUp2Checked(scores);
  checked += getUp3Checked(scores);
  checked += getFQplusChecked(scores);

  return checked >= 1;
}
exports.getUp1Checked = getUp1Checked;

function getAllChecked(scores) {
  let checked = 0;
  checked += getDdChecked(scores);
  checked += getZfChecked(scores);
  checked += getZdChecked(scores);
  checked += getPopularsChecked(scores);
  checked += getFQplusChecked(scores);

  return checked == 5;
}
exports.getAllChecked = getAllChecked;

function getUp2Checked(scores) {
  let checked = 0;
  checked += getDdChecked(scores);
  checked += getZfChecked(scores);
  checked += getZdChecked(scores);
  checked += getPopularsChecked(scores);
  checked += getFQplusChecked(scores);

  return checked >= 2 && form_quality.getFQx(scores)['+'] > 3;
}
exports.getUp2Checked = getUp2Checked;

function getUp3Checked(scores) {
  let checked = 0;
  checked += getDdChecked(scores);
  checked += getZfChecked(scores);
  checked += getZdChecked(scores);
  checked += getPopularsChecked(scores);
  checked += getFQplusChecked(scores);

  return checked >= 3 && cognitive_mediation.getXperplus(scores) > 0.89;
}
exports.getUp3Checked = getUp3Checked;

function getFQplusChecked(scores) {
  // FQ+ > 3 and X+% > 0.89
  return form_quality.getFQx(scores)['+'] > 3 && cognitive_mediation.getXplusper(scores) > 0.89;
}
exports.getFQplusChecked = getFQplusChecked;
