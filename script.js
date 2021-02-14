function addRow() {

    var table = document.getElementById("table");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell = row.insertCell(0);
    
    cell.innerHTML = document.getElementById("textfield").value;

    var cell1 = row.insertCell(1);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    cell1.append(element1)

}

window.onload = function () {
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell3 = row.insertCell(0);
     
    cell3.innerHTML = localStorage.getItem("lastname");
   

    var cell4 = row.insertCell(1);
    var element4 = document.createElement("input");
    element4.type = "checkbox";
    cell4.append(element4)
    document.getElementById("button").onclick = addRow;
}

