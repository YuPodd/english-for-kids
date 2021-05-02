window.onload = function () {
    createCardsForCategory('main_page');
    createStatisticsObject();
};

//export default 
class Card {
    constructor(word, img, translation, audio) {
        this.word = word;
        this.img = img;
        this.translation = translation;
        this.audio = audio;
    }
    soundOn() {
        if (playMode === false) {
            let audio = document.querySelector(".audio");
            audio.src = `${this.audio}`;
            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
        } else if (playMode === true && gameIsStarted === true) {
            checkAnswer(event);
        }
    }
    createCardDiv(category) {
        let cardContainerDiv = document.createElement("div");
        cardContainerDiv.classList.add("card_container", `${category}`);
        cardContainerDiv.id = `${this.word}`;
        cardContainerDiv.addEventListener('click', () => addClicksToStatistics(cardContainerDiv.id));
     
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.addEventListener("mouseleave", function () {
            cardDiv.classList.remove("is_flipped");
            cardRotateSpan.style.display = "inline-block";
        });
      
        let cardFrontDiv = document.createElement("div");
        cardFrontDiv.classList.add("card_front");
        cardFrontDiv.addEventListener("click", this.soundOn.bind(this));
        cardFrontDiv.innerHTML = `<img src='${this.img}' alt='${this.word}'>`;

        let cardBackDiv = document.createElement("div");
        cardBackDiv.classList.add("card_back");
        cardBackDiv.innerHTML = `<img src='${this.img}' alt='${this.translation}'>`;

        let cardNameFrontDiv = document.createElement("div");
        cardNameFrontDiv.classList.add("card_name_front");
        cardNameFrontDiv.textContent = this.word;

        let cardNameBackDiv = document.createElement("div");
        cardNameBackDiv.classList.add("card_name_back");
        cardNameBackDiv.textContent = this.translation;

        let cardRotateSpan = document.createElement("span");
        cardRotateSpan.classList.add("card_rotate");
        cardRotateSpan.addEventListener('click', function () {
            cardDiv.classList.add("is_flipped");
            cardRotateSpan.style.display = "none";
        });
        let audio = document.createElement("audio");
        audio.classList.add("audio");

        cardWrapperDiv.append(cardContainerDiv);
        cardContainerDiv.append(cardDiv);
        cardDiv.append(cardFrontDiv, cardBackDiv);
        cardFrontDiv.append(cardNameFrontDiv);
        cardBackDiv.append(cardNameBackDiv);
        cardNameFrontDiv.append(cardRotateSpan);
        
    }
}
class CardMenu extends Card {
    createCardDiv() {
        let cardContainerDiv = document.createElement("div");
        cardContainerDiv.classList.add("card_container");
        cardContainerDiv.id = `${this.word}`;
        cardContainerDiv.id = cardContainerDiv.id.toLowerCase().replace(/\s/g, '');
        cardContainerDiv.addEventListener('click', createCards);

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        let cardFrontDiv = document.createElement("a");
        cardFrontDiv.classList.add("card_front");

        cardFrontDiv.innerHTML = `<img class = "main_card_img" src='${this.img}' alt='${this.word}'>`;

        let cardNameMainDiv = document.createElement("div");
        cardNameMainDiv.classList.add("card_name_main_page");
        cardNameMainDiv.textContent = this.word;

        cardWrapperDiv.append(cardContainerDiv);
        cardContainerDiv.append(cardDiv);
        cardDiv.append(cardFrontDiv);
        cardFrontDiv.append(cardNameMainDiv);
        
    }
}

let animals1 = new CardMenu('Animals 1', 'img/rabbit.jpg');
let animals2 = new CardMenu('Animals 2', 'img/giraffe.jpg');
let activity = new CardMenu('Activity', 'img/draw.jpg');
let transport = new CardMenu('Transport', 'img/train.jpg');
let emotions = new CardMenu('Emotions', 'img/happy.jpg');
let nature = new CardMenu('Nature', 'img/rainbow.png');
let food = new CardMenu('Food', 'img/carrot.png');
let clothes = new CardMenu('Clothes', 'img/dress.jpg');

let draw = new Card('draw', 'img/draw.jpg', 'рисовать', 'audio/draw.mp3');
let play = new Card('play', 'img/play.jpg', 'играть', 'audio/play.mp3');
let jump = new Card('jump', 'img/jump.jpg', 'прыгать', 'audio/jump.mp3');
let sing = new Card('sing', 'img/sing.jpg', 'петь', 'audio/sing.mp3');
let run = new Card('run', 'img/run.jpg', 'бегать', 'audio/run.mp3');
let dance = new Card('dance', 'img/dance.jpg', 'танцевать', 'audio/dance.mp3');
let swim = new Card('swim', 'img/swim.jpg', 'плавать', 'audio/swim.mp3');
let ride = new Card('ride', 'img/ride.jpg', 'ездить', 'audio/ride.mp3');

