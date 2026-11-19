
// ============================================================
// FOUR HEARTS
// Egyfájlos visual novel játékmotor
// ============================================================


// ============================================================
// 1. ALAPOK
// ============================================================

const $ = id => document.getElementById(id);

const SAVE_NAME = "fourHeartsSave";

const order = ["momo", "victoria", "cinema", "charlie"];

const places = {
    school: "Iskola",
    cafe: "Kávézó",
    cinema: "Mozi",
    gym: "Edzőterem"
};

const expressionFiles = {
    normal: "normal",
    happy: "happy",
    laugh: "laugh",
    shy: "shy",
    blush: "blush",
    angry: "angry",
    smirk: "smirk",
    surprised: "surprised",
    sad: "sad"
};


// ============================================================
// 2. KARAKTEREK ÉS TÖRTÉNETEK
// ============================================================

const characters = {

    // --------------------------------------------------------
    // MOMO
    // --------------------------------------------------------

    momo: {
        name: "Momo",
        place: "school",
        title: "A csendes zseni",
        color: "#9a7ab5",

        route: [
            {
                s: "Momo",
                e: "shy",
                t: "Öhm... te vagy az új osztálytársam, igaz? Azt hiszem, láttalak már a könyvtárban. Nem vagyok túl jó az első benyomásokban."
            },
            {
                s: "Narrátor",
                t: "Momo félénken megigazítja a könyveit. Látszik rajta, hogy szeretne beszélgetni, csak nem tudja, hogyan kezdje."
            },
            {
                s: "Momo",
                e: "normal",
                t: "Egyébként egy logikai feladványon dolgozom. Nem kötelező segítened. Mármint... örülnék neki. Ha ráérsz."
            },
            {
                s: "Momo",
                e: "happy",
                t: "Megoldottad! Ez... lenyűgöző. Ritkán találok valakit, aki ilyen gyorsan észreveszi a mintákat."
            },
            {
                s: "Momo",
                e: "blush",
                t: "Azt hiszem, jó lenne, ha máskor is együtt tanulnánk. Nem csak a feladványok miatt."
            }
        ],

        days: [
            {
                t: "A könyvtár csendjében Momo egy jegyzetfüzet fölé hajol. Amikor meglát, gyorsan becsukja.",
                q: "Mit mondasz neki?",
                a: [
                    ["„Titkos kutatás? Most már kíváncsivá tettél.”", 1],
                    ["„Már megint tanulsz? Nem unalmas ez?”", -1],
                    ["„Szia! Hoztam neked egy extra tollat.”", 1]
                ]
            },
            {
                t: "Momo egy nehéz feladatot mutat. A lap szélén apró, vicces rajzok sorakoznak.",
                q: "Hogyan reagálsz?",
                a: [
                    ["Megkérdezed, mit jelentenek a rajzok.", 1],
                    ["Kineveted a rajzait.", -1],
                    ["Elismered, hogy nagyon kreatívak.", 1]
                ]
            },
            {
                t: "A suli után Momo még maradna. Azt mondja, van egy könyv, amit szerinte neked is el kell olvasnod.",
                q: "Mit választasz?",
                a: [
                    ["Megkéred, meséljen róla.", 1],
                    ["Azt mondod, inkább hazamennél.", -1],
                    ["Felajánlod, hogy együtt olvassátok el.", 1]
                ]
            },
            {
                t: "Momo szokatlanul izgatottan mesél egy tudományos versenyről. Aztán elhallgat: fél a szerepléstől.",
                q: "Mivel bátorítod?",
                a: [
                    ["„Nem kell tökéletesnek lenned. Ott leszek és szurkolok.”", 1],
                    ["„Ha félsz, inkább ne indulj.”", -1],
                    ["„Gyakorolhatunk együtt, ha szeretnéd.”", 1]
                ]
            },
            {
                t: "A nap végén Momo egy apró, kézzel készített könyvjelzőt ad neked. A hátuljára ezt írta: „Köszönöm, hogy meghallgatsz.”",
                q: "Mit felelsz?",
                a: [
                    ["„Ez nagyon kedves. Megőrzöm.”", 1],
                    ["„Aranyos, de nincs rá szükségem.”", -1],
                    ["„Én is szeretek veled időt tölteni.”", 1]
                ]
            }
        ],

        date: "Momo egy apró könyvesboltba hív, ahol órákig beszélgettek kedvenc történeteitekről. A végén egy közös könyvjelzőt választotok."
    },


    // --------------------------------------------------------
    // VICTORIA
    // --------------------------------------------------------

    victoria: {
        name: "Victoria",
        place: "cafe",
        title: "A kávézó örök hangja",
        color: "#d27b93",

        route: [
            {
                s: "Victoria",
                e: "smirk",
                t: "Hé, te! Igen, te. Már percek óta úgy állsz ott, mintha elvesztetted volna a térképedet. Mit kérsz? És ne mondd, hogy vizet."
            },
            {
                s: "Narrátor",
                t: "Victoria magabiztosan könyököl a pulton. A hangja csipkelődő, de a mosolya barátságos."
            },
            {
                s: "Victoria",
                e: "normal",
                t: "Én készítem itt a legjobb forró csokit. Nem, ez nem vita tárgya. Kóstold meg, aztán mondhatsz véleményt."
            },
            {
                s: "Victoria",
                e: "blush",
                t: "Na jó, talán nem is olyan rossz társaság vagy. De ezt ne terjeszd, még a végén kedvesnek néznek."
            },
            {
                s: "Victoria",
                e: "happy",
                t: "Holnap is benézel? Nem mintha várnálak. Csak... lehet, hogy marad még abból a sütiből."
            }
        ],

        days: [
            {
                t: "Victoria már messziről kiszúr. Egy új süteményt tesz a pultra, és kihívóan rád néz.",
                q: "Mit mondasz?",
                a: [
                    ["„Ha te ajánlod, biztos finom.”", 1],
                    ["„Remélem, jobb, mint a múltkori.”", -1],
                    ["„Kóstoljuk meg együtt!”", 1]
                ]
            },
            {
                t: "A kávézó zsúfolt. Victoria láthatóan fáradt, de még mindig pörög.",
                q: "Hogyan segítesz?",
                a: [
                    ["Felajánlod, hogy segítesz összeszedni az asztalokat.", 1],
                    ["Ugratod, hogy milyen lassú ma.", -1],
                    ["Megkérdezed, tartson-e egy rövid szünetet.", 1]
                ]
            },
            {
                t: "Victoria a kedvenc zenéiről mesél, majd gyorsan hozzáteszi, hogy ezeket csak kevesen értik.",
                q: "Mit felelsz?",
                a: [
                    ["Megkéred, mutasson még pár számot.", 1],
                    ["Azt mondod, túl hangos az ízlése.", -1],
                    ["Elmondod, neked miért tetszik a lelkesedése.", 1]
                ]
            },
            {
                t: "Zárás után ketten maradtok. Victoria bevallja, hogy néha nehéz mindig magabiztosnak mutatnia magát.",
                q: "Mit teszel?",
                a: [
                    ["Őszintén meghallgatod.", 1],
                    ["Azt mondod, neki könnyű, hiszen mindenki kedveli.", -1],
                    ["Elmondod, hogy előtted nem kell megjátszania magát.", 1]
                ]
            },
            {
                t: "Victoria egy saját recept alapján készült italt tesz eléd. A pohárra egy apró szívet rajzolt.",
                q: "Mit mondasz?",
                a: [
                    ["„Ez a kedvencem lett. Köszönöm.”", 1],
                    ["„Miért van szív a poháron?”", -1],
                    ["„Egyszer megtanítasz elkészíteni?”", 1]
                ]
            }
        ],

        date: "Victoria egy hangulatos esti utcai fesztiválra hív. Kóstoltok, zenét hallgattok, és most először ő kérdez rá, hogy mikor találkoztok legközelebb."
    },


    // --------------------------------------------------------
    // NORA
    // --------------------------------------------------------

    cinema: {
        name: "Nora",
        place: "cinema",
        title: "A popkultúra megszállottja",
        color: "#8e83c5",

        route: [
            {
                s: "Nora",
                e: "happy",
                t: "Várj! Te is láttad az új sci-fit?! Mondd, hogy láttad! Jó, ha nem, akkor most azonnal bepótoljuk. Van nálam két jegy."
            },
            {
                s: "Narrátor",
                t: "A szemüveges lány úgy beszél, mintha egyetlen levegővétellel el tudná mesélni az egész filmtörténetet."
            },
            {
                s: "Nora",
                e: "shy",
                t: "Bocsánat, néha kicsit túlpörgök. Csak... ritkán találok valakit, akivel ennyire szívesen beszélek filmekről."
            },
            {
                s: "Nora",
                e: "happy",
                t: "A stáblista után maradjunk még! Van egy elméletem a befejezésről, és szükségem van egy vitapartnerre."
            },
            {
                s: "Nora",
                e: "blush",
                t: "Ez volt az egyik legjobb mozizásom. És nem csak a film miatt."
            }
        ],

        days: [
            {
                t: "Nora egy filmplakát előtt áll, és lelkesen magyaráz egy rejtett utalást.",
                q: "Mit teszel?",
                a: [
                    ["Megkéred, mutassa meg, hol van az utalás.", 1],
                    ["Azt mondod, túl sokat elemez mindent.", -1],
                    ["Te is mondasz egy saját filmes teóriát.", 1]
                ]
            },
            {
                t: "Nora két filmet nem tud eldönteni. Mindkettő a kedvence műfajából való.",
                q: "Melyiket választod?",
                a: [
                    ["Azt, amelyikről ő lelkesebben mesél.", 1],
                    ["Azt, amelyiket te akarod, vita nélkül.", -1],
                    ["Sorsolást javasolsz, hogy együtt döntsetek.", 1]
                ]
            },
            {
                t: "A film közben Nora egy izgalmas jelenetnél majdnem felkiált, aztán zavartan elhallgat.",
                q: "Hogyan reagálsz?",
                a: [
                    ["Mosolyogva jelzed, hogy te is imádod ezt a részt.", 1],
                    ["Rászólsz, hogy maradjon csendben.", -1],
                    ["A szünetben megbeszélitek a jelenetet.", 1]
                ]
            },
            {
                t: "Nora egy régi, kevésbé ismert filmet mutatna meg. Attól tart, unni fogod.",
                q: "Mit felelsz?",
                a: [
                    ["„Ha neked fontos, szívesen megnézem.”", 1],
                    ["„Csak valami újat nézek.”", -1],
                    ["„Mesélj róla, aztán válasszunk együtt.”", 1]
                ]
            },
            {
                t: "Nora készített neked egy mini filmes kvízt. A kérdések között van pár rólad szóló is.",
                q: "Mit mondasz?",
                a: [
                    ["„Ez fantasztikus! Csináljunk egy közös kvízestet.”", 1],
                    ["„Ez túl sok munka volt.”", -1],
                    ["„Tetszik, hogy megjegyezted, miket szeretek.”", 1]
                ]
            }
        ],

        date: "Nora egy retro filmklubba visz. A vetítés után közös fotót készítetek a régi plakátfal előtt, és még hazafelé is a filmről beszélgettek."
    },


    // --------------------------------------------------------
    // CHARLIE
    // --------------------------------------------------------

    charlie: {
        name: "Charlie",
        place: "gym",
        title: "A terem energiabombája",
        color: "#77a89c",

        route: [
            {
                s: "Charlie",
                e: "happy",
                t: "Szia! Új arc vagy? Charlie vagyok. Ha segítség kell a gépeknél, szólj nyugodtan! Az első edzésnap mindig kicsit kaotikus."
            },
            {
                s: "Narrátor",
                t: "Charlie energikusan integet. Barátságos, és láthatóan örül, ha valaki csatlakozik hozzá."
            },
            {
                s: "Charlie",
                e: "normal",
                t: "Nem kell rögtön mindent tudnod. A lényeg, hogy jól érezd magad, és megtaláld, amit szeretsz csinálni."
            },
            {
                s: "Charlie",
                e: "laugh",
                t: "Ez az! Látod? Sokkal könnyebb, ha nem görcsölsz rá. Amúgy jó veled edzeni."
            },
            {
                s: "Charlie",
                e: "blush",
                t: "Figyelj... lenne kedved máskor is együtt jönni? Mármint, edzeni. Meg beszélgetni. Főleg beszélgetni."
            }
        ],

        days: [
            {
                t: "Charlie egy könnyed bemelegítést vezet. Közben észreveszi, hogy bizonytalan vagy.",
                q: "Mit mondasz?",
                a: [
                    ["„Mutatnál pár alapgyakorlatot?”", 1],
                    ["„Ezt mindenki tudja, nem?”", -1],
                    ["„Jó, hogy itt vagy, sokat segít a biztatásod.”", 1]
                ]
            },
            {
                t: "Charlie egy csapatjátékot szervez a teremben. Két ember hiányzik.",
                q: "Hogyan reagálsz?",
                a: [
                    ["Azonnal csatlakozol.", 1],
                    ["Kifogást keresel, hogy ne kelljen.", -1],
                    ["Megkérdezed, milyen szerepre van szükség.", 1]
                ]
            },
            {
                t: "Edzés után Charlie leül melléd. Elmeséli, hogy gyerekkorában mindig ő volt a legügyetlenebb a csapatban.",
                q: "Mit felelsz?",
                a: [
                    ["„Akkor különösen menő, hogy ennyit fejlődtél.”", 1],
                    ["„Ezt nehéz elképzelni.”", -1],
                    ["Megkérdezed, mi segített neki kitartani.", 1]
                ]
            },
            {
                t: "Charlie egy közös túrát tervez a hétvégére, de nem biztos benne, hogy másoknak is tetszene.",
                q: "Mit teszel?",
                a: [
                    ["Segítesz megtervezni az útvonalat.", 1],
                    ["Azt mondod, túl sok szervezés.", -1],
                    ["Lelkesíted, és felajánlod, hogy vele tartasz.", 1]
                ]
            },
            {
                t: "Charlie egy apró sportkulacsot ad neked emlékbe. Azt mondja, jó csapattárs lettél.",
                q: "Mit felelsz?",
                a: [
                    ["„Te pedig remek edzőpartner vagy.”", 1],
                    ["„Nem kellett volna ajándék.”", -1],
                    ["„Remélem, még sok közös napunk lesz.”", 1]
                ]
            }
        ],

        date: "Charlie egy közeli parkba hív egy játékos szabadtéri kihívásra. A végén leültök a fűbe, és a következő közös programot tervezitek."
    }

};


