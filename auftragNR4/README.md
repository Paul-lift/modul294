# Block 4: CSS Transitions und Animationen - NOTIZEN

## CSS Transitions

### Was sind Transitions?
- Sanfte Übergänge zwischen CSS-Zuständen
- Werden automatisch ausgelöst bei Eigenschaftsänderungen
- Funktionieren mit JavaScript + CSS-Klassen perfekt zusammen

### Grundlegende Transition-Syntax
```css
.element {
    /* Anfangszustand */
    background-color: blue;
    width: 100px;
    
    /* Transition definieren */
    transition: background-color 0.3s ease;
    /* transition: eigenschaft dauer timing-funktion; */
}

.element.aktiv {
    /* Endzustand */
    background-color: red;
    width: 200px;
}
```

### Mehrere Eigenschaften animieren
```css
.element {
    transition: background-color 0.3s ease, width 0.5s ease, opacity 0.2s linear;
}

/* Oder alle Eigenschaften */
.element {
    transition: all 0.3s ease;
}
```

### Timing-Funktionen
```css
transition: width 0.3s ease;        /* Standard, sanft */
transition: width 0.3s linear;      /* Konstante Geschwindigkeit */
transition: width 0.3s ease-in;     /* Langsam starten */
transition: width 0.3s ease-out;    /* Langsam enden */
transition: width 0.3s ease-in-out; /* Langsam starten und enden */
```

## Praktische Beispiele

### Button-Hover-Effekt
```css
.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}
```

### Fade In/Out
```css
.fade-element {
    opacity: 1;
    transition: opacity 0.5s ease;
}

.fade-element.hidden {
    opacity: 0;
}
```

### Slide-Effekte
```css
.slide-element {
    transform: translateX(0);
    transition: transform 0.4s ease;
}

.slide-element.moved {
    transform: translateX(100px);
}
```

## JavaScript + CSS Transitions

### Klassen-basierte Animationen
```javascript
window.onload = function() {
    const button = document.getElementById("animateButton");
    const element = document.getElementById("animatedElement");
    
    button.onclick = function() {
        element.classList.toggle("animated");
    };
};
```

```css
.animated-element {
    background-color: blue;
    width: 100px;
    height: 100px;
    transition: all 0.5s ease;
}

.animated-element.animated {
    background-color: red;
    width: 200px;
    transform: rotate(45deg);
}
```

### Mehrschritt-Animationen
```javascript
function startAnimation() {
    const element = document.getElementById("element");
    
    // Schritt 1
    element.classList.add("step1");
    
    // Schritt 2 nach Delay
    setTimeout(() => {
        element.classList.remove("step1");
        element.classList.add("step2");
    }, 1000);
}
```

## Animierbare CSS-Eigenschaften

### Häufig verwendet
```css
/* Größe und Position */
width, height
margin, padding  
top, left, right, bottom

/* Farben */
color
background-color
border-color

/* Transform */
transform: translateX(), translateY()
transform: rotate()
transform: scale()

/* Sichtbarkeit */
opacity

/* Texteffekte */
font-size
letter-spacing
```

### NICHT animierbar
```css
display  /* none/block - sofortige Änderung */
font-family
position
```

## Transform-Eigenschaften

### Verschieben
```css
transform: translateX(50px);      /* Horizontal */
transform: translateY(-30px);     /* Vertikal */
transform: translate(50px, -30px); /* Beide */
```

### Rotieren
```css
transform: rotate(45deg);         /* 45 Grad drehen */
transform: rotate(-90deg);        /* Gegen Uhrzeiger */
```

### Skalieren
```css
transform: scale(1.5);            /* 1.5x größer */
transform: scale(0.8);            /* 0.8x kleiner */
transform: scaleX(2);             /* Nur horizontal */
```

### Kombinieren
```css
transform: rotate(45deg) scale(1.2) translateX(50px);
```

## Prüfungsrelevante Patterns

### Show/Hide mit Transition
```css
.modal {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal.show {
    opacity: 1;
    visibility: visible;
}
```

### Loading-Animation
```css
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

### Card-Flip-Effekt
```css
.card {
    width: 200px;
    height: 300px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card.flipped {
    transform: rotateY(180deg);
}
```

## CSS Animationen (@keyframes)

### Einfache Animation
```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in-element {
    animation: fadeIn 1s ease-in-out;
}
```

### Mehrschritt-Animation
```css
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.bouncing {
    animation: bounce 2s infinite;
}
```

## Animation vs Transition

### Transition
- Reaktion auf Zustandsänderung (hover, Klasse)
- Braucht Trigger (Event, Pseudoklasse)
- Von A nach B

### Animation  
- Läuft automatisch ab
- Kann sich wiederholen (infinite)
- Komplexere Abläufe möglich

## Performance-Tipps
```css
/* Gut für Performance */
transform: translateX(100px);  /* GPU-beschleunigt */
opacity: 0.5;                  /* GPU-beschleunigt */

/* Schlecht für Performance */
left: 100px;                   /* CPU-basiert */
width: 200px;                  /* Löst Reflow aus */
```

## Debugging
```javascript
// Transition-Ende abfangen
element.addEventListener('transitionend', function() {
    console.log('Transition beendet');
});
```

## Prüfungstipps
- **Transitions** brauchen immer einen Trigger (Klasse, Hover)
- **Transform** ist performanter als Left/Top ändern
- **transition: all** animiert alle Eigenschaften
- Bei mehreren Eigenschaften: spezifische Zeiten definieren
- **opacity** und **transform** sind GPU-optimiert