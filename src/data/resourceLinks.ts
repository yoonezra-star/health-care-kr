import { categories } from "./site";

export type OfficialResource = {
  name: string;
  href: string;
  owner: string;
  scope: string;
  tags: string[];
};

export type CategoryHub = {
  key: string;
  title: string;
  summary: string;
  useCases: string[];
  checkPoints: string[];
  resourceTags: string[];
};

export const officialResources: OfficialResource[] = [
  {
    name: "질병관리청 국가건강정보포털",
    href: "https://health.kdca.go.kr/",
    owner: "질병관리청",
    scope: "질환, 증상, 검진 수치, 생활습관 관리 정보를 확인할 수 있는 공공 건강 정보 포털입니다.",
    tags: ["body", "vitals", "health", "lifestyle"]
  },
  {
    name: "질병관리청 국민건강영양조사",
    href: "https://knhanes.kdca.go.kr/knhanes/main.do",
    owner: "질병관리청",
    scope: "국민의 건강 행태, 영양 섭취, 검진 지표를 이해할 때 참고할 수 있는 국가 조사 자료입니다.",
    tags: ["nutrition", "body", "health"]
  },
  {
    name: "국민건강보험공단",
    href: "https://www.nhis.or.kr/",
    owner: "국민건강보험공단",
    scope: "건강검진, 보험, 예방 건강관리와 관련된 공공 서비스를 확인할 수 있습니다.",
    tags: ["health", "vitals", "body"]
  },
  {
    name: "건강보험심사평가원",
    href: "https://www.hira.or.kr/",
    owner: "건강보험심사평가원",
    scope: "병원·약국 찾기, 의약품 정보, 의료 이용 정보를 확인할 때 참고할 수 있습니다.",
    tags: ["health", "vitals"]
  },
  {
    name: "식품안전나라",
    href: "https://www.foodsafetykorea.go.kr/",
    owner: "식품의약품안전처",
    scope: "식품 안전, 영양 성분, 식품 표시, 위해 식품 정보를 확인할 수 있는 식품 안전 포털입니다.",
    tags: ["nutrition", "health"]
  },
  {
    name: "식품의약품안전처",
    href: "https://www.mfds.go.kr/",
    owner: "식품의약품안전처",
    scope: "식품, 의약품, 의료기기 안전 정책과 공지 자료를 확인할 수 있습니다.",
    tags: ["nutrition", "health"]
  },
  {
    name: "보건복지부",
    href: "https://www.mohw.go.kr/",
    owner: "보건복지부",
    scope: "건강정책, 예방, 복지 제도, 영양 기준 관련 정책 자료를 확인할 수 있습니다.",
    tags: ["nutrition", "health", "lifestyle"]
  },
  {
    name: "한국영양학회 한국인 영양소 섭취기준",
    href: "https://www.kns.or.kr/fileroom/fileroom.asp?BoardID=Kdr",
    owner: "한국영양학회",
    scope: "탄수화물, 단백질, 지방, 나트륨, 식이섬유 등 영양 계산기의 기준을 이해할 때 참고합니다.",
    tags: ["nutrition"]
  }
];