// ============================================================
// 3. VÁLASZTÁSOK UTÁNI EGYEDI REAKCIÓK
// ============================================================

const reactions = {

    momo: {
        positive: [
            {
                text: "Tényleg? Örülök, hogy így gondolod. Veled valahogy könnyebb beszélgetni.",
                face: "blush"
            },
            {
                text: "Ez nagyon kedves tőled. Azt hiszem, kezdek egyre jobban megnyílni előtted.",
                face: "happy"
            },
            {
                text: "Hihi... reméltem, hogy ezt fogod mondani. Jó érzés veled lenni.",
                face: "shy"
            }
        ],

        negative: {
            text: "Ó... értem. Nem akartalak kellemetlen helyzetbe hozni. Talán majd máskor.",
            face: "sad"
        },

        neutral: {
            text: "Érdekes ötlet. Ezen még gondolkodnom kell.",
            face: "normal"
        }
    },


    victoria: {
        positive: [
            {
                text: "Na, látod? Tudtam én, hogy van ízlésed! Nehogy azt hidd, hogy ez most bók volt!",
                face: "blush"
            },
            {
                text: "Hé, ezt most komolyan mondtad? Hát... köszönöm. De ne szokj hozzá!",
                face: "happy"
            },
            {
                text: "Jó, jó... talán mégsem vagy olyan unalmas, mint elsőre gondoltam.",
                face: "smirk"
            }
        ],

        negative: {
            text: "Hűha. Ma valaki igazán kritikus kedvében van. Mindegy, nem mintha érdekelne.",
            face: "angry"
        },

        neutral: {
            text: "Hmmm... ezen még vitatkozhatnánk. De most az egyszer elfogadom.",
            face: "smirk"
        }
    },


    cinema: {
        positive: [
            {
                text: "Várj, tényleg érdekel?! Ez fantasztikus! Máris van legalább három ötletem!",
                face: "happy"
            },
            {
                text: "Ezért szeretek veled beszélgetni. Mindig olyan dolgokat mondasz, amikre nem is számítok.",
                face: "blush"
            },
            {
                text: "Hahaha! Tudtam, hogy te is értékelni fogod! Ezt még meg kell beszélnünk!",
                face: "laugh"
            }
        ],

        negative: {
            text: "Ó... rendben. Lehet, hogy egy kicsit túlságosan belelendültem. Bocsi.",
            face: "shy"
        },

        neutral: {
            text: "Hát, ez is egy vélemény! Nem értek vele teljesen egyet, de meghallgatlak.",
            face: "normal"
        }
    },


    charlie: {
        positive: [
            {
                text: "Ez az! Pontosan ilyen hozzáállás kell! Örülök, hogy együtt csináljuk!",
                face: "laugh"
            },
            {
                text: "Tudod, egyre jobban szeretek veled időt tölteni. Jó csapattárs vagy!",
                face: "blush"
            },
            {
                text: "Hahaha! Ezért jó veled lógni! Mindig feldobod a napomat!",
                face: "happy"
            }
        ],

        negative: {
            text: "Hé, semmi baj. Nem kell mindenben egyetértenünk. Azért remélem, nincs rossz kedved.",
            face: "sad"
        },

        neutral: {
            text: "Hahaha! Nem is rossz gondolat! Na, akkor nézzük, hogyan tovább!",
            face: "happy"
        }
    }

};


// ============================================================
// 4. JÁTÉKÁLLAPOT
// ============================================================

function createState(name = "") {

    const visited = {};
    const met = {};
    const hearts = {};

    order.forEach(key => {
        visited[key] = 0;
        met[key] = false;
        hearts[key] = 0;
    });

    return {
        name,
        day: 1,
        routeStep: 0,
        visited,
        met,
        hearts,
        current: null,
        phase: "intro",
        ending: false
    };
}

let state = createState();

let pendingDayFinish = null;


// ============================================================
// 5. KÉPERNYŐKEZELÉS
// ============================================================

function show(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = $(id);

    if (target) {
        target.classList.add("active");
    }
}


function setScene(place) {

    const scene = $("scene");

    scene.className = "scene " + place + "-bg";

    // Korábbi randik hátterének törlése
    scene.style.backgroundImage = "";

    const names = {
        room: "Hálószoba",
        school: "Iskola",
        cafe: "Kávézó",
        cinema: "Mozi",
        gym: "Edzőterem",
        beach: "Tengerpart"
    };

    $("place-label").textContent = names[place] || place;
}


// ============================================================
// 6. KARAKTERKÉPEK
// ============================================================

function characterImage(key, expression = "normal") {

    const character = characters[key];

    const image = $("character-image");
    const placeholder = $("character-placeholder");

    const file = expressionFiles[expression] || "normal";

    image.onerror = () => {

        image.hidden = true;

        placeholder.style.display = "flex";

        $("placeholder-initial").textContent =
            character.name[0];

        $("placeholder-name").textContent =
            character.name + " képe";
    };

    image.onload = () => {

        image.hidden = false;

        placeholder.style.display = "none";
    };

    image.src = `assets/characters/${key}/${file}.png`;

    image.alt = character.name + " - " + expression;
}


