// showTitle 함수를 완성해 주세요
function showTitle(event) {
    if (event.target.dataset.title) {
        const titleElement = document.createElement('span');
        titleElement.className = 'title';
        titleElement.textContent = event.target.dataset.title;
        event.target.appendChild(titleElement);
    }
}

// removeTitle 함수를 완성해 주세요
function removeTitle(event) {
    if (event.target.dataset.title) {
        const titleElement = event.target.querySelector('.title');
        if (titleElement) {
            event.target.removeChild(titleElement);
        }
    }
}

// 이벤트 핸들러 등록하기
document.addEventListener('mouseover', showTitle);
document.addEventListener('mouseout', removeTitle);
