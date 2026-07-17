import type { Post } from "../types";

type Source = {
  label: string;
  href: string;
  note: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type CalculatorGuide = {
  heading: string;
  summary: string;
  primaryUse: string;
  interpretation: string[];
  cautions: string[];
  faq: Faq[];
  sources: Source[];
};

const sourceLibrary = {
  kdca: {
    label: "질병관리청 국가건강정보포털",
    href: "https://health.kdca.go.kr/",
    note: "질환, 생활습관, 검진 수치 해석을 확인할 때 참고하는 공공 건강 정보입니다."
  },
  kdcaMain: {
    label: "질병관리청",
    href: "https://www.kdca.go.kr/",
    note: "국가 건강정책, 감염병·만성질환 관련 공공 정보를 확인할 수 있습니다."
  },
  kdri: {
    label: "한국영양학회 한국인 영양소 섭취기준",
    href: "https://www.kns.or.kr/fileroom/fileroom.asp?BoardID=Kdr",
    note: "한국인의 영양소 기준과 식생활 자료를 확인할 때 참고합니다."
  },
  mohwKdri: {
    label: "보건복지부 한국인 영양소 섭취기준",
    href: "https://www.mohw.go.kr/board.es?act=view&bid=0019&list_no=370012&mid=a10411010100",
    note: "국내 영양 기준과 식생활 안내 자료를 확인할 수 있습니다."
  },
  cdcBmi: {
    label: "CDC Adult BMI Categories",
    href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html",
    note: "성인 BMI 분류와 BMI의 한계를 확인할 때 참고합니다."
  },
  whoBmi: {
    label: "WHO Body Mass Index",
    href: "https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index",
    note: "국제적으로 쓰이는 BMI 지표의 배경을 확인할 수 있습니다."
  }
} satisfies Record<string, Source>;

const categoryLabelMap: Record<string, string> = {
  body: "체형",
  nutrition: "영양",
  vitals: "혈압·혈당",
  lifestyle: "생활습관",
  health: "건강지표"
};

const baseSources = [sourceLibrary.kdca];

const sourceSets = {
  body: [sourceLibrary.kdca, sourceLibrary.cdcBmi, sourceLibrary.whoBmi],
  nutrition: [sourceLibrary.kdri, sourceLibrary.mohwKdri, sourceLibrary.kdca],
  vitals: [sourceLibrary.kdca],
  pregnancy: [sourceLibrary.kdca],
  smoking: [sourceLibrary.kdca, sourceLibrary.kdcaMain],
  lifestyle: [sourceLibrary.kdca, sourceLibrary.kdri],
  general: baseSources
};

const includesAny = (value: string, terms: string[]) => terms.some((term) => value.includes(term));

const cleanTitle = (title: string) =>
  title
    .replace(/^\d+\.\s*/, "")
    .replace(/\s*\|\s*.*/, "")
    .replace(/\s+/g, " ")
    .trim();

const profileFor = (post: Post) => {
  const text = `${post.title} ${post.description} ${post.slug}`;

  if (includesAny(text, ["대사증후군"])) return "metabolic";
  if (includesAny(text, ["혈압", "고혈압"])) return "bloodPressure";
  if (includesAny(text, ["당뇨", "혈당", "인슐린", "HOMA"])) return "glucose";
  if (includesAny(text, ["LDL", "HDL", "콜레스테롤", "중성지방"])) return "lipid";
  if (includesAny(text, ["임신", "배란", "가임", "생리"])) return "pregnancy";
  if (includesAny(text, ["흡연", "금연", "Pack-Year"])) return "smoking";
  if (includesAny(text, ["기대수명", "수명", "건강 나이"])) return "lifeAge";
  if (includesAny(text, ["수면"])) return "sleep";
  if (includesAny(text, ["운동", "심박수"])) return "activity";
  if (includesAny(text, ["BMR", "기초대사량", "TDEE", "칼로리", "다이어트", "벌크업", "체중 감량", "체중 증량"])) {
    return "energy";
  }
  if (includesAny(text, ["단백질", "지방", "탄수화물", "나트륨", "당류", "식이섬유", "카페인", "물 섭취"])) {
    return "nutrition";
  }
  if (includesAny(text, ["BMI", "체질량", "복부비만", "허리", "체지방", "적정 체중"])) return "body";

  return post.category;
};

const commonCautions = [
  "계산기는 입력값과 일반 기준을 바탕으로 한 참고 도구입니다. 증상, 병력, 복용 약물, 검사 방식에 따라 실제 해석은 달라질 수 있습니다.",
  "결과가 경계 또는 위험 범위에 가까우면 한 번의 계산으로 결론을 내리지 말고, 반복 측정과 건강검진 결과를 함께 확인하세요.",
  "흉통, 호흡곤란, 의식 저하, 갑작스러운 마비, 극심한 통증처럼 긴급한 증상이 있으면 온라인 계산보다 응급 진료가 우선입니다."
];

const buildGuide = (
  post: Post,
  guide: Omit<CalculatorGuide, "heading"> & { sources?: Source[] }
): CalculatorGuide => ({
  heading: `${cleanTitle(post.title)} 결과를 안전하게 해석하는 방법`,
  ...guide,
  sources: guide.sources ?? sourceSets.general
});

export const getCalculatorGuide = (post: Post): CalculatorGuide => {
  const title = cleanTitle(post.title);
  const categoryLabel = categoryLabelMap[post.category] ?? "건강지표";
  const profile = profileFor(post);

  switch (profile) {
    case "metabolic":
      return buildGuide(post, {
        summary: `${title}는 복부비만, 혈압, 혈당, 중성지방, HDL 콜레스테롤처럼 함께 살펴봐야 하는 대사 건강 신호를 정리하는 도구입니다.`,
        primaryUse: "건강검진 결과표를 받은 뒤 어떤 항목을 우선 점검해야 하는지 정리할 때 유용합니다.",
        interpretation: [
          "대사 관련 지표는 하나만 볼 때보다 여러 항목이 동시에 벗어나는지 확인하는 것이 중요합니다.",
          "허리둘레, 혈압, 혈당, 지질 수치는 생활습관과 밀접하지만 검사 시점, 약물 복용, 공복 상태의 영향을 받을 수 있습니다.",
          "기준에 가까운 항목이 여러 개라면 체중, 식사, 운동, 수면, 음주 습관을 함께 점검하는 것이 좋습니다."
        ],
        cautions: [
          "온라인 계산 결과만으로 대사증후군 여부를 확정할 수 없습니다.",
          "검진 수치가 반복해서 높거나 복용 중인 약이 있다면 의료 전문가에게 결과표를 보여 주고 상담하세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "항목이 1개만 높아도 문제가 되나요?",
            answer: "하나의 항목만으로 질환을 단정할 수는 없지만, 경계 수치가 반복된다면 생활습관을 점검하고 다음 검진에서 변화를 확인하는 것이 좋습니다."
          },
          {
            question: "검진 전날 식사나 음주가 결과에 영향을 주나요?",
            answer: "중성지방, 혈당 같은 항목은 공복 상태와 전날 식사, 음주, 수면의 영향을 받을 수 있습니다. 결과가 예상과 다르면 검사 조건을 함께 확인하세요."
          },
          {
            question: "계산 결과가 높게 나오면 바로 치료해야 하나요?",
            answer: "치료 여부는 검사 수치, 병력, 약물, 가족력 등을 함께 보고 판단합니다. 이 계산기는 상담 전 점검표로 활용하는 것이 적절합니다."
          }
        ],
        sources: sourceSets.vitals
      });

    case "bloodPressure":
      return buildGuide(post, {
        summary: `${title}는 수축기·이완기 혈압을 기준으로 현재 측정값이 어느 범위에 가까운지 확인하는 계산기입니다.`,
        primaryUse: "가정혈압이나 검진 혈압을 기록하고, 반복 측정이 필요한지 판단하는 참고용으로 사용하세요.",
        interpretation: [
          "혈압은 한 번의 측정보다 여러 날 같은 조건에서 잰 평균이 더 중요합니다.",
          "운동 직후, 카페인 섭취 직후, 스트레스가 큰 상황에서는 일시적으로 높게 나올 수 있습니다.",
          "수축기와 이완기 중 하나만 높아도 생활습관과 측정 조건을 함께 확인하는 것이 좋습니다."
        ],
        cautions: [
          "두통, 흉통, 호흡곤란, 신경학적 증상이 동반되면 계산기 결과와 관계없이 진료가 우선입니다.",
          "혈압약을 복용 중이라면 임의로 중단하거나 용량을 바꾸지 말고 담당 의료진과 상의하세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "집에서 잰 혈압과 병원 혈압이 다르면 어느 쪽을 봐야 하나요?",
            answer: "둘 다 의미가 있습니다. 측정 시간, 자세, 커프 위치, 안정 시간에 따라 차이가 날 수 있으므로 여러 번 기록해 의료진과 확인하는 것이 좋습니다."
          },
          {
            question: "혈압이 한 번 높게 나오면 고혈압인가요?",
            answer: "한 번의 수치만으로 판단하지 않습니다. 반복 측정, 진료실 측정, 가정혈압 기록을 함께 보고 평가합니다."
          },
          {
            question: "혈압 계산기는 언제 다시 써야 하나요?",
            answer: "운동, 식사, 카페인, 흡연 직후를 피하고 5분 정도 안정한 뒤 같은 시간대에 반복 기록하면 비교에 도움이 됩니다."
          }
        ],
        sources: sourceSets.vitals
      });

    case "glucose":
      return buildGuide(post, {
        summary: `${title}는 혈당, 인슐린, 당뇨 관련 지표를 스스로 정리해 보는 참고 계산기입니다.`,
        primaryUse: "건강검진 결과표나 자가 측정 기록을 진료 상담 전에 정리할 때 활용할 수 있습니다.",
        interpretation: [
          "혈당은 공복 여부, 식사 내용, 운동, 수면, 스트레스, 복용 약물의 영향을 크게 받습니다.",
          "인슐린 저항성처럼 계산식이 들어가는 지표는 검사실 기준과 측정 단위가 맞는지 먼저 확인해야 합니다.",
          "같은 수치라도 나이, 체중 변화, 가족력, 혈압·지질 수치에 따라 관리 우선순위가 달라질 수 있습니다."
        ],
        cautions: [
          "저혈당 증상, 심한 갈증, 체중 감소, 의식 저하가 있으면 온라인 계산보다 진료가 우선입니다.",
          "당뇨약이나 인슐린을 사용 중이라면 계산 결과만 보고 약물 조정을 하지 마세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "자가 혈당 측정값만으로 당뇨를 판단할 수 있나요?",
            answer: "자가 측정은 추적에 도움이 되지만, 진단은 검사 조건과 혈액검사 결과를 바탕으로 의료 전문가가 판단합니다."
          },
          {
            question: "공복 혈당과 식후 혈당 중 무엇이 더 중요한가요?",
            answer: "둘 다 의미가 다릅니다. 공복 혈당은 기본 대사 상태를, 식후 혈당은 식사 후 조절 능력을 보는 데 도움이 됩니다."
          },
          {
            question: "결과가 경계에 가까우면 어떻게 해야 하나요?",
            answer: "식사 기록, 체중 변화, 운동량, 수면 시간을 함께 점검하고 필요하면 검진 결과를 들고 상담을 받는 것이 좋습니다."
          }
        ],
        sources: sourceSets.vitals
      });

    case "lipid":
      return buildGuide(post, {
        summary: `${title}는 콜레스테롤과 중성지방처럼 심혈관 건강과 관련된 지질 수치를 정리하는 계산기입니다.`,
        primaryUse: "검진 결과에서 LDL, HDL, 총콜레스테롤, 중성지방 수치를 함께 비교할 때 사용하세요.",
        interpretation: [
          "LDL, HDL, 중성지방은 각각 의미가 다르므로 하나의 수치만 보고 전체 위험을 판단하기 어렵습니다.",
          "지질 수치는 공복 여부, 최근 식사, 음주, 체중 변화, 운동량, 약물 복용의 영향을 받을 수 있습니다.",
          "혈압, 혈당, 흡연, 가족력 같은 요인이 함께 있으면 같은 콜레스테롤 수치라도 관리 우선순위가 달라질 수 있습니다."
        ],
        cautions: [
          "가슴 통증, 호흡곤란, 갑작스러운 신경학적 증상이 있으면 계산기보다 진료가 우선입니다.",
          "지질강하제를 복용 중이라면 결과만 보고 임의로 중단하거나 용량을 바꾸지 마세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "총콜레스테롤만 정상이어도 안심해도 되나요?",
            answer: "총량만으로는 충분하지 않을 수 있습니다. LDL, HDL, 중성지방, Non-HDL 같은 세부 항목을 함께 보는 것이 좋습니다."
          },
          {
            question: "중성지방은 식사 영향을 많이 받나요?",
            answer: "네. 최근 식사, 음주, 공복 시간의 영향을 받을 수 있으므로 검사 조건을 함께 확인해야 합니다."
          },
          {
            question: "계산 결과가 높으면 바로 약을 먹어야 하나요?",
            answer: "약물 여부는 전체 심혈관 위험, 반복 검사, 병력, 가족력 등을 바탕으로 결정됩니다. 계산기는 상담 준비용으로 활용하세요."
          }
        ],
        sources: sourceSets.vitals
      });

    case "pregnancy":
      return buildGuide(post, {
        summary: `${title}는 생리 주기와 날짜 정보를 바탕으로 임신·배란 관련 일정을 추정하는 도구입니다.`,
        primaryUse: "일정 확인과 기록 정리에 활용하되, 실제 임신 여부나 산과적 판단은 검사를 통해 확인해야 합니다.",
        interpretation: [
          "배란일과 예정일은 평균 주기를 바탕으로 한 추정치입니다.",
          "생리 주기가 불규칙하거나 최근 피임약, 수유, 스트레스, 체중 변화가 있었다면 오차가 커질 수 있습니다.",
          "임신 주수나 출산 예정일은 초음파, 마지막 생리일, 진료 기록을 함께 보고 조정될 수 있습니다."
        ],
        cautions: [
          "복통, 출혈, 심한 어지럼, 임신 가능성과 관련된 불안 증상이 있으면 산부인과 상담이 우선입니다.",
          "계산 결과를 피임 또는 임신 확정 판단의 유일한 근거로 사용하지 마세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "생리 주기가 불규칙해도 계산할 수 있나요?",
            answer: "계산은 가능하지만 오차가 커집니다. 최근 3~6개월 기록을 함께 보고 평균을 잡는 것이 낫습니다."
          },
          {
            question: "배란일 계산기로 임신 가능성을 확정할 수 있나요?",
            answer: "아니요. 배란일은 추정값이며 임신 여부는 임신 테스트, 혈액검사, 초음파 등으로 확인해야 합니다."
          },
          {
            question: "출산 예정일이 병원에서 바뀔 수 있나요?",
            answer: "네. 초음파 소견과 진료 기록에 따라 예정일이 조정될 수 있습니다."
          }
        ],
        sources: sourceSets.pregnancy
      });

    case "smoking":
      return buildGuide(post, {
        summary: `${title}는 흡연량, 흡연 기간, 금연에 따른 비용 변화를 숫자로 정리해 보는 생활습관 계산기입니다.`,
        primaryUse: "금연 동기 부여, 검진 상담 준비, 흡연력 기록 정리에 활용할 수 있습니다.",
        interpretation: [
          "Pack-Year는 하루 평균 흡연량과 흡연 기간을 함께 보는 누적 노출 지표입니다.",
          "금연 절감액은 담배 가격과 흡연량을 기준으로 한 단순 추정치이며, 실제 지출 패턴과 다를 수 있습니다.",
          "흡연력은 폐 건강뿐 아니라 심혈관, 대사 건강과도 관련될 수 있어 다른 검진 수치와 함께 보는 것이 좋습니다."
        ],
        cautions: [
          "기침, 객혈, 흉통, 호흡곤란, 체중 감소 같은 증상이 있으면 계산기보다 진료가 우선입니다.",
          "금연 보조제나 약물은 개인 상태에 따라 적합성이 다르므로 전문가와 상의하는 것이 좋습니다.",
          ...commonCautions
        ],
        faq: [
          {
            question: "Pack-Year가 높으면 반드시 질병이 생기나요?",
            answer: "반드시 그렇지는 않습니다. 다만 누적 노출을 보여 주는 참고 지표이므로 검진 상담 때 함께 확인하면 좋습니다."
          },
          {
            question: "금연 후에도 흡연력을 기록해야 하나요?",
            answer: "네. 과거 흡연 기간과 양은 검진 상담에서 중요한 배경 정보가 될 수 있습니다."
          },
          {
            question: "비용 계산 결과는 실제와 왜 다를 수 있나요?",
            answer: "담배 가격, 흡연량 변화, 외부 지출, 금연 보조 비용이 사람마다 다르기 때문입니다."
          }
        ],
        sources: sourceSets.smoking
      });

    case "lifeAge":
      return buildGuide(post, {
        summary: `${title}는 생활습관 문항을 바탕으로 건강 상태를 점검하는 참고용 설문형 계산기입니다.`,
        primaryUse: "흡연, 음주, 운동, 수면, 체중 같은 습관을 한 화면에서 돌아보는 체크리스트로 활용하세요.",
        interpretation: [
          "건강 나이와 기대수명형 결과는 실제 수명을 예측하는 값이 아니라 생활습관 위험 요인을 숫자로 표현한 참고값입니다.",
          "질병, 유전, 사고, 환경, 의료 접근성처럼 계산기에 반영되지 않는 변수가 많습니다.",
          "결과 자체보다 어떤 항목이 점수를 올리거나 낮췄는지 확인하고 바꿀 수 있는 습관을 찾는 것이 핵심입니다."
        ],
        cautions: [
          "수명, 질병 발생, 치료 효과를 보장하는 도구가 아닙니다.",
          "불안감이 커지거나 건강 문제가 의심되면 계산 결과를 혼자 해석하지 말고 전문가와 상담하세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "계산 결과가 실제 수명을 의미하나요?",
            answer: "아니요. 생활습관 요인을 이해하기 위한 참고값이며 실제 수명이나 질병 발생을 예측하지 않습니다."
          },
          {
            question: "가장 먼저 바꿀 항목은 무엇인가요?",
            answer: "흡연, 수면 부족, 운동 부족, 과음처럼 반복되는 생활습관부터 하나씩 줄이는 방식이 현실적입니다."
          },
          {
            question: "점수가 좋아지면 건강해졌다고 볼 수 있나요?",
            answer: "습관 변화의 방향을 보는 데는 도움이 되지만, 실제 건강 상태는 검진과 증상 평가를 함께 확인해야 합니다."
          }
        ],
        sources: sourceSets.lifestyle
      });

    case "body":
      return buildGuide(post, {
        summary: `${title}는 키, 체중, 허리둘레, 체지방률 같은 체형 지표를 빠르게 계산해 보는 도구입니다.`,
        primaryUse: "체중 변화 추적, 운동·식단 계획 전 기준점 확인, 검진 수치 이해에 활용하세요.",
        interpretation: [
          "BMI와 허리둘레는 간단하고 널리 쓰이지만 근육량, 체수분, 나이, 성별 차이를 모두 반영하지는 못합니다.",
          "체형 지표는 한 번의 수치보다 시간에 따른 변화와 생활습관 변화를 함께 보는 것이 중요합니다.",
          "운동량이 많은 사람, 성장기, 임신 중, 고령자는 일반 성인 기준과 다르게 해석해야 할 수 있습니다."
        ],
        cautions: [
          "급격한 체중 변화, 부종, 식욕 변화, 피로가 동반되면 단순 체형 계산보다 진료 상담이 필요할 수 있습니다.",
          "체중 감량이나 증량 목표는 건강 상태, 식사량, 운동 수준을 함께 고려해 현실적으로 잡으세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "BMI가 정상이어도 복부비만일 수 있나요?",
            answer: "가능합니다. BMI는 키와 체중만 보므로 허리둘레, 체지방률, 혈압·혈당 수치를 함께 확인하는 것이 좋습니다."
          },
          {
            question: "체지방률 계산은 정확한가요?",
            answer: "온라인 계산식은 추정치입니다. 실제 체성분은 측정 장비, 수분 상태, 측정 시간에 따라 달라질 수 있습니다."
          },
          {
            question: "목표 체중은 계산 결과 그대로 정하면 되나요?",
            answer: "계산 결과는 출발점입니다. 무리한 목표보다 유지 가능한 식사와 운동 계획을 기준으로 조정하는 것이 좋습니다."
          }
        ],
        sources: sourceSets.body
      });

    case "nutrition":
      return buildGuide(post, {
        summary: `${title}는 하루 섭취량, 권장 범위, 식품 선택을 점검하는 영양 계산기입니다.`,
        primaryUse: "식단 기록을 시작하거나 특정 영양소를 과하거나 부족하게 먹고 있는지 확인할 때 사용하세요.",
        interpretation: [
          "권장량은 평균적인 기준이므로 체격, 활동량, 질환, 복용 약물, 임신·수유 여부에 따라 달라질 수 있습니다.",
          "하루 한 끼보다 며칠간의 평균 섭취 패턴을 보는 것이 실제 식습관을 이해하는 데 도움이 됩니다.",
          "영양소 하나만 줄이거나 늘리기보다 총열량, 단백질, 지방, 탄수화물, 식이섬유, 나트륨을 함께 보는 것이 좋습니다."
        ],
        cautions: [
          "신장질환, 당뇨, 고혈압, 임신·수유, 특정 약물 복용 중이라면 일반 권장량과 다르게 조정해야 할 수 있습니다.",
          "극단적인 제한 식단은 피로, 폭식, 영양 불균형으로 이어질 수 있으므로 주의하세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "권장량은 매일 정확히 맞춰야 하나요?",
            answer: "반드시 하루 단위로 정확히 맞출 필요는 없습니다. 며칠간의 평균과 전반적인 식사 균형을 보는 것이 현실적입니다."
          },
          {
            question: "체중 감량 중이면 권장량을 더 낮춰도 되나요?",
            answer: "무리하게 낮추기보다 단백질, 식이섬유, 수분 섭취를 유지하면서 총열량을 조정하는 방식이 안전합니다."
          },
          {
            question: "영양소 계산 결과가 높으면 바로 문제가 되나요?",
            answer: "한 번의 식사나 하루 기록만으로 판단하기 어렵습니다. 반복되는 패턴인지 확인하고 필요하면 전문가와 상담하세요."
          }
        ],
        sources: sourceSets.nutrition
      });

    case "energy":
      return buildGuide(post, {
        summary: `${title}는 기초대사량, 활동량, 칼로리 균형, 체중 변화 목표를 계산하는 도구입니다.`,
        primaryUse: "다이어트, 벌크업, 체중 유지, 운동 계획을 시작하기 전 대략적인 기준선을 잡을 때 사용하세요.",
        interpretation: [
          "BMR과 TDEE는 공식과 활동계수에 따라 달라지는 추정값입니다.",
          "실제 체중 변화는 수분, 염분, 근육량, 운동 강도, 수면, 스트레스의 영향을 받습니다.",
          "계산 결과를 그대로 고정하기보다 2~4주간 체중과 컨디션 변화를 보며 조정하는 것이 좋습니다."
        ],
        cautions: [
          "섭식장애 병력, 임신·수유, 성장기, 만성질환이 있다면 일반 칼로리 계산을 그대로 적용하지 마세요.",
          "급격한 감량이나 과도한 증량은 컨디션 저하와 건강 문제로 이어질 수 있습니다.",
          ...commonCautions
        ],
        faq: [
          {
            question: "계산한 칼로리를 먹어도 체중이 안 변하면 왜 그런가요?",
            answer: "활동량 추정, 음식 기록 오차, 수분 변화, 주말 식사, 수면 상태 등이 영향을 줄 수 있습니다. 2주 이상 평균을 보세요."
          },
          {
            question: "운동 칼로리는 전부 더 먹어도 되나요?",
            answer: "운동 소모량은 과대평가되기 쉽습니다. 목표에 따라 일부만 반영하고 체중 변화를 확인하는 방식이 안전합니다."
          },
          {
            question: "기초대사량을 올리려면 무엇을 봐야 하나요?",
            answer: "근력운동, 단백질 섭취, 충분한 수면, 무리하지 않는 감량 속도가 장기적으로 도움이 됩니다."
          }
        ],
        sources: sourceSets.lifestyle
      });

    case "activity":
      return buildGuide(post, {
        summary: `${title}는 운동 강도, 시간, 심박수, 주간 활동량을 숫자로 정리하는 생활습관 계산기입니다.`,
        primaryUse: "운동 계획을 세우거나 현재 활동량이 부족한지 확인할 때 활용하세요.",
        interpretation: [
          "운동 소모량과 목표 심박수는 체력, 나이, 약물, 기저질환에 따라 달라질 수 있습니다.",
          "처음에는 강도보다 규칙성과 회복을 우선하고, 익숙해진 뒤 시간과 강도를 조정하는 것이 좋습니다.",
          "주간 활동량은 유산소 운동, 근력운동, 일상 속 움직임을 함께 보는 것이 현실적입니다."
        ],
        cautions: [
          "가슴 통증, 어지럼, 호흡곤란, 실신 경험이 있으면 운동 강도를 올리기 전에 의료 상담이 필요합니다.",
          "혈압약, 심장질환, 당뇨약을 복용 중이면 목표 심박수 해석이 달라질 수 있습니다.",
          ...commonCautions
        ],
        faq: [
          {
            question: "목표 심박수를 꼭 맞춰야 하나요?",
            answer: "목표 심박수는 참고 범위입니다. 말하기가 가능한 정도, 피로도, 회복 상태도 함께 보세요."
          },
          {
            question: "주간 운동량이 부족하면 바로 강도를 높여야 하나요?",
            answer: "갑자기 높이기보다 걷기 시간, 계단 이용, 가벼운 근력운동처럼 지속 가능한 변화부터 시작하는 것이 좋습니다."
          },
          {
            question: "운동 칼로리 계산은 정확한가요?",
            answer: "체중, 운동 효율, 장비 측정 방식에 따라 차이가 큽니다. 대략적인 비교용으로 보는 것이 적절합니다."
          }
        ],
        sources: sourceSets.lifestyle
      });

    case "sleep":
      return buildGuide(post, {
        summary: `${title}는 기상 시간, 수면 주기, 취침 시간을 정리해 수면 계획을 세우는 도구입니다.`,
        primaryUse: "잠드는 시간과 일어나는 시간을 조정해 수면 리듬을 안정시키는 데 활용하세요.",
        interpretation: [
          "수면 주기 계산은 평균적인 리듬을 바탕으로 하며 실제 잠드는 시간과 각성 횟수에 따라 달라질 수 있습니다.",
          "수면 시간뿐 아니라 수면의 질, 빛 노출, 카페인, 운동, 스트레스도 함께 봐야 합니다.",
          "주말과 평일 수면 시간이 크게 다르면 피로가 누적될 수 있습니다."
        ],
        cautions: [
          "불면, 과도한 졸림, 수면 중 호흡 문제, 심한 코골이가 지속되면 진료 상담이 필요할 수 있습니다.",
          "계산 결과보다 몸의 회복감과 낮 시간 기능을 함께 확인하세요.",
          ...commonCautions
        ],
        faq: [
          {
            question: "수면 주기를 맞추면 항상 개운한가요?",
            answer: "도움이 될 수 있지만 수면 질, 스트레스, 카페인, 수면 환경이 더 크게 작용할 때도 많습니다."
          },
          {
            question: "주말에 몰아서 자면 괜찮나요?",
            answer: "일시적으로 피로를 줄일 수 있지만 평일과 주말 리듬 차이가 크면 다시 피곤해질 수 있습니다."
          },
          {
            question: "수면 계산기는 언제 쓰면 좋나요?",
            answer: "기상 시간이 정해져 있을 때 취침 후보 시간을 정하거나, 취침 시간을 기준으로 알람 시간을 잡을 때 유용합니다."
          }
        ],
        sources: sourceSets.lifestyle
      });

    default:
      return buildGuide(post, {
        summary: `${title}는 ${categoryLabel} 관련 수치를 빠르게 계산하고, 결과를 생활 관리 관점에서 해석하도록 돕는 도구입니다.`,
        primaryUse: "현재 상태를 점검하고 다음에 확인할 수치나 생활습관을 정리할 때 활용하세요.",
        interpretation: [
          "계산 결과는 입력값이 정확할수록 의미가 커집니다. 단위와 측정 조건을 먼저 확인하세요.",
          "한 번의 결과보다 반복 기록과 변화 추세를 보는 것이 더 유용합니다.",
          "결과가 예상과 다르면 입력값, 공식의 전제, 개인 상황을 함께 점검하세요."
        ],
        cautions: commonCautions,
        faq: [
          {
            question: "계산 결과를 그대로 생활 목표로 삼아도 되나요?",
            answer: "계산 결과는 출발점입니다. 개인의 건강 상태와 지속 가능성을 고려해 천천히 조정하는 것이 좋습니다."
          },
          {
            question: "결과가 매번 달라지는 이유는 무엇인가요?",
            answer: "입력값, 측정 시간, 컨디션, 식사와 운동 상태가 달라지면 결과도 달라질 수 있습니다."
          },
          {
            question: "정확도를 높이려면 어떻게 해야 하나요?",
            answer: "같은 단위와 비슷한 조건에서 측정하고, 최근 기록을 함께 비교하는 방식이 도움이 됩니다."
          }
        ],
        sources: sourceSets.general
      });
  }
};
