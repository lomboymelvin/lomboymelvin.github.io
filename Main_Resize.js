function setParticleContainerHeight() {
    var container = document.getElementById("home");
    container.style.height = window.innerHeight + "px";
}
window.addEventListener("resize", setParticleContainerHeight);
window.addEventListener("DOMContentLoaded", setParticleContainerHeight);