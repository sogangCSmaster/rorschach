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
  let GHR = 0;
  scores.forEach((score) => {
    if (checkGHRorPHR(score) == 'GHR') {
      GHR += 1;
    }
  });
  return GHR;
}
exports.getGHR = getGHR;

function getPHR(scores) {
  let PHR = 0;
  scores.forEach((score) => {
    if (checkGHRorPHR(score) == 'PHR') {
      PHR += 1;
    }
  });
  return PHR;
}
exports.getPHR = getPHR;

function checkGHRorPHR(score) {
  /* GHR 조건
   * H, (H), Hd (Hd), Hx, Ma, Mp, Ma-p 를 가지고 있거나
   * (FMa or FMp or  FMa-p) and (COP or AG) 이면서
   * H  and (fq = + or o or u) and (special scores not DR1 not DR2 not INCOM1 not INCOM2 not FABCOM1 not FABCOM2 not CONTAM not ALOG not AG not MOR) 이면 GHR
   *
   * 그 외에 (fq 가 - or none or ((fq 가 + or o or u) and (ALOG or CONTAM or DV2 or INCOM2 or DR2 or FABCOM2) )) 이면 PHR
   * 그 외에 (COP and (!AG)) 이면 GHR
   * 그 외에 (FABCOM1 or FABCOM2 or MOR or An) 이면 PHR
   * 그 외에 (card 번호 3 or 4 or 7 or 9) and p='P' 이면 GHR
   * 그 외에 (AG or INCOM1 or INCOM2 or DR1 or DR2 or Hd) 이면 PHR
   * 그 외는 GHR
   */
  if (
  (score.react && (score.react.H || score.react['(H)'] || score.react.Hd || score.react['(Hd)'] || score.react.Hx)) ||
  (score.det && (score.det.active1 || score.det.passive1 || score.det['a-p1'])) ||
  (score.det && (score.det.active2 || score.det.passive2 || score.det['a-p2']) && score.score && (score.score.AG || score.score.COP))
) {
    // 1
    if (score.react && score.react.H &&
      (score.fq == '+' || score.fq == 'o' || score.fq == 'u') &&
      (score.score && (!score.score.DR1 && !score.score.DR2 && !score.score.INCOM1 && !score.score.INCOM2 && !score.score.FABCOM1 && !score.score.FABCOM2 && !score.score.CONTAM && !score.score.ALOG && !score.score.AG && !score.score.MOR))
    ) {
      return 'GHR';
    }

    // 2
    if (
      (score.fq == '-' || score.fq == 'none') ||
      ((score.fq == '+' || score.fq == 'o' || score.fq == 'u') && ((score.score) && (score.score.ALOG || score.score.CONTAM || score.score.DV2 || score.score.INCOM2 || score.score.DR2 || score.score.FABCOM2)))
    ) {
      return 'PHR';
    }

    // 3
    if (score.score && score.score.COP && !score.score.AG) {
      return 'GHR';
    }

    // 4
    if (score.score && (score.score.FABCOM1 || score.score.FABCOM2 || score.score.MOR || (score.react && score.react.An))) {
      return 'PHR';
    }

    // 5
    if ((score.card == 3 || score.card == 4 || score.card == 7 || score.card == 9) && score.p === 'P') {
      return 'GHR';
    }
    
    // 6
    if (score.score && (score.score.AG || score.score.INCOM1 || score.score.INCOM2 || score.score.DR1 || score.score.DR2 || (score.react && score.react.Hd))) {
      return 'PHR';
    }

    // 7
    return 'GHR';
  } else {
    return '';
  }
}
