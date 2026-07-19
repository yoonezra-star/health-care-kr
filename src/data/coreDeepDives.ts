export type CoreDeepDive = {
  badge: string;
  title: string;
  intro: string;
  formulaRows: {
    label: string;
    value: string;
    note: string;
  }[];
  example: {
    input: string;
    calculation: string;
    result: string;
    interpretation: string;
  };
  rangeRows: {
    range: string;
    meaning: string;
    nextStep: string;
  }[];
  misconceptions: string[];
  consultTriggers: string[];
  relatedSlugs: string[];
};

const deepDives: Record<string, CoreDeepDive> = {
  "2026/03/blog-post.html": {
    badge: "Core calculator",
    title: "BMI를 단독 판정이 아니라 체형 점검의 출발점으로 보는 법",
    intro:
      "BMI는 키와 체중만으로 빠르게 계산할 수 있어 접근성이 좋지만, 근육량·체지방 분포·나이·질환 상태를 직접 반영하지는 못합니다. 그래서 Health Care는 BMI 결과를 허리둘레, 체지방률, 생활습관 기록과 함께 보도록 안내합니다.",
    formulaRows: [
      { label: "기본 공식", value: "체중(kg) / 키(m)^2", note: "성인 BMI 계산에서 널리 쓰이는 기본 산식입니다." },
      { label: "함께 볼 지표", value: "허리둘레, WHtR, 체지방률", note: "복부 지방과 체성분 차이를 보완합니다." },
      { label: "기록 주기", value: "2~4주 간격", note: "하루 체중 변화보다 추세를 보는 편이 안전합니다." }
    ],
    example: {
      input: "키 170cm, 체중 70kg",
      calculation: "70 / 1.70^2 = 24.2",
      result: "BMI 약 24.2",
      interpretation: "성인 기준으로 정상 범위에 가까운 값이지만, 허리둘레와 운동량을 함께 보면 더 현실적으로 해석할 수 있습니다."
    },
    rangeRows: [
      { range: "18.5 미만", meaning: "저체중 범위", nextStep: "체중 변화 원인, 식사량, 피로감이 있다면 상담을 고려합니다." },
      { range: "18.5~24.9", meaning: "일반적으로 건강 체중 범위", nextStep: "허리둘레, 운동량, 식습관을 함께 확인합니다." },
      { range: "25 이상", meaning: "과체중 또는 비만 범위", nextStep: "급격한 감량보다 식사·운동·수면 기록부터 정리합니다." }
    ],
    misconceptions: [
      "BMI가 정상이라고 항상 대사 건강이 안전하다는 뜻은 아닙니다.",
      "운동량이 많거나 근육량이 많은 사람은 BMI가 실제 체지방을 과대평가할 수 있습니다.",
      "BMI만으로 약물, 치료, 질환 여부를 결정해서는 안 됩니다."
    ],
    consultTriggers: [
      "짧은 기간에 체중이 크게 변한 경우",
      "부종, 피로, 식욕 변화, 호흡곤란 같은 증상이 동반되는 경우",
      "검진에서 혈압·혈당·지질 이상을 함께 지적받은 경우"
    ],
    relatedSlugs: ["2026/03/blog-post_26.html", "2026/03/whtr.html", "2026/03/4.html"]
  },
  "2026/03/2-bmr-1.html": {
    badge: "Core calculator",
    title: "BMR과 TDEE를 식단 계획의 현실적인 출발점으로 쓰는 법",
    intro:
      "기초대사량은 쉬고 있을 때 필요한 에너지 추정치이고, TDEE는 활동량까지 더한 하루 총 에너지 소비량입니다. 실제 체중 변화는 식사 기록, 활동량, 수면, 스트레스에 따라 달라지므로 계산 결과는 시작점으로 봐야 합니다.",
    formulaRows: [
      { label: "BMR", value: "성별·나이·키·체중 기반 추정", note: "공식에 따라 값이 조금 달라질 수 있습니다." },
      { label: "TDEE", value: "BMR × 활동계수", note: "활동계수 선택이 결과에 큰 영향을 줍니다." },
      { label: "식단 조정", value: "유지량에서 소폭 조정", note: "무리한 제한보다 지속 가능한 변화가 중요합니다." }
    ],
    example: {
      input: "BMR 1,500kcal, 활동계수 1.4",
      calculation: "1,500 × 1.4 = 2,100",
      result: "추정 TDEE 약 2,100kcal",
      interpretation: "체중 유지 기준선으로 보고, 1~2주 기록 뒤 체중 변화에 맞춰 조정하는 방식이 현실적입니다."
    },
    rangeRows: [
      { range: "BMR", meaning: "생명 유지에 필요한 최소 에너지 추정", nextStep: "식단 하한선처럼 단순 적용하지 않습니다." },
      { range: "TDEE", meaning: "활동을 포함한 하루 소비량 추정", nextStep: "체중 유지·감량·증량 계획의 기준으로 사용합니다." },
      { range: "실제 변화", meaning: "섭취량과 활동량 기록의 결과", nextStep: "계산값보다 실제 추세를 더 중요하게 봅니다." }
    ],
    misconceptions: [
      "기초대사량보다 적게 먹어야 반드시 감량되는 것은 아닙니다.",
      "활동계수는 정확한 측정값이 아니라 생활 패턴을 반영한 추정입니다.",
      "계산 결과만으로 식사 제한을 과도하게 설정하면 지속하기 어렵습니다."
    ],
    consultTriggers: [
      "섭식장애 경험이 있거나 극단적 식사 제한을 반복하는 경우",
      "질환, 약물, 임신·수유, 성장기와 관련된 식단 판단이 필요한 경우",
      "피로, 어지럼, 무월경, 급격한 체중 변화가 있는 경우"
    ],
    relatedSlugs: ["2026/05/blog-post_02.html", "2026/05/blog-post_04.html", "2026/03/blog-post_31.html"]
  },
  "2026/03/9.html": {
    badge: "Core calculator",
    title: "혈압 결과를 한 번의 숫자가 아니라 반복 기록으로 해석하는 법",
    intro:
      "혈압은 자세, 시간대, 카페인, 운동, 스트레스, 측정기 상태에 따라 달라집니다. 따라서 한 번의 결과보다 같은 조건의 반복 측정과 증상 여부, 진료 상담 기록을 함께 보는 것이 중요합니다.",
    formulaRows: [
      { label: "수축기 혈압", value: "심장이 수축할 때 압력", note: "위 숫자로 표시됩니다." },
      { label: "이완기 혈압", value: "심장이 이완할 때 압력", note: "아래 숫자로 표시됩니다." },
      { label: "반복 측정", value: "같은 시간·같은 자세", note: "단일 측정보다 평균과 추세를 봅니다." }
    ],
    example: {
      input: "128/78 mmHg",
      calculation: "수축기 128, 이완기 78을 각각 확인",
      result: "수축기 쪽이 경계에 가까운 예시",
      interpretation: "즉시 단정하지 말고 며칠간 같은 조건으로 재측정하고, 지속되면 상담 기준을 확인합니다."
    },
    rangeRows: [
      { range: "정상에 가까운 값", meaning: "일반적으로 낮은 위험 신호", nextStep: "생활습관과 정기 기록을 유지합니다." },
      { range: "경계 또는 상승", meaning: "반복 확인이 필요한 상태", nextStep: "측정 조건을 통일하고 평균을 확인합니다." },
      { range: "매우 높은 값 또는 증상 동반", meaning: "온라인 계산보다 진료 판단이 우선", nextStep: "흉통, 호흡곤란, 마비, 의식 저하가 있으면 응급 진료를 고려합니다." }
    ],
    misconceptions: [
      "한 번 낮게 나왔다고 항상 안전하다는 뜻은 아닙니다.",
      "높은 수치가 나와도 측정 오류 가능성을 먼저 확인해야 합니다.",
      "혈압약 복용·중단·용량 조절은 계산기가 아니라 의료 전문가와 결정해야 합니다."
    ],
    consultTriggers: [
      "높은 혈압이 반복적으로 측정되는 경우",
      "두통, 흉통, 호흡곤란, 시야 이상, 마비감이 동반되는 경우",
      "당뇨, 신장질환, 심혈관 질환 병력이 있는 경우"
    ],
    relatedSlugs: ["2026/03/10.html", "2026/04/ldlhdl.html", "2026/04/blog-post_23.html"]
  },
  "2026/03/10.html": {
    badge: "Core calculator",
    title: "혈당 수치를 공복 여부와 검사 맥락으로 나누어 보는 법",
    intro:
      "혈당은 공복, 식후, 운동, 감염, 스트레스, 약물에 따라 크게 달라집니다. 온라인 계산은 수치를 정리하는 데 도움을 줄 수 있지만, 당뇨병 진단이나 치료 판단은 검사와 의료진 상담이 필요합니다.",
    formulaRows: [
      { label: "공복혈당", value: "8시간 이상 금식 후 측정", note: "검사 조건 확인이 중요합니다." },
      { label: "식후혈당", value: "식사 후 시간에 따라 해석", note: "식사 시작 후 몇 시간이 지났는지 적어 둡니다." },
      { label: "A1C", value: "최근 2~3개월 평균 혈당 반영", note: "단일 혈당과 함께 보면 맥락이 넓어집니다." }
    ],
    example: {
      input: "공복혈당 105mg/dL",
      calculation: "공복 상태와 단위를 먼저 확인",
      result: "공복 기준에서 경계 범위 예시",
      interpretation: "한 번의 결과로 단정하지 말고 재검, A1C, 생활습관, 가족력 등을 함께 확인해야 합니다."
    },
    rangeRows: [
      { range: "공복 정상 범위", meaning: "일반적으로 낮은 위험 신호", nextStep: "식사·운동·체중 관리와 정기 검진을 유지합니다." },
      { range: "공복 경계 범위", meaning: "반복 확인과 생활습관 점검 필요", nextStep: "재검과 A1C 확인을 고려합니다." },
      { range: "높은 수치 또는 증상", meaning: "전문가 상담 필요", nextStep: "갈증, 소변 증가, 체중 감소, 저혈당 증상이 있으면 상담을 우선합니다." }
    ],
    misconceptions: [
      "식후와 공복 수치를 같은 기준으로 비교하면 안 됩니다.",
      "혈당이 한 번 높다고 바로 당뇨병으로 단정할 수 없습니다.",
      "혈당 관리 목표는 나이, 질환, 약물에 따라 달라질 수 있습니다."
    ],
    consultTriggers: [
      "공복혈당 또는 A1C가 반복적으로 경계 이상인 경우",
      "심한 갈증, 잦은 소변, 원인 모를 체중 감소가 있는 경우",
      "저혈당 의심 증상, 임신, 약물 복용 이슈가 있는 경우"
    ],
    relatedSlugs: ["2026/04/blog-post_29.html", "2026/04/blog-post_26.html", "2026/03/9.html"]
  },
  "2026/04/ldlhdl.html": {
    badge: "Core calculator",
    title: "LDL·HDL 결과를 심혈관 위험 요인 전체와 함께 보는 법",
    intro:
      "콜레스테롤 수치는 LDL, HDL, 중성지방, 총콜레스테롤을 함께 보아야 합니다. 흡연, 혈압, 혈당, 가족력, 약물 복용 여부에 따라 같은 수치라도 해석과 관리 방향이 달라질 수 있습니다.",
    formulaRows: [
      { label: "LDL", value: "낮을수록 유리한 방향의 지표", note: "개인 위험도에 따라 목표가 달라질 수 있습니다." },
      { label: "HDL", value: "심혈관 보호와 관련된 지표", note: "단독으로 모든 위험을 상쇄하지는 않습니다." },
      { label: "중성지방", value: "에너지 저장 형태의 혈중 지방", note: "당류·음주·체중·대사 상태와 관련될 수 있습니다." }
    ],
    example: {
      input: "LDL 130mg/dL, HDL 50mg/dL",
      calculation: "LDL / HDL = 2.6",
      result: "비율은 참고값",
      interpretation: "비율만 보지 말고 LDL 절대값, 중성지방, 혈압, 흡연 여부를 함께 봐야 합니다."
    },
    rangeRows: [
      { range: "LDL", meaning: "동맥 건강과 관련된 주요 지표", nextStep: "개인 위험도와 진료 기준을 함께 확인합니다." },
      { range: "HDL", meaning: "LDL 운반과 관련된 지표", nextStep: "운동, 금연, 체중 관리 등 생활습관과 같이 봅니다." },
      { range: "중성지방", meaning: "대사 건강과 관련된 혈중 지방", nextStep: "식사, 음주, 혈당, 체중 변화와 함께 확인합니다." }
    ],
    misconceptions: [
      "HDL이 높다고 LDL 관리가 필요 없다는 뜻은 아닙니다.",
      "비율 하나만으로 약물 필요 여부를 판단할 수 없습니다.",
      "검사 전 식사와 음주, 약물 복용 여부가 결과에 영향을 줄 수 있습니다."
    ],
    consultTriggers: [
      "LDL, 중성지방, 총콜레스테롤 이상이 반복되는 경우",
      "고혈압, 당뇨, 흡연, 가족력이 함께 있는 경우",
      "지질강하제 복용 여부나 목표 수치 조정이 필요한 경우"
    ],
    relatedSlugs: ["2026/04/hdl.html", "2026/04/blog-post_14.html", "2026/04/blog-post_25.html"]
  },
  "2026/03/blog-post_26.html": {
    badge: "Core calculator",
    title: "복부비만 결과를 대사 건강 점검 신호로 활용하는 법",
    intro:
      "복부비만은 체중만으로 보이지 않는 지방 분포를 살피는 데 도움을 줍니다. 허리둘레와 허리-키 비율은 혈압, 혈당, 지질 수치와 함께 보면 대사 건강 점검에 더 유용합니다.",
    formulaRows: [
      { label: "허리둘레", value: "배꼽 주변 또는 기준 위치 측정", note: "측정 위치를 매번 같게 유지합니다." },
      { label: "WHtR", value: "허리둘레 / 키", note: "키 대비 복부 둘레를 보는 보조 지표입니다." },
      { label: "함께 볼 수치", value: "혈압·혈당·지질", note: "대사증후군 위험 요인과 연결해 봅니다." }
    ],
    example: {
      input: "키 170cm, 허리둘레 86cm",
      calculation: "86 / 170 = 0.51",
      result: "WHtR 약 0.51",
      interpretation: "경계에 가까운 예시로, 혈압·혈당·생활습관과 함께 반복 기록하는 것이 좋습니다."
    },
    rangeRows: [
      { range: "낮은 비율", meaning: "복부 지방 부담이 상대적으로 낮을 수 있음", nextStep: "운동량과 식습관 기록을 유지합니다." },
      { range: "경계 비율", meaning: "생활습관 점검 필요", nextStep: "체중, 허리둘레, 혈압·혈당을 함께 기록합니다." },
      { range: "높은 비율", meaning: "대사 위험 요인 확인 필요", nextStep: "검진 결과와 의료 상담을 함께 고려합니다." }
    ],
    misconceptions: [
      "체중이 정상이어도 허리둘레가 높을 수 있습니다.",
      "허리둘레는 측정 위치와 호흡 상태에 따라 달라질 수 있습니다.",
      "복부비만 계산만으로 질환을 진단할 수 없습니다."
    ],
    consultTriggers: [
      "복부둘레 증가와 혈압·혈당·지질 이상이 함께 있는 경우",
      "짧은 기간에 체중이나 복부둘레가 급격히 변한 경우",
      "복통, 부종, 피로 같은 증상이 동반되는 경우"
    ],
    relatedSlugs: ["2026/03/whtr.html", "2026/04/blog-post_26.html", "2026/03/blog-post.html"]
  },
  "2026/03/blog-post_31.html": {
    badge: "Core calculator",
    title: "단백질 권장량을 체중과 총열량 안에서 균형 있게 보는 법",
    intro:
      "단백질은 근육, 회복, 포만감에 중요한 영양소지만 많을수록 무조건 좋은 것은 아닙니다. 총열량, 운동량, 질환, 나이, 임신·수유 여부에 따라 적절한 범위가 달라질 수 있습니다.",
    formulaRows: [
      { label: "체중 기준", value: "g/kg/day", note: "운동량과 목표에 따라 달라질 수 있습니다." },
      { label: "열량 기준", value: "단백질 1g = 4kcal", note: "총열량 안의 비율도 함께 봅니다." },
      { label: "식사 배분", value: "하루 여러 끼로 분산", note: "한 끼 집중보다 식사 패턴이 중요합니다." }
    ],
    example: {
      input: "하루 2,000kcal 중 단백질 20%",
      calculation: "2,000 × 0.20 / 4 = 100g",
      result: "하루 단백질 약 100g",
      interpretation: "총열량과 운동량을 함께 고려한 예시이며, 질환이 있으면 별도 상담이 필요합니다."
    },
    rangeRows: [
      { range: "기본 섭취", meaning: "일반적인 건강 유지 목적", nextStep: "총열량과 식사 균형을 함께 확인합니다." },
      { range: "운동·증량", meaning: "근력 운동과 회복을 고려한 범위", nextStep: "탄수화물과 지방 섭취도 함께 조정합니다." },
      { range: "질환·특수상황", meaning: "일반 기준과 다를 수 있음", nextStep: "신장질환, 임신·수유, 고령자는 상담을 우선합니다." }
    ],
    misconceptions: [
      "단백질만 늘리면 자동으로 근육이 늘어나는 것은 아닙니다.",
      "총열량과 운동 자극이 맞지 않으면 체중 변화가 기대와 다를 수 있습니다.",
      "신장질환 등 질환이 있으면 일반 계산값을 그대로 적용하면 안 됩니다."
    ],
    consultTriggers: [
      "신장질환, 간질환, 당뇨 등 식사 조절이 필요한 질환이 있는 경우",
      "임신·수유, 성장기, 고령자 식단을 정하는 경우",
      "고단백 식사 후 소화 불편, 체중 변화, 피로가 지속되는 경우"
    ],
    relatedSlugs: ["2026/04/blog-post.html", "2026/05/blog-post_02.html", "2026/04/blog-post_08.html"]
  },
  "2026/05/blog-post_02.html": {
    badge: "Core calculator",
    title: "활동량과 TDEE를 체중 변화 계획에 연결하는 법",
    intro:
      "TDEE는 기초대사량에 활동량을 반영한 하루 소비 열량 추정치입니다. 실제 소비량은 직업 활동, 운동 강도, NEAT, 수면, 스트레스에 따라 달라지므로 계산값과 기록값을 함께 봐야 합니다.",
    formulaRows: [
      { label: "활동계수", value: "생활·운동 수준 선택", note: "가장 큰 오차가 생기기 쉬운 입력입니다." },
      { label: "TDEE", value: "BMR × 활동계수", note: "체중 유지 기준선으로 활용합니다." },
      { label: "목표 조정", value: "기준선에서 소폭 가감", note: "급격한 변화보다 반복 기록이 중요합니다." }
    ],
    example: {
      input: "BMR 1,600kcal, 활동계수 1.55",
      calculation: "1,600 × 1.55 = 2,480",
      result: "추정 TDEE 약 2,480kcal",
      interpretation: "유지량 추정치로 보고, 1~2주 체중·식사·운동 기록을 보며 조정합니다."
    },
    rangeRows: [
      { range: "낮은 활동", meaning: "앉아 있는 시간이 많음", nextStep: "걷기, 계단, 짧은 운동부터 늘립니다." },
      { range: "중간 활동", meaning: "일상 활동과 운동이 일정함", nextStep: "운동 강도와 회복 상태를 함께 봅니다." },
      { range: "높은 활동", meaning: "운동량 또는 육체 활동이 많음", nextStep: "충분한 식사와 수면, 부상 신호를 확인합니다." }
    ],
    misconceptions: [
      "운동 칼로리는 기기와 공식에 따라 크게 달라질 수 있습니다.",
      "TDEE보다 조금 적게 먹는다고 항상 같은 속도로 감량되지는 않습니다.",
      "활동량을 과대평가하면 감량 계획이 흔들릴 수 있습니다."
    ],
    consultTriggers: [
      "운동 중 흉통, 어지럼, 호흡곤란이 있는 경우",
      "무월경, 극심한 피로, 반복 부상이 있는 경우",
      "질환이나 약물 때문에 운동·식단 조정이 필요한 경우"
    ],
    relatedSlugs: ["2026/03/2-bmr-1.html", "2026/05/blog-post_04.html", "2026/03/blog-post_27.html"]
  }
};

export const getCoreDeepDive = (slug: string) => deepDives[slug];

export const coreDeepDiveSlugs = Object.keys(deepDives);
