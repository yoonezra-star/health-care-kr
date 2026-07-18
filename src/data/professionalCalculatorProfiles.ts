export type ProfessionalCalculatorProfile = {
  slug: string;
  label: string;
  headline: string;
  summary: string;
  metricCards: {
    label: string;
    value: string;
    note: string;
  }[];
  scenarios: {
    situation: string;
    example: string;
    reading: string;
  }[];
  table: {
    title: string;
    columns: string[];
    rows: string[][];
  };
  checklistTitle: string;
  checklist: string[];
  standardBox: {
    basis: string;
    source: string;
    caution: string;
  };
};

const profiles: Record<string, ProfessionalCalculatorProfile> = {
  "2026/03/blog-post.html": {
    slug: "2026/03/blog-post.html",
    label: "체형 핵심",
    headline: "BMI 결과를 허리둘레와 함께 읽는 전문 체크",
    summary: "BMI는 빠른 선별 지표라서 체중 변화 방향을 보기 좋지만, 복부 지방과 근육량 차이는 따로 확인해야 합니다.",
    metricCards: [
      { label: "주 입력값", value: "키·체중", note: "단위 오류가 가장 흔합니다." },
      { label: "함께 볼 값", value: "허리둘레", note: "BMI 정상이어도 복부 지표가 다를 수 있습니다." },
      { label: "기록 주기", value: "2~4주", note: "하루 체중보다 추세를 봅니다." }
    ],
    scenarios: [
      { situation: "BMI 정상, 허리둘레 높음", example: "BMI 23.1, 허리둘레 91cm", reading: "체중만 보지 말고 복부비만 계산기와 혈압·혈당 결과를 함께 확인합니다." },
      { situation: "근력운동 중 BMI 높음", example: "BMI 26.0, 체지방률 낮음", reading: "근육량 영향 가능성이 있어 체지방률·허리-키 비율을 같이 봅니다." },
      { situation: "짧은 기간 급격한 변화", example: "한 달 5kg 이상 변화", reading: "식사·수면·질환·약물 변화가 있었는지 기록하고 필요하면 상담합니다." }
    ],
    table: {
      title: "BMI 결과 해석 매트릭스",
      columns: ["BMI 흐름", "함께 확인", "다음 행동"],
      rows: [
        ["낮은 편", "최근 체중 감소, 식사량, 피로", "무리한 감량 여부와 증상 동반 여부를 점검"],
        ["정상 범위", "허리둘레, 혈압, 혈당", "정상이라는 단어만 보지 말고 복부 지표를 확인"],
        ["높은 편", "허리-키 비율, 활동량, 수면", "감량 목표보다 기록 가능한 생활 변화부터 설정"]
      ]
    },
    checklistTitle: "BMI 계산 전후 체크",
    checklist: ["키는 cm, 체중은 kg로 입력했는지 확인합니다.", "같은 시간대와 비슷한 옷차림으로 반복 측정합니다.", "허리둘레와 혈압·혈당 결과를 같이 저장합니다."],
    standardBox: {
      basis: "성인 BMI는 체중(kg)을 키(m)의 제곱으로 나눈 선별 지표입니다.",
      source: "CDC Adult BMI Categories",
      caution: "BMI는 진단 도구가 아니며 개인의 체성분, 병력, 임신 여부를 대신 판단하지 않습니다."
    }
  },
  "2026/03/2-bmr-1.html": {
    slug: "2026/03/2-bmr-1.html",
    label: "에너지 핵심",
    headline: "BMR·TDEE를 식단 조정표로 바꾸는 방법",
    summary: "기초대사량은 시작점이고, 실제 체중 변화는 활동량·식사 기록·수면·스트레스가 함께 만든 결과입니다.",
    metricCards: [
      { label: "기초값", value: "BMR", note: "쉬고 있어도 필요한 에너지 추정값입니다." },
      { label: "계획값", value: "TDEE", note: "활동계수 선택에 따라 크게 달라집니다." },
      { label: "검증값", value: "1~2주 기록", note: "계산값보다 실제 추세가 중요합니다." }
    ],
    scenarios: [
      { situation: "감량이 멈춘 경우", example: "TDEE 2,100kcal, 섭취 1,800kcal", reading: "주말 섭취, 음료, 간식, 활동량 감소가 누락됐는지 확인합니다." },
      { situation: "너무 빠르게 줄어드는 경우", example: "2주에 3kg 감소", reading: "피로·수면·운동 수행 저하가 있으면 목표 적자를 낮춥니다." },
      { situation: "활동계수 선택이 애매한 경우", example: "사무직이지만 주 4회 운동", reading: "중간값으로 시작하고 체중 추세로 보정하는 편이 안전합니다." }
    ],
    table: {
      title: "BMR·TDEE 조정표",
      columns: ["상황", "확인할 기록", "조정 방향"],
      rows: [
        ["체중 변화 없음", "섭취 기록 누락, 활동량", "7일 평균 섭취와 걸음 수를 먼저 점검"],
        ["피로가 큼", "수면, 운동 수행, 섭취량", "감량 속도를 완만하게 조정"],
        ["증량 중 지방 증가", "단백질, 운동 강도, 총열량", "열량 추가 폭을 줄이고 근력운동 기록 확인"]
      ]
    },
    checklistTitle: "식단 계획 전 체크",
    checklist: ["활동계수를 과대평가하지 않았는지 확인합니다.", "체중은 매일값보다 7일 평균으로 봅니다.", "임신·수유·질환·복용 약물이 있으면 일반 계산값을 그대로 적용하지 않습니다."],
    standardBox: {
      basis: "BMR과 TDEE는 공식 기반 추정값이며 실제 에너지 소비량을 직접 측정한 값이 아닙니다.",
      source: "Dietary Guidelines and public nutrition references",
      caution: "극단적인 제한식이나 질환별 식사요법은 계산기 결과가 아니라 전문가 상담이 우선입니다."
    }
  },
  "2026/03/9.html": {
    slug: "2026/03/9.html",
    label: "혈압 핵심",
    headline: "혈압 결과를 한 번의 숫자가 아닌 측정 조건으로 해석하기",
    summary: "혈압은 자세, 시간, 카페인, 운동, 긴장도에 따라 흔들리므로 같은 조건에서 반복 기록한 평균이 중요합니다.",
    metricCards: [
      { label: "입력값", value: "수축기·이완기", note: "두 숫자를 함께 봅니다." },
      { label: "조건", value: "안정 후 측정", note: "측정 직전 활동을 기록합니다." },
      { label: "판단", value: "반복 평균", note: "단일값으로 단정하지 않습니다." }
    ],
    scenarios: [
      { situation: "아침만 높음", example: "아침 135/84, 저녁 122/78", reading: "측정 시간대별 패턴을 나눠 기록하고 상담 시 보여줍니다." },
      { situation: "병원에서만 높음", example: "가정 120대, 병원 140대", reading: "가정혈압 기록이 해석에 도움이 될 수 있습니다." },
      { situation: "증상 동반", example: "흉통, 호흡곤란, 마비감", reading: "온라인 계산보다 즉시 진료 판단이 우선입니다." }
    ],
    table: {
      title: "혈압 기록 품질표",
      columns: ["기록 항목", "왜 필요한가", "메모 예시"],
      rows: [
        ["측정 시간", "아침·저녁 차이를 보기 위해", "기상 후 30분, 취침 전"],
        ["측정 전 조건", "카페인·운동 영향을 보기 위해", "커피 전, 운동 후 2시간"],
        ["반복값", "우연한 튐을 줄이기 위해", "1분 간격 2회 평균"]
      ]
    },
    checklistTitle: "혈압 측정 체크",
    checklist: ["측정 전 잠시 안정한 뒤 잽니다.", "팔 위치와 커프 착용을 일정하게 맞춥니다.", "높은 값이 반복되거나 증상이 있으면 상담 기록으로 가져갑니다."],
    standardBox: {
      basis: "혈압은 수축기와 이완기 수치를 함께 보고, 반복 측정과 임상 맥락을 함께 고려합니다.",
      source: "NHLBI High Blood Pressure resources",
      caution: "약물 시작·중단·용량 변경은 계산기로 결정하지 않습니다."
    }
  },
  "2026/03/10.html": {
    slug: "2026/03/10.html",
    label: "혈당 핵심",
    headline: "공복혈당·식후혈당·A1C를 구분해 보는 표",
    summary: "혈당은 검사 시점에 따라 의미가 달라집니다. 공복혈당은 그날 조건, A1C는 최근 몇 달의 평균 흐름을 반영합니다.",
    metricCards: [
      { label: "공복혈당", value: "8시간 금식", note: "검사 조건 확인이 중요합니다." },
      { label: "식후혈당", value: "식사 후 시간", note: "식사 시작 시점을 기록합니다." },
      { label: "A1C", value: "2~3개월 흐름", note: "단일 혈당과 다른 지표입니다." }
    ],
    scenarios: [
      { situation: "공복혈당만 경계", example: "공복 105mg/dL, A1C 정상", reading: "재검 조건, 수면, 전날 식사, 운동 여부를 함께 봅니다." },
      { situation: "A1C가 높음", example: "공복은 정상 근처, A1C 상승", reading: "식후혈당 패턴이나 최근 몇 달의 생활 변화가 중요할 수 있습니다." },
      { situation: "증상 동반", example: "갈증, 잦은 소변, 체중 감소", reading: "계산기 해석보다 의료기관 검사가 우선입니다." }
    ],
    table: {
      title: "혈당 검사별 의미",
      columns: ["지표", "보는 기간", "주의점"],
      rows: [
        ["공복혈당", "검사 당일 공복 상태", "금식 시간과 전날 조건을 확인"],
        ["식후혈당", "식사 후 일정 시간", "식사량과 탄수화물 종류 영향"],
        ["A1C", "최근 2~3개월 평균 흐름", "개인 상태에 따라 해석이 달라질 수 있음"]
      ]
    },
    checklistTitle: "혈당 결과 기록",
    checklist: ["공복 여부와 마지막 식사 시간을 적습니다.", "같은 단위인지 확인합니다.", "경계값은 반복 검사와 전문가 상담으로 확인합니다."],
    standardBox: {
      basis: "CDC와 NIDDK는 A1C와 공복혈당이 서로 다른 기간의 혈당 정보를 보여준다고 설명합니다.",
      source: "CDC Diabetes Testing, NIDDK A1C Test",
      caution: "온라인 계산 결과는 당뇨병 진단이나 치료 계획을 대신하지 않습니다."
    }
  },
  "2026/04/ldlhdl.html": {
    slug: "2026/04/ldlhdl.html",
    label: "지질 핵심",
    headline: "LDL·HDL·중성지방을 한 표로 묶어 보는 방법",
    summary: "콜레스테롤 비율은 참고값입니다. 실제 해석은 LDL 절대값, HDL, 중성지방, 혈압, 흡연, 가족력을 함께 봐야 합니다.",
    metricCards: [
      { label: "LDL", value: "주요 관리 지표", note: "개인 위험도에 따라 목표가 달라질 수 있습니다." },
      { label: "HDL", value: "보조 해석", note: "높다고 모든 위험이 사라지지 않습니다." },
      { label: "중성지방", value: "대사 흐름", note: "음주·당류·체중과 관련될 수 있습니다." }
    ],
    scenarios: [
      { situation: "LDL 높고 HDL 보통", example: "LDL 150, HDL 55", reading: "비율보다 LDL 자체와 전체 심혈관 위험 요인을 먼저 봅니다." },
      { situation: "중성지방 높음", example: "TG 220", reading: "당류, 음주, 체중, 혈당 결과를 함께 확인합니다." },
      { situation: "약 복용 중", example: "지질강하제 복용", reading: "목표값과 조정은 담당 의료진 기준을 우선합니다." }
    ],
    table: {
      title: "지질 지표 관계표",
      columns: ["지표", "함께 볼 것", "기록 포인트"],
      rows: [
        ["LDL", "혈압, 흡연, 가족력", "절대값과 목표 관리 여부"],
        ["HDL", "운동, 체중, 흡연", "단독 보호 지표로 과대해석하지 않기"],
        ["중성지방", "혈당, 음주, 당류", "공복 여부와 최근 식사 기록"]
      ]
    },
    checklistTitle: "지질 결과 체크",
    checklist: ["공복 검사였는지 확인합니다.", "LDL·HDL·중성지방을 따로 저장합니다.", "가족력과 흡연 여부를 상담 메모에 포함합니다."],
    standardBox: {
      basis: "CDC는 LDL, HDL, 중성지방을 심혈관 건강과 관련된 서로 다른 지표로 설명합니다.",
      source: "CDC Cholesterol resources",
      caution: "비율 하나로 약물 필요 여부나 질환 위험을 단정하지 않습니다."
    }
  },
  "2026/05/pack-year.html": {
    slug: "2026/05/pack-year.html",
    label: "흡연력 핵심",
    headline: "Pack-year 결과를 검진 상담 자료로 바꾸기",
    summary: "Pack-year는 누적 흡연량을 정리하는 지표입니다. 금연 여부, 나이, 가족력, 증상, 검진 이력과 함께 봐야 합니다.",
    metricCards: [
      { label: "계산식", value: "갑/일 × 년", note: "20개비를 1갑으로 환산합니다." },
      { label: "핵심 맥락", value: "현재·과거 흡연", note: "금연한 경우도 과거 누적량을 기록합니다." },
      { label: "상담 자료", value: "검진 이력", note: "폐암 검진 상담에 도움이 됩니다." }
    ],
    scenarios: [
      { situation: "현재 흡연 중", example: "20 pack-year", reading: "금연 계획, 기침·호흡곤란 여부, 검진 이력을 함께 정리합니다." },
      { situation: "오래 전 금연", example: "과거 30 pack-year, 금연 12년", reading: "과거 누적량과 금연 기간을 모두 상담 자료로 남깁니다." },
      { situation: "가족력 또는 증상", example: "혈담, 지속 기침", reading: "수치 계산보다 의료 상담이 우선입니다." }
    ],
    table: {
      title: "Pack-year 기록표",
      columns: ["기록 항목", "예시", "이유"],
      rows: [
        ["하루 흡연량", "10개비/일", "갑 단위 환산의 기준"],
        ["흡연 기간", "15년", "누적 노출량 계산"],
        ["금연 기간", "금연 5년", "현재 위험 해석에 필요한 배경"]
      ]
    },
    checklistTitle: "흡연력 상담 전 정리",
    checklist: ["현재 흡연 여부와 금연 시작일을 적습니다.", "전자담배·가열담배 사용은 별도로 기록합니다.", "기침·호흡곤란·혈담 같은 증상이 있으면 계산보다 상담이 우선입니다."],
    standardBox: {
      basis: "Pack-year는 하루 평균 흡연 갑 수와 흡연 기간을 곱한 누적 흡연 노출 지표입니다.",
      source: "CDC Lung Cancer Screening resources",
      caution: "검진 대상 여부는 나이, 흡연력, 금연 기간, 개인 병력에 따라 전문가 상담으로 확인해야 합니다."
    }
  },
  "2026/03/blog-post_31.html": {
    slug: "2026/03/blog-post_31.html",
    label: "영양 핵심",
    headline: "단백질 권장량을 체중·열량·운동 목적에 맞춰 읽기",
    summary: "단백질 계산값은 하루 총열량, 운동량, 식사 분배, 질환 여부와 함께 봐야 실제 식단 계획에 쓸 수 있습니다.",
    metricCards: [
      { label: "기본 단위", value: "g/day", note: "하루 총량부터 확인합니다." },
      { label: "체중 기준", value: "g/kg", note: "운동 목적에 따라 달라질 수 있습니다." },
      { label: "분배", value: "끼니별", note: "한 끼 집중보다 나눠 먹는 기록이 유용합니다." }
    ],
    scenarios: [
      { situation: "운동 시작", example: "체중 70kg, 근력운동 주 3회", reading: "총량과 함께 식사 분배, 운동 후 식사 시간을 기록합니다." },
      { situation: "감량 중", example: "열량 제한 중 단백질 부족", reading: "단백질만 올리기보다 총열량과 식이섬유를 함께 봅니다." },
      { situation: "질환 이력", example: "신장질환 상담 이력", reading: "일반 계산값을 그대로 적용하지 말고 의료진 지침을 우선합니다." }
    ],
    table: {
      title: "단백질 계산 적용표",
      columns: ["목적", "함께 확인", "주의점"],
      rows: [
        ["유지", "총열량, 식사 균형", "단백질만 따로 과대해석하지 않기"],
        ["근력운동", "운동 강도, 회복, 수면", "소화 부담과 총열량 확인"],
        ["감량", "식이섬유, 수분, 포만감", "극단적 제한식 피하기"]
      ]
    },
    checklistTitle: "단백질 계산 전 체크",
    checklist: ["체중과 목표를 먼저 정합니다.", "총열량과 탄수화물·지방 비율도 함께 봅니다.", "신장질환 등 질환 이력이 있으면 상담 기준을 우선합니다."],
    standardBox: {
      basis: "단백질 필요량은 체중, 활동량, 생애주기, 건강 상태에 따라 달라질 수 있습니다.",
      source: "MedlinePlus Dietary Proteins and public nutrition references",
      caution: "질환별 단백질 제한이나 보충제 사용은 전문가 상담이 필요할 수 있습니다."
    }
  },
  "2026/04/blog-post_13.html": {
    slug: "2026/04/blog-post_13.html",
    label: "라벨 핵심",
    headline: "나트륨 계산값을 음식 라벨과 하루 총량으로 연결하기",
    summary: "나트륨은 한 제품만 보지 말고 하루 전체 식사, 국물 섭취, 가공식품 빈도를 함께 계산해야 의미가 있습니다.",
    metricCards: [
      { label: "라벨 기준", value: "1회 제공량", note: "봉지 전체와 다를 수 있습니다." },
      { label: "환산", value: "나트륨↔소금", note: "단위 혼동을 줄입니다." },
      { label: "기록", value: "하루 총량", note: "여러 끼 합산이 중요합니다." }
    ],
    scenarios: [
      { situation: "라면 1개", example: "나트륨 1,700mg", reading: "국물 섭취량과 다른 끼니의 나트륨을 함께 봅니다." },
      { situation: "가공식품 여러 개", example: "샌드위치+스프+음료", reading: "제품별 1회 제공량을 합산해 하루 총량을 확인합니다." },
      { situation: "혈압 관리 중", example: "가정혈압 경계", reading: "나트륨 기록과 혈압 기록을 같은 날짜로 묶습니다." }
    ],
    table: {
      title: "나트륨 라벨 입력표",
      columns: ["확인 위치", "입력 방식", "주의점"],
      rows: [
        ["영양정보", "나트륨 mg", "1회 제공량 기준인지 확인"],
        ["총 섭취량", "먹은 양 배수 곱하기", "반 봉지인지 전체인지 구분"],
        ["하루 합계", "끼니별 합산", "국물·소스·김치류도 고려"]
      ]
    },
    checklistTitle: "나트륨 입력 전 체크",
    checklist: ["1회 제공량과 총 내용량을 구분합니다.", "먹은 양이 몇 회 제공량인지 계산합니다.", "혈압 기록과 함께 같은 날짜로 저장합니다."],
    standardBox: {
      basis: "FDA와 Dietary Guidelines는 나트륨 과다 섭취를 줄이는 식품 선택과 라벨 확인을 강조합니다.",
      source: "FDA Sodium Reduction and Nutrition Facts resources",
      caution: "개인별 나트륨 제한 목표는 혈압, 질환, 약물 상태에 따라 달라질 수 있습니다."
    }
  },
  "2026/04/blog-post_15.html": {
    slug: "2026/04/blog-post_15.html",
    label: "당류 핵심",
    headline: "당류 계산을 첨가당·총당류·열량 흐름으로 나누기",
    summary: "당류 계산은 음료, 간식, 소스처럼 놓치기 쉬운 항목을 찾는 데 좋습니다. 첨가당과 총당류 구분이 핵심입니다.",
    metricCards: [
      { label: "라벨", value: "총당류·첨가당", note: "표시 항목을 구분합니다." },
      { label: "열량", value: "g × 4kcal", note: "열량 비중을 볼 수 있습니다." },
      { label: "패턴", value: "음료·간식", note: "반복 섭취가 중요합니다." }
    ],
    scenarios: [
      { situation: "음료 섭취 많음", example: "음료 2병, 당류 60g", reading: "식사보다 음료에서 들어오는 당류를 먼저 줄일 수 있습니다." },
      { situation: "과일과 간식 혼동", example: "과일+과자 총당류 합산", reading: "자연당과 첨가당 맥락을 나눠 기록합니다." },
      { situation: "혈당 경계", example: "공복혈당 경계", reading: "당류 계산과 혈당 기록을 같은 기간으로 비교합니다." }
    ],
    table: {
      title: "당류 기록 분류표",
      columns: ["항목", "예시", "기록 포인트"],
      rows: [
        ["음료", "탄산음료, 커피음료", "하루 반복 섭취량 확인"],
        ["간식", "과자, 디저트", "1회 제공량과 실제 먹은 양 구분"],
        ["소스", "드레싱, 양념", "작지만 자주 더해지는 양 확인"]
      ]
    },
    checklistTitle: "당류 계산 전 체크",
    checklist: ["총당류와 첨가당 표시를 구분합니다.", "음료와 간식을 별도로 기록합니다.", "혈당·체중 변화와 같은 기간으로 비교합니다."],
    standardBox: {
      basis: "FDA는 Nutrition Facts label에서 added sugars를 확인하도록 안내하며, Dietary Guidelines는 첨가당 열량 비중 제한을 권고합니다.",
      source: "FDA Added Sugars on the Nutrition Facts Label",
      caution: "당류 계산은 식습관 점검용이며 당뇨 진단이나 치료 목표를 대신하지 않습니다."
    }
  },
  "2026/04/blog-post_24.html": {
    slug: "2026/04/blog-post_24.html",
    label: "카페인 핵심",
    headline: "카페인 계산을 시간대·제품별 함량·수면 영향으로 읽기",
    summary: "카페인은 총량뿐 아니라 마신 시간과 개인 민감도가 중요합니다. 커피, 에너지음료, 차, 초콜릿을 함께 기록하세요.",
    metricCards: [
      { label: "총량", value: "mg/day", note: "제품별 함량을 합산합니다." },
      { label: "시간대", value: "오후 섭취", note: "수면에 영향을 줄 수 있습니다." },
      { label: "민감도", value: "두근거림·불면", note: "증상 기록이 중요합니다." }
    ],
    scenarios: [
      { situation: "오후 커피 습관", example: "오후 4시 아메리카노", reading: "수면 시간 계산기와 함께 취침 지연 여부를 봅니다." },
      { situation: "에너지음료 추가", example: "커피 2잔+에너지음료 1캔", reading: "제품별 mg 표시를 합산하고 심박·불안 증상을 기록합니다." },
      { situation: "임신·청소년·질환", example: "특수 상황", reading: "일반 계산값보다 의료·공공기관 권고를 우선 확인합니다." }
    ],
    table: {
      title: "카페인 기록표",
      columns: ["제품", "확인할 값", "함께 볼 것"],
      rows: [
        ["커피", "잔당 카페인 mg", "마신 시간과 수면"],
        ["에너지음료", "캔당 카페인 mg", "심박·불안·복용 약물"],
        ["차·초콜릿", "반복 섭취량", "총량 누락 방지"]
      ]
    },
    checklistTitle: "카페인 계산 전 체크",
    checklist: ["제품 라벨의 카페인 mg를 확인합니다.", "마신 시간을 함께 기록합니다.", "두근거림, 불면, 불안감이 있으면 총량보다 증상을 우선 봅니다."],
    standardBox: {
      basis: "카페인 반응은 개인차가 크며, 총량과 섭취 시간대가 모두 중요합니다.",
      source: "FDA food labeling and public health resources",
      caution: "임신, 청소년, 심혈관 질환, 복용 약물이 있는 경우 일반 기준을 그대로 적용하지 않습니다."
    }
  }
};

export const getProfessionalCalculatorProfile = (slug: string) => profiles[slug];

export const professionalCalculatorProfileSlugs = Object.keys(profiles);
