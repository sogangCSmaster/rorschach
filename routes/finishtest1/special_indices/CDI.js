function getUp4Checked(scores) {
  let checked = 0;
  checked += getEAChecked(scores);
  checked += getCOPChecked(scores);
  checked += getWSumCChecked(scores);
  checked += getPassiveChecked(scores);
  checked += getSumTChecked(scores);

  return checked >= 4;

}
exports.getUp4Checked = getUp4Checked;

function getEAChecked(scores) {
  // EA < 6 or AdjD < 0
}
exports.getEAChecked = getEAChecked;

function getCOPChecked(scores) {
  // COP < 2 and AG < 2
}
exports.getCOPChecked = getCOPChecked;

function getWSumCChecked(scores) {
  // WSumC < 0.25 or AFr < 0.46
}
exports.getWSumCChecked = getWSumCChecked;

function getPassiveChecked(scores) {
  // Passive > Active + 1 or PureH < 2
}
exports.getPassiveChecked = getPassiveChecked;

function getSumTChecked(scores) {
  // SumT > 1 or Isolate/R > 0.24 or Food > 0
}
exports.getSumTChecked = getSumTChecked;
