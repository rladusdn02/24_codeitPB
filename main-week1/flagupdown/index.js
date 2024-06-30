const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  const upElement = document.querySelector('.up');
  if (upElement) {
    upElement.classList.remove('up');
  }
}

// 1. flagUp 함수를 완성해 주세요
function flagUp(event) {
  if (event.button === 0) {  // 왼쪽 버튼 클릭
    flagBlue.classList.add('up');
  } else if (event.button === 2) {  // 오른쪽 버튼 클릭
    flagWhite.classList.add('up');
  }

  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

// 2. 마우스 오른쪽 버튼 클릭 시 나타나는 메뉴 창을 막아주세요
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);
