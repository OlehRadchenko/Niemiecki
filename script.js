const questions = [
    {
        question: "Która metoda HTTP jest najczęściej używana do wysyłania danych do serwera?",
        options: ["PUT", "GET", "POST", "DELETE"],
        answer: "POST"
    },
    {
        question: "Który komponent używasz do tworzenia linków nawigacyjnych w React Routerze?",
        options: ["NavigationLink", "Link", "NavLink", "RouterLink"],
        answer: "Link"
    },
    {
        question: "Która metoda HTTP jest najczęściej używana do pobierania danych z serwera?",
        options: ["POST", "DELETE", "GET", "PUT"],
        answer: "GET"
    },
    {
        question: "Kiedy powinno się używać hooka useEffect w React?",
        options: ["Do łączenia komponentów z zewnętrznymi źródłami danych, takimi jak API czy baza danych.", "Do obsługi zdarzeń interakcji użytkownika, takich jak kliknięcia czy wprowadzanie danych.", "Do deklarowania funkcji, które mają być wywoływane przy każdym renderowaniu komponentu.", "Do zarządzania stanem w komponentach klasowych."],
        answer: "Do łączenia komponentów z zewnętrznymi źródłami danych, takimi jak API czy baza danych."
    },
    {
        question: "Który element HTML używa się do utworzenia listy nieuporządkowanej?",
        options: ["<li>", "<ul>", "<list>", "<ol>"],
        answer: "<ul>"
    },
    {
        question: "Jaki element HTML używa się do utworzenia hiperłącza?",
        options: ["<img>", "<href>", "<a>", "<link>"],
        answer: "<a>"
    },
    {
        question: "Co to jest JSX w kontekście Reacta?",
        options: ["Biblioteka JavaScript, która ułatwia manipulację drzewem DOM.", "Skrót od JavaScript XML, jest to rozszerzenie składni JavaScript umożliwiające pisanie kodu HTML wewnątrz komponentów Reacta.", "Sposób definiowania zewnętrznych styli dla komponentów w React.", "Jednoliterowe określenie typu danych w React, takie jak 'string', 'number' czy 'boolean'."],
        answer: "Skrót od JavaScript XML, jest to rozszerzenie składni JavaScript umożliwiające pisanie kodu HTML wewnątrz komponentów Reacta."
    },
    {
        question: "Jak zmienić kolor tła elementu HTML za pomocą CSS?",
        options: ["background-color: red;", "text-color: red;", "color: red;", "font-color: red;"],
        answer: "background-color: red;"
    },
    {
        question: "Jaki jest właściwy sposób obsługi błędów podczas używania fetch?",
        options: ["Używanie bloku try-catch", "Używanie bloku catch na końcu łańcucha then", "Ignorowanie błędów, ponieważ fetch automatycznie obsługuje błędy", "Sprawdzanie kodu odpowiedzi w bloku then"],
        answer: "Używanie bloku catch na końcu łańcucha then"
    },
    {
        question: "Jakie są podstawowe komponenty tworzące nawigację w React Router?",
        options: ["Router, Route, Nav", "Router, Route, Link", "Router, Switch, Navigation", "Router, Switch, Link"],
        answer: "Router, Route, Link"
    },
    {
        question: "Co to jest 'stan' (state) w React?",
        options: ["Informacja przechowywana na serwerze, dostępna dla wszystkich komponentów.", "Metoda, która wywoływana jest po zmianie stanu aplikacji.", "Kolekcja właściwości, które można przekazywać do komponentów potomnych.", "Obiekt, który przechowuje dane specyficzne dla danego komponentu i wpływa na jego wygląd i zachowanie."],
        answer: "Obiekt, który przechowuje dane specyficzne dla danego komponentu i wpływa na jego wygląd i zachowanie."
    },
    {
        question: "Co to jest Node.js?",
        options: ["Biblioteka JavaScript do tworzenia animacji", "Platforma do tworzenia aplikacji mobilnych", "Framework do budowania interfejsów użytkownika", "Środowisko uruchomieniowe JavaScript po stronie serwera"],
        answer: "Środowisko uruchomieniowe JavaScript po stronie serwera"
    },
    {
        question: "Jakie właściwości używasz w komponencie <Route> do określenia ścieżki URL?",
        options: ["route", "url", "path", "link"],
        answer: "path"
    },
    {
        question: "Co to jest 'initialValues' w Formiku?",
        options: ["Kontekst Formika, który pozwala na przekazywanie danych i funkcji do wewnętrznych komponentów.", "Nazwa funkcji wywoływanej po złożeniu formularza w celu przetworzenia danych.", "Obiekt zawierający początkowe wartości pól formularza.", "Komponent Formika, który służy do opakowywania pól formularza."],
        answer: "Obiekt zawierający początkowe wartości pól formularza."
    },
    {
        question: "Jak zadeklarować zmienną w JavaScript?",
        options: ["var myVariable;", "let myVariable;", "const myVariable;", "Wszystkie powyższe"],
        answer: "Wszystkie powyższe"
    },
    {
        question: "Jaki jest właściwy sposób odwoływania się do zewnętrznego pliku CSS w dokumencie HTML?",
        options: ["<script type='text/css' src='style.css'>", "<link rel='stylesheet' type='text/css' href='style.css'>", "<style src='style.css'>", "<css src='style.css'>"],
        answer: "<link rel='stylesheet' type='text/css' href='style.css'>"
    },
    {
        question: "Co to jest funkcja wyższego rzędu (higher-order function) w JavaScript?",
        options: ["Funkcja, która ma dostęp do globalnego zakresu zmiennych", "Funkcja, która operuje na tablicach", "Funkcja, która przyjmuje inną funkcję jako argument", "Funkcja, która zwraca inną funkcję"],
        answer: "Funkcja, która przyjmuje inną funkcję jako argument"
    },
    {
        question: "Jaki jest cel hooka useState w React?",
        options: ["Inicjalizacja i zarządzanie stanem w komponencie funkcyjnym.", "Przechowywanie i zarządzanie globalnym stanem aplikacji.", "Obsługa efektów ubocznych w komponentach React.", "Umożliwienie subskrypcji na zmiany stanu komponentu."],
        answer: "Inicjalizacja i zarządzanie stanem w komponencie funkcyjnym."
    },
    {
        question: "Jakie są korzyści z używania funkcji strzałkowych (arrow functions) w JavaScript?",
        options: ["Możliwość tworzenia funkcji konstrukcyjnych", "Krótszy zapis składniowy", "Automatyczne wiązanie 'this' w kontekście funkcji", "Możliwość zagnieżdżania funkcji wewnątrz innych funkcji"],
        answer: "Krótszy zapis składniowy"
    },
    {
        question: "Która biblioteka jest popularna do wykonywania żądań HTTP i oferuje uproszczoną składnię oraz więcej funkcji niż wbudowany fetch?",
        options: ["Lodash", "Redux", "Axios", "Moment"],
        answer: "Axios"
    },
    {
        question: "Jak sprawdzić i walidować wprowadzone dane w formularzu w React?",
        options: ["Poprzez użycie bibliotek walidacji danych, takich jak Yup lub Joi.", "Poprzez napisanie własnych funkcji walidujących i sprawdzanie wprowadzonych wartości.", "Poprzez użycie atrybutu 'required' na elementach formularza.", "Poprzez wysłanie danych do serwera i otrzymanie odpowiedzi zwrotnej."],
        answer: "Poprzez napisanie własnych funkcji walidujących i sprawdzanie wprowadzonych wartości."
    },
    {
        question: "Jakie są różnice między 'null' a 'undefined' w JavaScript?",
        options: ["'null' oznacza brak wartości, podczas gdy 'undefined' oznacza, że wartość nie została przypisana.", "'null' jest jawnie przypisaną wartością pustą, podczas gdy 'undefined' jest domyślną wartością dla nieprzypisanych zmiennych.", "'null' jest obiektem, podczas gdy 'undefined' jest typem danych.", "Zarówno 1 jak i 2 są poprawne."],
        answer: "Zarówno 1 jak i 2 są poprawne."
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    shuffle(questions);

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.correctAnswer = q.answer;

        const questionTitle = document.createElement('p');
        questionTitle.innerText = q.question;
        questionDiv.appendChild(questionTitle);

        shuffle(q.options);

        q.options.forEach(option => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${index}`;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswers() {
    const questionsDivs = document.querySelectorAll('.question');
    questionsDivs.forEach(div => {
        const selectedOption = div.querySelector('input[type=radio]:checked');
        if (selectedOption) {
            if (selectedOption.value === div.dataset.correctAnswer) {
                div.classList.add('correct');
                div.classList.remove('incorrect');
            } else {
                div.classList.add('incorrect');
                div.classList.remove('correct');
            }
        } else {
            div.classList.add('incorrect');
            div.classList.remove('correct');
        }
    });
}

function showResults() {
    const totalQuestions = questions.length;
    let correctAnswers = 0;

    const questionsDivs = document.querySelectorAll('.question');
    questionsDivs.forEach(div => {
        const selectedOption = div.querySelector('input[type=radio]:checked');
        if (selectedOption && selectedOption.value === div.dataset.correctAnswer) {
            correctAnswers++;
        }
    });

    const resultText = `Twój wynik: ${correctAnswers} / ${totalQuestions}`;
    const resultElement = document.createElement('p');
    resultElement.textContent = resultText;
    document.body.appendChild(resultElement);
}

document.getElementById('submit-button').addEventListener('click', () => {
    checkAnswers();
    showResults();
});

window.onload = createQuiz;