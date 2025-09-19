# Block 2: DOM Grundlagen - NOTIZEN

## Was ist das DOM?
- DOM = Document Object Model
- Ermöglicht Zugriff und Manipulation von HTML-Elementen mit JavaScript
- HTML-Seite wird als Baum-Struktur dargestellt

## Element-Zugriff

### getElementById()
```javascript
const element = document.getElementById("meine-id");
```
- Gibt **ein Element** mit der angegebenen ID zurück
- Gibt `null` zurück wenn Element nicht gefunden

### querySelector()
```javascript
const element = document.querySelector("#meine-id");      // ID
const element = document.querySelector(".meine-klasse");  // Klasse
const element = document.querySelector("h1");             // Tag
const element = document.querySelector("ul li:first-child"); // CSS-Selektor
```
- Gibt das **erste** Element zurück, das dem CSS-Selektor entspricht
- Sehr flexibel - alle CSS-Selektoren möglich

### querySelectorAll()
```javascript
const elements = document.querySelectorAll("li");           // Alle li-Elemente
const elements = document.querySelectorAll(".gruen");       // Alle mit Klasse "gruen"
const elements = document.querySelectorAll("ul li");        // Alle li in ul
```
- Gibt eine **NodeList** zurück (kein echtes Array!)
- Für Arrays verwenden: `Array.from(elements)`

## Prüfungsrelevante Selektoren

### Pseudo-Selektoren (aus Probeprüfung)
```javascript
// Erstes Kind-Element
document.querySelector("ul li:first-child")

// n-tes Kind-Element  
document.querySelector("ul li:nth-child(3)")  // 3. Element

// Nicht bestimmte Klasse
document.querySelectorAll("li:not(.gruen)")   // Alle li OHNE Klasse "gruen"
```

## Element-Eigenschaften ändern

### textContent
```javascript
element.textContent = "Neuer Text";
console.log(element.textContent);  // Text lesen
```

### innerHTML
```javascript
element.innerHTML = "<strong>HTML-Code</strong>";
```

### Attribute
```javascript
element.src = "neues-bild.jpg";        // Bild-Quelle ändern
element.href = "https://example.com";  // Link ändern
element.alt = "Alternativer Text";     // Alt-Text ändern
```

## NodeList vs Array

### Problem
```javascript
const elements = document.querySelectorAll("li");
// elements ist NodeList, KEIN Array!
```

### Lösung für echtes Array
```javascript
const elementsArray = Array.from(document.querySelectorAll("li"));
// Jetzt kannst du Array-Methoden verwenden: map, filter, etc.
```

### childNodes Problem
```javascript
const parent = document.querySelector("ul");
const children = parent.childNodes;  // Enthält auch Text-Knoten!

// Besser:
const children = parent.querySelectorAll("li");  // Nur li-Elemente
```

## Häufige Prüfungsfragen

### "Erstes Element einer Liste selektieren"
```javascript
// Antwort: a
document.querySelectorAll("ul li:first-child")
```

### "Alle Gemüse ohne Klasse selektieren"  
```javascript
// Wenn nach Elementen OHNE bestimmte Klasse gefragt wird
document.querySelectorAll("li:not(.klassenname)")
```

### "Rote Gemüse selektieren"
```javascript
// Alle mit Klasse "rot"
document.querySelectorAll(".rot")
```

## Debugging-Tipps
```javascript
// Element gefunden?
console.log(element);  // null = nicht gefunden

// Anzahl Elemente
console.log(elements.length);

// Alle Klassen eines Elements
console.log(element.classList);
```

## Wichtige Punkte für Prüfung
- `querySelector()` gibt **ein Element** zurück
- `querySelectorAll()` gibt **NodeList** zurück  
- Bei CSS-Selektoren: `.` für Klassen, `#` für IDs
- `:first-child`, `:nth-child()`, `:not()` sind wichtige Pseudo-Selektoren
- `childNodes` enthält auch Text-Knoten - meist nicht gewünscht!