function hideCharacter() {

    $("character-image").hidden = true;

    $("character-placeholder").style.display = "none";
}


// ============================================================
// 7. PÁRBESZÉDRENDSZER
// ============================================================

function speakerLine(speaker, text, expression = "normal") {

    $("speaker").textContent = speaker;

    $("dialogue-text").textContent = text;

    const key = order.find(id => {
        return characters[id].name === speaker;
    });

    if (key) {
        characterImage(key, expression);
    } else {
        hideCharacter();
    }
}


function nextVisible(showIt = true) {

    $("next-button").style.display =
        showIt ? "inline-block" : "none";
}


function clearChoices() {

    $("choices").innerHTML = "";
}


// ============================================================
// 8. VÁLASZTÁSI GOMBOK
// ============================================================

function renderChoices(items, callback) {

    clearChoices();

    nextVisible(false);

    items.forEach((item, index) => {

        const button = document.createElement("button");

        button.textContent = item[0];

        button.addEventListener("click", () => {
            callback(item, index);
        });

        $("choices").appendChild(button);
    });
}


// ============================================================
// 9. KAPCSOLATOK ÉS HUD
// ============================================================

function renderHUD() {

    $("day-label").textContent =
        state.day + ". nap";

    $("player-label").textContent =
        state.name;

    $("relationship-list").innerHTML = order.map(key => {

        const character = characters[key];

        const hearts = state.hearts[key];

        return `
            <div class="relationship">

                <div class="relationship-top">
                    <span>${character.name}</span>
                    <span>${hearts}/5</span>
                </div>

                <small>${character.title}</small>

                <div class="mini-hearts">
                    ${"♥".repeat(hearts)}
                    ${"♡".repeat(5 - hearts)}
                </div>

            </div>
        `;

    }).join("");

    const dateAvailable =
        state.current &&
        state.hearts[state.current] >= 4 &&
        !state.visited[state.current + "Date"];

    $("date-button").disabled = !dateAvailable;

    $("daily-hint").textContent =
        state.phase === "home"
            ? "Válassz egy helyszínt, és töltsd együtt a napot az ottani lánnyal."
            : "A döntéseid alakítják a kapcsolatotokat.";
}


