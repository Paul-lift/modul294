# Block 1: Einstieg und Repetition - NOTIZEN

## HTML Grundlagen

### Grundstruktur
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Titel</title>
</head>
<body>
    <!-- Inhalt -->
</body>
</html>
```

### Wichtige HTML-Tags
- `<h1>` bis `<h6>` - Überschriften
- `<p>` - Paragraphen  
- `<ul>` und `<li>` - Listen
- `<div>` - Container
- `<span>` - Inline-Container
- `<a href="">` - Links
- `<img src="" alt="">` - Bilder

### Attribute
- `id="eindeutig"` - Eindeutige ID
- `class="klassenname"` - CSS-Klasse
- `href=""` - Link-Ziel
- `src=""` - Bildquelle

## CSS Grundlagen

### CSS einbinden
```html
<link rel="stylesheet" href="stylesheet.css">
```

### Selektoren
```css
/* Element */
h1 { color: blue; }

/* Klasse */
.klassenname { background: red; }

/* ID */
#eindeutig { font-size: 20px; }

/* Nachfahren */
ul li { margin: 10px; }
```

### Wichtige CSS-Eigenschaften
```css
color: red;              /* Textfarbe */
background-color: blue;  /* Hintergrundfarbe */
font-size: 16px;        /* Schriftgröße */
margin: 10px;           /* Außenabstand */
padding: 5px;           /* Innenabstand */
display: none;          /* Element verstecken */
display: block;         /* Element anzeigen */
display: grid;          /* Grid-Layout */
```

## Elemente verstecken - Wichtige Unterschiede!

### display: none;
```css
.hidden { display: none; }
```
- Element ist **komplett weg** aus dem Layout
- Nimmt **keinen Platz** ein
- Andere Elemente rücken nach
- **Nicht animierbar** (sofortige Änderung)

### visibility: hidden;
```css
.invisible { visibility: hidden; }
```
- Element ist **unsichtbar** aber noch da
- Nimmt **weiterhin Platz** ein (leerer Bereich bleibt)
- Andere Elemente rücken **nicht** nach
- **Animierbar** mit Transitions

### opacity: 0;
```css
.transparent { opacity: 0; }
```
- Element ist **durchsichtig** aber noch da
- Nimmt **weiterhin Platz** ein
- **Interaktiv** (kann noch geklickt werden!)
- **Sehr gut animierbar** und performant

### Praxisvergleich
```html
<div>Element 1</div>
<div class="hidden-method">Verstecktes Element</div>  
<div>Element 3</div>
```

```css
/* display: none - Element 3 rückt direkt nach Element 1 */
.hidden-method { display: none; }

/* visibility: hidden - Lücke bleibt zwischen Element 1 und 3 */
.hidden-method { visibility: hidden; }

/* opacity: 0 - Lücke bleibt, Element kann noch geklickt werden */
.hidden-method { opacity: 0; }
```

## CSS Grid Grundlagen

### Grid Container erstellen
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;    /* 3 gleiche Spalten */
    grid-template-rows: 100px 200px;       /* 2 Zeilen mit festen Höhen */
    gap: 10px;                             /* Abstand zwischen Items */
}
```

### Grid-Template Beispiele
```css
/* Feste Spaltenbreiten */
grid-template-columns: 200px 300px 100px;

/* Flexible Spalten */
grid-template-columns: 1fr 2fr 1fr;       /* 1:2:1 Verhältnis */

/* Automatische Spalten */
grid-template-columns: repeat(3, 1fr);    /* 3 gleiche Spalten */

/* Responsive Grid */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

### Grid Items positionieren
```css
.item {
    grid-column: 1 / 3;     /* Von Spalte 1 bis 3 */
    grid-row: 1 / 2;        /* Von Zeile 1 bis 2 */
}

/* Oder kurz */
.item {
    grid-area: 1 / 1 / 2 / 3;  /* row-start / col-start / row-end / col-end */
}
```

## JavaScript Grundlagen

### Script einbinden
```html
<script src="app.js"></script>
```

### Variablen
```javascript
let variable = "Wert";
const konstante = 42;
var alteSyntax = true;
```

### Datentypen
```javascript
let text = "String";
let zahl = 123;
let boolean = true;
let array = [1, 2, 3];
let objekt = { name: "Paul", alter: 20 };
```

### Funktionen
```javascript
function funktionsname(parameter) {
    return parameter * 2;
}

// Arrow Function
const pfeilFunktion = (param) => {
    return param + 1;
};
```

### Kontrollstrukturen
```javascript
// If-Else
if (bedingung) {
    // Code
} else {
    // Anderer Code
}

// While-Schleife
while (bedingung) {
    // Code
}

// For-Schleife
for (let i = 0; i < 10; i++) {
    // Code
}
```

### Wichtige Methoden
```javascript
// Eingabe
let eingabe = prompt("Nachricht");

// Ausgabe
alert("Nachricht");
console.log("Debug-Ausgabe");

// String-Methoden
text.trim()           // Leerzeichen entfernen
text.length           // Länge

// Array-Methoden
array.push(element)   // Element hinzufügen
array.length          // Anzahl Elemente

// Zahlen
parseFloat(string)    // String zu Zahl
Number.isNaN(wert)    // Prüft ob NaN
```

## Prüfungstipps
- Immer `parseFloat()` für Zahlen-Eingaben verwenden
- Eingabe-Validierung mit `trim()` und `null`-Prüfung
- Bei Schleifen auf Abbruchbedingungen achten
- `console.log()` zum Debuggen nutzen