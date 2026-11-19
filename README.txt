# FOUR HEARTS — böngészős romcom játék

## Indítás
1. Csomagold ki a ZIP-et.
2. Nyisd meg az `index.html` fájlt egy modern böngészőben.
3. A játék mentése automatikusan a böngésző localStorage tárhelyére kerül.

## Saját képek behelyezése

A képek helyét az `assets` mappában találod. A játék akkor is működik, ha még nincsenek képeid: ilyenkor névkezdőbetűs helykitöltő jelenik meg.

### Hátterek
Másold a saját képeidet az alábbi neveken:
- `assets/backgrounds/menu.jpg` — főmenü
- `assets/backgrounds/bedroom.jpg` — főhős szobája
- `assets/backgrounds/school.jpg` — iskola
- `assets/backgrounds/cafe.jpg` — kávézó
- `assets/backgrounds/cinema.jpg` — mozi
- `assets/backgrounds/gym.jpg` — edzőterem
- `assets/backgrounds/beach.jpg` — tengerpart / randijelenet

### Karakterképek
A képek legyenek lehetőleg átlátszó hátterű PNG-k, teljes alakos vagy deréktól felfelé látható karakterrel.

- `assets/characters/momo/`
- `assets/characters/victoria/`
- `assets/characters/cinema/` (Nora)
- `assets/characters/charlie/`

Mindegyik mappába az alábbi fájlnevekkel tegyél képeket:
`normal.png`, `happy.png`, `laugh.png`, `shy.png`, `blush.png`, `angry.png`, `smirk.png`, `surprised.png`

Nem kell minden arckifejezést azonnal elkészítened: ha egy kép hiányzik, a játék helykitöltőt mutat. A `script.js`-ben a `characterImage()` függvény kezeli a képek betöltését.

### Cutscene képek
- `assets/cutscenes/beach1.jpg`
- `assets/cutscenes/beach2.jpg`
- `assets/cutscenes/beach3.jpg`
- `assets/cutscenes/beach4.jpg`
- `assets/cutscenes/kiss_momo.jpg`
- `assets/cutscenes/kiss_victoria.jpg`
- `assets/cutscenes/kiss_cinema.jpg`
- `assets/cutscenes/kiss_charlie.jpg`

## Játékmenet
- A főszereplő nevét a játék elején adhatod meg.
- A hálószobából négy helyszín közül választhatsz.
- Egy látogatás egy napot jelent.
- Minden karakterhez öt szív tartozik; a válaszok növelhetik vagy csökkenthetik a kapcsolatot.
- A negatív döntések későbbi pozitív választásokkal javíthatók.
- Négy szívnél elérhető a randi gomb.
- Az öt szív elérése a közös tengerparti befejezés felé visz.

## Testreszabás
A történet szövegei, válaszai és kapcsolatpontjai a `script.js` fájlban vannak a `characters` objektumban. A háttérképek fájlnevei a `style.css`-ben, a karakterképek fájlnevei a `script.js`-ben módosíthatók.
