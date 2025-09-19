# Block 5: UI-Komponenten - NOTIZEN

## Übersicht UI-Komponenten
UI-Komponenten sind wiederverwendbare Bausteine für Benutzeroberflächen. Sie können mit HTML/CSS/JavaScript oder Frameworks wie React erstellt werden.

## 1. Accordion (Akkordeon)
**Zweck**: Platzsparende Darstellung von zusammenklappbaren Inhalten

**Wann verwenden:**
- FAQ-Bereiche auf Webseiten
- Produktbeschreibungen mit verschiedenen Kategorien
- Menünavigation mit Unterpunkten
- Formulare mit optionalen Bereichen
- Mobile Navigation (Hamburger-Menü Inhalte)

**Beispiele:**
- FAQ: "Häufig gestellte Fragen" mit aufklappbaren Antworten
- E-Commerce: Produktdetails (Beschreibung, Spezifikationen, Bewertungen)
- Settings-Panel: Verschiedene Einstellungsgruppen
- Dokumentation: Kapitel mit Unterabschnitten
- Mobile Apps: Filteroptionen in Suchfunktionen

### HTML-Struktur
```html
<div class="accordion">
  <button class="accordion-header">Titel 1</button>
  <div class="accordion-panel">
    <p>Inhalt 1</p>
  </div>
  <button class="accordion-header">Titel 2</button>
  <div class="accordion-panel">
    <p>Inhalt 2</p>
  </div>
</div>
```

### JavaScript (Vanilla)
```javascript
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const panel = header.nextElementSibling;
    panel.classList.toggle('open');
  });
});
```

### CSS
```css
.accordion-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.accordion-panel.open {
  max-height: 200px;
}
```

## 2. Multiselect (Mehrfachauswahl)
**Zweck**: Auswahl mehrerer Optionen aus einer Liste

**Wann verwenden:**
- Filteroptionen in Shop-Kategorien
- Skills/Interessen in Benutzerprofilen
- E-Mail-Empfänger auswählen
- Berechtigungen für Benutzergruppen
- Tags/Labels für Artikel oder Posts

**Beispiele:**
- Online-Shop: Marken, Größen, Farben filtern
- Job-Portal: Programmiersprachen, Technologien auswählen
- Social Media: Freunde für Event-Einladung
- CMS: Kategorien für Blogartikel
- Umfrage-Tool: Mehrere Antwortoptionen

### HTML
```html
<div class="multiselect">
  <div class="multiselect-header">Wähle Optionen</div>
  <div class="multiselect-options">
    <label><input type="checkbox" value="option1"> Option 1</label>
    <label><input type="checkbox" value="option2"> Option 2</label>
    <label><input type="checkbox" value="option3"> Option 3</label>
  </div>
</div>
```

### JavaScript
```javascript
function updateMultiselect() {
  const selected = [];
  document.querySelectorAll('.multiselect input:checked').forEach(input => {
    selected.push(input.value);
  });
  document.querySelector('.multiselect-header').textContent = 
    selected.length > 0 ? selected.join(', ') : 'Wähle Optionen';
}
```

## 3. Date Picker (Datumsauswahl)
**Zweck**: Benutzerfreundliche Datumsauswahl

**Wann verwenden:**
- Buchungsformulare (Hotels, Flüge)
- Event-Termine festlegen
- Geburtsdatum eingeben
- Projektdeadlines setzen
- Zeiträume für Reports definieren

**Beispiele:**
- Reise-Buchung: Check-in und Check-out Datum
- Kalender-Apps: Termine erstellen
- HR-System: Urlaubsanträge
- Banking: Transaktionszeitraum filtern
- E-Commerce: Liefertermin wählen

### HTML (Einfach)
```html
<input type="date" id="datepicker" class="date-picker">
```

### HTML (Custom)
```html
<div class="datepicker">
  <input type="text" readonly class="date-input">
  <div class="calendar">
    <div class="calendar-header">
      <button class="prev-month">&lt;</button>
      <span class="month-year"></span>
      <button class="next-month">&gt;</button>
    </div>
    <div class="calendar-days"></div>
  </div>
</div>
```

## 4. Chip/Tag (Etiketten)
**Zweck**: Kleine Labels für Kategorien, Tags oder ausgewählte Items

**Wann verwenden:**
- Ausgewählte Filter-Optionen anzeigen
- Blog-Tags und Kategorien
- Kontakt-Labels (Arbeit, Privat, Familie)
- Skill-Tags in Profilen
- Status-Anzeigen (Neu, Beliebt, Sale)

**Beispiele:**
- Suchfilter: "JavaScript", "React", "Remote" als aktive Filter
- Blog: Artikel mit Tags wie "Tutorial", "Beginner", "CSS"
- E-Mail: Labels wie "Wichtig", "Arbeit", "Persönlich"
- Portfolio: Projekt-Technologien "HTML", "CSS", "JavaScript"
- Shop: Produkteigenschaften "Bio", "Vegan", "Glutenfrei"

