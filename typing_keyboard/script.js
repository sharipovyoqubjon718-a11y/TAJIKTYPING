// Рӯйхати мукаммал ва бехатои 100 дараҷаи чопи тоҷикӣ
const levels = [
    { level: 1, text: "модар падар дар бар" },
    { level: 2, text: "додар роҳ рав кор" },
    { level: 3, text: "фаҳм ор бардор мол" },
    { level: 4, text: "дар олам мард бошад" },
    { level: 5, text: "парол бардор форам" },
    { level: 6, text: "китоб хондан осон аст" },
    { level: 7, text: "мактаби мо обод аст" },
    { level: 8, text: "роҳбар дар сари кор" },
    { level: 9, text: "фароғат дар ин хона" },
    { level: 10, text: "падар модари ман аст" },
    { level: 11, text: "китоб мехонам ҳар рӯз" },
    { level: 12, text: "мактаб рафтан даркор" },
    { level: 13, text: "дарси забони тоҷикӣ" },
    { level: 14, text: "забони ширини модарам" },
    { level: 15, text: "ватани азизу маҳбуби мо" },
    { level: 16, text: "Душанбе пойтахти Тоҷикистон" },
    { level: 17, text: "Хуҷанд шаҳри бостонии мо" },
    { level: 18, text: "Кӯлоб шаҳри қадима аст" },
    { level: 19, text: "Бохтар маркази вилоят аст" },
    { level: 20, text: "Ваҳдат ноҳияи зебои диёр" },
    { level: 21, text: "Истаравшан шаҳри ҳунармандон" },
    { level: 22, text: "Хоруғ дар Кӯҳистони Бадахшон" },
    { level: 23, text: "Нерӯгоҳи Норак бузург аст" },
    { level: 24, text: "Роғун сохтмони бузурги аср" },
    { level: 25, text: "Панҷакент ватани Рӯдакӣ аст" },
    { level: 26, text: "Истиқлол шаҳри навсохт" },
    { level: 27, text: "Турсунзода шаҳри пахтакорон" },
    { level: 28, text: "Восеъ ноҳияи номдор аст" },
    { level: 29, text: "Данғара ноҳияи саноатӣ аст" },
    { level: 30, text: "Ҳисор қалъаи таърихӣ дорад" },
    { level: 31, text: "илму дониш чароғи дил аст" },
    { level: 32, text: "ҷавонон ояндаи боэътимоди ватан" },
    { level: 33, text: "барномасозӣ касби ояндасоз аст" },
    { level: 34, text: "технологияҳои иттилоотӣ дар пешрафт" },
    { level: 35, text: "забони тоҷикӣ забони ширин аст" },
    { level: 36, text: "одамизод ба ахлоқу илм зебост" },
    { level: 37, text: "меҳнати ҳалол баробари роҳат аст" },
    { level: 38, text: "ватанро дӯст доштан имони инсон аст" },
    { level: 39, text: "варзиш гарави саломатӣ ва қувват аст" },
    { level: 40, text: "китобхона манбаи бузурги маърифат" },
    { level: 41, text: "суръати чопкуниро баланд мебардорем" },
    { level: 42, text: "ҳарфҳои қаҳрамононаи тоҷикӣ дар чоп" },
    { level: 43, text: "исбот кардани қобилияти барномасозӣ" },
    { level: 44, text: "сохтани лоиҳаҳои муосири миллӣ" },
    { level: 45, text: "омӯзиши барномасозӣ бо забони модарӣ" },
    { level: 46, text: "фаҳмидани мантиқи кодҳо дар сафҳа" },
    { level: 47, text: "кор кардан бо базаи маълумоти калон" },
    { level: 48, text: "таҳияи системаҳои иттилоотии худкор" },
    { level: 49, text: "беҳтар кардани тарроҳии саҳифаҳо" },
    { level: 50, text: "истифодаи технологияҳои навтарин" },
    { level: 51, text: "ҳунар беҳ аз зари ғанӣ аст" },
    { level: 52, text: "қатра қатра дарё шавад" },
    { level: 53, text: "дониш амволи бебаҳо аст" },
    { level: 54, text: "рӯдакӣ устоди шоирони ҷаҳон аст" },
    { level: 55, text: "исмоил сомонӣ асосгузори давлат" },
    { level: 56, text: "кӯҳҳои баланди Тоҷикистон зебоанд" },
    { level: 57, text: "чашмаи оби соф ва зулол" },
    { level: 58, text: "сухан кӯтоҳ куну маънӣ бисёр баён кун" },
    { level: 59, text: "ғурури миллии ҳар як фарзанди ватандор" },
    { level: 60, text: "бузургтарин сарват ин ақлу заковати инсон аст" },
    { level: 61, text: "табиати зебои кӯҳистони Тоҷикистон беҳтарин аст" },
    { level: 62, text: "шаҳрҳои бостонии мо таърихи чандинсола доранд" },
    { level: 63, text: "насиҳати бузургморону шоирони классик чароғи роҳ аст" },
    { level: 64, text: "муваффақият бо меҳнат ва кӯшиши пайваста бадаст меояд" },
    { level: 65, text: "омӯхтани забонҳои хориҷӣ ва барномасозӣ замони муосир аст" },
    { level: 66, text: "дастгирии оила ва дӯстон дар корҳои эҷодӣ муҳим аст" },
    { level: 67, text: "эҷод кардани барномаҳои муфид барои мардуми тоҷик" },
    { level: 68, text: "пешрафти соҳаи маориф ояндаи давлатро мустаҳкам мекунад" },
    { level: 69, text: "муносибати нек ба атрофиён нишони одамият аст" },
    { level: 70, text: "истифодаи дурусти вақт калиди ҳамаи муваффақиятҳост" },
    { level: 71, text: "эҷодкорӣ ва навоварӣ дар тарҳрезии барномаҳои компютерӣ" },
    { level: 72, text: "фаҳмидани ҳар як фармон дар забони барномасозӣ" },
    { level: 73, text: "навиштани коди тоза ва фаҳмо барои дигар барномасозон" },
    { level: 74, text: "бартараф кардани мушкилот ва хатогиҳо дар ҷараёни кор" },
    { level: 75, text: "боварӣ ба худ ва пеш рафтан ба сӯи мақсадҳои олӣ" },
    { level: 76, text: "офаридани чизи нав ки то ҳол касе онро насохтааст" },
    { level: 77, text: "таҷрибаи бой дар соҳаи технология ва барномасозӣ" },
    { level: 78, text: "маҳорати баланди чопкунӣ бо истифодаи тамоми ангуштон" },
    { level: 79, text: "суръати баланд ва бехато навиштани матнҳои душвор" },
    { level: 80, text: "ҳарфҳои хоси тоҷикӣ бояд дар ҳар як сатр дуруст истифода шаванд" },
    { level: 81, text: "системаи пешрафтаи санҷиши суръат ва ҳисоби холҳои корбар" },
    { level: 82, text: "барномаи омӯзишии мо ба шумо дар омӯхтани чопи босуръат кӯмак мекунад" },
    { level: 83, text: "ҳар як дараҷаи нав маҳорати шуморо боз ҳам мустаҳкамтар месозад" },
    { level: 84, text: "бознигарӣ ва такмили пайвастаи лоиҳа барои беҳтарин натиҷа" },
    { level: 85, text: "интиқоли барнома ба сервер ва дастрас кардани он барои ҳамагон" },
    { level: 86, text: "ифтихор аз он ки чунин лоиҳаи муфид бо забони тоҷикӣ сохта шуд" },
    { level: 87, text: "даҳ дараҷаи охирин барои мутахассисони воқеии чопи босуръат" },
    { level: 88, text: "қадам ба қадам сӯи қуллаҳои нави барномасозӣ ва технология" },
    { level: 89, text: "рушди пайвастаи зеҳнӣ ва амалӣ дар соҳаи рақамӣ" },
    { level: 90, text: "мукаммал кардани интерфейси корбар ва тарҳи замонавии он" },
    { level: 91, text: "санҷиши ниҳоии нармафзор дар шароити гуногуни корӣ ва серверӣ" },
    { level: 92, text: "табрикот ба шумо ки то ин марҳилаи душвор ва пуршараф расидед" },
    { level: 93, text: "Тоҷикистон сарзамини сабзу хуррам ва соҳиби тамаддуни қадимӣ аст" },
    { level: 94, text: "илму дониш бузургтарин сарватест ки ҳеҷ гоҳ гум намешавад" },
    { level: 95, text: "ҳунар омӯзу ба ҳар кас биомӯз ки ҳунар чароғи роҳи зиндагист" },
    { level: 96, text: "қаҳрамонони ватан ва шахсиятҳои бузурги таърихии тоҷик зиндаанд" },
    { level: 97, text: "омӯзиши босуръати клавиатура бо забони ноби тоҷикӣ" },
    { level: 98, text: "сохтани лоиҳаҳои мустақил таҷрибаи беҳтарин аст" },
    { level: 99, text: "пешрафти техника ва технологияҳои муосир дар ҷаҳон" },
    { level: 100, text: "Шумо бомуваффақият тамоми сад дараҷаи омӯзиши чопи тоҷикиро хатм кардед" }
];