export const categoryHubs: CategoryHub[] = [
  {
    key: "body",
    title: "체형 계산기 허브",
    summary: "BMI, 허리둘레, 체지방률, 적정 체중처럼 체형 변화를 기록하고 해석하는 계산기를 모았습니다.",
    useCases: [
      "체중 감량이나 증량을 시작하기 전 기준점을 잡을 때",
      "건강검진의 체중·허리둘레 결과를 생활습관 관점에서 다시 볼 때",
      "BMI만으로 부족한 복부비만, 체지방률, 허리-키 비율을 함께 비교할 때"
    ],
    checkPoints: [
      "BMI는 근육량과 체지방 분포를 직접 반영하지 못합니다.",
      "허리둘레와 허리-키 비율은 대사 건강 점검에서 함께 보면 좋습니다.",
      "급격한 체중 변화나 부종, 피로가 있으면 계산보다 진료 상담이 우선일 수 있습니다."
    ],
    resourceTags: ["body", "health"]
  },
  {
    key: "nutrition",
    title: "영양 계산기 허브",
    summary: "단백질, 탄수화물, 지방, 나트륨, 수분, 칼로리처럼 식단 기록에 필요한 계산기를 정리했습니다.",
    useCases: [
      "식단을 기록하기 전 대략적인 하루 기준을 잡을 때",
      "감량, 증량, 운동 목표에 맞춰 영양소 균형을 점검할 때",
      "나트륨, 당류, 카페인처럼 과다 섭취가 쉬운 항목을 따로 확인할 때"
    ],
    checkPoints: [
      "권장량은 평균 기준이며 질환, 약물, 임신·수유 여부에 따라 달라질 수 있습니다.",
      "하루 한 끼보다 며칠간의 평균 섭취 패턴을 보는 것이 현실적입니다.",
      "극단적인 제한보다 지속 가능한 식사 구조를 잡는 것이 중요합니다."
    ],
    resourceTags: ["nutrition"]
  },
  {
    key: "vitals",
    title: "혈압·혈당 계산기 허브",
    summary: "혈압, 혈당, 콜레스테롤, 심박수처럼 검진 결과와 자가 측정값을 정리하는 계산기를 모았습니다.",
    useCases: [
      "건강검진 결과표를 받은 뒤 어떤 수치를 다시 봐야 하는지 정리할 때",
      "혈압·혈당·지질 수치를 반복 기록하며 변화 방향을 확인할 때",
      "심혈관 위험 요인을 한 수치가 아니라 여러 지표로 함께 볼 때"
    ],
    checkPoints: [
      "검사 수치는 공복 여부, 측정 시간, 복용 약물, 최근 식사와 운동의 영향을 받을 수 있습니다.",
      "한 번의 결과보다 반복 측정과 진료 상담에서 확인한 기준이 중요합니다.",
      "증상이나 매우 높은 수치가 있으면 온라인 계산보다 의료기관 상담이 우선입니다."
    ],
    resourceTags: ["vitals", "health"]
  },
  {
    key: "lifestyle",
    title: "생활습관 계산기 허브",
    summary: "운동량, 수면, 흡연력, 기대수명형 생활습관 점검처럼 일상 행동을 숫자로 정리하는 계산기를 모았습니다.",
    useCases: [
      "운동, 수면, 흡연, 음주 같은 습관을 기록 가능한 형태로 바꾸고 싶을 때",
      "금연이나 운동 계획을 시작하기 전 현재 상태를 확인할 때",
      "생활습관 변화 전후를 비교해 동기 부여를 얻고 싶을 때"
    ],
    checkPoints: [
      "생활습관 계산기는 실제 수명이나 질병 발생을 예측하는 도구가 아닙니다.",
      "수면, 스트레스, 운동은 서로 영향을 주므로 한 항목만 보지 않는 것이 좋습니다.",
      "지속적인 증상, 심한 피로, 호흡곤란, 흉통은 진료 상담이 필요할 수 있습니다."
    ],
    resourceTags: ["lifestyle", "health"]
  },
  {
    key: "health",
    title: "건강지표 계산기 허브",
    summary: "대사증후군, 임신 예정일, 가임기, 카페인, 나트륨처럼 특정 상황에서 참고하는 건강지표 계산기를 정리했습니다.",
    useCases: [
      "건강검진 수치나 생활 속 건강 지표를 한 번 더 정리하고 싶을 때",
      "여러 기준을 한 화면에서 비교해 다음 행동을 정하고 싶을 때",
      "검사와 상담 전에 질문할 내용을 정리하고 싶을 때"
    ],
    checkPoints: [
      "건강지표 계산기는 진단, 치료, 처방 결정을 대신하지 않습니다.",
      "임신, 생리, 대사질환, 약물 복용과 관련된 판단은 전문가 상담이 필요할 수 있습니다.",
      "결과가 경계에 있다면 관련 계산기를 함께 보고 공식 자료를 확인하세요."
    ],
    resourceTags: ["health", "vitals", "nutrition"]
  }
];

export const calculatorCategories = categories.filter((category) => category.key !== "all");

export const getCategoryHub = (key: string) =>
  categoryHubs.find((hub) => hub.key === key) ?? categoryHubs[categoryHubs.length - 1];

export const getResourcesForTags = (tags: string[]) =>
  officialResources.filter((resource) => resource.tags.some((tag) => tags.includes(tag)));
