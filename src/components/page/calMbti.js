import answer from "./answer";

const calMbti = (result) => {
  const letter = {
    e: 0,
    i: 0,
    n: 0,
    s: 0,
    f: 0,
    t: 0,
    j: 0,
    p: 0,
  };
  let mbti = "";
  for (const i in result) {
    const value = answer[i][parseInt(Object.keys(result[i]))];
    Object.keys(value).forEach(function (item) {
      letter[item] = letter[item] + value[item];
    });
  }
  if (letter.i < letter.e) {
    mbti += "e";
  } else {
    mbti += "i";
  }
  if (letter.s < letter.n) {
    mbti += "n";
  } else {
    mbti += "s";
  }
  if (letter.t < letter.f) {
    mbti += "f";
  } else {
    mbti += "t";
  }
  if (letter.p < letter.j) {
    mbti += "j";
  } else {
    mbti += "p";
  }
  return mbti;
};

export default calMbti;