// ============================================================
// 10. MENTÉS ÉS BETÖLTÉS
// ============================================================

function save() {

    localStorage.setItem(
        SAVE_NAME,
        JSON.stringify(state)
    );

    $("continue-game").disabled = false;
}


function load() {

    try {

        const saved = JSON.parse(
            localStorage.getItem(SAVE_NAME)
        );

        if (!saved || !saved.name) return;

        state = saved;

        // Régebbi mentések kompatibilitása
        if (!state.hearts) {
            state.hearts = {};

            order.forEach(key => {
                state.hearts[key] = characters[key].hearts || 0;
            });
        }

        show("game-screen");

        renderHUD();

        if (state.phase === "ending") {
            showEnding();
        } else if (state.phase === "home") {
            homeScene();
        } else if (state.current) {

            const character = characters[state.current];

            setScene(character.place);

            if (state.phase === "route") {
                renderRoute(state.current);
            } else if (state.phase === "reaction") {
                renderDayQuestion(state.current);
            } else {
                renderDayQuestion(state.current);
            }

        } else {
            homeScene();
        }

    } catch (error) {

        console.error("Mentés betöltési hiba:", error);

    }
}


// ============================================================
// 11. ÚJ JÁTÉK
// ============================================================

function start() {

    state = createState(
        $("player-name").value.trim() || "Alex"
    );

    pendingDayFinish = null;

    show("game-screen");

    renderHUD();

    introScene();

    save();
}


