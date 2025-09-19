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