let rabbit = new Card('rabbit', 'img/rabbit.jpg', 'кролик', 'audio/rabbit.mp3');
let sheep = new Card('sheep', 'img/sheep.jpg', 'овечка', 'audio/sheep.mp3');
let dog = new Card('dog', 'img/dog.jpg', 'собака', 'audio/dog.mp3');
let cat = new Card('cat', 'img/cat.jpg', 'кот', 'audio/cat.mp3');
let chicken = new Card('chicken', 'img/chicken.jpg', 'курица', 'audio/chicken.mp3');
let chick = new Card('chick', 'img/chick.jpg', 'цыпленок', 'audio/chick.mp3');
let pig = new Card('pig', 'img/pig.jpg', 'поросенок', 'audio/pig.mp3');
let horse = new Card('horse', 'img/horse.jpg', 'лошадь', 'audio/horse.mp3');

let bird = new Card('bird', 'img/bird.jpg', 'птица', 'audio/bird.mp3');
let fish = new Card('fish', 'img/fish.jpg', 'рыба', 'audio/fish.mp3');
let giraffe = new Card('giraffe', 'img/giraffe.jpg', 'жираф', 'audio/giraffe.mp3');
let frog = new Card('frog', 'img/frog.jpg', 'лягушка', 'audio/frog.mp3');
let lion = new Card('lion', 'img/lion.jpg', 'лев', 'audio/lion.mp3');
let turtle = new Card('turtle', 'img/turtle.jpg', 'черепаха', 'audio/turtle.mp3');
let mouse = new Card('mouse', 'img/mouse.jpg', 'мышь', 'audio/mouse.mp3');
let dolphin = new Card('dolphin', 'img/dolphin.jpg', 'дельфин', 'audio/dolphin.mp3');

let car = new Card('car', 'img/car.jpg', 'машина', 'audio/car.mp3');
let plain = new Card('plain', 'img/plain.jpg', 'самолет', 'audio/plain.mp3');
let train = new Card('train', 'img/train.jpg', 'поезд', 'audio/train.mp3');
let bus = new Card('bus', 'img/bus.jpg', 'автобус', 'audio/bus.mp3');
let ship = new Card('ship', 'img/ship.jpg', 'корабль', 'audio/ship.mp3');
let bicycle = new Card('bicycle', 'img/bicycle.jpg', 'велосипед', 'audio/bicycle.mp3');
let helicopter = new Card('helicopter', 'img/helicopter.jpg', 'вертолет', 'audio/helicopter.mp3');
let taxi = new Card('taxi', 'img/taxi.jpg', 'такси', 'audio/taxi.mp3');

let laughing = new Card('laugh', 'img/laughing.png', 'смеющийся', 'audio/laugh.mp3');
let sad = new Card('sad', 'img/sad.jpg', 'грустный', 'audio/sad.mp3');
let tired = new Card('tired', 'img/tired.png', 'уставший', 'audio/tired.mp3');
let angry = new Card('angry', 'img/angry.png', 'злой', 'audio/angry.mp3');
let scared = new Card('scared', 'img/scared.png', 'испуганный', 'audio/scared.mp3');
let happy = new Card('happy', 'img/happy.jpg', 'радостный', 'audio/happy.mp3');
let surprised = new Card('surprised', 'img/surprised.jpg', 'удивленный', 'audio/surprised.mp3');
let crying = new Card('cry', 'img/crying.jpg', 'плачущий', 'audio/cry.mp3');

let rainbow = new Card('rainbow', 'img/rainbow.png', 'радуга', 'audio/rainbow.mp3');
let rain = new Card('rain', 'img/rain.png', 'дождь', 'audio/rain.mp3');
let snow = new Card('snow', 'img/snow.jpg', 'снег', 'audio/snow.mp3');
let sun = new Card('sun', 'img/sun.png', 'солнце', 'audio/sun.mp3');
let flower = new Card('flower', 'img/flower.png', 'цветок', 'audio/flower.mp3');
let mushroom = new Card('mushroom', 'img/mushroom.png', 'гриб', 'audio/mushroom.mp3');
let mountain = new Card('mountain', 'img/mountain.png', 'гора', 'audio/mountain.mp3');
let tree = new Card('tree', 'img/tree.png', 'дерево', 'audio/tree.mp3');

