const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noMessage = document.getElementById("noMessage");
const tryAgainBtn = document.getElementById("tryAgainBtn");

const yesScreen = document.getElementById("yesScreen");


// ---------------- OPEN WEBSITE ----------------

openBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");
    mainContent.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHeart(
        window.innerWidth / 2,
        window.innerHeight / 2
    );
});


// ---------------- CLICK HEARTS ----------------

document.addEventListener("click", function (event) {

    // Don't create click hearts on buttons
    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest("button")
    ) {
        return;
    }

    createHeart(event.clientX, event.clientY);
});


function createHeart(x, y) {

    const heart = document.createElement("div");

    const hearts = ["❤️", "💗", "💕", "💖", "💓"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.classList.add("click-heart");

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1300);
}


// ---------------- NO BUTTON ----------------

noBtn.addEventListener("click", () => {

    noMessage.classList.remove("hidden");

});


// ---------------- TRY AGAIN ----------------

tryAgainBtn.addEventListener("click", () => {

    noMessage.classList.add("hidden");

    // Give her a little push toward YES 😚
    yesBtn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.2)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 600,
            iterations: 2
        }
    );

});


// ---------------- YES BUTTON ----------------

yesBtn.addEventListener("click", () => {

    yesScreen.classList.remove("hidden");

    createCelebration();

});


// ---------------- CELEBRATION ----------------

function createCelebration() {

    const symbols = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "🌷",
        "🌹",
        "✨",
        "💐"
    ];

    for (let i = 0; i < 60; i++) {

        const item = document.createElement("div");

        item.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-50px";
        item.style.fontSize =
            Math.random() * 25 + 20 + "px";

        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        const duration =
            Math.random() * 3000 + 2500;

        item.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720 - 360}deg)`,
                    opacity: 0.8
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            item.remove();
        }, duration);
    }
}