const core = require('../lower_section/core.js');
const information_processing = require('../lower_section/information_processing.js');
const affection = require('../lower_section/affection.js');
const interpersonal = require('../lower_section/interpersonal.js');
const contents = require('../upper_section/contents.js');

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
  return core.getSumT(scores) == 0;
}
exports.getFTChecked = getFTChecked;

function getZfChecked(scores) {
  // Zf > 12
  return information_processing.getZf(scores) > 12;
}
exports.getZfChecked = getZfChecked;

function getZdChecked(scores) {
  // Zd > +3.5
  return information_processing.getZd(scores) > 3.5;
}
exports.getZdChecked = getZdChecked;

function getSChecked(scores) {
  // S > 3
  return affection.getS(scores) > 3;
}
exports.getSChecked = getSChecked;

function getHChecked(scores) {
  // H + (H) + Hd + (Hd) > 6
  return interpersonal.getHumanCont(scores) > 6;

}
exports.getHChecked = getHChecked;

function getParHChecked(scores) {
  // (H) + (A) + (Hd) + (Ad) > 3
  const cont = contents.getContents(scores);
  return cont['(H)'] + cont['(A)'] + cont['(Hd)'] + cont['(Ad)'] > 3;
}
exports.getParHChecked = getParHChecked;

function getHplusAChecked(scores) {
  // H + A : Hd + Ad < 4 : 1
  const cont = contents.getContents(scores);
  const HplusA = cont['H'] + cont['A'];
  const HdplusAd = cont['Hd'] + cont['Ad'];

  if (HplusA==0 || HdplusAd == 0) {
    return 0;
  } else if (HplusA / HdplusAd < 4) {
    return 1;
  } else {
    return 0;
  }
}
exports.getHplusAChecked = getHplusAChecked;

function getCgChecked(scores) {
  // Cg > 3
  const cont = contents.getContents(scores);
  return cont['Cg'] > 3;
}
exports.getCgChecked = getCgChecked;
