function getUp4Checked(scores) {
  // 1번 만족시키고 나머지 7개 중 4개 이상이면 check
  let checked = 0;
  checked += getZfChecked(scores);
  checked += getZdChecked(scores);
  checked += getSChecked(scores);
  checked += getHChecked(scores);
  checked += getParHChecked(scores);
  checked += getHplusAChecked(scores);
  checked += getCgChecked(scores);

  return getFTChecked(scores) && (checked >= 4);
}
exports.getUp4Checked = getUp4Checked;

function getFTChecked(scores) {
  // FT + TF + T = 0
}
exports.getFTChecked = getFTChecked;

function getZfChecked(scores) {

}
exports.getZfChecked = getZfChecked;

function getZdChecked(scores) {

}
exports.getZdChecked = getZdChecked;

function getSChecked(scores) {

}
exports.getSChecked = getSChecked;

function getHChecked(scores) {

}
exports.getHChecked = getHChecked;

function getParHChecked(scores) {

}
exports.getParHChecked = getParHChecked;

function getHplusAChecked(scores) {

}
exports.getHplusAChecked = getHplusAChecked;

function getCgChecked(scores) {

}
exports.getCgChecked = getCgChecked;