let carrot = new Card('carrot', 'img/carrot.png', 'морковь', 'audio/carrot.mp3');
let broccoli = new Card('broccoli', 'img/broccoli.png', 'брокколи', 'audio/broccoli.mp3');
let tomato = new Card('tomato', 'img/tomato.png', 'помидор', 'audio/tomato.mp3');
let onion = new Card('onion', 'img/onion.png', 'лук', 'audio/onion.mp3');
let apple = new Card('apple', 'img/apple.png', 'яблоко', 'audio/apple.mp3');
let strawberry = new Card('strawberry', 'img/strawberry.png', 'клубника', 'audio/strawberry.mp3');
let banana = new Card('banana', 'img/banana.png', 'банан', 'audio/banana.mp3');
let cherry = new Card('cherry', 'img/cherry.png', 'вишня', 'audio/cherry.mp3');

let boot = new Card('boot', 'img/boot.jpg', 'ботинок', 'audio/boot.mp3');
let skirt = new Card('skirt', 'img/skirt.jpg', 'юбка', 'audio/skirt.mp3');
let pants = new Card('pants', 'img/pants.jpg', 'брюки', 'audio/pants.mp3');
let blouse = new Card('blouse', 'img/blouse.jpg', 'блузка', 'audio/blouse.mp3');
let coat = new Card('coat', 'img/coat.jpg', 'пальто', 'audio/coat.mp3');
let dress = new Card('dress', 'img/dress.jpg', 'платье', 'audio/dress.mp3');
let shirt = new Card('shirt', 'img/shirt.jpg', 'рубашка', 'audio/shirt.mp3');
let shoe = new Card('shoe', 'img/shoe.jpg', 'туфли', 'audio/shoe.mp3');

let categories = {
    main_page: [animals1, animals2, activity, transport, emotions, nature, food, clothes],
    animals1: [rabbit, sheep, dog, cat, chicken, chick, pig, horse],
    animals2: [bird, fish, giraffe, frog, lion, turtle, mouse, dolphin],
    activity: [draw, play, jump, sing, run, dance, swim, ride],
    transport: [car, plain, train, bus, ship, bicycle, helicopter, taxi],
    emotions: [laughing, sad, tired, angry, scared, happy, surprised, crying],
    nature: [rainbow, rain, snow, sun, flower, mountain, tree, mushroom],
    food: [carrot, broccoli, tomato, onion, apple, strawberry, banana, cherry],
    clothes: [boot, skirt, pants, blouse, coat, dress, shirt, shoe],
};
let cardWrapperDiv = document.querySelector(".card_wrapper");
let menuContainerDiv = document.querySelector(".menu_container");
menuContainerDiv.addEventListener('click', createCards);
let checkBoxInput = document.getElementById("toggle_checkbox");
checkBoxInput.addEventListener('change', checkAppMode);
let playMode = false;

function createCards(event) {

    let category = event.target.id;
    if (category === '') {
        category = this.id;
    }
    closeMenu();
    createCardsForCategory(category);
}

function createCardsForCategory(category) {
    gameIsStarted = false;
    clearPreviousGame();
    counterOfWrongAnswers = 0;
    let card = cardWrapperDiv.lastElementChild;
    //***delete cards if they are***
    if (cardWrapperDiv.hasChildNodes()) {
        while (card) {
            cardWrapperDiv.removeChild(card);
            card = cardWrapperDiv.lastElementChild;
        }
    }
    if (category === "") {
        category = 'main_page';

    }
    if (category !== 'main_page') {
        document.querySelector(".footer").style.display = "none";
    } else {
        document.querySelector(".footer").style.display = "flex";
    }
    //***create new cards***
    if (category === "statistics") {
        createStatisticsCategory();
    } else {
        for (let i = 0; i < categories[category].length; i++) {
            categories[category][i].createCardDiv(category);
        }
    }
   
}

function checkAppMode(elem) {
    playMode = !playMode;
    clearPreviousGame();
    let cardName = document.querySelectorAll(".card_name_front");
    let cardImage = document.getElementsByTagName("img");

    if (playMode === true) {
        if (cardImage[0].className !== "main_card_img") {
            for (var i = 0; i < cardImage.length; i++) {
                cardImage[i].style.height = "100%";
                cardImage[i].style.borderRadius = "10%";
            }
            for (var i = 0; i < cardName.length; i++) {
                cardName[i].style.display = "none";
            }

            let startGameButton = document.querySelector(".start_game");

            if (startGameButton === null) {
                createStartGameButton();
            }
        }
    } else {
        for (var i = 0; i < cardName.length; i++) {
            cardName[i].style.display = "block";
        }
        for (var i = 0; i < cardImage.length; i++) {
            cardImage[i].style.height = "85%";
            cardImage[i].style.borderRadius = "0";
            cardImage[i].style.borderTopLeftRadius = "10%";
            cardImage[i].style.borderTopRightRadius = "10%";
        }
    }
}