let currentLevelIndex = 0;
let currentCharIndex = 0;
let errorCount = 0;
let timerInterval = null;
let timeLeft = 0;
let isStarted = false;

const textDisplay = document.getElementById('text-display');
const levelDisplay = document.getElementById('level');
const errorDisplay = document.getElementById('errors');
const timerDisplay = document.getElementById('timer');

function getTimeForLevel(lvl) {
    if (lvl <= 10) return 30;
    if (lvl <= 25) return 25;
    if (lvl <= 50) return 20;
    if (lvl <= 75) return 15;
    if (lvl <= 95) return 12;
    return 10;
}

function loadLevel() {
    if (currentLevelIndex >= levels.length) {
        alert("Табрик! Шумо ҳамаи 100 дараҷаро бомуваффақият гузаштед!");
        currentLevelIndex = 0;
    }
    
    const currentText = levels[currentLevelIndex].text;
    textDisplay.innerHTML = '';
    textDisplay.classList.remove('game-over-anim');
    currentCharIndex = 0;
    isStarted = false;
    clearInterval(timerInterval);
    
    timeLeft = getTimeForLevel(levels[currentLevelIndex].level);
    if (timerDisplay) {
        timerDisplay.innerText = timeLeft < 10 ? "0" + timeLeft : timeLeft;
    }
    
    currentText.split('').forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char === ' ' ? ' ' : char;
        if (char === ' ') {
            charSpan.classList.add('char-space');
        }
        if (index === 0) charSpan.classList.add('char-current');
        textDisplay.appendChild(charSpan);
    });

    if (levelDisplay) {
        levelDisplay.innerText = levels[currentLevelIndex].level;
    }
}

