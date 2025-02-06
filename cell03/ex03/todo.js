// ฟังก์ชันบันทึกข้อมูลลงคุกกี้
function saveTodos() {
    let todos = [];
    document.querySelectorAll("#ft_list div").forEach(todo => {
        todos.push(todo.innerText);
    });
    document.cookie = `todos=${JSON.stringify(todos)}; path=/;`;
}

// ฟังก์ชันโหลดข้อมูลจากคุกกี้
function loadTodos() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [name, value] = cookie.split("=");
        if (name === "todos") {
            let todos = JSON.parse(value);
            todos.reverse().forEach(todo => addTodo(todo));
        }
    }
}

// ฟังก์ชันสร้างรายการ TO DO
function addTodo(text) {
    if (!text) return;
    
    let todo = document.createElement("div");
    todo.innerText = text;
    todo.classList.add("todo");
    
    // ลบ TO DO เมื่อกด และขอคอนเฟิร์ม
    todo.addEventListener("click", () => {
        if (confirm("Do you want to remove this task?")) {
            todo.remove();
            saveTodos();
        }
    });

    let list = document.getElementById("ft_list");
    list.insertBefore(todo, list.firstChild);

    saveTodos();
}

// เมื่อกดปุ่ม "New" ให้เพิ่ม TO DO
document.getElementById("newTodoBtn").addEventListener("click", () => {
    let task = prompt("Enter a new TO DO:");
    if (task) addTodo(task);
});

// โหลด TO DO เมื่อเปิดหน้าเว็บ
window.onload = loadTodos;
