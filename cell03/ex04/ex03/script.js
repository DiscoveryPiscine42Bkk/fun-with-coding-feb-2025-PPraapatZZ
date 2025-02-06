$(document).ready(function() {
    function saveTodos() {
        let todos = [];
        $("#ft_list div").each(function() {
            todos.push($(this).text());
        });
        document.cookie = `todos=${JSON.stringify(todos)}; path=/;`;
    }

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

    function addTodo(text) {
        if (!text) return;

        let todo = $("<div></div>").text(text).addClass("todo");

        todo.click(function() {
            if (confirm("Do you want to remove this task?")) {
                $(this).remove();
                saveTodos();
            }
        });

        $("#ft_list").prepend(todo);
        saveTodos();
    }

    $("#newTodoBtn").click(function() {
        let task = prompt("Enter a new TO DO:");
        if (task) addTodo(task);
    });

    loadTodos();
});
