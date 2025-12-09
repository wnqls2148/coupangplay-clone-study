# 🎬 쿠팡플레이 클론 - 프론트엔드 학습 프로젝트

> 이 프로젝트는 프론트엔드 개발을 처음 배우면서 쿠팡플레이 웹사이트를 참고하여 클론 코딩한 학습 프로젝트입니다.
> AI의 도움을 받아 코드를 구현하고, 주석을 통해 각 코드의 의미를 공부했습니다.

## 📚 프로젝트 소개

쿠팡플레이의 주요 UI/UX를 참고하여 만든 OTT 플랫폼 클론 웹사이트입니다.  
프론트엔드 기초를 익히기 위해 HTML, CSS, JavaScript를 활용하여 구현했습니다.

## 🛠 사용 기술

- **HTML5**: 웹 페이지의 구조와 콘텐츠
- **CSS3**: 스타일링 및 레이아웃
- **JavaScript**: 인터랙티브한 기능 구현

## 📂 프로젝트 구조

```
coupangplay.front/
├── index.html        # 메인 홈 페이지
├── catagory.html     # 카테고리 페이지
├── exhibition.html   # 기획전 페이지
├── movie.html        # 영화 상세 페이지
├── search.html       # 검색 페이지
├── wishlist.html     # 찜 목록 페이지
├── mypage.html       # 마이페이지
├── login.html        # 로그인 페이지
├── signup.html       # 회원가입 페이지
├── style.css         # 전체 스타일시트
├── movie.js          # JavaScript 기능 구현
└── README.md         # 프로젝트 설명서
```

## ✨ 주요 기능

### 1. 메인 페이지 (`index.html`)
- 헤더 네비게이션 바 (홈, 카테고리, MY, 로그인)
- 메인 배너 슬라이드
- 영화 추천 섹션 (가로 스크롤)
- "당신을 위한 추천", "오늘의 이슈작" 등 다양한 콘텐츠 섹션

### 2. 영화 상세 페이지 (`movie.html`)
- 영화 포스터 및 상세 정보
- 재생 버튼, 찜하기 버튼, 공유 버튼
- JavaScript를 활용한 버튼 클릭 이벤트

### 3. 회원 관리
- 로그인 페이지 (`login.html`)
- 회원가입 페이지 (`signup.html`)

### 4. 콘텐츠 관리
- 카테고리별 분류 페이지 (`catagory.html`)
- 기획전 페이지 (`exhibition.html`)
- 검색 페이지 (`search.html`)
- 찜 목록 페이지 (`wishlist.html`)
- 마이페이지 (`mypge.html`)

## 💡 학습 내용

### HTML
- **시맨틱 태그**: `<header>`, `<nav>`, `<section>` 등을 사용하여 의미있는 구조 작성
- **메타 태그**: `charset`, `lang` 등 기본 메타데이터 설정
- **폼 요소**: 로그인/회원가입 폼 구현
- **링크 연결**: 외부 CSS/JS 파일 연결 방법

### CSS
- **Flexbox**: 수평 레이아웃 구성 (`display: flex`, `justify-content`, `gap`)
- **스크롤바**: `overflow-x: scroll`을 활용한 가로 슬라이드
- **색상/스타일링**: OTT 플랫폼의 다크 테마 구현 (`background-color: #141414`)
- **박스 모델**: `padding`, `margin`, `border-radius` 등의 활용
- **선택자**: 클래스 선택자와 태그 선택자 활용

### JavaScript
- **DOM 조작**: `document.querySelector()`로 요소 선택
- **이벤트 리스너**: `addEventListener()`를 통한 클릭 이벤트 처리
- **사용자 알림**: `alert()`를 활용한 피드백

## 🎯 주요 코드 설명

### 1. Flexbox 레이아웃
```css
/* 영화 카드를 가로로 나열 */
.movie-list {
  display: flex;           /* Flexbox 사용 */
  gap: 15px;               /* 카드 간격 15px */
  overflow-x: scroll;      /* 가로 스크롤 가능 */
}
```

### 2. 카드 디자인
```css
.movie-card {
  width: 180px;            /* 카드 가로 크기 */
  height: 270px;           /* 카드 세로 크기 */
  background-color: #222;  /* 어두운 배경색 */
  flex: 0 0 auto;          /* 고정 크기 유지 */
  border-radius: 10px;     /* 둥근 모서리 */
}
```

### 3. 버튼 클릭 이벤트
```javascript
// 재생 버튼 클릭 시 알림 표시
document.querySelector('.play').addEventListener('click', () => {
  alert('영화 재생을 시작합니다!');
});
```

## 🚀 실행 방법

1. 프로젝트 클론
```bash
git clone https://github.com/yourusername/coupangplay-clone-study.git
```

2. 폴더 열기
```bash
cd coupangplay-clone-study
```

3. `index.html` 파일을 브라우저에서 열기
   - 더블클릭으로 실행
   - 또는 Live Server 등의 도구 사용

## 📖 학습 과정

1. **HTML 구조 설계**: 쿠팡플레이의 레이아웃을 분석하고 시맨틱 태그로 구조화
2. **CSS 스타일링**: Flexbox를 활용한 반응형 레이아웃 구현
3. **JavaScript 기능**: 간단한 인터랙션 추가
4. **주석 작성**: 각 코드의 의미를 주석으로 상세히 기록하며 학습

## 🎓 배운 점

- **Flexbox의 강력함**: `display: flex`만으로도 복잡한 레이아웃을 쉽게 구현 가능
- **시맨틱 HTML의 중요성**: 태그 이름만으로도 코드의 의미를 파악할 수 있음
- **이벤트 리스너 활용**: JavaScript로 사용자 인터랙션을 쉽게 처리할 수 있음
- **주석의 중요성**: 코드를 작성할 때 주석을 달면 나중에 다시 보기 편함

## 🔜 향후 개선 사항

- [ ] 실제 영화 데이터 API 연동
- [ ] 로그인/회원가입 백엔드 구현
- [ ] 반응형 디자인 추가 (모바일 대응)
- [ ] 실제 동작하는 슬라이드 애니메이션
- [ ] 검색 기능 구현

## 📝 라이센스

이 프로젝트는 학습 목적으로 만들어졌습니다.

## 🙏 감사의 말

프론트엔드를 처음 배우면서 많은 도움을 받았습니다.  
앞으로도 꾸준히 학습하며 더 나은 코드를 작성하도록 노력하겠습니다!

---

**Made with ❤️ by [Your Name]**  
*Frontend Learning Journey - 2025*
