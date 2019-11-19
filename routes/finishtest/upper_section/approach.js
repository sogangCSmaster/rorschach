function getApproach(scores) {
  const cards = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  };

  scores.forEach((score) => {
    if (cards[score.card]) {
      cards[score.card].push(score.loc + score.dq);
    }
  });
  return cards;
}
exports.getApproach = getApproach;
