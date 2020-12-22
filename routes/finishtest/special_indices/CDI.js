const core = require('../lower_section/core.js');
const interpersonal = require('../lower_section/interpersonal.js');
const affection = require('../lower_section/affection.js');
const ideation = require('../lower_section/ideation.js');

function getUp4Checked(scores, age) {
  let checked = 0;
  checked += getEAChecked(scores);
  checked += getCOPChecked(scores);
  checked += getWSumCChecked(scores, age);
  checked += getPassiveChecked(scores);
  checked += getSumTChecked(scores);

  return checked >= 4;

}
exports.getUp4Checked = getUp4Checked;

function getEAChecked(scores) {
  // EA < 6 or AdjD < 0
  return core.getEA(scores) < 6 || core.getAdjD(scores) < 0;
}
exports.getEAChecked = getEAChecked;

function getCOPChecked(scores) {
  // COP < 2 and AG < 2
  return interpersonal.getCOP(scores) < 2 && interpersonal.getAG(scores) < 2;
}
exports.getCOPChecked = getCOPChecked;

function getWSumCChecked(scores, age) {
  // WSumC < 2.5 or AFr < 0.46
    if (age >= 5 && age <= 6) {
      return affection.getWSumC(scores) < 2.5 || affection.getAfr(scores) < 0.57;
    } else if (age >= 7 && age <= 9) {
      return affection.getWSumC(scores) < 2.5 || affection.getAfr(scores) < 0.55;
    } else if (age >= 10 && age <= 13) {
      return affection.getWSumC(scores) < 2.5 || affection.getAfr(scores) < 0.53;
    } else {
      return affection.getWSumC(scores) < 2.5 || affection.getAfr(scores) < 0.46;
    }
}
exports.getWSumCChecked = getWSumCChecked;

function getPassiveChecked(scores) {
  // Passive > Active + 1 or PureH < 2
  const passive = ideation.getp(scores);
  const active = ideation.geta(scores);
  const pureH = interpersonal.getPureH(scores);

  return passive > active + 1 || pureH < 2;
}
exports.getPassiveChecked = getPassiveChecked;

function getSumTChecked(scores) {
  // SumT > 1 or Isolate/R > 0.24 or Food > 0
  return core.getSumT(scores) > 1 || interpersonal.getISOIndex(scores) > 0.24 || interpersonal.getFood(scores) > 0;
}
exports.getSumTChecked = getSumTChecked;
