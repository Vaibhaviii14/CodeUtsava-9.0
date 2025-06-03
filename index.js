document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.querySelector(".enter-button");
  const video = document.getElementById("transition");
  const transitionContainer = document.querySelector(".infinity-transition");
  const fadeOverlay = document.getElementById("fadeOverlay");

  enterButton.addEventListener("click", (e) => {
    e.preventDefault();

    
    const soundEffect = new Audio("Nakime_Biwa.mp3");
    soundEffect.play();

   
    document.body.classList.add("playing-video");
    transitionContainer.classList.add("active");
    video.style.display = "block";
    video.currentTime = 0;
    video.muted = true;
    video.play();

   
    const fadeDuration = 1500; 
    const videoPlayDuration = 5000; 

    setTimeout(() => {
      fadeOverlay.classList.add("fade-in");
    }, videoPlayDuration - fadeDuration - 200); 

    setTimeout(() => {
      window.location.href = "home.html"; 
    }, videoPlayDuration);
  });
});