### HTML
```html
<div class="chip-container">
  <div class="chip">
    JavaScript
    <span class="chip-remove">&times;</span>
  </div>
  <div class="chip">
    React
    <span class="chip-remove">&times;</span>
  </div>
</div>
```

### CSS
```css
.chip {
  display: inline-block;
  background: #e0e0e0;
  border-radius: 16px;
  padding: 4px 12px;
  margin: 2px;
  font-size: 14px;
}
.chip-remove {
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
}
```

## 5. Slider (Schieberegler)
**Zweck**: Werteingabe durch Ziehen eines Reglers

**Wann verwenden:**
- Preisbereich in Online-Shops
- Lautstärke-Kontrolle
- Helligkeit/Kontrast einstellen
- Altersbereich für Dating-Apps
- Bewertungen mit Skala

**Beispiele:**
- E-Commerce: Preis von €10-€500 filtern
- Media Player: Lautstärke 0-100%
- Foto-Editor: Helligkeit -50 bis +50
- Fitness-App: Trainingsintensität 1-10
- Immobilien: Zimmeranzahl 1-8+

### HTML
```html
<div class="slider-container">
  <input type="range" min="0" max="100" value="50" class="slider" id="mySlider">
  <div class="slider-value">50</div>
</div>
```

### JavaScript
```javascript
const slider = document.getElementById('mySlider');
const output = document.querySelector('.slider-value');

slider.addEventListener('input', function() {
  output.textContent = this.value;
});
```

## 6. Progress Bar (Fortschrittsbalken)
**Zweck**: Visualisierung von Fortschritt oder Ladezustand

**Wann verwenden:**
- File-Upload Fortschritt
- Formular-Schritte anzeigen
- Ladezeiten visualisieren
- Skill-Level in Profilen
- Installation/Setup-Prozess

**Beispiele:**
- Cloud Storage: "Uploading file... 67%"
- Multi-Step Form: "Schritt 2 von 5"
- Loading Screen: "Loading content..."
- LinkedIn: Profil-Vollständigkeit 85%
- Gaming: Experience Points bis Level-up

### HTML
```html
<div class="progress-container">
  <div class="progress-bar" style="width: 60%"></div>
  <span class="progress-text">60%</span>
</div>
```

### JavaScript (Dynamisch)
```javascript
function updateProgress(percentage) {
  const bar = document.querySelector('.progress-bar');
  const text = document.querySelector('.progress-text');
  
  bar.style.width = percentage + '%';
  text.textContent = percentage + '%';
}
```

### CSS
```css
.progress-container {
  width: 100%;
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  position: relative;
}
.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #45a049);
  border-radius: 10px;
  transition: width 0.3s ease;
}
```

## 7. Carousel/Slider (Bildkarussell)
**Zweck**: Durchblättern von Inhalten (Bilder, Karten)

**Wann verwenden:**
- Produktbilder in Online-Shops
- Hero-Banner auf Startseiten
- Testimonials/Kundenbewertungen
- Portfolio-Galerie
- News/Blog-Artikel Slider

**Beispiele:**
- E-Commerce: Produktfotos von verschiedenen Winkeln
- Website Header: Wechselnde Angebote/Aktionen
- Restaurant: Speisen-Galerie
- Immobilien: Wohnungsbilder durchblättern
- Social Media: Story-ähnliche Inhalte

### HTML
```html
<div class="carousel">
  <div class="carousel-container">
    <div class="carousel-slide active">
      <img src="image1.jpg" alt="Slide 1">
    </div>
    <div class="carousel-slide">
      <img src="image2.jpg" alt="Slide 2">
    </div>
  </div>
  <button class="carousel-btn prev">&lt;</button>
  <button class="carousel-btn next">&gt;</button>
  <div class="carousel-dots">
    <span class="dot active" data-slide="0"></span>
    <span class="dot" data-slide="1"></span>
  </div>
</div>
```

### JavaScript
```javascript
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
```

## 8. Rating (Bewertung)
**Zweck**: Sterne-Bewertung für Feedback

**Wann verwenden:**
- Produktbewertungen in Shops
- Restaurant/Hotel-Reviews
- App-Store Bewertungen
- Service-Feedback
- Skill-Level Assessment

**Beispiele:**
- Amazon: Produkt 4.5/5 Sterne
- Uber: Fahrer bewerten nach Fahrt
- Netflix: Filme bewerten für Empfehlungen
- Yelp: Restaurant-Erfahrungen teilen
- LinkedIn: Kollegenempfehlungen

### HTML
```html
<div class="rating">
  <span class="star" data-rating="1">★</span>
  <span class="star" data-rating="2">★</span>
  <span class="star" data-rating="3">★</span>
  <span class="star" data-rating="4">★</span>
  <span class="star" data-rating="5">★</span>
</div>
```

