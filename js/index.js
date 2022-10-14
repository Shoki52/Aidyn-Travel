document.body.onload=function(){

setTimeout(function() {
    var preloader=document.getElementById('page-preloader');
    if ( !preloader.classList.contains('done'))
    {
        preloader.classList.add('done');
    }
}, 200);
}
function Functioneng_rus() {
    var x = document.getElementById("en");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("ru");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }


