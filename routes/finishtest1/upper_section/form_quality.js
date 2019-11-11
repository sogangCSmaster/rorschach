function getFQx(scores) {
  let fqList = ['+', 'o', 'u', '-', 'none'];
  let FQx = {
    '+': 0,
    'o': 0,
    'u': 0,
    '-': 0,
    'none': 0,
  };
  scores.forEach((score) => {
    if (fqList.indexOf(score.fq) !== -1) {
      FQx[score.fq] += 1;
    }
  });
  return FQx;
}
exports.getFQx = getFQx;

function getMQual(scores) {
  // 사람 운동 반응이며 해당 fq를 센다.
  let fqList = ['+', 'o', 'u', '-', 'none'];
  let MQual = {
    '+': 0,
    'o': 0,
    'u': 0,
    '-': 0,
    'none': 0,
  };
  scores.forEach((score) => {
    // active1이면 무조건 active1.value[0] == 'M'이지만 그래도 check
    if (score.det && score.det.active1 && score.det.active1.value[0] == 'M') {
      if (fqList.indexOf(score.fq) !== -1) {
        MQual[score.fq] += 1;
      }
    }
  });
  return MQual;
}
exports.getMQual = getMQual;

function getWPlusD(scores) {
  // W* 이거나 D, DS이면 더한다.
  let fqList = ['+', 'o', 'u', '-', 'none'];
  let WPlusD = {
    '+': 0,
    'o': 0,
    'u': 0,
    '-': 0,
    'none': 0,
  };
  scores.forEach((score) => {
    if (score.loc.slice(0, 1) == 'W' || score.loc == 'D' || score.loc == 'DS') {
      if (fqList.indexOf(score.fq) !== -1) {
        WPlusD[score.fq] += 1;
      }
    }
  })
}
exports.getWPlusD = getWPlusD;
