const affection = require('./affection.js');

function getR(scores) {
  let R = 0;
  scores.forEach((scores) => {
    if (scores.card >= 1 && scores.card <= 10) {
      R += 1;
    }
  })
  return R;
}
exports.getR = getR;

function getFM(scores) {
  // FM*을 센다
  let FM = 0;
  scores.foreEach((score) => {
    if (score.det &&
      (score.det.active2 || score.det.passive2 || score.det['a-p2'])
    ) {
      FM += 1;
    }
  });
  return FM;
}
exports.getFM = getFM;

function getm(scores) {
  // m*을 센다
  let m = 0;
  scores.forEach((score) => {
    if (score.det &&
    (score.det.active3 || score.det.passive3 || score.det['a-p3'])
    ) {
      m += 1;
    }
  });
  return m;
}
exports.getm = getm;

function getEBLeft(scores) {
  return getM(scores);
}
exports.getEBLeft = getEBLeft;

function getEBRight(scores) {
  return affection.getWSumC(scores);
}
exports.getEBRight = getEBRight;

function getebLeft(scores) {
  return getM(scores) + getm(scores);
}
exports.getebLeft = getebLeft;

function getebRight(scores) {
  return getSumCprime(scores) + getSumV(scores) + getSumT(scores) + getSumY(scores);
}
exports.getebRight = getebRight;

function getLambda(scores) {
  // F를 센다
  let F = 0;
  scores.forEach((score) => {
    if (score.det && score.det.form1 && score.det.form1.value === 'F') {
      F += 1;
    }
  });
  const R = getR(scores);
  if (F === 0) {
    return 'Very Low';
  } else if (R - F == 0) {
    return 'Very High';
  } else {
    return Math.round(F / (R - F), 1);
  }
}
exports.getLambda = getLambda;

function getEA(scores) {
  return getEBLeft(scores) + getEBRight(scores);
}
exports.getEA = getEA;

function getException(scores) {
  // EA를 사용
  const EA = getEA(scores);
  if (EA < 4) {
    return '(Exception 1 : can\'t identify coping style)';
  } else if (getEBLeft(scores) == 0 && getEBRight(scores) > 3.5) {
    return '(Exception 2a : overwhelemed or flooded by emotion)';
  } else if (getEBRight(scores) == 0 && getEBLeft(scores) >= 3) {
    return '(Exception 2b : massive containment or constriction of affect)';
  } else if (EA <= 10 && getEBLeft(scores) - getEBRight(scores) >= 2) {
    return '<Coping Style : Introversive Style>';
  } else if (EA <= 10 && getEBRight(scores) - getEBLeft(scores) >= 2) {
    return '<Coping Style : Extraensive Style>';
  } else if (EA > 10 && getEBLeft(scores) - getEBRight(scores) > 2) {
    return '<Coping Style : Introversive Style>';
  } else if (EA > 10 && getEBRight(scores) - getEBLeft(scores) > 2) {
    return '<Coping Style : Extraensive Style>';
  } else {
    return '<Coping Style : Ambitent>';
  }
}
exports.getException = getException;

function getes(scores) {
  return getebLeft(scores) + getebRight(scores);
}
exports.getes = getes;

function getAdjes(scores) {
  const es = getes(scores);

  let total = 0;
  if (getSumY(scores) == 0) {
    total += 0;
  } else {
    total += getSumY(scores) - 1;
  }

  if (getm(scores) == 0) {
    total += 0;
  } else {
    total += getm(scores) - 1;
  }

  return es - total;
}
exports.getAdjes = getAdjes;


function getSumCprime(scores) {
  // det 에서 FC', C'F, C'를 모두 센다.
  let total = 0;
  scores.forEach((score) => {
    if (score.det && score.det.achromatic1) {
      total += 1;
    }

    // else if 가 아니라 모두 해당되면 더해야 하기 때문에 if 를 쓴다.
    if (score.det && score.det.achromatic2) {
      total += 1
    }

    if (score.det && score.det.achromatic3) {
      total += 1;
    }
  });
  return total;
}
exports.getSumCprime = getSumCprime;

function getSumV(scores) {
  // V, FV, VF 를 센다.
  let total = 0;
  scores.forEach((score) => {
    if (score.det && score.det.vista1) {
      total += 1;
    }
    if (score.det && score.det.vista2) {
      total += 1;
    }
    if (score.det && score.det.vista3) {
      total += 1;
    }
  });
  return total;
}
exports.getSumV = getSumV;

function getEBPer(scores) {
  if (getEBLeft(scores) == 0 || getEBRight(scores) == 0) {
    return 'N/A';
  } else {
    return Math.max(getEBLeft(scores), getEBRight(scores)) / Math.min(getEBLeft(scores), getEBRight(scores));
  }
}
exports.getEBPer = getEBPer;

function getD(scores) {
  const EA = getEA(scores);
  const es = getes(scores);
  if (EA - es > 12.5) {
    return '+5';
  } else if (EA - es > 10) {
    return '+4';
  } else if (EA - es > 7.5) {
    return '+3';
  } else if (EA - es > 5) {
    return '+2';
  } else if (EA - es > 2.5) {
    return '+1';
  } else if (EA - es > -3) {
    return '0';
  } else if (EA - es > -5.5) {
    return '-1';
  } else if (EA - es > -8) {
    return '-2';
  } else if (EA - es > -10.5) {
    return '-3';
  } else if (EA - es > -13) {
    return '-4';
  } else if (EA - es <= -13) {
    return '-5';
  }
}
exports.getD = getD;

function getAdjD(scores) {
  const EA = getEA(scores);
  const es = getAdjes(scores);
  if (EA - es > 12.5) {
    return '+5';
  } else if (EA - es > 10) {
    return '+4';
  } else if (EA - es > 7.5) {
    return '+3';
  } else if (EA - es > 5) {
    return '+2';
  } else if (EA - es > 2.5) {
    return '+1';
  } else if (EA - es > -3) {
    return '0';
  } else if (EA - es > -5.5) {
    return '-1';
  } else if (EA - es > -8) {
    return '-2';
  } else if (EA - es > -10.5) {
    return '-3';
  } else if (EA - es > -13) {
    return '-4';
  } else if (EA - es <= -13) {
    return '-5';
  }
}
exports.getAdjD = getAdjD;

function getSumT(scores) {
  // FT, TF, T 를 더함
  let total = 0;
  scores.forEach((score) => {
    if (score.det && score.det.texture1) {
      total += 1;
    }
    if (score.det && score.det.texture2) {
      total += 1;
    }
    if (score.det && score.det.texture3) {
      total += 1;
    }
  });
  return total;
}
exports.getSumT = getSumT;

function getSumY(scores) {
  // FY, YF, Y 를 더함
  let total = 0;
  scores.forEach((score) => {
    if (score.det && score.det.diffuse1) {
      total += 1;
    }
    if (score.det && score.det.diffuse2) {
      total += 1;
    }
    if (score.det && score.det.diffuse3) {
      total += 1;
    }
  });
  return total;
}
exports.getSumY = getSumY;
