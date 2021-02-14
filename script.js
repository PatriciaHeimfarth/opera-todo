function addRow() {
    var localData = localStorage.getItem("todos");
    var todos = localData ? JSON.parse(localData) : [];
    var table = document.getElementById("table");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell = row.insertCell(0);

    cell.innerHTML = document.getElementById("textfield").value;

    todos.push(document.getElementById("textfield").value);
    var cell1 = row.insertCell(1);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    cell1.append(element1);


    localStorage.setItem("todos", JSON.stringify(todos));


}

window.onload = function () {

    var localData = localStorage.getItem("todos");
    var todos = localData ? JSON.parse(localData) : [];

    todos.forEach(function f(currentValue) {
        let rowCount = table.rows.length;

        let row = table.insertRow(rowCount);

        let cell3 = row.insertCell(0);
        cell3.innerHTML = currentValue;

        let cell4 = row.insertCell(1);
        let element4 = document.createElement("input");
        element4.type = "checkbox";
        cell4.append(element4)
    })


    document.getElementById("button").onclick = addRow;
}

