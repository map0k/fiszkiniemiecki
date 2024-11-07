const flashcards = [
  { question: "nazwa użytkownika:", answer: "der Benutzername" },
  { question: "ekran:", answer: "der Bildschrim" },
  { question: "przeglądarka:", answer: "der Browser" },
  { question: "login:", answer: "der/das Log-in" },
  { question: "myszka:", answer: "die Maus" },
  { question: "przycisk myszki:", answer: "die Maustaste" },
  { question: "hasło:", answer: "das Passwort" },
  { question: "przycisk szukaj:", answer: "der Suchbutton" },
  { question: "klawiatura:", answer: "die Tastatur" },
  { question: "klawisz:", answer: "die Taste" },
  { question: "słuchać: ", answer: "sich an|hören" },
  { question: "klikać:", answer: "an klicken" },
  { question: "otwierać:", answer: "auf|machen" },
  { question: "sprawdzać: ", answer: "checken" },
  { question: "podawać: ", answer: "ein|geben" },
  { question: "zalogować się", answer: "sich ein|loggen" }
];

let currentCard = 0;
let isFlipped = false;

function startFlashcards() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('flashcard-container').style.display = 'block';
  document.getElementById('navigation').style.display = 'flex';
  displayCard();
}

function displayCard() {
  const flashcard = document.querySelector('.flashcard');
  const front = document.getElementById('flashcard-front');
  const back = document.getElementById('flashcard-back');

  
  flashcard.classList.add('fade-out');

  setTimeout(() => {
    front.textContent = flashcards[currentCard].question;
    back.textContent = flashcards[currentCard].answer;
    flashcard.classList.remove('flipped'); 
    flashcard.classList.remove('fade-out');
    isFlipped = false;

    
    if (currentCard === flashcards.length - 1) {
      document.getElementById('finish-button').style.display = 'block';
    } else {
      document.getElementById('finish-button').style.display = 'none';
    }
  }, 400); 
}

function flipCard() {
  document.querySelector('.flashcard').classList.toggle('flipped');
  isFlipped = !isFlipped;
}

function nextCard() {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    displayCard();
  }
}

function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    displayCard();
  }
}

