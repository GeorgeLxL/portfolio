var topBtn = document.getElementById("topBtn");
var scrollHeight = window.innerHeight / 2;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
    topBtn.classList.add("showBtn");
  } else {
    if(topBtn.classList.contains("showBtn")){
    topBtn.classList.remove("showBtn");
  }
  }
}