var visible = document.getElementsByClassName("opacity");

function toggleInvisibleClass() {
    this.classList.toggle("opacity");
}

for (var i = 0; i < visible.length; i++) {
    var opacityOn = visible[i];
    opacityOn.addEventListener("mouseenter", toggleInvisibleClass);
    opacityOn.addEventListener("mouseleave", toggleInvisibleClass);
}