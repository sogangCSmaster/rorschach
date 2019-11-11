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
