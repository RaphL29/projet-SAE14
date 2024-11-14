// Vérifie si l'utilisateur a déjà accepté les cookies
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookieBanner").style.display = "flex";
    }
});

// Fonction pour accepter les cookies
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieBanner").style.display = "none";
}
