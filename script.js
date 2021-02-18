function addRow() {
    let localData = localStorage.getItem("todos");
    let todos = localData ? JSON.parse(localData) : [];
    let table = document.getElementById("table");

    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    let cell = row.insertCell(0);

    cell.innerHTML = document.getElementById("textfield").value;

    todos.push(document.getElementById("textfield").value);
    let cell1 = row.insertCell(1);
    let element1 = document.createElement("input");
    element1.type = "checkbox";
    cell1.append(element1);

    localStorage.setItem("todos", JSON.stringify(todos));
    dispatchEvent(new Event('load'));

}

function deleteCheckedTodos() {
    let localData = localStorage.getItem("todos");
    let todos = localData ? JSON.parse(localData) : [];

    let checkedBoxes = document.querySelectorAll(
        'input:checked');

    checkedBoxes.forEach(i => {
        let nm = i.getAttribute("class");
        let items = document.getElementsByClassName(nm);
 

        let index = todos.indexOf(nm);
        if (index !== -1) {
            todos.splice(index, 1);
            
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
    dispatchEvent(new Event('load'));
}

window.onload = function () {

    let localData = localStorage.getItem("todos");
    let todos = localData ? JSON.parse(localData) : [];
    let table = document.getElementById("table");
    let rowCount = table.rows.length;
    for (let x = rowCount - 1; x > 0; x--) {
        table.deleteRow(x);
    }

    todos.forEach(function f(currentValue) {
        let rowCount = table.rows.length;

        let row = table.insertRow(rowCount);
        row.setAttribute('class', currentValue);

        let cell3 = row.insertCell(0);
        cell3.innerHTML = currentValue;

        let cell4 = row.insertCell(1);
        let element4 = document.createElement("input");
        element4.type = "checkbox";
        element4.setAttribute('class', currentValue);
        cell4.append(element4)
    })


    document.getElementById("button").onclick = addRow;
    document.getElementById("delete-button").onclick = deleteCheckedTodos;
}