// ============================================================
// 12. KEZDŐJELENET
// ============================================================

function introScene() {

    state.phase = "intro";

    setScene("room");

    speakerLine(
        "Narrátor",
        `A telefonod ébresztője megszólal. Új nap, új lehetőségek. ${state.name}, ma valahogy másnak tűnik a város. Mintha minden sarkon egy új történet várna rád.`
    );

    clearChoices();

    nextVisible(true);

    $("next-button").onclick = () => {

        speakerLine(
            state.name,
            "Na jó, ideje felkelni. Vajon merre induljak ma?"
        );

        $("next-button").onclick = homeScene;
    };
}


// ============================================================
// 13. HÁLÓSZOBA ÉS HELYSZÍNVÁLASZTÁS
// ============================================================

function homeScene() {

    state.phase = "home";

    state.current = null;

    setScene("room");

    speakerLine(
        "Narrátor",
        "A szobád kellemes reggeli fényben úszik. Ma te döntöd el, hogyan telik a napod. Hová menj?"
    );

    renderHUD();

    nextVisible(false);

    renderChoices([
        ["Iskola — Momo", "momo"],
        ["Kávézó — Victoria", "victoria"],
        ["Mozi — Nora", "cinema"],
        ["Edzőterem — Charlie", "charlie"]

    ], (choice, index) => {

        travel(order[index]);

    });

    save();
}


// ============================================================
// 14. UTAZÁS
// ============================================================

function travel(key) {

    const character = characters[key];

    const overlay = $("transition");

    overlay.classList.add("show");

    overlay.querySelector("p").textContent =
        "Úton: " + places[character.place] + "...";

    setTimeout(() => {

        overlay.classList.remove("show");

        state.current = key;

        setScene(character.place);

        renderHUD();

        if (!state.met[key]) {

            state.met[key] = true;

            state.routeStep = 0;

            renderRoute(key);

        } else {

            renderDayQuestion(key);

        }

        save();

    }, 650);
}


