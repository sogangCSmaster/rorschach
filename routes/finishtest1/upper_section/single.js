const cognitive_mediation = require('../lower_section/cognitive_mediation.js');

function countSingleDetWithKey(scores, key, value) {
  // value가 없으면 key만 센다
  let count = 0;
  scores.forEach((score) => {
    if (score.det && Object.keys(score.det).length === 1 && score.det[key]) {
      if (value) {
        if (score.det[key].value === value) {
          count += 1;
        }
      } else {
        count += 1;
      }
    }
  })
  return count;
}

function getM(scores) {
  //det의 key size가 1일때
  return countSingleDetWithKey(scores, 'active1');
}
exports.getM = getM;

function getFM(scores) {
  return countSingleDetWithKey(scores, 'active2');
}
exports.getFM = getFM;

function getm(scores) {
  return countSingleDetWithKey(scores, 'active3');
}
exports.getm = getm;

function getFC(scores) {
  return countSingleDetWithKey(scores, 'chromatic1', 'FC');
}
exports.getFC = getFC;

function getCF(scores) {
  return countSingleDetWithKey(scores, 'chromatic1', 'CF');
}
exports.getCF = getCF;

function getC(scores) {
  return countSingleDetWithKey(scores, 'chromatic1', 'C');
}
exports.getC = getC;

function getCn(scores) {
  return countSingleDetWithKey(scores, 'chromatic1', 'Cn');
}
exports.getCn = getCn;

function getFCprime(scores) {
  return countSingleDetWithKey(scores, 'achromatic1', "FC'");
}
exports.getFCprime = getFCprime;

function getCprimeF(scores) {
  return countSingleDetWithKey(scores, 'achromatic1', "C'F");
}
exports.getCprimeF = getCprimeF;

function getCprime(scores) {
  return countSingleDetWithKey(scores, 'achromatic1', "C'");
}
exports.getCprime = getCprime;

function getFT(scores) {
  return countSingleDetWithKey(scores, 'texture1', 'FT');
}
exports.getFT = getFT;

function getTF(scores) {
  return countSingleDetWithKey(scores, 'texture1', 'TF');
}
exports.getTF = getTF;

function getT(scores) {
  return countSingleDetWithKey(scores, 'texture1', 'T');
}
exports.getT = getT;

function getFV(scores) {
  return countSingleDetWithKey(scores, 'vista1', 'FV');
}
exports.getFV = getFV;

function getVF(scores) {
  return countSingleDetWithKey(scores, 'vista1', 'VF');
}
exports.getVF = getVF;

function getV(scores) {
  return countSingleDetWithKey(scores, 'vista1', 'V');
}
exports.getV = getV;

function getFY(scores) {
  return countSingleDetWithKey(scores, 'diffuse1', 'FY');
}
exports.getFY = getFY;

function getYF(scores) {
  return countSingleDetWithKey(scores, 'diffuse1', 'YF');
}
exports.getYF = getYF;

function getY(scores) {
  return countSingleDetWithKey(scores, 'diffuse1', 'Y');
}
exports.getY = getY;

function getFr(scores) {
  return countSingleDetWithKey(scores, 'reflection1');
}
exports.getFr = getFr;

function getrF(scores) {
  return countSingleDetWithKey(scores, 'reflection2');
}
exports.getrF = getrF;

function getFD(scores) {
  return countSingleDetWithKey(scores, 'form2');
}
exports.getFD = getFD;

function getF(scores) {
  return countSingleDetWithKey(scores, 'form1');
}
exports.getF = getF;

function get2(scores) {
  // (2)를 센다

  let two = 0;

  scores.forEach((score) => {
    if (score.select2 == '(2)') {
      two += 1;
    }
  });
  return two;
}
exports.get2 = get2;

function getP(scores) {
  return cognitive_mediation.getP(scores);
}
exports.getP = getP;
