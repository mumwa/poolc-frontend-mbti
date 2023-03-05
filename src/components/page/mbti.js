const mbti = {
  enfj: {
    name: "천사",
    content:
      "주위 사람들을 잘 살피고 남의 일까지 신경 써줍니다. 혼자 있는 사람을 챙기는 천사입니다. 이상하게 팀장을 많이 맡습니다. 백양로에 졸업 현수막이 걸립니다. 가끔 억까를 당합니다. 인기인의 숙명이니 받아들이세요.",
    caution: "우울하면 코딩 속도가 많이 느려집니다.",
  },
  enfp: {
    name: "엉뚱발랄",
    content:
      "자주 뜬금없는 소리로 팀원들을 웃기고 주의를 환기시켜줍니다. 커밋 메세지가 엉망이지만 그래도 커밋은 자주 해줍니다. 모르는 게 있으면 막 웃습니다. 그래도 모르는 걸 빨리 말해줘서 일은 생각보다 잘 돌아갑니다.",
    caution: "갑자기 직종을 바꿀 수도 있습니다.",
  },
  entj: {
    name: "창업팀",
    content:
      "자기 PR에 강하고 말을 잘하는 개발자입니다. 다양한 가능성에 관심이 많고 사회 이슈에도 관심이 많습니다. PPT를 기막히게 만들어서 경영학과라는 농담을 듣습니다. 실제로 경영 출신일수도?",
    caution: "일을 점점 크게 만듭니다.",
  },
  entp: {
    name: "창의적인",
    content:
      "사이드 프로젝트를 5개 정도 하고 있습니다. 다양한 분야에 관심이 많으며, 토론을 즐깁니다. 마이너한 분야를 공부하면서 뿌듯해합니다. 감성적인 사람을 보면 알러지가 올라오지만, 오랜 사회 생활을 거쳐 이제는 나아졌습니다.",
    caution: "전후관계 상관없이 비아냥댑니다.",
  },
  esfj: {
    name: "인싸",
    content:
      "누구에게나 밝게 대해주며, 여러 활동을 찾아오고 사람들을 모아 줍니다. 공학관부터 백양관까지 가면서 인사를 5번은 합니다. 개발이 안 맞는 것 같다고 1년 째 중얼거리는데 그만두지는 않습니다.",
    caution: "저번에 딱 한 번 봤는데 찐친인 것처럼 굽니다.",
  },
  esfp: {
    name: "디자이너",
    content:
      "미적 감각이 높고 꾸미는 것을 좋아하는 특이한 개발자입니다. 단체 내에서 일어나는 모든 일을 꽤고 있습니다. 그러나 본인이 고백 공격을 받을 것은 예상하지 못했습니다.",
    caution: "음식 먹기 전에 사진을 오래 찍습니다.",
  },
  estj: {
    name: "팀장",
    content:
      "어떻게 일을 나누고, 어떻게 업무 관리를 하고, 어느 주기로 만날지 바로 정하는 개발자. 자기 분야가 확실하고 남들을 관리하는 것도 즐깁니다. 유능하다는 평가를 자주 받고, 본인도 그걸 즐기는 것 같습니다.",
    caution: "고민 상담을 했더니 약점이 잡혀있습니다.",
  },
  estp: {
    name: "밀고나가는",
    content:
      "기획에서 필요없는 부분을 금방금방 찾아내고, 일정에서 안되는 것은 과감하게 뺍니다. 조용한 개발자들 사이에서 피해다녀야할 대상이 되기도 합니다. 하지만 뒤끝 없는 시원시원한 성격으로, 다른 사람들과 대신 싸워줄 때는 정말 든든합니다.",
    caution: "필요한 것도 얼렁뚱땅 넘어갑니다.",
  },
  infj: {
    name: "외유내강",
    content:
      "침착하게 버그를 찾으며, 막힌 부분은 바로 찾아봅니다. 모두에게 다정하고 생각이 깊은데, 가끔 이상한 미소를 짓습니다. 실수하면 다시는 용서하지 않을 것 같은 느낌이 듭니다.",
    caution: "데스노트의 누군가의 이름을 적고 있습니다.",
  },
  infp: {
    name: "귀염둥이",
    content:
      "버그가 많으면 눈동자는 떨리지만 말은 긍정적으로 하는 개발자입니다. 엉뚱하고 감성적인 면이 있으며, 몰입도가 높습니다. 친한 척하는 눈치 없는 사람 때문에 점점 집중력이 낮아지고 있지만요...",
    caution: "고민 상담이 너무 깁니다.",
  },
  intj: {
    name: "일잘러",
    content:
      "당신은 막히는 부분이 있으면 바로 그 부분을 깊히 공부합니다. 이상한 것에 관심이 가지만, 주류 프레임워크 위주로 공부했습니다. 일을 잘하기로 정평이 나있고, 건도는 팀원에게 다정하게 행동합니다. 자신의 성격을 좋아하면서도 피곤해합니다.",
    caution: "감정 표현이 잘 안됩니다.",
  },
  intp: {
    name: "천상",
    content:
      "아이디어가 많고, 중복되는 부분을 잘 찾아냅니다. 솔직하고 엉뚱한 구석이 있으며, 이해하기 어렵지만 악의는 없습니다. 다른 분야 가면 맹하고 일머리 없다는 소리를 듣지만, 개발자들 사이에서는 평판이 좋습니다.",
    caution: "사람 대하는 것을 어려워합니다.",
  },
  isfj: {
    name: "섬세한",
    content:
      "개발자답지 않게 다정하고 섬세합니다. 팀 사람들을 잘 다독여줍니다. 주위 사람들이 이 사람을 고생 시킵니다. 그래도 사람인지라 에너지가 떨어지면 점점 눈에서 영혼이 사라지지만, 끝까지 예의를 지킵니다. 커밋 메세지가 깔끔한 편입니다.",
    caution:
      "정상적으로 보이는데 집착해서, 이상한 사람 취급하면 진짜 이상해집니다.",
  },
  isfp: {
    name: "둥글둥글",
    content:
      "누군가 우울한 말을 하면 항상 좋게 대답해주는 신기한 능력을 가진 개발자. 정작 본인은 코딩이 안 맞는 것 같다고 자주 말합니다. 자신이 아는 분야를 하던 모르는 분야를 하던 일관된 태도를 유지해서 멋질 때가 있습니다. 본인의 역량을 잘 파악하여 되는데까지만 합니다.",
    caution: "선택장애가 있습니다.",
  },
  istj: {
    name: "완벽주의",
    content:
      "일정을 잘 지키며 정직한 개발자입니다. 팀에서 유일하게 마감을 지킵니다. 코드 컨벤션을 잘 지킵니다. 조용했는데, 강제 발표에서 생각보다 일을 잘해서 주위 사람들을 놀래킵니다. 학점이 높습니다. 개발자는 학점 필요없다는 말에 별 관심도 없네요.",
    caution: "하던 방식을 잘 안 바꿉니다.",
  },
  istp: {
    name: "차가운 도시",
    content:
      "본인의 영역이 확실하며, 현실적입니다. 본인에게 주어진 테스크를 확실히 해내고, 유능하다는 평가를 듣습니다. 대부분 중립입니다. 컵 좀 건내달라고 해야하는데 표정이 무섭습니다. 달라고 하면 주지만...",
    caution: "잘못 걸리면 자존감을 낮춰줍니다.",
  },
};
export default mbti;
