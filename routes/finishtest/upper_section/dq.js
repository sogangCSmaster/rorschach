function getPlus(scores) {
  let plus = 0;
  scores.forEach((score) => {
    if (score.dq == '+') {
      plus += 1;
    }
  });
  return plus;
}
exports.getPlus = getPlus;

function getPlusFQxminus(scores) {
  let FQminus = 0;
  scores.forEach((score) => {
    if (score.dq == '+' && score.fq == '-') {
      FQminus += 1;
    }
  });
  return FQminus;
}
exports.getPlusFQxminus = getPlusFQxminus;

function getO(scores) {
  let o = 0;
  scores.forEach((score) => {
    if (score.dq == 'o') {
      o += 1;
    }
  });
  return o;
}
exports.getO = getO;

function getOFQxminus(scores) {
  let FQminus = 0;
  scores.forEach((score) => {
    if (score.dq == 'o' && score.fq == '-') {
      FQminus += 1;
    }
  });
    console.log('asdasdasdasd', FQminus)
  return FQminus;
}
exports.getOFQxminus = getOFQxminus;

function getVSlashPlus(scores) {
  let vSlashPlus = 0;
  scores.forEach((score) => {
    if (score.dq == 'v/+') {
      vSlashPlus += 1;
    }
  });
  return vSlashPlus;
}
exports.getVSlashPlus = getVSlashPlus;

function getVSlashPlusFQxminus(scores) {
  let FQminus = 0;
  scores.forEach((score) => {
    if (score.dq == 'v/+' && score.fq == '-') {
      FQminus += 1;
    }
  });
  return FQminus;
}
exports.getVSlashPlusFQxminus = getVSlashPlusFQxminus;

function getV(scores) {
  let v = 0;
  scores.forEach((score) => {
    if (score.dq == 'v') {
      v += 1;
    }
  });
  return v;
}
exports.getV = getV;

function getVFQxminus(scores) {
  let FQminus = 0;
  scores.forEach((score) => {
    if (score.dq == 'v' && score.fq == '-') {
      FQminus += 1;
    }
  });
  return FQminus;
}
exports.getVFQxminus = getVFQxminus;
