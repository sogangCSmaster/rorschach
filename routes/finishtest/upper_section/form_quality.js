function getFQx(scores) {
  let fqList = ['+', 'o', 'u', '-', 'none', 'None'];
  let FQx = {
    '+': 0,
    'o': 0,
    'u': 0,
    '-': 0,
    'none': 0,
    'None': 0,
  };
  scores.forEach((score) => {
    if (fqList.indexOf(score.fq) !== -1) {
      FQx[score.fq] += 1;
    }
  });
  FQx['none'] += FQx['None'];
  delete FQx['None'];
  return FQx;
}
exports.getFQx = getFQx;

function getMQual(scores) {
  // 사람 운동 반응이며 해당 fq를 센다.
  let fqList = ['+', 'o', 'u', '-', 'none', 'None'];
  let MQual = {
    '+': 0,
    'o': 0,
    'u': 0,
    '-': 0,
    'none': 0,
    'None': 0,
  };
  scores.forEach((score) => {
    // active1이면 무조건 active.value[0] == 'M'이지만 그래도 check
    if (score.det && (score.det.active1 || score.det.passive1 || score.det['a-p1'])) {
      if (fqList.indexOf(score.fq) !== -1) {
        MQual[score.fq] += 1;
      }
    }
  });
  MQual['none'] += MQual['None'];
  delete MQual['None'];
  return MQual;
}
exports.getMQual = getMQual;

function getWPlusD(scores) {
  // W* 이거나 D, DS이면 더한다.
  let fqList = ['+', 'o', 'u', '-', 'none', 'None'];
  let WPlusD = {
    '+': 0,
    'o': 0,
    'u': 0,
    '-': 0,
    'none': 0,
    'None': 0,
  };
  scores.forEach((score) => {
    if (score.loc.slice(0, 1) == 'W' || score.loc == 'D' || score.loc == 'DS') {
      if (fqList.indexOf(score.fq) !== -1) {
        WPlusD[score.fq] += 1;
      }
    }
  });
  WPlusD['none'] += WPlusD['None'];
  delete WPlusD['None'];
  return WPlusD;
}
exports.getWPlusD = getWPlusD;
