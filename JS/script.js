function run(){
    var htmlCode = document.getElementById("htmlcode").value;
    var cssCode = document.getElementById("csscode").value;
    var jsCode = document.getElementById("jscode").value;
    var output  = document.getElementById( "output");

    output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
    output.contentWindow.eval(jsCode);
}