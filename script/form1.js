var enterClass = document.getElementById("enterClass");
if (enterClass) {
    enterClass.addEventListener("click", function (e) {
      window.location.href = "./class-room.html";
    });
}
      
var generateLinkContainer = document.getElementById("generateLinkContainer");
if (generateLinkContainer) {
    generateLinkContainer.addEventListener("click", function (e) {
        window.location.href = "./student-form.html";
    });
}
      
var loginText = document.getElementById("loginText");
if (loginText) {
    loginText.addEventListener("click", function (e) {
        window.location.href = "/";
    });
}