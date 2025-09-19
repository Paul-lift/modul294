# 🎨 CSS Selector Cheat Sheet

Ein Überblick über alle wichtigen CSS Selektoren.

---

## 1. Grundlegende Selektoren
| Selektor | Beispiel | Beschreibung |
|----------|----------|--------------|
| `*` | `* {}` | Alle Elemente |
| `element` | `p {}` | Alle `<p>`-Elemente |
| `.klasse` | `.btn {}` | Alle Elemente mit Klasse `btn` |
| `#id` | `#header {}` | Das Element mit der ID `header` |
| `element, element` | `h1, h2 {}` | Mehrere Elemente auswählen |

---

## 2. Kombinatoren
| Selektor | Beispiel | Beschreibung |
|----------|----------|--------------|
| `A B` | `div p {}` | Alle `<p>` in `<div>` (Descendant) |
| `A > B` | `div > p {}` | Direktes Kind-Element |
| `A + B` | `h1 + p {}` | Direktes Nachbar-Element |
| `A ~ B` | `h1 ~ p {}` | Alle Geschwister-Elemente danach |

---

## 3. Attribut-Selektoren
| Selektor | Beispiel | Beschreibung |
|----------|----------|--------------|
| `[attr]` | `[disabled] {}` | Elemente mit Attribut |
| `[attr="wert"]` | `[type="text"] {}` | Genau dieser Wert |
| `[attr~="wert"]` | `[title~="cool"] {}` | Enthält Wort |
| `[attr^="wert"]` | `[href^="https"] {}` | Beginnt mit |
| `[attr$="wert"]` | `[src$=".png"] {}` | Endet mit |
| `[attr*="wert"]` | `[class*="nav"] {}` | Enthält Zeichenkette |

---

## 4. Pseudo-Klassen
| Selektor | Beispiel | Beschreibung |
|----------|----------|--------------|
| `:hover` | `a:hover {}` | Beim Hovern |
| `:active` | `a:active {}` | Beim Klicken |
| `:focus` | `input:focus {}` | Hat Fokus |
| `:checked` | `input:checked {}` | Checkbox/Radiobutton markiert |
| `:disabled` | `input:disabled {}` | Deaktivierte Felder |

---

## 5. **Child-Selektoren (wichtig!)**
| Selektor | Beispiel | Erklärung |
|----------|----------|-----------|
| `:first-child` | `p:first-child` | Wählt ein Element nur, wenn es **das erste Kind überhaupt** im Parent ist |
| `:last-child` | `li:last-child` | Wählt ein Element nur, wenn es **das letzte Kind überhaupt** im Parent ist |
| `:nth-child(n)` | `li:nth-child(3)` | Wählt das **n-te Kind** im Parent (unabhängig vom Typ) |
| `:nth-child(odd/even)` | `li:nth-child(odd)` | Alle ungeraden/geraden Kinder |
| `:first-of-type` | `bento:first-of-type` | Erstes Element von diesem **Tag-Typ** im Parent |
| `:last-of-type` | `p:last-of-type` | Letztes Element von diesem **Tag-Typ** |
| `:nth-of-type(n)` | `plate:nth-of-type(2)` | Das n-te Element eines bestimmten Typs |

🔑 **Merken:**  
- `:first-child` guckt auf die **Reihenfolge von allen Kindern**.  
- `:first-of-type` guckt auf die **Reihenfolge innerhalb des gleichen Tags**.  
- `:nth-child(n)` zählt alle Elemente, `:nth-of-type(n)` nur die vom gleichen Typ.  

---

## 6. Pseudo-Elemente
| Selektor | Beispiel | Beschreibung |
|----------|----------|--------------|
| `::before` | `p::before {content:"👉";}` | Inhalt davor |
| `::after` | `p::after {content:"✅";}` | Inhalt danach |
| `::first-line` | `p::first-line {}` | Erste Zeile |
| `::first-letter` | `p::first-letter {}` | Erster Buchstabe |
| `::selection` | `p::selection {}` | Textauswahl |

---

## 7. UI & State Selektoren
| Selektor | Beispiel | Beschreibung |
|----------|----------|--------------|
| `:enabled` | `input:enabled {}` | Aktiviertes Input |
| `:read-only` | `input:read-only {}` | Read-only |
| `:valid / :invalid` | `input:valid {}` | Validierung |
| `:required` | `input:required {}` | Pflichtfeld |

---

## 8. Fortgeschritten (CSS4-ish)
| Selektor | Beispiel | Beschreibung |
|----------|----------|--------------|
| `:is()` | `:is(h1, h2, h3) {}` | Vereinfachtes OR |
| `:where()` | `:where(.btn, .link) {}` | Wie `:is()` aber 0-Specificity |
| `:has()` | `div:has(img)` | Parent mit bestimmtem Kind |
| `:nth-child(an+b of sel)` | `li:nth-child(2n of .active)` | Filter mit Bedingung |

---

:empty (Paul)   