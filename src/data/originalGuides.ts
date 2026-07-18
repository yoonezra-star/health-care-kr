export type OriginalGuide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  updatedAt: string;
  hero: string;
  keyPoints: string[];
  sections: {
    heading: string;
    body: string;
  }[];
  table: {
    title: string;
    columns: string[];
    rows: string[][];
  };
  checklistTitle: string;
  checklist: string[];
  relatedSlugs: string[];
  sources: {
    label: string;
    href: string;
    note: string;
  }[];
};

export const originalGuides: OriginalGuide[] = [
  {
    slug: "health-checkup-reading-order",
    title: "건강검진표 처음 볼 때 확인할 순서",
    description: "건강검진표를 받을 때 BMI, 허리둘레, 혈압, 혈당, 지질 수치를 어떤 순서로 보면 좋은지 정리했습니다.",
    category: "검진",
    updatedAt: "2026-07-18",
    hero:
      "검진표는 숫자가 많아서 어디부터 봐야 할지 막막합니다. 먼저 단위와 검사 조건을 확인하고, 서로 연결되는 지표를 묶으면 계산기 결과도 더 안전하게 해석할 수 있습니다.",
    keyPoints: [
      "단위, 검사일, 공복 여부를 먼저 확인합니다.",
      "체형, 혈압, 혈당, 지질 수치는 서로 연결해서 봅니다.",
      "재검·정밀검사·진료 상담 권고가 있으면 계산기보다 그 안내를 우선합니다."
    ],
    sections: [
      {
        heading: "1. 검사 조건부터 확인하기",
        body:
          "검진표의 수치는 검사 조건에 따라 달라질 수 있습니다. 공복혈당은 공복 여부가 중요하고, 혈압은 측정 자세와 안정 시간이 영향을 줍니다. 지질 수치도 검사 전 식사, 음주, 약물 복용 여부에 따라 해석이 달라질 수 있습니다."
      },
      {
        heading: "2. 관련 지표를 묶어서 보기",
        body:
          "BMI가 높거나 허리둘레가 크다면 혈압, 혈당, 중성지방을 함께 확인하는 편이 좋습니다. 반대로 체중은 정상 범위라도 허리둘레, 공복혈당, 혈압이 경계라면 생활습관 기록과 상담 필요성을 함께 생각해야 합니다."
      },
      {
        heading: "3. 다음 행동을 나누기",
        body:
          "정상 범위에 가까운 수치는 정기 기록으로 충분할 수 있습니다. 경계 수치는 같은 조건으로 반복 확인하고, 여러 지표가 동시에 벗어나거나 증상이 있다면 의료 전문가 상담을 우선해야 합니다."
      }
    ],
    table: {
      title: "검진표 빠른 확인표",
      columns: ["지표", "먼저 확인할 것", "함께 볼 계산기"],
      rows: [
        ["BMI·허리둘레", "체중 변화, 허리둘레, 활동량", "BMI, 복부비만, WHtR"],
        ["혈압", "측정 시간, 자세, 반복 평균", "혈압 위험도"],
        ["혈당", "공복 여부, A1C, 증상", "당뇨 위험도, HOMA-IR"],
        ["콜레스테롤", "LDL, HDL, 중성지방, 흡연 여부", "LDL·HDL 비율, 콜레스테롤 위험도"]
      ]
    },
    checklistTitle: "검진표를 볼 때 체크할 것",
    checklist: [
      "검진표에 적힌 단위를 계산기 입력 단위와 맞췄나요?",
      "검사 전 공복 여부와 복용 약물을 따로 적어 두었나요?",
      "한 지표만 보지 않고 관련 지표를 함께 비교했나요?",
      "재검 또는 진료 상담 권고가 있는지 확인했나요?"
    ],
    relatedSlugs: ["2026/03/blog-post.html", "2026/03/blog-post_26.html", "2026/03/9.html", "2026/03/10.html"],
    sources: [
      {
        label: "CDC Adult BMI Categories",
        href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html",
        note: "성인 BMI 범위와 해석 기준을 확인할 때 참고합니다."
      },
      {
        label: "CDC Diabetes Testing",
        href: "https://www.cdc.gov/diabetes/diabetes-testing/index.html",
        note: "공복혈당과 A1C 검사 해석 범위를 확인할 때 참고합니다."
      },
      {
        label: "CDC Cholesterol",
        href: "https://www.cdc.gov/cholesterol/about/index.html",
        note: "콜레스테롤과 중성지방을 함께 보는 이유를 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "fasting-glucose-a1c-difference",
    title: "공복혈당과 A1C 차이: 같은 혈당 지표라도 보는 기간이 다릅니다",
    description: "공복혈당과 A1C가 각각 무엇을 의미하고, 계산기 결과를 어떻게 함께 봐야 하는지 설명합니다.",
    category: "혈당",
    updatedAt: "2026-07-18",
    hero:
      "공복혈당은 특정 시점의 혈당이고, A1C는 최근 몇 달의 평균적인 혈당 흐름을 반영합니다. 둘 중 하나만으로 결론을 내리기보다 검사 조건과 반복 결과를 함께 봐야 합니다.",
    keyPoints: [
      "공복혈당은 금식 후 한 시점의 혈당입니다.",
      "A1C는 최근 2~3개월 평균 혈당 흐름을 반영합니다.",
      "진단과 치료 판단은 반복 검사와 전문가 상담이 필요합니다."
    ],
    sections: [
      {
        heading: "1. 공복혈당은 검사 조건의 영향을 많이 받습니다",
        body:
          "공복혈당은 보통 밤새 금식한 뒤 측정한 혈당입니다. 전날 식사, 음주, 수면, 감염, 스트레스, 약물 복용이 결과에 영향을 줄 수 있으므로 공복 여부와 검사 시간을 함께 기록하는 것이 좋습니다."
      },
      {
        heading: "2. A1C는 더 긴 흐름을 봅니다",
        body:
          "A1C는 최근 2~3개월 평균 혈당 상태를 보여주는 검사입니다. 하루 혈당이 일시적으로 흔들렸는지, 전반적인 혈당 관리 흐름이 어떤지 나누어 볼 때 공복혈당과 함께 참고합니다."
      },
      {
        heading: "3. 계산기는 질문을 정리하는 도구입니다",
        body:
          "혈당 계산기는 수치를 정리하고 검진표를 읽는 데 도움을 줍니다. 하지만 당뇨병 여부, 약물 복용, 치료 목표는 개인 상태에 따라 달라지므로 의료 전문가 상담이 필요합니다."
      }
    ],
    table: {
      title: "공복혈당과 A1C 비교",
      columns: ["항목", "보는 기간", "확인할 점"],
      rows: [
        ["공복혈당", "검사 당일 한 시점", "공복 여부, 전날 식사, 약물, 스트레스"],
        ["A1C", "최근 2~3개월 평균 흐름", "빈혈 등 검사에 영향을 줄 수 있는 상태"],
        ["자가 혈당", "측정한 순간", "식후 시간, 측정기 상태, 손 씻기 여부"]
      ]
    },
    checklistTitle: "혈당 결과를 다시 볼 때",
    checklist: [
      "공복인지 식후인지 구분했나요?",
      "mg/dL 단위인지 다른 단위인지 확인했나요?",
      "A1C 결과가 있다면 함께 비교했나요?",
      "증상이나 약물 이슈가 있다면 상담을 우선했나요?"
    ],
    relatedSlugs: ["2026/03/10.html", "2026/04/blog-post_29.html", "2026/04/blog-post_26.html"],
    sources: [
      {
        label: "CDC Diabetes Testing",
        href: "https://www.cdc.gov/diabetes/diabetes-testing/index.html",
        note: "A1C와 공복혈당 검사 범위를 확인할 때 참고합니다."
      },
      {
        label: "NIDDK A1C Test",
        href: "https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test",
        note: "A1C 검사의 의미와 활용을 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "ldl-hdl-triglyceride-guide",
    title: "LDL·HDL·중성지방을 같이 봐야 하는 이유",
    description: "콜레스테롤 계산기 결과를 LDL, HDL, 중성지방, 혈압, 흡연 여부와 함께 읽는 방법입니다.",
    category: "지질",
    updatedAt: "2026-07-18",
    hero:
      "콜레스테롤은 숫자 하나로 끝나지 않습니다. LDL, HDL, 중성지방, 총콜레스테롤을 함께 보고 혈압, 혈당, 흡연, 가족력 같은 위험 요인을 같이 확인해야 합니다.",
    keyPoints: [
      "LDL, HDL, 중성지방은 역할이 다릅니다.",
      "비율보다 절대값과 전체 위험 요인을 함께 봐야 합니다.",
      "약물 여부는 계산기가 아니라 의료 전문가와 결정합니다."
    ],
    sections: [
      {
        heading: "1. LDL은 중요한 지표지만 단독 결론은 아닙니다",
        body:
          "LDL은 심혈관 위험 평가에서 중요하게 다루어지는 지표입니다. 하지만 목표 수치와 관리 방식은 나이, 질환, 흡연, 혈압, 당뇨 여부에 따라 달라질 수 있습니다."
      },
      {
        heading: "2. HDL은 보호 요인처럼 보이지만 모든 위험을 지우지는 않습니다",
        body:
          "HDL은 흔히 좋은 콜레스테롤로 설명되지만, HDL이 높다고 LDL이나 중성지방 관리가 필요 없다는 뜻은 아닙니다. 지질 수치는 전체 패턴으로 읽어야 합니다."
      },
      {
        heading: "3. 중성지방은 식사와 대사 상태와도 연결됩니다",
        body:
          "중성지방은 음주, 당류 섭취, 체중 변화, 혈당 상태와 연결될 수 있습니다. 경계 또는 높은 결과가 반복되면 식사 기록과 검진 상담을 함께 고려하세요."
      }
    ],
    table: {
      title: "지질 수치 역할 비교",
      columns: ["지표", "주로 보는 것", "함께 확인할 것"],
      rows: [
        ["LDL", "심혈관 위험과 관련된 주요 지표", "혈압, 혈당, 흡연, 가족력"],
        ["HDL", "지질 대사와 관련된 보조 지표", "LDL 절대값, 운동, 금연"],
        ["중성지방", "대사 상태와 식사 패턴", "당류, 음주, 체중, 혈당"],
        ["총콜레스테롤", "전체 콜레스테롤량", "LDL, HDL, 중성지방 세부값"]
      ]
    },
    checklistTitle: "지질 결과 해석 체크리스트",
    checklist: [
      "LDL 절대값과 비율을 구분했나요?",
      "중성지방과 혈당, 체중 변화를 함께 봤나요?",
      "흡연 여부와 가족력을 상담 때 말할 수 있게 정리했나요?",
      "약물 판단을 계산기 결과만으로 하지 않았나요?"
    ],
    relatedSlugs: ["2026/04/ldlhdl.html", "2026/04/hdl.html", "2026/04/blog-post_25.html", "2026/04/blog-post_14.html"],
    sources: [
      {
        label: "CDC LDL and HDL Cholesterol and Triglycerides",
        href: "https://www.cdc.gov/cholesterol/about/ldl-and-hdl-cholesterol-and-triglycerides.html",
        note: "LDL, HDL, 중성지방의 역할을 확인할 때 참고합니다."
      },
      {
        label: "CDC About Cholesterol",
        href: "https://www.cdc.gov/cholesterol/about/index.html",
        note: "콜레스테롤 검사의 기본 개념을 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "normal-bmi-abdominal-obesity",
    title: "BMI는 정상인데 복부비만일 수 있는 경우",
    description: "BMI가 정상 범위라도 허리둘레와 허리-키 비율을 함께 확인해야 하는 이유를 설명합니다.",
    category: "체형",
    updatedAt: "2026-07-18",
    hero:
      "BMI는 키와 체중만 보기 때문에 지방이 어디에 분포하는지 알려주지 않습니다. 그래서 BMI가 정상이어도 허리둘레가 높거나 허리-키 비율이 경계라면 복부 지표를 따로 보는 것이 좋습니다.",
    keyPoints: [
      "BMI는 체지방 분포를 직접 보여주지 않습니다.",
      "허리둘레와 WHtR은 복부 지방 점검에 도움이 됩니다.",
      "복부 지표는 혈압, 혈당, 지질 수치와 함께 보면 좋습니다."
    ],
    sections: [
      {
        heading: "1. BMI가 놓치는 부분",
        body:
          "BMI는 체중이 키에 비해 어느 정도인지 보여줍니다. 하지만 같은 BMI라도 근육량, 체지방률, 복부 지방 분포가 다를 수 있어 실제 대사 건강과 차이가 날 수 있습니다."
      },
      {
        heading: "2. 허리둘레를 함께 보는 이유",
        body:
          "허리둘레와 허리-키 비율은 복부 지방 부담을 점검할 때 참고할 수 있습니다. 측정 위치와 호흡 상태에 따라 값이 달라지므로 같은 방식으로 반복 측정하는 것이 중요합니다."
      },
      {
        heading: "3. 체형 수치와 검진 수치 연결",
        body:
          "복부 지표가 경계라면 혈압, 혈당, 콜레스테롤, 중성지방을 함께 확인하세요. 여러 위험 요인이 겹치면 온라인 계산보다 검진 상담이 더 중요해집니다."
      }
    ],
    table: {
      title: "BMI와 복부 지표 비교",
      columns: ["지표", "장점", "한계"],
      rows: [
        ["BMI", "빠르고 널리 쓰임", "체지방 분포와 근육량을 직접 반영하지 않음"],
        ["허리둘레", "복부 지방 점검에 유용", "측정 위치와 자세에 민감함"],
        ["WHtR", "키 대비 허리둘레를 비교", "진단 기준이 아니라 참고 지표임"]
      ]
    },
    checklistTitle: "복부 지표를 기록할 때",
    checklist: [
      "허리둘레 측정 위치를 매번 같게 했나요?",
      "체중과 허리둘레를 같은 날 기록했나요?",
      "혈압, 혈당, 지질 수치도 함께 확인했나요?",
      "급격한 변화나 증상이 있으면 상담을 고려했나요?"
    ],
    relatedSlugs: ["2026/03/blog-post.html", "2026/03/blog-post_26.html", "2026/03/whtr.html", "2026/03/whr.html"],
    sources: [
      {
        label: "CDC Adult BMI Calculator",
        href: "https://www.cdc.gov/bmi/adult-calculator/index.html",
        note: "성인 BMI의 기본 범위와 해석을 확인할 때 참고합니다."
      },
      {
        label: "CDC Adult BMI Categories",
        href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html",
        note: "BMI 분류 범위를 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "home-blood-pressure-measurement",
    title: "집에서 혈압 잴 때 흔한 오류와 기록법",
    description: "혈압 계산기 결과를 더 정확히 보려면 측정 자세, 시간, 반복 기록을 어떻게 맞춰야 하는지 정리했습니다.",
    category: "혈압",
    updatedAt: "2026-07-18",
    hero:
      "혈압은 하루에도 여러 번 변합니다. 집에서 잰 혈압을 계산기에 넣기 전에는 자세, 안정 시간, 커프 위치, 측정 시간을 최대한 일정하게 맞추는 것이 중요합니다.",
    keyPoints: [
      "측정 전에는 잠시 안정하고 같은 자세를 유지합니다.",
      "한 번의 수치보다 반복 측정과 평균을 봅니다.",
      "증상이나 매우 높은 수치는 계산보다 진료 판단이 우선입니다."
    ],
    sections: [
      {
        heading: "1. 혈압은 상황에 민감합니다",
        body:
          "운동 직후, 카페인 섭취 후, 스트레스가 큰 상황에서는 혈압이 평소보다 높게 나올 수 있습니다. 측정 전에는 안정 시간을 갖고 팔과 커프 위치를 일정하게 맞추세요."
      },
      {
        heading: "2. 같은 조건의 반복값이 중요합니다",
        body:
          "혈압 계산기에 넣는 값은 한 번의 우연한 수치보다 같은 조건에서 반복 측정한 평균이 더 유용합니다. 날짜, 시간, 자세, 특이사항을 함께 기록하면 상담 때도 도움이 됩니다."
      },
      {
        heading: "3. 위험 신호는 계산기로 미루지 않습니다",
        body:
          "흉통, 호흡곤란, 시야 이상, 갑작스러운 마비, 의식 저하가 있으면 온라인 계산보다 응급 진료가 우선입니다. 약물 조정도 반드시 의료 전문가와 상의해야 합니다."
      }
    ],
    table: {
      title: "혈압 측정 전 점검표",
      columns: ["항목", "권장 방식", "흔한 오류"],
      rows: [
        ["자세", "앉아서 안정 후 측정", "운동 직후 바로 측정"],
        ["팔 위치", "심장 높이에 맞춤", "팔을 아래로 내린 채 측정"],
        ["시간", "가능하면 같은 시간대", "매번 다른 조건의 수치 비교"],
        ["기록", "수축기·이완기·맥박 함께 기록", "높은 값 하나만 따로 기억"]
      ]
    },
    checklistTitle: "혈압 기록에 남길 것",
    checklist: [
      "측정 시간과 자세를 적었나요?",
      "카페인, 운동, 스트레스 같은 영향을 적었나요?",
      "반복 측정 평균을 확인했나요?",
      "증상이 있다면 계산기보다 상담을 우선했나요?"
    ],
    relatedSlugs: ["2026/03/9.html", "2026/03/8.html", "2026/04/blog-post_23.html"],
    sources: [
      {
        label: "NHLBI High Blood Pressure",
        href: "https://www.nhlbi.nih.gov/health/high-blood-pressure",
        note: "혈압 수치와 반복 측정의 의미를 확인할 때 참고합니다."
      },
      {
        label: "CDC High Blood Pressure",
        href: "https://www.cdc.gov/high-blood-pressure/index.html",
        note: "고혈압 관련 공공 정보를 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "bmr-tdee-calorie-plan",
    title: "BMR·TDEE로 식단 계획을 시작할 때 피해야 할 실수",
    description: "기초대사량과 활동량 계산 결과를 감량·증량 계획에 연결할 때 주의할 점을 설명합니다.",
    category: "영양",
    updatedAt: "2026-07-18",
    hero:
      "BMR과 TDEE는 식단 계획의 출발점이지만, 계산값이 실제 몸의 반응을 보장하지는 않습니다. 활동계수 선택과 기록 습관이 결과 해석의 핵심입니다.",
    keyPoints: [
      "BMR은 최소 필요량이 아니라 추정 기준입니다.",
      "TDEE는 활동계수 선택에 따라 크게 달라집니다.",
      "1~2주 기록을 보고 작게 조정하는 방식이 안전합니다."
    ],
    sections: [
      {
        heading: "1. BMR을 식단 하한선으로 단순 적용하지 않기",
        body:
          "기초대사량은 휴식 상태에서 필요한 에너지를 추정한 값입니다. 이보다 무조건 적게 먹어야 한다는 뜻이 아니며, 과도한 제한은 피로와 지속 실패로 이어질 수 있습니다."
      },
      {
        heading: "2. 활동계수는 가장 흔한 오차 지점입니다",
        body:
          "TDEE는 BMR에 활동계수를 곱해 구합니다. 하지만 운동 시간, 직업 활동, 걷기, 회복 상태를 정확히 반영하기 어렵기 때문에 계산 결과는 대략적인 기준선으로 봐야 합니다."
      },
      {
        heading: "3. 계획은 기록으로 보정합니다",
        body:
          "계산값을 기준으로 식사와 운동을 시작한 뒤, 체중·허리둘레·컨디션 변화를 1~2주 기록하세요. 실제 변화가 기대와 다르면 섭취량이나 활동량을 조금씩 조정합니다."
      }
    ],
    table: {
      title: "BMR과 TDEE 비교",
      columns: ["항목", "의미", "주의점"],
      rows: [
        ["BMR", "휴식 상태 에너지 추정", "식단 하한선으로 단순 사용하지 않기"],
        ["TDEE", "활동량 포함 소비량 추정", "활동계수 선택이 결과를 크게 바꿈"],
        ["칼로리 목표", "감량·유지·증량 기준", "실제 기록으로 재조정 필요"]
      ]
    },
    checklistTitle: "식단 계획 전 확인",
    checklist: [
      "감량, 유지, 증량 중 목표를 정했나요?",
      "활동계수를 과대평가하지 않았나요?",
      "단백질, 수면, 운동 회복도 함께 기록하나요?",
      "피로와 어지럼이 있으면 무리한 제한을 멈출 준비가 되어 있나요?"
    ],
    relatedSlugs: ["2026/03/2-bmr-1.html", "2026/05/blog-post_02.html", "2026/05/blog-post_04.html", "2026/03/blog-post_31.html"],
    sources: [
      {
        label: "CDC Physical Activity for Adults",
        href: "https://www.cdc.gov/physical-activity-basics/adding-adults/index.html",
        note: "성인의 신체활동 권장량과 활동 기록을 확인할 때 참고합니다."
      },
      {
        label: "MedlinePlus Nutrition",
        href: "https://medlineplus.gov/nutrition.html",
        note: "영양과 식사 균형의 기본 개념을 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "protein-intake-checklist",
    title: "단백질 권장량 계산 전 확인할 것",
    description: "단백질 계산 결과를 체중, 총열량, 운동량, 질환 여부와 함께 해석하는 방법입니다.",
    category: "영양",
    updatedAt: "2026-07-18",
    hero:
      "단백질은 중요하지만 많을수록 항상 좋은 것은 아닙니다. 단백질 계산기는 체중과 목표를 정리하는 도구이며, 총열량과 식사 구성, 질환 여부를 함께 확인해야 합니다.",
    keyPoints: [
      "단백질은 총열량 안에서 봐야 합니다.",
      "운동량과 나이에 따라 필요량이 달라질 수 있습니다.",
      "신장질환 등 질환이 있으면 전문가 상담이 우선입니다."
    ],
    sections: [
      {
        heading: "1. 체중 기준과 열량 기준을 함께 보기",
        body:
          "단백질은 g/kg 기준으로 계산하기 쉽지만, 하루 총열량에서 차지하는 비율도 함께 봐야 합니다. 단백질만 높이고 탄수화물과 지방을 지나치게 줄이면 식단 균형이 흔들릴 수 있습니다."
      },
      {
        heading: "2. 운동 목표에 따라 해석 달라짐",
        body:
          "근력 운동, 감량, 체중 유지, 고령자의 근감소 예방 등 목적에 따라 단백질을 보는 관점이 달라질 수 있습니다. 계산 결과는 식사 패턴과 운동 회복 상태와 함께 확인하세요."
      },
      {
        heading: "3. 질환이 있으면 일반 기준을 그대로 쓰지 않기",
        body:
          "신장질환, 간질환, 당뇨, 임신·수유 등은 단백질 섭취 조정이 민감할 수 있습니다. 이런 상황에서는 온라인 계산보다 의료 전문가나 영양 전문가 상담이 우선입니다."
      }
    ],
    table: {
      title: "단백질 계산 전 확인표",
      columns: ["확인 항목", "왜 중요한가", "같이 볼 계산기"],
      rows: [
        ["체중", "g/kg 계산의 기준", "BMI, 적정 체중"],
        ["총열량", "단백질 비율 확인", "BMR, TDEE"],
        ["운동량", "회복과 근육 유지에 영향", "주간 운동량"],
        ["질환 여부", "일반 권장량과 달라질 수 있음", "건강검진 수치"]
      ]
    },
    checklistTitle: "단백질 결과 적용 전",
    checklist: [
      "총열량과 함께 계산했나요?",
      "식물성·동물성 단백질 식품을 다양하게 구성했나요?",
      "운동량과 회복 상태를 같이 기록하나요?",
      "질환이나 약물 이슈가 있으면 상담을 고려했나요?"
    ],
    relatedSlugs: ["2026/03/blog-post_31.html", "2026/03/2-bmr-1.html", "2026/05/blog-post_02.html"],
    sources: [
      {
        label: "MedlinePlus Dietary Proteins",
        href: "https://medlineplus.gov/dietaryproteins.html",
        note: "단백질의 역할과 식품 공급원을 확인할 때 참고합니다."
      },
      {
        label: "MedlinePlus Nutrition",
        href: "https://medlineplus.gov/nutrition.html",
        note: "영양 균형과 건강한 식사의 기본 원칙을 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "sodium-sugar-caffeine-label",
    title: "나트륨·당류·카페인 라벨을 계산기에 넣기 전 확인할 것",
    description: "식품 라벨의 1회 제공량, 총 섭취량, mg 단위를 확인하고 계산기에 적용하는 방법입니다.",
    category: "영양",
    updatedAt: "2026-07-18",
    hero:
      "나트륨, 당류, 카페인은 라벨을 잘못 읽으면 실제 섭취량과 계산 결과가 크게 달라집니다. 1회 제공량과 총 섭취량을 구분하는 것이 첫 단계입니다.",
    keyPoints: [
      "1회 제공량과 실제 먹은 양을 구분합니다.",
      "mg, g, ml 같은 단위를 계산기 입력값과 맞춥니다.",
      "하루 전체와 며칠 평균을 함께 봅니다."
    ],
    sections: [
      {
        heading: "1. 1회 제공량 함정",
        body:
          "음료나 간식은 한 포장 안에 여러 회 제공량이 들어 있을 수 있습니다. 라벨에 적힌 나트륨이나 당류가 1회 기준인지 전체 포장 기준인지 먼저 확인해야 합니다."
      },
      {
        heading: "2. 단위를 맞춰야 계산이 맞습니다",
        body:
          "나트륨과 카페인은 mg, 당류는 g로 표시되는 경우가 많습니다. 계산기에 입력하기 전 단위가 맞는지 확인하고, 여러 개를 먹었다면 수량을 곱해 총량을 구하세요."
      },
      {
        heading: "3. 하루 한 끼보다 전체 패턴 보기",
        body:
          "외식, 가공식품, 음료, 간식은 같은 날 겹치기 쉽습니다. 특정 식품 하나보다 하루 전체와 며칠 평균을 보면 조정할 지점이 더 분명해집니다."
      }
    ],
    table: {
      title: "라벨 읽기 빠른 표",
      columns: ["항목", "확인할 단위", "주의할 점"],
      rows: [
        ["나트륨", "mg", "소금량과 나트륨량은 같은 값이 아닙니다."],
        ["당류", "g", "음료와 간식의 총 섭취량을 합산합니다."],
        ["카페인", "mg", "커피, 에너지음료, 차를 함께 계산합니다."],
        ["수분", "ml", "음료 종류와 카페인 섭취를 함께 봅니다."]
      ]
    },
    checklistTitle: "라벨 입력 전 체크",
    checklist: [
      "1회 제공량인지 전체 포장 기준인지 확인했나요?",
      "실제로 먹은 개수와 양을 곱했나요?",
      "mg와 g 단위를 혼동하지 않았나요?",
      "혈압, 임신, 수면 문제 등 민감한 상황이 있나요?"
    ],
    relatedSlugs: ["2026/04/blog-post_13.html", "2026/04/blog-post_15.html", "2026/04/blog-post_24.html", "2026/03/6.html"],
    sources: [
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
        note: "식사와 영양 기준을 확인할 때 참고합니다."
      },
      {
        label: "MedlinePlus Nutrition",
        href: "https://medlineplus.gov/nutrition.html",
        note: "영양소와 건강한 식사 원칙을 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "pack-year-smoking-risk",
    title: "Pack-year 흡연력 계산 후 무엇을 봐야 할까",
    description: "Pack-year 계산 결과를 금연 기간, 나이, 검진 상담 필요성과 함께 읽는 방법입니다.",
    category: "생활습관",
    updatedAt: "2026-07-18",
    hero:
      "Pack-year는 누적 흡연 노출을 정리하는 지표입니다. 결과가 높거나 낮다는 숫자 자체보다 현재 흡연 여부, 금연 기간, 나이, 증상, 검진 상담 필요성을 함께 보는 것이 중요합니다.",
    keyPoints: [
      "Pack-year는 하루 갑 수와 흡연 기간을 곱합니다.",
      "폐암 검진 대상 판단에는 나이와 금연 기간도 중요합니다.",
      "금연은 언제 시작해도 건강 위험을 줄이는 방향입니다."
    ],
    sections: [
      {
        heading: "1. Pack-year 계산의 의미",
        body:
          "하루 한 갑을 20년 피웠다면 20 pack-year입니다. 하루 반 갑을 40년 피운 경우도 20 pack-year가 됩니다. 누적 노출을 간단히 정리하는 데 유용하지만 실제 위험을 전부 설명하지는 못합니다."
      },
      {
        heading: "2. 검진 기준은 여러 조건을 함께 봅니다",
        body:
          "폐암 검진 권고는 Pack-year뿐 아니라 나이와 현재 흡연 여부, 금연 후 기간을 함께 봅니다. 따라서 계산 결과가 경계라면 검진 상담에서 자신의 조건을 정리해 전달하는 것이 좋습니다."
      },
      {
        heading: "3. 금연 기간도 중요한 정보입니다",
        body:
          "금연 후 시간이 지나면 일부 암과 심혈관 위험이 낮아지는 방향으로 변합니다. 단, 과거 흡연력이 크거나 증상이 있다면 계산 결과와 별개로 전문가 상담을 고려해야 합니다."
      }
    ],
    table: {
      title: "Pack-year 계산 예시",
      columns: ["하루 흡연량", "기간", "Pack-year"],
      rows: [
        ["1갑", "20년", "20 pack-year"],
        ["0.5갑", "40년", "20 pack-year"],
        ["2갑", "10년", "20 pack-year"],
        ["1갑", "5년", "5 pack-year"]
      ]
    },
    checklistTitle: "흡연력 상담 전 정리",
    checklist: [
      "현재 흡연 중인지 금연 중인지 구분했나요?",
      "금연했다면 몇 년 전인지 적었나요?",
      "기침, 객혈, 호흡곤란, 체중 감소 같은 증상이 있나요?",
      "검진 대상 여부는 전문가와 확인할 준비가 되었나요?"
    ],
    relatedSlugs: ["2026/05/pack-year.html", "2026/05/blog-post_09.html", "2026/04/blog-post_23.html"],
    sources: [
      {
        label: "CDC Lung Cancer Screening",
        href: "https://www.cdc.gov/lung-cancer/screening/index.html",
        note: "Pack-year와 폐암 검진 권고 조건을 확인할 때 참고합니다."
      },
      {
        label: "CDC Lung Cancer Risk Factors",
        href: "https://www.cdc.gov/lung-cancer/risk-factors/index.html",
        note: "흡연과 폐암 위험 요인을 확인할 때 참고합니다."
      }
    ]
  },
  {
    slug: "sleep-exercise-record",
    title: "수면과 운동 기록을 따로 보지 말아야 하는 이유",
    description: "수면 시간, 운동량, 심박수, 피로감을 함께 기록하면 생활습관 계산 결과를 더 안전하게 해석할 수 있습니다.",
    category: "생활습관",
    updatedAt: "2026-07-18",
    hero:
      "수면과 운동은 서로 영향을 줍니다. 운동량이 늘면 수면의 질이 바뀔 수 있고, 잠이 부족하면 운동 회복과 식욕, 혈압에도 영향을 줄 수 있습니다.",
    keyPoints: [
      "수면 시간은 하루보다 주간 평균으로 봅니다.",
      "운동량은 강도와 회복 상태를 함께 기록합니다.",
      "심한 피로, 흉통, 호흡곤란은 계산보다 상담이 우선입니다."
    ],
    sections: [
      {
        heading: "1. 수면은 평균과 리듬이 중요합니다",
        body:
          "하루 8시간을 잤는지보다 일주일 평균, 기상 시간, 낮 졸림, 주말 보충 수면 여부가 더 중요할 수 있습니다. 수면 계산 결과는 생활 리듬을 확인하는 도구로 쓰세요."
      },
      {
        heading: "2. 운동은 시간만으로 설명되지 않습니다",
        body:
          "같은 30분 운동이라도 걷기, 달리기, 근력 운동은 강도와 회복 부담이 다릅니다. 심박수, 피로, 근육통, 수면 변화를 함께 보면 운동 계획을 조정하기 쉽습니다."
      },
      {
        heading: "3. 기록은 작은 조정으로 이어져야 합니다",
        body:
          "수면 부족이 반복되면 운동 강도를 낮추거나 회복일을 늘리는 것이 필요할 수 있습니다. 반대로 운동이 너무 적다면 짧은 걷기부터 늘리는 방식이 현실적입니다."
      }
    ],
    table: {
      title: "수면·운동 함께 기록표",
      columns: ["항목", "기록 예시", "해석 포인트"],
      rows: [
        ["수면 시간", "6시간 30분", "주간 평균과 낮 졸림 확인"],
        ["운동 시간", "빠른 걷기 30분", "강도와 회복 상태 확인"],
        ["심박수", "운동 중 평균 130", "목표 강도와 증상 여부 확인"],
        ["피로감", "아침 피로 높음", "수면과 운동 강도 조정"]
      ]
    },
    checklistTitle: "생활습관 기록 체크",
    checklist: [
      "수면과 운동을 같은 날짜에 함께 기록했나요?",
      "운동 강도와 회복 상태를 적었나요?",
      "카페인, 음주, 야근 같은 방해 요인을 기록했나요?",
      "증상이 있으면 운동 계산보다 상담을 우선했나요?"
    ],
    relatedSlugs: ["2026/03/7.html", "2026/05/blog-post_03.html", "2026/03/8.html", "2026/03/blog-post_24.html"],
    sources: [
      {
        label: "CDC Physical Activity Guidelines",
        href: "https://www.cdc.gov/physical-activity-basics/guidelines/index.html",
        note: "성인 신체활동 권장량과 근력 운동 기준을 확인할 때 참고합니다."
      },
      {
        label: "CDC Adding Physical Activity as an Adult",
        href: "https://www.cdc.gov/physical-activity-basics/adding-adults/index.html",
        note: "주간 활동량을 나누어 기록하는 방법을 확인할 때 참고합니다."
      }
    ]
  }
];

export const getOriginalGuide = (slug: string) =>
  originalGuides.find((guide) => guide.slug === slug);
