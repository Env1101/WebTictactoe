function start() {

  var row = document.getElementById('row');
  var col = document.getElementById('col');

  // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
  // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
  //message.textContent = translate('message');

  // Create table.
  var table = document.createElement('table');
  
  for(var i = 0; i < row.value; i++){
    for(var j = 0; j < col.value; j++){
    // Insert New Row for table at index '0'.
    var row1 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row1col1 = row1.insertCell(0);
    row1col1.innerHTML = row.value;
    // Insert New Column for Row1 at index '1'.
    var row1col2 = row1.insertCell(1);
    row1col2.innerHTML = col.value;
    // Insert New Column for Row1 at index '2'.
    var row1col3 = row1.insertCell(2);
    row1col3.innerHTML = 'Col3';
    }
  }
    // Append Table into div.
    var div = document.getElementById('cr_table');
    div.appendChild(table);
}

