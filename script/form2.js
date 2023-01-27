var submitContainer = document.getElementById("submitContainer");
if (submitContainer) {
    submitContainer.addEventListener("click", function (e) {
        window.location.href = "./class-room.html";
    });
}
var loginText = document.getElementById("loginText");
if (loginText) {
    loginText.addEventListener("click", function (e) {
        window.location.href = "/";
    });
}