document.getElementsByClassName("share")[0].addEventListener("click", function() {
    const popup = document.getElementsByClassName("overlay-box")[0];
    const arrow =document.getElementsByClassName("arrow");
    if (popup.style.opacity === "1") {
      popup.style.opacity = "0";
      popup.style.pointerEvents = "none";
       
    } else {
      popup.style.opacity = "1";
      popup.style.pointerEvents = "auto"; 
    }
  });

document.addEventListener("click", function(event) {
    const shareBtn = document.getElementsByClassName("share")[0];
    const popup = document.getElementsByClassName("overlay-box")[0];

    if (!shareBtn.contains(event.target)) {
      popup.style.opacity = "0";
      popup.style.pointerEvents = "none";
    }
});
