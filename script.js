// 할 일 추가 함수
function addTodo() {
    const todoText = document.getElementById('newTodo').value;
    const selectedDay = document.getElementById('daySelect').value;

    if (todoText.trim() === "") return;

    const table = document.getElementById('todoList');

    // 첫 번째 빈 셀에 할 일 추가
    let rowAdded = false;
    for (let i = 0; i < table.rows.length; i++) {
        const cell = table.rows[i].cells[selectedDay];
        if (cell.innerHTML.trim() === "") {
            cell.innerHTML = `
                ${todoText} <span class="status" onclick="toggleStatus(this)">O</span>
                <button class="delete-btn" onclick="deleteTodoItem(this)">삭제</button>
            `;
            rowAdded = true;
            break;
        }
    }

    // 빈 칸이 없으면 새 행 추가
    if (!rowAdded) {
        const newRow = table.insertRow();
        for (let i = 0; i < 8; i++) {
            newRow.insertCell(i);
        }
        newRow.cells[selectedDay].innerHTML = `
            ${todoText} <span class="status" onclick="toggleStatus(this)">O</span>
            <button class="delete-btn" onclick="deleteTodoItem(this)">삭제</button>
        `;
    }

    // 입력 필드 초기화
    document.getElementById('newTodo').value = "";
}

// 상태 변경 함수
function toggleStatus(element) {
    const status = element.textContent;

    if (status === 'O') {
        element.textContent = '△';
        element.className = 'status yellow';
    } else if (status === '△') {
        element.textContent = 'X';
        element.className = 'status red';
    } else {
        element.textContent = 'O';
        element.className = 'status green';
    }
}

// 개별 할 일 삭제 함수
function deleteTodoItem(element) {
    const cell = element.parentElement;
    cell.innerHTML = ""; // 셀 내용만 삭제
}
