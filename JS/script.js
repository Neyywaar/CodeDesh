function run(){
    var htmlCode = document.getElementById("codeEditor").value;
    var cssCode = document.getElementById("codeEditor2").value;
    var jsCode = document.getElementById("codeEditor3").value;
    var output  = document.getElementById( "output");

    output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
    output.contentWindow.eval(jsCode);
}

// Get all textareas on the page
const textareas = document.querySelectorAll('textarea');

// Loop through each textarea
textareas.forEach((textarea) => {
  // Apply the desired action to each textarea
  // For example, add a tab indent function
  textarea.addEventListener('keydown', (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();

      textarea.setRangeText(
        '  ',
        textarea.selectionStart,
        textarea.selectionStart,
        'end'
      )
    }
  })
});

//For Language Tabs
function codeLanguages(evt, language) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(language).style.display = "block";
    evt.currentTarget.className += " active";
}

//Line Number
var codeEditor = document.getElementById('codeEditor');
var lineCounter = document.getElementById('lineCounter');

codeEditor.addEventListener('scroll', () => {
    lineCounter.scrollTop = codeEditor.scrollTop;
    lineCounter.scrollLeft = codeEditor.scrollLeft;
});

var lineCountCache = 0;
function line_counter() {
      var lineCount = codeEditor.value.split('\n').length;
      var outarr = new Array();
      if (lineCountCache != lineCount) {
         for (var x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1) + '.';
         }
         lineCounter.value = outarr.join('\n');
      }
      lineCountCache = lineCount;
}
codeEditor.addEventListener('input', () => {
    line_counter();
});


var codeEditor2 = document.getElementById('codeEditor2');
var lineCounter2 = document.getElementById('lineCounter2');

codeEditor2.addEventListener('scroll', () => {
    lineCounter2.scrollTop = codeEditor2.scrollTop;
    lineCounter2.scrollLeft = codeEditor2.scrollLeft;
});

var lineCountCache2 = 0;
function line_counter2() {
      var lineCount2 = codeEditor2.value.split('\n').length;
      var outarr2 = new Array();
      if (lineCountCache2 != lineCount2) {
         for (var x = 0; x < lineCount2; x++) {
            outarr2[x] = (x + 1) + '.';
         }
         lineCounter2.value = outarr2.join('\n');
      }
      lineCountCache2 = lineCount2;
}
codeEditor2.addEventListener('input', () => {
    line_counter2();
});


var codeEditor3 = document.getElementById('codeEditor3');
var lineCounter3 = document.getElementById('lineCounter3');

codeEditor3.addEventListener('scroll', () => {
    lineCounter3.scrollTop = codeEditor3.scrollTop;
    lineCounter3.scrollLeft = codeEditor3.scrollLeft;
});

var lineCountCache3 = 0;
function line_counter3() {
      var lineCount3 = codeEditor3.value.split('\n').length;
      var outarr3 = new Array();
      if (lineCountCache3 != lineCount3) {
         for (var x = 0; x < lineCount3; x++) {
            outarr3[x] = (x + 1) + '.';
         }
         lineCounter3.value = outarr3.join('\n');
      }
      lineCountCache3 = lineCount3;
}
codeEditor3.addEventListener('input', () => {
    line_counter3();
});

