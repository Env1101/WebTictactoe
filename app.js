var matrix;
var rows;
var cols;

function hasWon(x, y) {
  var val = matrix[y][x];
  var sur = [[0,1,0],[0,-1,0],[1,1,0],[-1,-1,0],[1,0,0],[-1,0,0],[1,-1,0],[-1,1,0]];

  for (var i = 0; i < 8; i++) {
    var j = 1;
    while (checkBound(y+j*sur[i][0],x+j*sur[i][1]) && matrix[y+j*sur[i][0]][x+j*sur[i][1]] == val) {
      j++; sur[i][2]++;
    }
    if (i%2 == 1) {
      if (sur[i][2]+sur[i-1][2]+1 >= 5) {
        if (sur[i][2]+sur[i-1][2]+1==5 && 
            checkBound(y+(1+sur[i][2])*sur[i][0],x+(1+sur[i][2])*sur[i][1]) && 
            checkBound(y+(1+sur[i-1][2])*sur[i-1][0],x+(1+sur[i-1][2])*sur[i-1][1]) && 
            matrix[y+(1+sur[i][2])*sur[i][0]][x+(1+sur[i][2])*sur[i][1]]==(val*-1) && 
            matrix[y+(1+sur[i-1][2])*sur[i-1][0]][x+(1+sur[i-1][2])*sur[i-1][1]]==(val*-1)) {
          return false;
        }
        return true;
      }
    }
  }
  return false;
} 

function checkBound(y,x) {
  if (y>=0 && y<rows && x>=0 && x<cols) {
    return true;
  }
  return false;
}

function start() {
  var row = document.getElementById('row');
  var col = document.getElementById('col');
  var div = document.getElementById('cr_table');
  var toggle = 0;
  cols = col.value;
  rows = row.value;

  matrix = new Array(row.value);
  for (var i = 0; i < row.value; i++) {
    matrix[i] = new Array(col.value);
    for (var j = 0; j < col.value; j++) {
      matrix[i][j] = 0;
    }
  }
  
  // Create table.
  var table = document.createElement('table');
  table.setAttribute("border","1px");
  table.setAttribute("style", "border-collapse: collapse");
  
  //redraw the table upon clicking create table
  if(div.hasChildNodes){
    div.removeChild(div.childNodes[0]);
  }
  
  var row1;
  var row1col1;
  var cell_id;
 
  for (var i = 0; i < row.value; i++) {
      // Insert New Row for table at index 'i'.
      row1 = table.insertRow(i);
      row1.setAttribute("id", i.toString());

      for (var j = 0; j < col.value; j++) {
          // Insert New Column for Row1 at index '0'.
          row1col1 = row1.insertCell(j);
          row1col1.setAttribute("width", "20px");
          row1col1.setAttribute("height", "20px");
          row1col1.setAttribute("align", "center");
          row1col1.setAttribute("id", j.toString());
          //row1col1.setAttribute("title", i.toString());

          row1col1.onclick = function () {
              var x = parseInt(this.id);
              var y = parseInt(this.parentNode.id);
              if (toggle == 0) {
                  this.innerHTML = "X";
                  this.setAttribute("readonly", "readonly");
                  toggle = 1;
                  matrix[y][x] = 1;
              } else {
                  this.innerHTML = "O";
                  this.setAttribute("readonly", "readonly");
                  toggle = 0;
                  matrix[y][x] = -1;
              }

              if (hasWon(x, y) == true) {
                  alert('You Won');
              }
          }

      }
  }
  div.appendChild(table);
}

function won(row, col, x, y){
  
  return false;
}
