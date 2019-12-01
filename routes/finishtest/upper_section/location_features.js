function getZf(scores) {
  // Z frequency
  const filteredScores = scores.filter((score) => {
    return score.z;
  });

  return filteredScores.length;
}
exports.getZf = getZf;

function getZSum(scores) {
  const regex = /[+-]?\d+(\.\d+)?/g;
  const filteredScores = scores.filter((score) => {
    return score.z;
  })

  let ZSum = 0.0;

  filteredScores.forEach((score) => {
    const ZValues = score.z.match(regex).map((v) => { return parseFloat(v); });
    ZSum += ZValues[0];
  })

  return ZSum;
}
exports.getZSum = getZSum;

function getZEst(scores) {
  const ZEstMapper = {
    1: '-', 14: 45.5, 27: 91.5, 40: 137.5,
    2: 2.5, 15: 49.0, 28: 95.0, 41: 141.0,
    3: 6.0, 16: 52.5, 29: 98.5, 42: 144.5,
    4: 10.0, 17: 56.0, 30: 102.5, 43: 148.0,
    5: 13.5, 18: 59.5, 31: 105.5, 44: 152.0,
    6: 17.0, 19: 63.0, 32: 109.5, 45: 155.5,
    7: 20.5, 20: 66.5, 33: 112.5, 46: 159.0,
    8: 24.0, 21: 70.0, 34: 116.5, 47: 162.5,
    9: 27.5, 22: 73.5, 35: 120.0, 48: 166.0,
    10: 31.0, 23: 77.0, 36: 123.5, 49: 169.5,
    11: 34.5, 24: 81.0, 37: 127.0, 50: 173.0,
    12: 38.0, 25: 84.5, 38: 130.5,
    13: 41.5, 26: 88.0, 39: 134.0
  };

  const Zf = getZf(scores);
  return ZEstMapper[Zf] || '';
}
exports.getZEst = getZEst;

function getW(scores) {
  let W = 0;
  scores.forEach((score) => {
    if (score.loc && score.loc[0] == 'W') {
      W += 1;
    }
  });
  return W;
}
exports.getW = getW;

function getD(scores) {
  let D = 0;
  scores.forEach((score) => {
    if (score.loc && (score.loc == 'D' || score.loc == 'DS')) {
      D += 1;
    }
  })
  return D;
}
exports.getD = getD;

function getDd(scores) {
  let Dd = 0;
  scores.forEach((score) => {
    if (score.loc && score.loc.slice(0, 2) == 'Dd') {
      Dd += 1;
    }
  });
  return Dd;
}
exports.getDd = getDd;

function getS(scores) {
  // loc의 마지막 글자가 S인 것들의 수
  let S = 0;
  scores.forEach((score) => {
    if (score.loc && score.loc.slice(-1) == 'S') {
      S += 1;
    }
  });
  return S;
}
exports.getS = getS;

function getWPlusD(scores) {
  return getW(scores) + getD(scores);
}

exports.getWPlusD = getWPlusD;

function getWv(scores) {
  let Wv = 0;
  scores.forEach((score) => {
    if (score.loc == 'W' && score.dq == 'v') {
      Wv += 1;
    }
  });
  return Wv;
}
exports.getWv = getWv;
