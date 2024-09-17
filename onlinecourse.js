window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop >220) {
    document.querySelector(".nav").style.backgroundColor = "#6C48C5";
    document.querySelector(".nav").style.fontSize = "20px";
  } else {
    document.querySelector(".nav").style.backgroundColor = "transparent";
  }
}