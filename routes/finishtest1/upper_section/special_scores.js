function countSpecialScoreByKey(scores, key) {
  let count = 0;
  scores.forEach((score) => {
    if (score.score && score.score[key]) {
      count += 1;
    }
  })
  return count;
}

function getDV1(scores) {
  return countSpecialScoreByKey(scores, 'DV1');
}
exports.getDV1 = getDV1;

function getDV2(scores) {
  return countSpecialScoreByKey(scores, 'DV2');
}
exports.getDV2 = getDV2;

function getINCOM1(scores) {
  return countSpecialScoreByKey(scores, 'INCOM1');
}
exports.getINCOM1 = getINCOM1;

function getINCOM2(scores) {
  return countSpecialScoreByKey(scores, 'INCOM2');
}
exports.getINCOM2 = getINCOM2;

function getDR1(scores) {
  return countSpecialScoreByKey(scores, 'DR1');
}
exports.getDR1 = getDR1;

function getDR2(scores) {
  return countSpecialScoreByKey(scores, 'DR2');
}
exports.getDR2 = getDR2;

function getFABCOM1(scores) {
  return countSpecialScoreByKey(scores, 'FABCOM1');
}
exports.getFABCOM1 = getFABCOM1;

function getFABCOM2(scores) {
  return countSpecialScoreByKey(scores, 'FABCOM2');
}
exports.getFABCOM2 = getFABCOM2;

function getALOG(scores) {
  return countSpecialScoreByKey(scores, 'ALOG');
}
exports.getALOG = getALOG;

function getCONTAM(scores) {
  return countSpecialScoreByKey(scores, 'CONTAM');
}
exports.getCONTAM = getCONTAM;

function getSum6(scores) {
  let sum = 0;
  sum += getDV1(scores);
  sum += getDV2(scores);
  sum += getINCOM1(scores);
  sum += getINCOM2(scores);
  sum += getDR1(scores);
  sum += getDR2(scores);
  sum += getFABCOM1(scores);
  sum += getFABCOM2(scores);
  sum += getALOG(scores);
  sum += getCONTAM(scores);
  return sum;
}
exports.getSum6 = getSum6;

function getWSum6(scores) {
  let sum = 0;
  sum += getDV1(scores) * 1;
  sum += getDV2(scores) * 2;
  sum += getINCOM1(scores) * 2;
  sum += getINCOM2(scores) * 4;
  sum += getDR1(scores) * 3;
  sum += getDR2(scores) * 6;
  sum += getFABCOM1(scores) * 4;
  sum += getFABCOM2(scores) * 7;
  sum += getALOG(scores) * 5;
  sum += getCONTAM(scores) * 7;
  return sum;
}
exports.getWSum6 = getWSum6;

function getAB(scores) {
  return countSpecialScoreByKey(scores, 'AB');
}
exports.getAB = getAB;

function getAG(scores) {
  return countSpecialScoreByKey(scores, 'AG');
}
exports.getAG = getAG;

function getCOP(scores) {
  return countSpecialScoreByKey(scores, 'COP');
}
exports.getCOP = getCOP;

function getCP(scores) {
  return countSpecialScoreByKey(scores, 'CP');
}
exports.getCP = getCP;

function getMOR(scores) {
  return countSpecialScoreByKey(scores, 'MOR');
}
exports.getMOR = getMOR;

function getPER(scores) {
  return countSpecialScoreByKey(scores, 'PER');
}
exports.getPER = getPER;

function getPSV(scores) {
  return countSpecialScoreByKey(scores, 'PSV');
}
exports.getPSV = getPSV;

function getGHR(scores) {

  /* GHR 조건
   * H, (H), Hd (Hd), Ma, Mp, Ma-p or Hx 를 가지고 있고   <pure H>
   * a) FQ 가 +, o,  or u
   * b) 특수 점수가 DV를 제외한 인지적 특수 점수 없을 것
   * c) 특수 점수: MOR, AG같은 내용 특수 점수 없을 것
   */
}
