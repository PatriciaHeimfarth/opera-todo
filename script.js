function addRow() {

    var table = document.getElementById("table");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell = row.insertCell(0);
    cell.innerHTML = 'ola';

    var cell1 = row.insertCell(1);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    cell1.append(element1)
 
}

window.onload = function () {
    document.getElementById("button").onclick = addRow;
}

