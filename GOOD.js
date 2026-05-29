// const noBtn = document.getElementById("noBtn");

// noBtn.addEventListener("mouseenter", () => {
//     const maxX = window.innerWidth - noBtn.offsetWidth;
//     const maxY = window.innerHeight - noBtn.offsetHeight;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     noBtn.style.position = "fixed";
//     noBtn.style.left = randomX + "px";
//     noBtn.style.top = randomY + "px";
// });


function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

// Desktop: runs away when mouse gets close
document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) {
        moveButton();
    }
});

// Mobile: runs away when finger gets close
document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(
        touch.clientX - (rect.left + rect.width / 2),
        touch.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) {
        moveButton();
    }
});

// Extra protection: if someone somehow taps it
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

noBtn.addEventListener("mouseenter", moveButton);