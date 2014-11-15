// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
//window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  //'use strict';

  //var translate = navigator.mozL10n.get;

  // We want to wait until the localisations library has loaded all the strings.
  // So we'll tell it to let us know once it's ready.
  //navigator.mozL10n.once(start);

  // ---

  function start() {

    //var message = document.getElementById('message');

    // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
    // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
    //message.textContent = translate('message');
    
    // Create table.
        var table = document.createElement('table');
        // Insert New Row for table at index '0'.
        var row1 = table.insertRow(0);
        // Insert New Column for Row1 at index '0'.
        var row1col1 = row1.insertCell(0);
        row1col1.innerHTML = 'Col1';
        // Insert New Column for Row1 at index '1'.
        var row1col2 = row1.insertCell(1);
        row1col2.innerHTML = 'Col2';
        // Insert New Column for Row1 at index '2'.
        var row1col3 = row1.insertCell(2);
        row1col3.innerHTML = 'Col3';
        // Append Table into div.
        var div = document.getElementById('cr_table');
        div.appendChild(table);

  }

//});
