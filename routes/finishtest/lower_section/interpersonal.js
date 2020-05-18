const special_scores = require('../upper_section/special_scores.js');
const contents = require('../upper_section/contents.js');
const core = require('./core.js');

function getCOP(scores) {
  return special_scores.getCOP(scores);
}
exports.getCOP = getCOP;

function getAG(scores) {
  return special_scores.getAG(scores);
}
exports.getAG = getAG;

function getGHR(scores) {
  return special_scores.getGHR(scores);
}
exports.getGHR = getGHR;

function getPHR(scores) {
  return special_scores.getPHR(scores);
}
exports.getPHR = getPHR;

function geta(scores) {
  // Ma, FMa, ma, Ma-p, FMa-p, ma-p를 센다.
  let a = 0;
  scores.forEach((score) => {
    if (score.det && score.det.active1) {
      a += 1;
    }
    if (score.det && score.det.active2) {
      a += 1;
    }
    if (score.det && score.det.active3) {
      a += 1;
    }

    if (score.det && score.det['a-p1']) {
      a += 1;
    }
    if (score.det && score.det['a-p2']) {
      a += 1;
    }
    if (score.det && score.det['a-p3']) {
      a += 1;
    }
  });
  return a;
}
exports.geta = geta;

function getp(scores) {
  // Mp, FMp, mp, Ma-p, FMa-p, ma-p를 센다.
  let a = 0;
  scores.forEach((score) => {
    if (score.det && score.det.passive1) {
      a += 1;
    }
    if (score.det && score.det.passive2) {
      a += 1;
    }
    if (score.det && score.det.passive3) {
      a += 1;
    }

    if (score.det && score.det['a-p1']) {
      a += 1;
    }
    if (score.det && score.det['a-p2']) {
      a += 1;
    }
    if (score.det && score.det['a-p3']) {
      a += 1;
    }
  });
  return a;
}
exports.getp = getp;

function getFood(scores) {
  const { Fd } = contents.getContents(scores);
  return Fd;
}
exports.getFood = getFood;

function getSumT(scores) {
  return core.getSumT(scores);
}
exports.getSumT = getSumT;

function getHumanCont(scores) {
  const cont = contents.getContents(scores);
  return cont['H'] + cont['(H)'] + cont['Hd'] + cont['(Hd)'];
}
exports.getHumanCont = getHumanCont;

function getPureH(scores) {
  const cont = contents.getContents(scores);
  return cont['H'];
}
exports.getPureH = getPureH;

function getPER(scores) {
  return special_scores.getPER(scores);
}
exports.getPER = getPER;

function getISOIndex(scores) {
  // sum(Na * 2,Cl * 2, Bt, Ls, Ge) / R 

  let sum = 0;
  const cont = contents.getContents(scores);

  sum += cont['Na'] * 2;
  sum += cont['Cl'] * 2;
  sum += cont['Bt'];
  sum += cont['Ls'];
  sum += cont['Ge'];

  return roundTo(sum / core.getR(scores), 2);
  //return (sum / core.getR(scores)).toFixed(2);

}
exports.getISOIndex = getISOIndex;
