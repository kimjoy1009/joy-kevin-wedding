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
    content: "바라만 봐도 떨리던 설렘은\n어느새 포근한 사랑이 되어\n저희 두 사람 평생의 손을 잡으려 합니다.\n\n함께 더 오래 그리고 멀리\n가고자 하는 그 첫길에\n부디 귀한 걸음 하시어\n축복해 주시면 감사하겠습니다."
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
