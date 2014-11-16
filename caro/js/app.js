function start() {
  var row = document.getElementById('row');
  var col = document.getElementById('col');
  var div = document.getElementById('cr_table');
  
    // Create table.
  var table = document.createElement('table');
  table.setAttribute("border","1px");
  table.setAttribute("style", "border-collapse: collapse");
  //table.setAttribute("align", "center");
  //var btn = document.createElement("BUTTON");
  //btn.type = "button";
  
  //redraw the table upon clicking create table
  if(div.hasChildNodes){
    div.removeChild(div.childNodes[0]);
  }
  
  // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
  // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
  //message.textContent = translate('message');
  var row1;
  var row1col1;
  var ops = 0;
 
  for(var i = 0; i < row.value; i++){
    // Insert New Row for table at index 'i'.
      row1 = table.insertRow(i);
    for(var j = 0; j < col.value; j++){
      // Insert New Column for Row1 at index '0'.
      row1col1 = row1.insertCell(j);
      row1col1.setAttribute("width", "20px");
      row1col1.setAttribute("height", "20px");
      row1col1.setAttribute("align", "center");
      row1col1.onclick = function () {
          //table.rows[i].cols[j].innerHTML = "X";
          alert(i);
      };
    }
  }
    // Append Table into div.
    //var div = document.getElementById('cr_table');
    div.appendChild(table);
}

//function clickBox(var rowcol){
//  rowcol.innerHTML = "X";
//  alert('pop');
//}
