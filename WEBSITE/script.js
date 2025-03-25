document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
            alert("Pesan Anda telah dikirim!");
            form.reset();
        });
    }

    const navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#007bff";
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "";
        });
    });

    const achievements = document.querySelectorAll(".achievement-card");
    achievements.forEach(card => {
        card.addEventListener("click", function () {
            const certId = this.getAttribute("data-cert");
            showCertificate(certId);
        });
    });
});

function showCertificate(certId) {
    let certificates = {
        "cert-sepakbola": "img/cert-sepakbola.jpg",
        "cert-webdev": "img/cert-webdev.jpg",
        "cert-magang": "img/cert-magang.jpg"
    };

    if (certificates[certId]) {
        document.getElementById("modal-image").src = certificates[certId];
        document.getElementById("modal").style.display = "block";
    } else {
        alert("Sertifikat belum tersedia!");
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
