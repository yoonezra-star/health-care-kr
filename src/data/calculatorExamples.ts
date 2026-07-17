import type { Post } from "../types";

export type CalculatorExample = {
  title: string;
  input: string;
  calculation: string;
  result: string;
  takeaway: string;
};

const hasAny = (value: string, terms: string[]) => terms.some((term) => value.includes(term));

export const getCalculatorExample = (post: Post): CalculatorExample => {
  const text = `${post.title} ${post.description} ${post.slug}`;

  if (hasAny(text, ["BMI", "체질량"])) {
    return {
      title: "BMI 예시 계산",
      input: "키 170cm, 체중 70kg",
      calculation: "70 / 1.70^2 = 24.2",
      result: "BMI 약 24.2",
      takeaway: "BMI는 체형 점검의 출발점입니다. 허리둘레와 체지방률, 운동량을 함께 보면 해석이 더 안전합니다."
    };
  }

  if (hasAny(text, ["복부비만", "허리-키", "WHtR", "허리-엉덩이", "WHR"])) {
    return {
      title: "허리 지표 예시 계산",
      input: "키 170cm, 허리둘레 86cm",
      calculation: "86 / 170 = 0.51",
      result: "허리-키 비율 약 0.51",
      takeaway: "복부 지표는 측정 위치에 민감합니다. 같은 위치와 같은 조건으로 반복 기록하세요."
    };
  }

  if (hasAny(text, ["BMR", "기초대사량", "TDEE", "활동량", "칼로리", "다이어트", "벌크업", "체중 감량", "체중 증량"])) {
    return {
      title: "에너지 기준 예시 계산",
      input: "BMR 1,500kcal, 활동계수 1.4",
      calculation: "1,500 × 1.4 = 2,100",
      result: "추정 유지 열량 약 2,100kcal",
      takeaway: "계산값은 시작점입니다. 1~2주 식사·체중·운동 기록을 보며 조정하는 편이 현실적입니다."
    };
  }

  if (hasAny(text, ["단백질"])) {
    return {
      title: "단백질 열량 예시 계산",
      input: "하루 2,000kcal 중 단백질 20%",
      calculation: "2,000 × 0.20 / 4 = 100",
      result: "하루 단백질 약 100g",
      takeaway: "단백질은 총열량 안에서 봐야 합니다. 질환이나 특수상황이 있으면 일반 계산값을 그대로 적용하지 않습니다."
    };
  }

  if (hasAny(text, ["탄수화물", "지방", "나트륨", "당류", "식이섬유", "카페인", "물 섭취", "수분"])) {
    return {
      title: "영양소 기록 예시",
      input: "포장식품 2회 섭취, 1회당 나트륨 600mg",
      calculation: "600mg × 2회 = 1,200mg",
      result: "해당 식품만 나트륨 1,200mg",
      takeaway: "영양소는 하루 한 끼보다 하루 전체와 며칠 평균을 함께 보는 편이 좋습니다."
    };
  }

  if (hasAny(text, ["혈압", "심박수"])) {
    return {
      title: "혈압·심박 기록 예시",
      input: "아침 안정 상태 혈압 128/78mmHg",
      calculation: "수축기 128, 이완기 78을 따로 확인",
      result: "수축기 쪽이 경계에 가까운 예시",
      takeaway: "운동, 카페인, 스트레스 영향을 줄인 뒤 같은 조건으로 반복 측정하세요."
    };
  }

  if (hasAny(text, ["당뇨", "혈당", "인슐린", "HOMA"])) {
    return {
      title: "혈당 기록 예시",
      input: "공복혈당 105mg/dL",
      calculation: "공복 여부와 단위를 먼저 확인",
      result: "공복 기준 경계 범위 예시",
      takeaway: "한 번의 수치로 단정하지 말고 재검, A1C, 증상 여부를 함께 확인하세요."
    };
  }

  if (hasAny(text, ["LDL", "HDL", "콜레스테롤", "중성지방"])) {
    return {
      title: "지질 수치 예시 계산",
      input: "LDL 130mg/dL, HDL 50mg/dL",
      calculation: "LDL / HDL = 2.6",
      result: "비율은 참고값",
      takeaway: "비율만 보지 말고 LDL 절대값, 중성지방, 혈압, 흡연 여부를 함께 확인하세요."
    };
  }

  if (hasAny(text, ["흡연", "Pack-Year"])) {
    return {
      title: "흡연력 예시 계산",
      input: "하루 20개비를 15년 흡연",
      calculation: "1갑 × 15년 = 15 pack-year",
      result: "흡연력 15 pack-year",
      takeaway: "Pack-year는 누적 노출을 정리하는 지표입니다. 실제 위험은 금연 기간, 나이, 가족력과 함께 봐야 합니다."
    };
  }

  if (hasAny(text, ["수면"])) {
    return {
      title: "수면 평균 예시",
      input: "평일 6시간, 주말 8시간",
      calculation: "(6시간 × 5일 + 8시간 × 2일) / 7일 = 6.6시간",
      result: "주간 평균 약 6시간 36분",
      takeaway: "하루 수면보다 주간 평균과 낮 졸림, 기상 시간을 함께 확인하세요."
    };
  }

  if (hasAny(text, ["임신", "배란", "가임", "생리"])) {
    return {
      title: "주기 계산 예시",
      input: "마지막 생리 시작일 7월 1일, 평균 주기 28일",
      calculation: "다음 생리 예정일은 약 7월 29일 전후",
      result: "배란·가임기 추정은 변동 가능",
      takeaway: "주기 계산은 참고용입니다. 임신 여부와 건강 판단은 검사와 전문가 상담이 필요합니다."
    };
  }

  return {
    title: "건강 지표 해석 예시",
    input: "검진 수치 1개가 경계 범위에 가까움",
    calculation: "단위, 검사일, 공복 여부, 관련 증상을 함께 확인",
    result: "추가 확인이 필요한 참고 신호",
    takeaway: "계산값 하나로 결론을 내리지 말고 관련 지표, 공식 자료, 상담 필요성을 함께 보세요."
  };
};
