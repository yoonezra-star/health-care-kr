import type { Post } from "../types";

export type VisualAid = {
  title: string;
  summary: string;
  keyMetrics: {
    label: string;
    value: string;
    note: string;
  }[];
  interpretationRows: {
    label: string;
    meaning: string;
    checkWith: string;
    caution: string;
  }[];
  flowSteps: {
    title: string;
    body: string;
  }[];
};

const categoryVisualAids: Record<string, VisualAid> = {
  body: {
    title: "체형 지표 한눈에 보기",
    summary: "체형 계산은 현재 상태를 빠르게 파악하는 출발점입니다. BMI, 허리둘레, 체지방률은 서로 다른 정보를 보여주므로 함께 보는 편이 안전합니다.",
    keyMetrics: [
      { label: "입력값", value: "키·체중·허리둘레", note: "단위와 측정 위치를 먼저 확인" },
      { label: "결과", value: "BMI·비율·범위", note: "근육량과 체지방 분포는 별도 고려" },
      { label: "비교", value: "2~4주 추세", note: "하루 변화보다 반복 기록 우선" }
    ],
    interpretationRows: [
      {
        label: "BMI",
        meaning: "키와 체중으로 계산하는 기본 체형 지표",
        checkWith: "허리둘레, 체지방률, 운동량",
        caution: "근육량이 많은 사람은 실제 체지방과 다르게 보일 수 있습니다."
      },
      {
        label: "허리둘레·WHtR",
        meaning: "복부 지방과 대사 위험을 함께 볼 때 참고",
        checkWith: "혈압, 혈당, 지질 수치",
        caution: "측정 위치가 달라지면 결과가 크게 흔들릴 수 있습니다."
      },
      {
        label: "목표 체중",
        meaning: "감량·증량 계획을 세울 때의 기준점",
        checkWith: "칼로리, 단백질, 운동 계획",
        caution: "짧은 기간의 급격한 변화는 건강 부담이 될 수 있습니다."
      }
    ],
    flowSteps: [
      { title: "측정 조건 통일", body: "가능하면 같은 시간대와 같은 방식으로 키, 체중, 허리둘레를 기록합니다." },
      { title: "복수 지표 비교", body: "BMI 하나만 보지 말고 허리둘레, 체지방률, 운동량을 함께 확인합니다." },
      { title: "변화 방향 확인", body: "한 번의 수치보다 2~4주 변화와 생활습관 변화를 같이 봅니다." }
    ]
  },
  nutrition: {
    title: "영양 계산 결과 해석 표",
    summary: "영양 계산은 하루 섭취 기준을 잡는 데 유용하지만, 실제 식단은 며칠 평균과 개인 상태를 함께 봐야 합니다.",
    keyMetrics: [
      { label: "입력값", value: "체중·활동량·목표", note: "감량·유지·증량 목적 구분" },
      { label: "결과", value: "칼로리·영양소", note: "하루 기준보다 주간 평균도 확인" },
      { label: "조정", value: "식사 기록", note: "극단적 제한보다 지속 가능성 우선" }
    ],
    interpretationRows: [
      {
        label: "칼로리",
        meaning: "체중 변화 방향을 정하는 에너지 기준",
        checkWith: "기초대사량, 활동량, 체중 변화",
        caution: "지나치게 낮은 섭취량은 피로와 영양 불균형을 만들 수 있습니다."
      },
      {
        label: "단백질·탄수화물·지방",
        meaning: "식단 균형과 운동 목표를 맞추는 주요 영양소",
        checkWith: "운동량, 포만감, 식사 패턴",
        caution: "질환이나 특수 식이가 있으면 일반 권장량과 다를 수 있습니다."
      },
      {
        label: "나트륨·당류·카페인",
        meaning: "과다 섭취를 점검하기 쉬운 생활 지표",
        checkWith: "가공식품, 음료, 외식 빈도",
        caution: "혈압, 신장질환, 임신 등 상황에 따라 더 보수적으로 봐야 합니다."
      }
    ],
    flowSteps: [
      { title: "목표 선택", body: "감량, 유지, 증량 중 어떤 목적의 계산인지 먼저 정합니다." },
      { title: "식사 패턴 대조", body: "하루 결과만 보지 말고 3~7일 식사 기록과 비교합니다." },
      { title: "작게 조정", body: "칼로리와 영양소를 한 번에 크게 바꾸기보다 지속 가능한 범위에서 조정합니다." }
    ]
  },
  vitals: {
    title: "검진 수치 해석 체크표",
    summary: "혈압, 혈당, 콜레스테롤 같은 수치는 측정 조건의 영향을 많이 받습니다. 반복 기록과 검진 결과를 함께 보는 것이 중요합니다.",
    keyMetrics: [
      { label: "입력값", value: "검사 수치·단위", note: "공복 여부와 검사일 확인" },
      { label: "결과", value: "범위·위험 신호", note: "한 번의 결과로 확정하지 않기" },
      { label: "다음 단계", value: "반복 측정·상담", note: "증상이나 고위험 수치는 진료 우선" }
    ],
    interpretationRows: [
      {
        label: "혈압",
        meaning: "심혈관 부담과 생활습관 관리 필요성을 볼 때 참고",
        checkWith: "측정 자세, 시간대, 반복 측정",
        caution: "두통, 흉통, 호흡곤란 등 증상이 있으면 온라인 계산보다 진료가 우선입니다."
      },
      {
        label: "혈당",
        meaning: "공복·식후 상태에 따라 해석이 달라지는 대사 지표",
        checkWith: "공복 여부, 최근 식사, HbA1c",
        caution: "저혈당 의심 증상이나 매우 높은 수치는 즉시 상담이 필요할 수 있습니다."
      },
      {
        label: "지질 수치",
        meaning: "LDL, HDL, 중성지방 등 심혈관 위험 요인을 함께 보는 지표",
        checkWith: "검진표, 가족력, 흡연, 혈압",
        caution: "약물 복용 여부는 반드시 의료 전문가와 상의해야 합니다."
      }
    ],
    flowSteps: [
      { title: "검사 조건 확인", body: "공복 여부, 측정 시간, 단위, 복용 약물을 먼저 확인합니다." },
      { title: "반복값 비교", body: "단일 수치보다 반복 측정과 검진표의 전체 맥락을 봅니다." },
      { title: "상담 기준 정리", body: "경계 수치, 증상, 가족력, 약물 복용 이슈를 진료 상담 때 함께 전달합니다." }
    ]
  },
  lifestyle: {
    title: "생활습관 기록 인포그래픽",
    summary: "운동, 수면, 흡연, 카페인 같은 생활습관 지표는 하루 결과보다 반복 기록과 행동 변화가 더 중요합니다.",
    keyMetrics: [
      { label: "입력값", value: "시간·횟수·빈도", note: "평소 패턴과 특이일 구분" },
      { label: "결과", value: "습관 지표", note: "예측보다 자기 점검 목적" },
      { label: "변화", value: "1~2주 기록", note: "작은 행동 변화부터 확인" }
    ],
    interpretationRows: [
      {
        label: "수면",
        meaning: "수면 시간과 생활 리듬을 점검하는 기준",
        checkWith: "기상 시간, 낮 졸림, 카페인",
        caution: "불면, 코골이, 심한 피로가 지속되면 상담이 필요할 수 있습니다."
      },
      {
        label: "운동",
        meaning: "활동량과 목표 강도를 대략적으로 맞추는 기준",
        checkWith: "심박수, 운동 시간, 회복 상태",
        caution: "흉통, 어지럼, 호흡곤란이 있으면 운동 계산보다 진료가 우선입니다."
      },
      {
        label: "흡연·카페인",
        meaning: "누적 노출과 생활 조절 포인트를 확인하는 지표",
        checkWith: "하루 섭취량, 의존도, 금연 계획",
        caution: "계산 결과가 실제 질병 발생을 예측하거나 보장하지 않습니다."
      }
    ],
    flowSteps: [
      { title: "평소 패턴 입력", body: "특별한 하루보다 평소 평균에 가까운 값을 입력합니다." },
      { title: "방해 요인 기록", body: "스트레스, 야근, 음주, 카페인처럼 결과에 영향을 준 조건을 적습니다." },
      { title: "작은 목표 설정", body: "수면 30분 늘리기, 걷기 추가, 흡연량 기록처럼 실천 가능한 목표로 연결합니다." }
    ]
  },
  health: {
    title: "건강지표 판단 흐름표",
    summary: "건강지표 계산기는 특정 상황을 정리하는 도구입니다. 결과가 행동을 대신 결정하지 않도록 관련 조건과 상담 필요성을 함께 보세요.",
    keyMetrics: [
      { label: "입력값", value: "상황별 수치", note: "날짜·단위·조건 확인" },
      { label: "결과", value: "참고 범위", note: "진단·처방 목적 아님" },
      { label: "연결", value: "공식 자료·상담", note: "경계 결과는 추가 확인" }
    ],
    interpretationRows: [
      {
        label: "대사·검진 지표",
        meaning: "여러 수치를 함께 묶어 위험 요인을 정리",
        checkWith: "혈압, 혈당, 허리둘레, 지질 수치",
        caution: "검진 결과와 진료 상담 기준을 함께 확인해야 합니다."
      },
      {
        label: "임신·생리 관련 지표",
        meaning: "날짜 계산과 일정 확인에 도움",
        checkWith: "주기 변화, 증상, 검사 결과",
        caution: "임신 여부와 건강 판단은 검사와 전문가 상담이 필요합니다."
      },
      {
        label: "섭취·노출 지표",
        meaning: "카페인, 나트륨 등 조절 포인트를 찾는 데 사용",
        checkWith: "식사 기록, 음료, 질환 여부",
        caution: "질환이나 약물 복용이 있으면 일반 기준을 그대로 적용하지 않습니다."
      }
    ],
    flowSteps: [
      { title: "관련 조건 확인", body: "나이, 성별, 주기, 검사일, 질환, 복용 약물처럼 결과에 영향을 주는 조건을 확인합니다." },
      { title: "공식 자료 대조", body: "Health Care 참고자료 허브와 검진표 기준을 함께 확인합니다." },
      { title: "필요 시 상담", body: "증상, 경계 수치, 임신 가능성, 약물 이슈가 있으면 전문가 상담을 우선합니다." }
    ]
  }
};

export const getVisualAid = (post: Post) =>
  categoryVisualAids[post.category] ?? categoryVisualAids.health;