function createStartGameButton() {
    let buttonStartGameWrapper = document.createElement("div");
    buttonStartGameWrapper.classList.add("button_start_wrapper");

    let startGameButton = document.createElement("div");
    startGameButton.classList.add("start_game");
    startGameButton.textContent = "Start Game";
    startGameButton.addEventListener('click', startGame)
    let mainTag = document.getElementById("main");
    mainTag.append(buttonStartGameWrapper);
    buttonStartGameWrapper.append(startGameButton);
}

function createRepeatButton() {
    let buttonStartGameWrapper = document.querySelector(".button_start_wrapper");
    let repeatButton = document.createElement("div");
    repeatButton.classList.add("repeat_word");
    repeatButton.addEventListener('click', playRandomAudio)
    buttonStartGameWrapper.prepend(repeatButton);
}
let gameIsStarted = false;
function startGame() {
gameIsStarted = !gameIsStarted;
    clearPreviousGame();
    counterOfWrongAnswers = 0;
    currentAudioIndex = 0;
    let repeatButton = document.querySelector(".repeat_word");
    if (!repeatButton) {
        createRepeatButton();
    }
    //***GET NAME OF CURRENT CATEGORY***/
    let categoryDiv = document.querySelector(".card_container");
    let categoryClassName = categoryDiv.className.split(' ');
    let category = categoryClassName[1];

    //***CREATE ARRAY OF AUDIO OF CURRENT CATEGORY***/
    for (let i = 0; i < categories[category].length; i++) {
        audioArray.push(categories[category][i].audio);
    }
    //***SHUFFLE ARRAY***/
    shuffle(audioArray);
    //***PLAY AUDIO FROM ARRAY***/
    console.log(audioArray)
    playRandomAudio();

}

function shuffle(audioArray) {
    for (let i = audioArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [audioArray[i], audioArray[j]] = [audioArray[j], audioArray[i]];
    }
    return audioArray;
}
let currentAudioIndex = 0;

function playRandomAudio() {

    if (currentAudioIndex === audioArray.length) {
        displayResult();
    } else {
        let audio = document.querySelector(".audio");
        audio.src = `${audioArray[currentAudioIndex]}`;
        audio.id = audio.src.substring(audio.src.lastIndexOf("/") + 1, audio.src.lastIndexOf(".mp3"));
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    }
}

let audioArray = [];
let main = document.getElementById("main");
let ratingDiv = document.createElement("div");
ratingDiv.classList.add("ratingDiv");
main.prepend(ratingDiv);
let counterOfWrongAnswers = 0;

function checkAnswer(event) {

    let audio = document.querySelector(".audio");
    let audioReaction = document.querySelector(".audio_reaction");

    if (audio.id === event.target.alt) {
        audioReaction.src = "audio/correct.mp3";
        audioReaction.play();
        event.target.classList.add("opacity_style");
        let imageAnswer = document.createElement("div");
        imageAnswer.classList.add("correct_icon");
        ratingDiv.append(imageAnswer);
        currentAudioIndex++;
        setTimeout(playRandomAudio, 500);
    } else {
        if (event.target.className !== "opacity_style" && event.target.className !== "card") {
            audioReaction.src = "audio/error.mp3";
            audioReaction.play();
            let imageAnswer = document.createElement("div");
            imageAnswer.classList.add("wrong_icon");
            ratingDiv.append(imageAnswer);
            counterOfWrongAnswers++;
        }
    }
}

function displayResult() {
    let divImage = document.createElement("div");
    let audio = document.querySelector(".audio");
    let audioReaction = document.querySelector(".audio_reaction");

    clearPreviousGame();
    while (cardWrapperDiv.firstChild) {
        cardWrapperDiv.removeChild(cardWrapperDiv.lastChild);
    }
    if (counterOfWrongAnswers === 0) {
        divImage.innerHTML = "<img src='img/success.jpg' alt='success'>";
        cardWrapperDiv.append(divImage);
        audioReaction.src = "audio/success.mp3";
        audioReaction.play();
    } else {
        divImage.innerHTML = "<img src='img/failure.jpg' alt='failure'>";
        let div = document.createElement("div");
        div.classList.add("text_result");
        div.textContent = "You have " + `${counterOfWrongAnswers}` + " wrong answers";
        cardWrapperDiv.append(div, divImage);
        audioReaction.src = "audio/failure.mp3";
        audioReaction.play();
    }
    gameIsStarted = false;
    counterOfWrongAnswers = 0;
    setTimeout(() => createCardsForCategory('main_page'), 5000);
}

