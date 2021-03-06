const single = require('./single.js');

function getContents(scores) {
  // 전체 content를 넘긴다.
  const contentList = ['H', '(H)', 'Hd', ,'(Hd)', 'Hx', 'A', '(A)', 'Ad', '(Ad)', 'An', 'Art', 'Ay', 'Bl', 'Bt', 'Cg', 'Cl', 'Ex', 'Fd', 'Fi', 'Ge', 'Hh', 'Ls', 'Na', 'Sc', 'Sx', 'Xy', 'Id'];
  const contentsCount = {};
  contentList.forEach((content) => {
    contentsCount[content] = 0;
    scores.forEach((score) => {
      if (score.react && score.react[content]) {
        contentsCount[content] += 1;
      }
    })
  });
  contentsCount['P'] = single.getP(scores);
  return contentsCount;
}
exports.getContents = getContents;
