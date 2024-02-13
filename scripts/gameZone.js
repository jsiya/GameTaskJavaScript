document.addEventListener("DOMContentLoaded", function() {
    var imgSrc = localStorage.getItem("characterImageSrc");
    if (imgSrc) {
        var img = document.getElementById("hero");
        if (img) {
            console.log("sffdsfdd");
            img.src = imgSrc;
    }}
}
);