function clearPreviousGame() {
    audioArray = [];
    let repeatButton = document.querySelector(".repeat_word");
    let startGameButton = document.querySelector(".start_game");
    if (repeatButton) {
        repeatButton.remove();
    }
    if (startGameButton) {
        startGameButton.remove();
    }
    let correctAnswersCards = document.querySelectorAll(".opacity_style")
    while (ratingDiv.firstChild) {
        ratingDiv.removeChild(ratingDiv.lastChild);
    }

    if (correctAnswersCards) {
        correctAnswersCards.forEach(function (el) {
            el.classList.remove("opacity_style");
        });

    }

}

//***STATISTICS MODULE */
let tableHeaders = ['Word', 'Translation', 'Category', 'Clicks', 'Right', 'Wrong', '% errors'];
let statistics = {};

function createStatisticsCategory() {
  
    let statisticsWrapper = document.createElement("div");
    statisticsWrapper.classList.add("statistics_wrapper");
    statisticsWrapper.id = "statistics";

    let statisticsTable = document.createElement("table");
    statisticsTable.classList.add("statistics_table");

    cardWrapperDiv.append(statisticsWrapper);
    statisticsWrapper.append(statisticsTable);

    let statisticsTableRow = appendRowToTable(statisticsTable);

    for (let i = 0; i < tableHeaders.length; i++) {
        let statisticsTableHead = document.createElement("th");
        statisticsTableHead.classList.add("statistics_head");
        statisticsTableHead.textContent = `${tableHeaders[i]}`;
        statisticsTableRow.append(statisticsTableHead);
    }

    for (let prop in statistics) {
        let statisticsTableRow = appendRowToTable(statisticsTable);

        let wordErrors = `${statistics[prop].errors}`;
        let wordWord = `${statistics[prop].word}`;
        let wordTranslation = `${statistics[prop].translation}`;
        let wordClicks = `${statistics[prop].clicks}`;
        let wordCategory = `${statistics[prop].category}`;
        let wordWrong = `${statistics[prop].wrong}`;
        let wordRight = `${statistics[prop].right}`;

        appendDataToTableRow(wordWord, statisticsTableRow);
        appendDataToTableRow(wordTranslation, statisticsTableRow);
        appendDataToTableRow(wordCategory, statisticsTableRow);
        appendDataToTableRow(wordClicks, statisticsTableRow);
        appendDataToTableRow(wordRight, statisticsTableRow);
        appendDataToTableRow(wordWrong, statisticsTableRow);
        appendDataToTableRow(wordErrors, statisticsTableRow);

    }
}
function createStatisticsObject(){
    let arrayOfCategoryArrays = [categories.animals1, categories.animals2, categories.activity, categories.transport, categories.emotions, categories.nature, categories.food, categories.clothes];

    for (let i = 0; i < arrayOfCategoryArrays.length; i++) {
        for (let y = 0; y < arrayOfCategoryArrays[i].length; y++) {
            statistics[`${arrayOfCategoryArrays[i][y].word}`] = {
                'word': `${arrayOfCategoryArrays[i][y].word}`,
                'translation': `${arrayOfCategoryArrays[i][y].translation}`,
                'category': 0,
                'clicks': 0,
                'right': 0,
                'wrong': 0,
                'errors': 0
            };
        }
    }
}

function appendRowToTable(statisticsTable) {
    let statisticsTableRow = document.createElement("tr");
    statisticsTableRow.classList.add("statistics_row");
    statisticsTable.append(statisticsTableRow);
    return statisticsTableRow;
}

function appendDataToTableRow(text, statisticsTableRow) {
    let statisticsTableData = document.createElement("td");
    statisticsTableData.classList.add("statistics_data");
    statisticsTableData.textContent = text;
    statisticsTableRow.append(statisticsTableData);
}



function addClicksToStatistics(cardContainerDiv) {
    let counterOfClicks = 0;
    if(cardContainerDiv !== 'underfined'){
        counterOfClicks++;
        statistics[cardContainerDiv]['clicks'] += counterOfClicks;  
    }
    
}

//***CLOSE MENU ONCLICK***
document.addEventListener("click", isMenuChecked);

function isMenuChecked(event) {
    if (event.target.closest(".hamburger-menu")) return;
    closeMenu();
};

function closeMenu() {
    if (document.getElementById('menu_toggle').checked) {
        document.getElementById('menu_toggle').checked = false;
    }
}