### JavaScript
```javascript
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function() {
    const rating = this.dataset.rating;
    document.querySelectorAll('.star').forEach((s, index) => {
      s.classList.toggle('active', index < rating);
    });
  });
});
```

## 9. Treeview (Baumansicht)
**Zweck**: Hierarchische Datenstruktur anzeigen

**Wann verwenden:**
- Datei-Explorer/Ordnerstruktur
- Organisationsdiagramme
- Kategorien mit Unterkategorien
- Menü-Navigation mit Ebenen
- Kommentar-Threads

**Beispiele:**
- Windows Explorer: Ordner und Dateien
- E-Commerce: Produktkategorien (Elektronik > Smartphones > Android)
- Firmen-Website: Abteilungen und Mitarbeiter
- Forum: Hauptthemen mit Unterthemen
- Code-Editor: Projektstruktur mit Ordnern

### HTML
```html
<div class="treeview">
  <div class="tree-item">
    <span class="tree-toggle">▼</span>
    <span class="tree-label">Ordner 1</span>
    <div class="tree-children">
      <div class="tree-item">
        <span class="tree-label">Datei 1.1</span>
      </div>
    </div>
  </div>
</div>
```

### JavaScript
```javascript
document.querySelectorAll('.tree-toggle').forEach(toggle => {
  toggle.addEventListener('click', function() {
    const children = this.parentNode.querySelector('.tree-children');
    children.style.display = children.style.display === 'none' ? 'block' : 'none';
    this.textContent = this.textContent === '▼' ? '▶' : '▼';
  });
});
```

## 10. Tooltip (Tooltip)
**Zweck**: Zusätzliche Informationen bei Hover

**Wann verwenden:**
- Erklärungen für Icons/Buttons
- Hilfetext für Formularfelder
- Vollständige Namen bei gekürztem Text
- Tastenkombinationen anzeigen
- Definition von Fachbegriffe

**Beispiele:**
- Icon-Buttons: Mülleimer-Icon zeigt "Löschen"
- Passwort-Feld: "Mindestens 8 Zeichen, 1 Großbuchstabe"
- Trunkierte Namen: "Max Muster..." zeigt vollständigen Namen
- Keyboard Shortcuts: "Strg+S" beim Save-Button
- Dashboard: Metriken-Erklärungen

### HTML
```html
<div class="tooltip-container">
  <span class="tooltip-trigger">Hover mich</span>
  <div class="tooltip">Das ist ein Tooltip!</div>
</div>
```

### CSS
```css
.tooltip-container {
  position: relative;
  display: inline-block;
}
.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}
.tooltip-container:hover .tooltip {
  opacity: 1;
}
```

## 11. Modal Dialog (Dialogfenster)
**Zweck**: Overlay-Fenster für wichtige Inhalte oder Formulare

**Wann verwenden:**
- Bestätigungsdialoge (Löschen, Speichern)
- Login/Registrierung-Formulare
- Bildergalerie-Viewer
- Wichtige Benachrichtigungen
- Quick-Actions ohne Seitenwechsel

**Beispiele:**
- "Sind Sie sicher, dass Sie diesen Artikel löschen möchten?"
- Anmeldung ohne Seitenwechsel
- Produktbild in voller Größe anzeigen
- Cookie-Einstellungen
- Newsletter-Anmeldung Pop-up

### HTML
```html
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <h2>Modal Titel</h2>
    <p>Modal Inhalt hier...</p>
    <div class="modal-actions">
      <button class="btn-cancel">Abbrechen</button>
      <button class="btn-confirm">Bestätigen</button>
    </div>
  </div>
</div>
```

### CSS
```css
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
}
.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}
```

### JavaScript
```javascript
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Event Listeners
document.querySelector('.modal-close').addEventListener('click', () => closeModal('modal'));
document.querySelector('.modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal('modal');
});
```

## React-Varianten

### React Accordion
```jsx
function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
            {item.title}
          </button>
          <div className={`panel ${activeIndex === index ? 'open' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### React Modal
```jsx
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
```

## Prüfungstipps

### Wichtige Konzepte
- **State Management**: Komponenten-Zustand verwalten
- **Event Handling**: Click, Hover, Input Events
- **CSS Transitions**: Smooth Animationen
- **Accessibility**: ARIA-Labels, Keyboard-Navigation
- **Responsive Design**: Mobile-freundlich

### Häufige Probleme
- **Z-Index**: Modal über anderem Content
- **Event Bubbling**: `stopPropagation()` verwenden
- **Memory Leaks**: Event Listeners entfernen
- **CSS Transitions**: `max-height` statt `height` für smooth collapse
- **Focus Management**: Tab-Navigation in Modals

### Performance
- **Debouncing**: Bei Input-Events
- **Virtual Scrolling**: Bei langen Listen
- **Lazy Loading**: Komponenten erst bei Bedarf laden