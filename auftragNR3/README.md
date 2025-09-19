# Block 3: DOM Events - NOTIZEN

## Was sind Events?
- Events = Ereignisse (Klicks, Tasteneingaben, Seitenladen, etc.)
- Mit JavaScript können wir auf diese Events reagieren
- Event-Handler = Funktionen die ausgeführt werden, wenn Event eintritt

## Wichtige Events

### window.onload
```javascript
// RICHTIG: Funktion zuweisen
window.onload = function() {
    console.log("Seite ist geladen");
};

// ODER mit Arrow Function
window.onload = () => {
    console.log("Seite ist geladen");
};

// FALSCH: Funktion ausführen
window.onload = meineFunktion(); // ❌ Führt sofort aus!
```

### onclick Event
```javascript
const button = document.getElementById("meinButton");

// RICHTIG: Event-Handler setzen
button.onclick = function() {
    console.log("Button wurde geklickt");
};

// FALSCH: Funktion sofort ausführen  
button.onclick = meineFunktion(); // ❌ Führt sofort aus!

// RICHTIG: Bestehende Funktion als Handler
button.onclick = meineFunktion; // ✅ Ohne Klammern!
```

### addEventListener (Alternative)
```javascript
button.addEventListener('click', function() {
    console.log("Button geklickt");
});

// Mit bestehender Funktion
button.addEventListener('click', meineFunktion);
```

## CSS-Klassen manipulieren

### classList.add()
```javascript
element.classList.add("neue-klasse");
element.classList.add("klasse1", "klasse2"); // Mehrere auf einmal
```

### classList.remove()
```javascript
element.classList.remove("alte-klasse");
element.classList.remove("klasse1", "klasse2");
```

### classList.toggle()
```javascript
element.classList.toggle("aktiv"); // Hinzufügen wenn nicht da, entfernen wenn da
```

### classList.contains()
```javascript
if (element.classList.contains("aktiv")) {
    console.log("Element hat Klasse 'aktiv'");
}
```

## Typische Prüfungsaufgaben

### Button für Klassen-Toggle
```javascript
window.onload = function() {
    const button = document.getElementById("toggleButton");
    const element = document.getElementById("zielElement");
    
    button.onclick = function() {
        element.classList.toggle("highlight");
    };
};
```

### Text bei Klick ändern
```javascript
window.onload = function() {
    const button = document.getElementById("textButton");
    const paragraph = document.getElementById("textParagraph");
    
    button.onclick = function() {
        paragraph.textContent = "Neuer Text nach Klick";
    };
};
```

### Element verstecken/anzeigen
```javascript
// CSS: .hidden { display: none; }

window.onload = function() {
    const button = document.getElementById("hideButton");
    const element = document.getElementById("zielElement");
    
    button.onclick = function() {
        element.classList.toggle("hidden");
    };
};
```

## Häufige Fehler (WICHTIG!)

### 1. Funktion sofort ausführen statt zuweisen
```javascript
// FALSCH
button.onclick = meineFunktion(); // Führt Funktion sofort aus!
window.onload = meineFunktion();  // Führt Funktion sofort aus!

// RICHTIG  
button.onclick = meineFunktion;   // Funktion als Handler zuweisen
window.onload = meineFunktion;    // Funktion als Handler zuweisen
```

### 2. Event-Handler vor DOM bereit
```javascript
// FALSCH - Element existiert noch nicht
const button = document.getElementById("button");
button.onclick = function() { /* ... */ };

// RICHTIG - Warten bis DOM geladen
window.onload = function() {
    const button = document.getElementById("button");
    button.onclick = function() { /* ... */ };
};
```

### 3. Element nicht gefunden
```javascript
const element = document.getElementById("falsche-id");
console.log(element); // null

// Sicherheitscheck
if (element) {
    element.onclick = function() { /* ... */ };
}
```

## Event-Handler Syntax-Übersicht

### Mit anonymer Funktion
```javascript
element.onclick = function() {
    // Code hier
};
```

### Mit Arrow Function
```javascript
element.onclick = () => {
    // Code hier
};
```

### Mit benannter Funktion
```javascript
function meinHandler() {
    // Code hier
}

element.onclick = meinHandler; // OHNE Klammern!
```

## JavaScript Best Practices für Events

### 1. Alles in window.onload
```javascript
window.onload = function() {
    // Alle DOM-Manipulationen hier
    const button1 = document.getElementById("btn1");
    const button2 = document.getElementById("btn2");
    
    button1.onclick = function() { /* ... */ };
    button2.onclick = function() { /* ... */ };
};
```

### 2. Funktionen vor Verwendung definieren
```javascript
function handleClick() {
    console.log("Geklickt!");
}

window.onload = function() {
    const button = document.getElementById("button");
    button.onclick = handleClick;
};
```

## Prüfungstipps
- **Immer** `window.onload` verwenden für DOM-Zugriff
- Event-Handler **ohne Klammern** zuweisen: `button.onclick = func;`
- `classList.toggle()` ist sehr praktisch für Ein/Aus-Schalter
- Bei Fehlern: Prüfen ob Element gefunden wurde (`console.log(element)`)