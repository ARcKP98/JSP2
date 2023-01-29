const easyQuestions = [
    {
        question: 'Which movie started the Marvel Cinematic universe?',
        1: 'The Avengers',
        2: 'Captain America: The First Avenger',
        3: 'Thor',
        4: 'Iron Man',
        correct: 'Iron Man'
    },
    {
        question: "What is the name of Thor's hammer?",
        1: 'Mjolnir',
        2: 'Storm breaker',
        3: 'Jonathan',
        4: ' Gugnir',
        correct: 'Mjolnir'
    },
    {
        question: 'What does the D in SHIELD stand for?',
        1: 'Defense',
        2: 'Division',
        3: 'Damage',
        4: 'Department',
        correct: 'Division'
    },
    {
        question: 'How many Avengers were there originally in the MCU?',
        1: '6',
        2: '7',
        3: '8',
        4: '9',
        correct: '6'
    },
    {
        question: 'Who is not considered an Avenger in the MCU?',
        1: 'Spider-Man',
        2: 'Black Widow',
        3: 'Black Panther',
        4: 'Hulk',
        correct: 'Black Panther'
    },
    {
        question: 'Who is related to Loki in the MCU',
        1: 'Thor',
        2: 'Bucky Barnes',
        3: 'Sylvie',
        4: 'Bruce Banner',
        correct: 'Thor'
    },
    {
        question: 'What is the name of the alien force that attacked New York in The Avengers?',
        1: 'The Chitauri',
        2: 'Black Order',
        3: 'Flag Smashers',
        4: 'Hydra',
        correct: 'The Chitauri'
    },
    {
        question: 'Which character was introduced for the first time in Captain America: Civil War?',
        1: 'Hulk',
        2: 'Batroc',
        3: 'Spider-Man',
        4: 'The Falcon',
        correct: 'Spider-Man'
    },
    {
        question: "Who is Peter Quill's father",
        1: 'Yondu',
        2: 'Ego',
        3: 'Kurt',
        4: 'Odin',
        correct: 'Ego'
    },
    {
        question: 'Who is the main villain in Thor:The Dark World?',
        1: 'Loki',
        2: 'Malekith',
        3: 'Gorr',
        4: 'Eitri',
        correct: 'Malekith'
    }
];

const mediumQuestions = [
    {
        question: "How many phases make up the infinity saga have?",
        1: '2',
        2: '3',
        3: '4',
        4: '5',
        correct: '3'
    },
    {
        question: "Which MCU TV show was released first?",
        1: "WandaVision",
        2: "Loki",
        3: "Hawkeye",
        4: "The Falcon and the Winter Soldier",
        correct: 'WandaVision'
    },
    {
        question: "Who is Loki's father?",
        1: 'Odin',
        2: 'Thanos',
        3: 'Dimitri',
        4: 'Laufey',
        correct: 'Laufey'
    },
    {
        question: "What is the name of the radical group that kidnaps Tony Stark when he was in Afghanistan?",
        1: 'A.I.M',
        2: 'Taliban',
        3: 'Ten Rings',
        4: 'Black Tigers',
        correct: 'Ten Rings'
    },
    {
        question: "What are the children of Thanos formally known as and how many members are there?",
        1: 'Black Order ; 4',
        2: 'Black Order ; 5',
        3: 'Sinister 6; 6',
        4: 'Horsemen of Appocolypse; 4',
        correct: 'Black Order ; 4'
    },
    {
        question: "Who hired the Guardians in Guardians of the Galaxy Vol.2?",
        1: "Kree",
        2: "Sovereign",
        3: "Ravagers",
        4: "Clandestines",
        correct: 'Sovereign'
    },
    {
        question: "Who found the Tesseract for SHIELD?",
        1: "Nick Fury",
        2: "Tony Stark",
        3: "Howard Stark",
        4: "Phil Coulson",
        correct: 'Howard Stark'
    },
    {
        question: "Who was the villain in Ant Man?",
        1: "Ghost",
        2: "Yellow Jacket",
        3: "Hydra",
        4: "Baskin-Robbins",
        correct: 'Yellow Jacket'
    },
    {
        question: "Who was not in Doctor Strange?",
        1: "Mordo",
        2: "Kaescillus",
        3: "Clea",
        4: "Ancient One",
        correct: 'Clea'
    },
    {
        question: "How many personalities does Moon Knight have?",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        correct: '3'
    }
];

const excelsiorQuestions = [
    {
        question: "How many cameos had stan lee made in Marvel movies?",
        1: "22",
        2: "23",
        3: "27",
        4: "32",
        correct: '22'
    },
    {
        question: "Who wields the Gungnir in the MCU?",
        1: "Hela",
        2: "Loki",
        3: "Odin",
        4: "Sif",
        correct: 'Odin'
    },
    {
        question: "Who was the second person to create the super soldier serum?",
        1: "Abraham Erskine",
        2: "Bruce Banner",
        3: "Jonathan Schmidt",
        4: "Wilfred Nagel",
        correct: 'Wilfred Nagel'
    },
    {
        question: " What was the name of the secret project in Captain America:The Winter Soldier?",
        1: "Project Strafish",
        2: "Project Insight",
        3: "Project Clean Slate",
        4: "Project Obsidian",
        correct: 'Project Insight'
    },
    {
        question: "Who is Black Widow's father according to Red Skull?",
        1: "Ivan",
        2: "Alexei",
        3: "Drakov",
        4: "Anton",
        correct: 'Ivan'
    },
    {
        question: "What is the name of the primary AI used by Iron Man?",
        1: "EDITH",
        2: "FRIDAY",
        3: "Veronica",
        4: "Karen",
        correct: 'FRIDAY'
    },
    {
        question: "Who is the original prime Eternal?",
        1: "Sersi",
        2: "Ajax",
        3: "Gilgamesh",
        4: "Kingo",
        correct: 'Ajax'
    },
    {
        question: "What does Kilmonger do when he becomes the King in What IF?",
        1: "Burn the purple herb garden",
        2: "Declare war on the United States",
        3: "Kill T'Challa",
        4: "Kill Zuri",
        correct: 'Declare war on the United States'
    },
    {
        question: "When do we first see Red Skull in the MCU?",
        1: "Norway, 1942",
        2: "Germany, 1947",
        3: "Germany, 1942",
        4: "Norway, 1947",
        correct: 'Norway, 1942'
    },
    {
        question: "What kind of alien is Goose from Captain Marvel?",
        1: "Rajaks",
        2: "Flerken",
        3: "Kallusians",
        4: "Pluvians",
        correct: 'Flerken'
    },
];