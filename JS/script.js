function run(){
    var htmlCode = document.getElementById("htmlcode").value;
    var cssCode = document.getElementById("csscode").value;
    var jsCode = document.getElementById("jscode").value;
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

