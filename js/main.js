document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Optional if you want it to hide again
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));
});



//music
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const stopBtn = document.getElementById("stop-btn");

    // Play music
    playBtn.addEventListener("click", () => {
        music.play().catch(error => console.log("Playback error:", error));
    });

    // Pause music
    pauseBtn.addEventListener("click", () => {
        music.pause();
    });

    // Stop music (pause and reset time)
    stopBtn.addEventListener("click", () => {
        music.pause();
        music.currentTime = 0;
    });
});

//simpan maklumat attendance kahwin
document.getElementById("wedding-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = {
        name: form.name.value,
        phone: form.phone.value,
        attendance: form.attendance.value,
        message: form.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycby0BfVrLtDJyAUQoSVYszDYMz6o9tkyNgfVosqlMBMqnaOl97N4YUvjwBEjZ0fVRerB/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(() => {
        document.getElementById("response-message").innerText = "🎉 Thank you for your response!";
        form.reset();
    }).catch(error => {
        document.getElementById("response-message").innerText = "⚠️ Error submitting form.";
    });
});



