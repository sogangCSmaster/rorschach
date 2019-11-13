const PTI = require('../special_indices/PTI.js');
const DEPI = require('../special_indices/DEPI.js');
const CDI = require('../special_indices/CDI.js');
const S_Constellation = require('../special_indices/S_Constellation.js');
const HVI = require('../special_indices/HVI.js');
const OBS = require('../special_indices/OBS.js');

function getPTI(scores) {
  let count = 0;
  count += PTI.getXAperChecked(scores);
  count += PTI.getXminusperChecked(scores);
  count += PTI.getLevel2Checked(scores);
  count += PTI.getRChecked(scores);
  count += PTI.getMChecked(scores);

  return count;
}
exports.getPTI = getPTI;

function getDEPI(scores) {
  let count = 0;
  count += DEPI.getFVChecked(scores);
  count += DEPI.getColorShadingBlendsChecked(scores);
  count += DEPI.getEgoChecked(scores);
  count += DEPI.getAfrChecked(scores);
  count += DEPI.getSumShadingChecked(scores);
  count += DEPI.getMORChecked(scores);
  count += DEPI.getCOPChecked(scores);

  return count;
}
exports.getDEPI = getDEPI;

function getCDI(scores) {
  let count = 0;
  count += CDI.getEAChecked(scores);
  count += CDI.getCOPChecked(scores);
  count += CDI.getWSumCChecked(scores);
  count += CDI.getPassiveChecked(scores);
  count += CDI.getSumTChecked(scores);

  return count;
}
exports.getCDI = getCDI;

function getSCON(scores) {
  let count = 0;
  count += S_Constellation.getFVPlusVFPlusVPlusFDChecked(scores);
  count += S_Constellation.getColorShadingBlendsChecked(scores);
  count += S_Constellation.getEgoChecked(scores);
  count += S_Constellation.getMORChecked(scores);
  count += S_Constellation.getZdChecked(scores);
  count += S_Constellation.getesChecked(scores);
  count += S_Constellation.getCFChecked(scores);
  count += S_Constellation.getXplusperChecked(scores);
  count += S_Constellation.getSChecked(scores);
  count += S_Constellation.getPChecked(scores);
  count += S_Constellation.getPureHChecked(scores);
  count += S_Constellation.getRChecked(scores);
  return count;
}
exports.getSCON = getSCON;

function getHVI(scores) {
  let count = 0;
  count += HVI.getFTChecked(scores);
  count += HVI.getZfChecked(scores);
  count += HVI.getZdChecked(scores);
  count += HVI.getSChecked(scores);
  count += HVI.getHChecked(scores);
  count += HVI.getParHChecked(scores);
  count += HVI.getHplusAChecked(scores);
  count += HVI.getCgChecked(scores);
  return count;

}
exports.getHVI = getHVI;

function getOBS(scores) {
  let count = 0;
  count += OBS.getDdChecked(scores);
  count += OBS.getZfChecked(scores);
  count += OBS.getZdChecked(scores);
  count += OBS.getPopularsChecked(scores);
  count += OBS.getFQplusChecked(scores);

  return count;
}
exports.getOBS = getOBS;