// Коркарди тамом шудани вақт бо аниматсияи дохили экран (бе alert-и مرورгер)
function handleTimeOut() {
    clearInterval(timerInterval);
    
    textDisplay.innerHTML = "⏳ Вақт тамом шуд! Бозгашт ба Дараҷаи 1...";
    textDisplay.classList.add('game-over-anim');

    setTimeout(() => {
        textDisplay.classList.remove('game-over-anim');
        currentLevelIndex = 0;
        errorCount = 0;
        if (errorDisplay) errorDisplay.innerText = errorCount;
        loadLevel();
    }, 1500);
}

function startTimer() {
    if (!isStarted) {
        isStarted = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timerDisplay) {
                timerDisplay.innerText = timeLeft < 10 ? "0" + timeLeft : timeLeft;
            }

            if (timeLeft <= 0) {
                handleTimeOut();
            }
        }, 1000);
    }
}

document.addEventListener('keydown', (e) => {
    // Агар аниматсияи бохт рафта истода бошад, пахши тугмаҳоро муваққатан манъ мекунем
    if (textDisplay.classList.contains('game-over-anim')) return;

    let typedChar = e.key;
    
    if (e.code === 'Space' || e.key === ' ') {
        typedChar = ' ';
        e.preventDefault();
    }

    if (e.key.length > 1 && e.code !== 'Space') return;

    startTimer();

    const currentText = levels[currentLevelIndex].text;
    const charSpans = textDisplay.querySelectorAll('span');
    const expectedChar = currentText[currentCharIndex];

    highlightKey(e.code);

    if (typedChar === expectedChar) {
        charSpans[currentCharIndex].classList.remove('char-current', 'char-wrong');
        charSpans[currentCharIndex].classList.add('char-correct');
        currentCharIndex++;

        if (currentCharIndex < currentText.length) {
            charSpans[currentCharIndex].classList.add('char-current');
        } else {
            clearInterval(timerInterval);
            setTimeout(() => {
                currentLevelIndex++;
                loadLevel();
            }, 300);
        }
    } else {
        charSpans[currentCharIndex].classList.add('char-wrong');
        errorCount++;
        if (errorDisplay) {
            errorDisplay.innerText = errorCount;
        }
    }
});

function highlightKey(code) {
    const keyElement = document.getElementById(code);
    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 150);
    }
}

loadLevel();