// ============================================================
// 15. BEMUTATKOZÓ TÖRTÉNET
// ============================================================

function renderRoute(key) {

    const character = characters[key];

    const line = character.route[state.routeStep];

    speakerLine(
        line.s,
        line.t,
        line.e || "normal"
    );

    clearChoices();

    nextVisible(true);

    $("next-button").onclick = () => {

        state.routeStep++;

        if (state.routeStep < character.route.length) {

            renderRoute(key);

        } else {

            state.routeStep = 0;

            state.phase = "choice";

            renderDayQuestion(key);

        }

        save();
    };
}


// ============================================================
// 16. NAPI ESEMÉNY
// ============================================================

function renderDayQuestion(key) {

    const character = characters[key];

    const dayIndex = state.visited[key];

    // Öt alap esemény után ismételhető események
    if (dayIndex >= character.days.length) {

        showExtraEvent(key);

        return;
    }

    const event = character.days[dayIndex];

    speakerLine(
        character.name,
        event.t,
        "normal"
    );

    $("dialogue-text").textContent =
        event.t + "\n\n" + event.q;

    renderChoices(event.a, choice => {

        handleChoice(key, choice);

    });
}


// ============================================================
// 17. ISMÉTELHETŐ ESEMÉNYEK
// ============================================================

function showExtraEvent(key) {

    const character = characters[key];

    speakerLine(
        "Narrátor",
        `${character.name} már nagyon közel áll hozzád. A közös történeteteknek még nincs vége: tölthettek együtt egy újabb napot, és tovább erősíthetitek a kapcsolatotokat.`
    );

    renderChoices([

        ["Egy nyugodt, közös napot választotok.", 1],

        ["Visszamentek a kedvenc helyetekre.", 1],

        ["Megleped egy kedves üzenettel.", 1]

    ], choice => {

        handleChoice(key, choice);

    });
}


// ============================================================
// 18. VÁLASZTÁS FELDOLGOZÁSA
// ============================================================

function handleChoice(key, choice) {

    const delta = choice[1];

    const oldHearts = state.hearts[key];

    // Kapcsolati pontok frissítése
    state.hearts[key] = Math.max(
        0,
        Math.min(5, oldHearts + delta)
    );

    renderHUD();

    // A lány reagál a választásra
    showReaction(key, delta);

    // A nap befejezése csak a reakció után történik
    pendingDayFinish = () => {
        finishDay(key, oldHearts);
    };

    state.phase = "reaction";

    save();
}


// ============================================================
// 19. EGYEDI KARAKTERREAKCIÓK
// ============================================================

function showReaction(key, delta) {

    const character = characters[key];

    const data = reactions[key];

    let reaction;

    if (delta > 0) {

        // Véletlenszerű pozitív reakció
        const possible = data.positive;

        reaction = possible[
            Math.floor(Math.random() * possible.length)
        ];

    } else if (delta < 0) {

        reaction = data.negative;

    } else {

        reaction = data.neutral;

    }

    // A karakter saját szövege és képe jelenik meg
    speakerLine(
        character.name,
        reaction.text,
        reaction.face
    );

    clearChoices();

    nextVisible(true);

    $("next-button").onclick = () => {

        if (pendingDayFinish) {

            const finish = pendingDayFinish;

            pendingDayFinish = null;

            finish();

        }

    };
}


// ============================================================
// 20. NAP VÉGE
// ============================================================

function finishDay(key, oldHearts) {

    const character = characters[key];

    const hearts = state.hearts[key];

    state.visited[key]++;

    state.day++;

    state.phase = "home";

    let message;

    if (hearts > oldHearts) {

        message =
            `Úgy érzed, ${character.name} egyre közelebb kerül hozzád.`;

    } else if (hearts < oldHearts) {

        message =
            "A beszélgetés most nem úgy sikerült, ahogy szeretted volna. Egy későbbi kedves gesztussal javíthatsz rajta.";

    } else {

        message =
            "Jó hangulatban telt a nap.";

    }

    // Ha most lett meg az ötödik szív
    if (hearts === 5 && oldHearts < 5) {

        showKissScene(key);

        return;
    }

    speakerLine(
        "Narrátor",
        `${message} ${character.name} kapcsolatmutatója: ${hearts}/5 szív. A nap véget ért.`
    );

    clearChoices();

    nextVisible(true);

    $("next-button").onclick = () => {

        checkEnding();

        if (!state.ending) {
            homeScene();
        }

    };

    save();
}


