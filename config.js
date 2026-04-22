/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김지윤",
    nameEn: "Jiyoon Kim",
    father: "김수봉",
    mother: "고은주",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김조이",
    nameEn: "Joy Kim",
    father: "김영남",
    mother: "임명숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-30",
    time: "18:00",
    venue: "Burnaby Lake Pavilion",
    address: "6871 Roberts St, Burnaby, BC V5E 3N3",
    mapLinks: {
      google: "https://maps.app.goo.gl/kuD7m4y4uLNSnLHb8"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "초대합니다",
    content: "서로의 청춘을 함께한 두 사람이\n일곱 번의 사계절을 지나\n여덟 번째 여름을 앞두고\n부부의 연을 맺습니다.\n\n두 사람이 함께 내딛는 첫걸음에\n따뜻한 마음으로 함께해 주신다면\n그 마음 오래도록 간직하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "참석 여부",
    content: "식사 및 좌석 준비를 위해\n참석 여부 회신 부탁드립니다.\n\n보다 편안한 예식을 위해\n자녀 동반이 어려운 점 너그러운 양해 부탁드립니다.",
    buttonText: "참석 여부 전달하기",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSebirfW_9ynjpakWdeuW84zhXWiW8WD3N0qw7mM-qGUTDOf3w/viewform?usp=header"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍길동", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김영희", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김지윤 ♥ 김조이 결혼합니다",
    description: "2026년 8월 30일, 소중한 분들을 초대합니다."
  }
};
