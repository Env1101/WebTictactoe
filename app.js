function start() {

  var row = document.getElementById('row');
  var col = document.getElementById('col');

  // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
  // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
  //message.textContent = translate('message');

  // Create table.
  var table = document.createElement('table');
  table.setAttribute("border","1px");
  var btn = document.createElement("BUTTON");
  btn.type = "button";
  var row1;
  var row1col1;
  for(var i = 0; i < row.value; i++){
    // Insert New Row for table at index 'i'.
      row1 = table.insertRow(i);
    for(var j = 0; j < col.value; j++){
      // Insert New Column for Row1 at index '0'.
      row1col1 = row1.insertCell(j);
      row1col1.setAttribute("width", "10px");
      row1col1.setAttribute("height", "10px");
      row1col1.onclick = function () {
            clickBox();
      };
    }
  }
    // Append Table into div.
    var div = document.getElementById('cr_table');
    div.appendChild(table);
}

function clickBox(){
  alert("pop");
}