// ============================================================
// 21. ÖT SZÍV - KÜLÖNLEGES JELENET
// ============================================================

function showKissScene(key) {

    const character = characters[key];

    setScene("beach");

    $("scene").style.backgroundImage =
        `linear-gradient(#24182c33,#24182c55), url('assets/cutscenes/kiss_${key}.jpg')`;

    speakerLine(
        "Narrátor",
        `${character.name} megáll előtted, majd egy kedves, bátortalan mosollyal közelebb lép. A nap végén megosztotok egy rövid, gyengéd csókot. Ez egy új fejezet kezdete.`
    );

    characterImage(key, "blush");

    clearChoices();

    nextVisible(true);

    $("next-button").onclick = () => {

        checkEnding();

        if (!state.ending) {
            homeScene();
        }

    };

    save();
}


// ============================================================
// 22. RANDI
// ============================================================

function dateEvent() {

    const key = state.current;

    if (!key) return;

    const character = characters[key];

    if (state.hearts[key] < 4) return;

    if (state.visited[key + "Date"]) return;

    state.visited[key + "Date"] = true;

    setScene("beach");

    speakerLine(
        "Narrátor",
        character.date
    );

    clearChoices();

    nextVisible(true);

    $("next-button").onclick = () => {

        setScene(character.place);

        speakerLine(
            character.name,
            "Köszönöm ezt a napot. Jó érzés, hogy egyre jobban megismerjük egymást.",
            "blush"
        );

        $("next-button").onclick = () => {

            state.day++;

            homeScene();

            save();

        };

    };

    renderHUD();

    save();
}


// ============================================================
// 23. VÉGSŐ BEFEJEZÉS
// ============================================================

function checkEnding() {

    const allHeartsFull = order.every(key => {
        return state.hearts[key] === 5;
    });

    if (allHeartsFull) {

        state.phase = "ending";

        state.ending = true;

        showEnding();

    }
}


function showEnding() {

    show("ending-screen");

    $("ending-text").textContent =
        `${state.name} története különleges fordulatot vett: mind a négy lánnyal szoros kapcsolatot alakítottál ki. Úgy döntesz, ideje, hogy a baráti társaságod is találkozzon. Egy napsütéses hétvégén mindannyian a tengerpartra utaztok. Eleinte mindenki kicsit zavarban van, de hamar nevetés tölti be a partot. A naplementében rájössz: a legjobb történeteket nem egyedül írjuk.`;

    const captions = [
        "A közös bemutatkozás",
        "Utazás a partra",
        "Együtt a parton",
        "A naplemente"
    ];

    $("ending-gallery").innerHTML =
        captions.map((caption, index) => {

            return `
                <div class="ending-shot">
                    <img
                        src="assets/cutscenes/beach${index + 1}.jpg"
                        alt="${caption}"
                        onerror="this.remove(); this.parentElement.textContent='${caption}'"
                    >
                </div>
            `;

        }).join("");

    save();
}


// ============================================================
// 24. GOMBOK
// ============================================================

function setupButtons() {

    $("new-game").onclick = () => {
        show("name-screen");
    };


    $("start-story").onclick = start;


    $("continue-game").onclick = load;


    $("next-button").onclick = () => {};


    $("menu-button").onclick = () => {

        if (confirm("Visszalépsz a főmenübe? A mentésed megmarad.")) {

            save();

            show("title-screen");

        }

    };


    $("date-button").onclick = dateEvent;


    $("restart-button").onclick = () => {

        $("player-name").value = state.name;

        localStorage.removeItem(SAVE_NAME);

        start();

    };


    $("title-button").onclick = () => {
        show("title-screen");
    };

}


// ============================================================
// 25. INDÍTÁS
// ============================================================

function initializeGame() {

    setupButtons();

    if (localStorage.getItem(SAVE_NAME)) {
        $("continue-game").disabled = false;
    } else {
        $("continue-game").disabled = true;
    }

}


// A DOM betöltése után indul a játék
if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", initializeGame);

} else {

    initializeGame();

}
