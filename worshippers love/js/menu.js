
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.display = "block";
    } else {
        document.getElementById("navbar").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
}
    