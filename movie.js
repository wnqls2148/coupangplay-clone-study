// movie.js

// 재생 버튼 누르면 알림
document.querySelector('.play').addEventListener('click', () => {
  alert('영화 재생을 시작합니다!');
});

// 찜하기 버튼
document.querySelector('button:nth-of-type(2)').addEventListener('click', () => {
  alert('찜 목록에 추가되었습니다!');
});

// 공유 버튼
document.querySelector('button:nth-of-type(3)').addEventListener('click', () => {
  alert('링크가 복사되었습니다!');
});