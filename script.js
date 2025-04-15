document.addEventListener("DOMContentLoaded", function () {
    // ---- VALIDATION DU FORMULAIRE DE CONTACT ---- //
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        const prenom = document.querySelector("input[name='prenom']");
        const nom = document.querySelector("input[name='nom']");
        const sujet = document.querySelector("input[name='sujet']");
        const message = document.querySelector("textarea[name='message']");
        let valid = true;

        // Fonction pour afficher une erreur
        function afficherErreur(champ, message) {
            let errorMessage = champ.nextElementSibling;
            if (!errorMessage || !errorMessage.classList.contains("error-message")) {
                errorMessage = document.createElement("p");
                errorMessage.classList.add("error-message");
                errorMessage.style.color = "red";
                errorMessage.style.fontSize = "0.9em";
                errorMessage.style.marginTop = "5px";
                champ.parentNode.appendChild(errorMessage);
            }
            errorMessage.textContent = message;
        }

        // Réinitialisation des erreurs
        document.querySelectorAll(".error-message").forEach(e => e.remove());

        // Vérification des champs
        if (prenom.value.trim() === "") {
            afficherErreur(prenom, "Veuillez entrer votre prénom.");
            valid = false;
        }
        if (nom.value.trim() === "") {
            afficherErreur(nom, "Veuillez entrer votre nom.");
            valid = false;
        }
        if (sujet.value.trim() === "") {
            afficherErreur(sujet, "Veuillez entrer un sujet.");
            valid = false;
        }
        if (message.value.trim() === "") {
            afficherErreur(message, "Veuillez écrire un message.");
            valid = false;
        }

        // Si tous les champs sont valides, afficher un message de confirmation
        if (valid) {
            alert("Votre message a bien été envoyé !");
            form.reset(); // Réinitialise le formulaire après envoi
        }
    });

    const voirProjetsBtn = document.querySelector("#accueil button");
    const sectionProjets = document.querySelector("#projets");

    if (voirProjetsBtn && sectionProjets) {
        voirProjetsBtn.addEventListener("click", function () {
            sectionProjets.scrollIntoView({ behavior: "smooth" });
        });
    }

    const boutonsVoir = document.querySelectorAll(".project button");

    boutonsVoir.forEach(button => {
        button.addEventListener("click", function () {
            alert("Détails du projet bientôt disponibles !");
        });
    });

    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "#37d8b4";
        });
        link.addEventListener("mouseout", function () {
            link.style.color = "white";
        });
    });

    const accueilTexte = document.querySelector("#accueil h2");
    if (accueilTexte) {
        accueilTexte.style.opacity = "0";
        accueilTexte.style.transform = "translateY(20px)";
        setTimeout(() => {
            accueilTexte.style.transition = "all 0.8s ease-in-out";
            accueilTexte.style.opacity = "1";
            accueilTexte.style.transform = "translateY(0)";
        }, 300);
    }
});

 document.querySelector("button").addEventListener("click", function () {
    document.querySelector("#projets").scrollIntoView({ behavior: "smooth" });
});


document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
        this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    });
    project.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
    });
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Empêcher le saut brutal
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
