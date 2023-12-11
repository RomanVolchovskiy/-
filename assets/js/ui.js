document.addEventListener("DOMContentLoaded", function () {
    const startupScreenPS3 = document.querySelector(".StartupScreenPS3");
    const menu = document.querySelector(".Menu");

    startupScreenPS3.addEventListener("click", function () {
        setTimeout(function () {
            document.querySelector(".StartupScreen").remove();
            const logo = document.querySelector(".logo");
            logo.style.opacity = 1;
            logo.style.transition = "opacity 1.5s";
        }, 5000);

        
        document.body.insertAdjacentHTML('beforeend', "<video src='./assets/XMB/videos/wave.webm' autoplay mute loop></video>");
        const startupAudio = new Audio("./assets/XMB/audios/startup.mp3");
        this.classList.add("active");
        startupAudio.play();

        setTimeout(() => {
            document.querySelector("video").style.animation = "fadeIn 3s ease-in-out forwards";
            document.querySelector("body").classList.add("fade");
        }, 1500);

        setTimeout(() => {
            menu.style.display = 'block';
            menu.classList.add("animationMenu");
        }, 3500);

        startupScreenPS3.style.opacity = 0;
        startupScreenPS3.style.pointerEvents = 'none';
    });
    document.querySelector("video").style.animation = "fadeIn 3s ease-in-out forwards";

    document.querySelector("#LookAtBackground").addEventListener("click", function () {
        menu.style.display = 'none';
        menu.classList.remove("animationMenu");
        document.querySelector(".NotLookAtBackground").remove();
    });

    function GoTo(operator, id) {
        document.querySelectorAll(".MenuContent").forEach((element) => {
            element.style.display = 'none';
        });
        document.querySelector('.MenuItemActive').classList.remove('MenuItemActive');
        operator.classList.add('MenuItemActive');
        document.querySelector(id).style; display = 'block';
    }
});
