/**
 * Character chat system
 * Messages depend if visitor is back or if it's first visit
 * @param {boolean} isReturning - return of cookie: true or false
 */
export function characterchat(isReturning) {
  const chatWrapper = document.querySelector(".chat--wrapper");
  const textElement = document.querySelector(".chat--container .text");
  const btnsWrapper = document.querySelector(".btns--wrapper");
  const emoticonsWrapper = document.querySelector(".emoticons");
  const emoteContainer = document.querySelector(".emoticons .emote");
  const addContainer = document.querySelector(".emoticons .add");

  if (!chatWrapper || !textElement || !btnsWrapper) return;

  // chat for new visitor:
  const chatStepsFirstVisit = [
    {
      text: "Tiens, un nouveau visage. Décidément, c'est qu'il y a du monde ces derniers temps, à croire que cette foutue porte ne ferme pas correctement.",
      buttons: [{ label: "Qui es-tu ?" }],
      emotes: ["blaze"],
      add: ["drop"],
    },
    {
      text: "Je suis l'administrateur de cet espace. Tu te trouves au centre d'un monde voué à grandir, encore et encore. Enfin, tant que je serai là pour nourrir le code...",
      buttons: [
        { label: "Quel est cet endroit ?" },
        { label: "Nourir le code ?", nextStep: "nourrir" },
      ],
    },
    {
      text: "Tout ce que je peux te dire, c'est que ce lieu a été créé par un individu qui voit le code comme un prolongement de son esprit. Créer, intégrer et repousser les limites de son univers. C'est d'ailleurs ma mission ici, repousser les barrières de cet espace pour le faire grandir.",
      buttons: [{ label: "Tu es une IA ?" }],
    },
    {
      text: "... tu aimerais bien que j'en sois une hein ? Et bien... peut-être est-ce le cas ? ou peut-être pas, qui sait, le seul moyen de le découvrir c'est de poser la question à la bonne personne... Et puis, je n'ai pas le temps pour les bavardages, maintenant que tu es là tu peux visiter cet endroit mais ne me dérange pas.",
      buttons: [
        {
          label:
            "Tu es l'esclave de ton maître ? Tu bosses à sa place pendant qu'il boit son café.",
        },
      ],
      emotes: ["smile"],
    },
    {
      text: "%!@+/% !! j'ai pas le temps pour tes bêtises, fous-moi la paix. J'ai beaucoup de travail.",
      buttons: [],
      emotes: ["anger"],
      add: ["anger01", "anger02"],
      autoNext: true,
      delay: 5000,
    },
    {
      text: "Une dernière chose, claque bien la porte en partant, avoir trop de visiteurs ça réduit ma productivité. De plus, je ne suis pas une nounou.",
      buttons: [],
      closeChat: true,
      delay: 5000,
    },

    // Alternatives choices:
    {
      id: "nourrir",
      text: "Oui... Le code est un monstre, un trou sans fin dans lequel tu auras beau jeter tes algorithmes, il aura toujours faim. Peut-être devrais-je penser à lui donner les visiteurs à manger...",
      buttons: [{ label: "Drôle d'humour pour une IA.", nextStep: 3 }],
    },
  ];

  // Chat when visitor is back
  const chatStepsReturning = [
    {
      text: "Oh, c'est encore toi... Tu as fait un double des clés ou quoi ?",
      buttons: [],
      autoNext: true,
      delay: 3000,
    },
    {
      text: "C'est la porte ? Elle ferme toujours mal ? Rayan ne l'a toujours pas réparée ?! Franchement, qu'est-ce qu'il m'énerve...",
      emotes: ["anger"],
      add: ["anger01", "anger02"],
      buttons: [{ label: "Euh... Bonjour ?" }],
    },
    {
      text: "...",
      buttons: [],
      autoNext: true,
      delay: 2000,
    },
    {
      text: "Comme tu le vois je n'ai vraiment pas le temps de bavasser. Tu connais la maison, fais comme chez toi et ne casse pas tout.",
      buttons: [{ label: "Sois plus poli avec moi !" }],
    },
    {
      text: "Et tu vas faire quoi ?",
      buttons: [
        { label: "En parler à Rayan pour qu'il te reformate ou te supprime ?" },
      ],
      emotes: ["smile"],
    },
    {
      text: "Pfff... J'ai compris, désolé. Je n'en ai pas après toi, c'est juste que... j'ai beaucoup de travail.",
      buttons: [{ label: "Comment tu sais que je suis déjà venu ?" }],
      emotes: ["blaze"],
      add: ["drop"],
    },
    {
      text: "Parce que je suis une IA et que je vois tout, j'entends tout et je sais tout ! Hahaha ! D'ailleurs, juste en mettant les pieds ici j'en ai appris beaucoup sur toi...",
      buttons: [],
      emotes: ["smile"],
      autoNext: true,
      delay: 6000,
    },
    {
      text: "...",
      buttons: [],
      autoNext: true,
      delay: 4000,
    },
    {
      text: "Je plaisante, en réalité, si tu veux connaître la vérité, pose cette question à la bonne personne. Je ne m'appelle pas Chat GPT ou \"Claude\" machin truc. Je suis là pour bosser et je n'ai vraiment pas le temps de m'occuper de toi. Fais comme chez toi, tu connais la maison maintenant.",
      buttons: [],
      closeChat: true,
      delay: 8000,
    },
  ];

  // Select chat depend cookie track visitor (true/false)
  const chatSteps = isReturning ? chatStepsReturning : chatStepsFirstVisit;

  let currentStep = 0;

  // Fct to fin index of step with id or index
  function findStepIndex(stepIdentifier) {
    if (typeof stepIdentifier === "number") {
      return stepIdentifier;
    }
    return chatSteps.findIndex((step) => step.id === stepIdentifier);
  }

  // Typing txt animation
  function typeText(text, callback) {
    textElement.textContent = "";
    let charIndex = 0;
    const typingSpeed = 20; // ms/char

    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        textElement.textContent += text[charIndex];
        charIndex++;
      } else {
        clearInterval(typingInterval);
        if (callback) callback();
      }
    }, typingSpeed);
  }

  // Show emoticons
  function displayEmotes(emotes) {
    // Empty countainer
    emoteContainer.innerHTML = "";
    emoticonsWrapper.className = "emoticons"; // Reset class

    // Render emoticon if it is defined
    if (emotes && emotes.length > 0) {
      // Active spawn animation
      emoticonsWrapper.classList.add("spawned");

      emotes.forEach((emoteName) => {
        const img = document.createElement("img");
        img.src = `/assets/character/emotes/${emoteName}.png`;
        img.alt = emoteName;
        emoteContainer.appendChild(img);
        emoticonsWrapper.classList.add(emoteName);

        //Reboot spawn emote animation:
        setTimeout(() => {
          emoticonsWrapper.classList.remove("spawned");
        }, 1000);
      });
    }
  }

  function displayAdd(addImages) {
    // Empty container
    addContainer.innerHTML = "";

    // If add imgs are defined, show theme
    if (addImages && addImages.length > 0) {
      addImages.forEach((addName) => {
        const img = document.createElement("img");
        img.src = `/assets/character/emotes/${addName}.png`;
        img.alt = addName;
        addContainer.appendChild(img);
      });
    }
  }

  // Render step
  function displayStep(stepIndex) {
    const step = chatSteps[stepIndex];

    // Update txt
    textElement.textContent = step.text;
    displayEmotes(step.emotes);
    displayAdd(step.add);
    // Empty current btns
    btnsWrapper.innerHTML = "";
    btnsWrapper.style.display = "none";
    cursor.classList.add("is-pointer");
    cursor.classList.remove("is-clickable");

    // Creacte new btns
    step.buttons.forEach((btn) => {
      const button = document.createElement("button");
      button.innerHTML = `<span class="arrow">></span><span class="btn-label">${btn.label}</span>`;
      // Custom cursor
      button.addEventListener("mouseenter", () => {
        button.classList.add("is-selected");
        if (cursor) {
          cursor.classList.remove("is-pointer");
          cursor.classList.add("is-clickable");
        }
      });

      button.addEventListener("mouseleave", () => {
        button.classList.remove("is-selected");
        if (cursor) {
          cursor.classList.add("is-pointer");
          cursor.classList.remove("is-clickable");
        }
      });

      // Add click on btns for next step
      button.addEventListener("click", () => {
        const nextStep =
          btn.nextStep !== undefined ? btn.nextStep : currentStep + 1;
        const nextIndex = findStepIndex(nextStep);

        if (nextIndex !== -1 && nextIndex < chatSteps.length) {
          currentStep = nextIndex;
          displayStep(currentStep);
        }
      });

      btnsWrapper.appendChild(button);
    });

    typeText(step.text, () => {
      // When txt is finished, show btns
      if (step.buttons.length > 0) {
        btnsWrapper.style.display = "block";
      }

      // Go next step or target secondary path on storie
      if (step.autoNext) {
        const nextStep =
          step.nextStep !== undefined ? step.nextStep : currentStep + 1;
        const nextIndex = findStepIndex(nextStep);

        if (nextIndex !== -1 && nextIndex < chatSteps.length) {
          setTimeout(() => {
            currentStep = nextIndex;
            displayStep(currentStep);
          }, step.delay);
        }
      }

      // Closing chat
      if (step.closeChat) {
        setTimeout(() => {
          chatWrapper.style.display = "none";
        }, step.delay);
      }
    });
  }

  // Starting chat
  setTimeout(() => {
    chatWrapper.style.display = "block";
    displayStep(currentStep);
  }, 0);
}
