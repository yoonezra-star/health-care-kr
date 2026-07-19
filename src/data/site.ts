export const SITE = {
  name: "Health Care",
  title: "Health Care 건강 계산기",
  url: "https://health-care-kr.pages.dev",
  description:
    "BMI, 기초대사량, 영양, 혈압, 수면 등 생활 건강 지표를 빠르게 확인하는 한국어 건강 계산기 허브입니다.",
  email: "replyleaders@naver.com",
  startedAt: "2026-03-12",
  lastPolicyUpdate: "2026-07-19"
};

export const navLinks = [
  { href: "/blood-pressure-note", label: "혈압노트" },
  { href: "/", label: "계산기" },
  { href: "/guides", label: "가이드" },
  { href: "/calculator-guide", label: "사용법" },
  { href: "/health-checkup-guide", label: "검진" },
  { href: "/health-metric-glossary", label: "용어" },
  { href: "/about", label: "소개" },
  { href: "/health-resources", label: "참고자료" },
  { href: "/privacy", label: "개인정보" },
  { href: "/disclaimer", label: "면책" },
  { href: "/contact", label: "문의" }
];

export const categories = [
  { key: "all", label: "전체", tone: "neutral" },
  { key: "body", label: "체형", tone: "teal" },
  { key: "nutrition", label: "영양", tone: "amber" },
  { key: "vitals", label: "혈압·혈당", tone: "coral" },
  { key: "lifestyle", label: "생활습관", tone: "violet" },
  { key: "health", label: "건강지표", tone: "slate" }
];

export const categoryLabel = (key: string) =>
  categories.find((category) => category.key === key)?.label ?? "건강지표";
