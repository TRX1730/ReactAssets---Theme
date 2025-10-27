```markdown
## 🚀 Szybki Start (3 kroki)

### Krok 1: Pobierz pliki
Skopiuj te pliki do swojego projektu React:
```
src/
├── components/
│   ├── ThemeProvider.jsx
│   └── ThemeToggle.jsx
├── hooks/
│   └── useTheme.js
└── styles/
    └── themes.js
```

### Krok 2: Dodaj 2 linijki kodu
W swoim głównym pliku `App.jsx` dodaj:

```jsx
// 1. Importuj na górze pliku
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    // 2. Owiń swoją aplikację tym komponentem
    <ThemeProvider>
      {/* 3. Dodaj przycisk gdzie chcesz */}
      <ThemeToggle />
      
      {/* Twoja normalna aplikacja tutaj */}
      <h1>Moja Aplikacja</h1>
      <p>Reszta Twojej aplikacji...</p>
    </ThemeProvider>
  );
}
```

## 🎯 

✅ **Przycisk zmiany motywu** 
✅ **Pamięta wybór**  
✅ **Płynne animacje** 
✅ **Działa na telefonie** - responsive   

## 🎨 Jak Działa?

### ThemeToggle.jsx - To jest ten przycisk
```jsx
<button>🌙 Switch to Dark Mode</button>
// Po kliknięciu zmienia się na:
<button>☀️ Switch to Light Mode</button>
```

### ThemeProvider.jsx - To pamięta twój wybór
```jsx
// Ten komponent pamięta który motyw wybrałeś
```

## 🔧 Jak Zmienić Kolory?

Jeśli chcesz zmienić kolory, edytuj plik `themes.js`:

```javascript
export const themes = {
  light: {
    primary: '#6366f1',      // Kolor główny (niebieski)
    background: '#ffffff',   // Tło jasnego motywu
    text: '#000000',         // Tekst jasnego motywu
  },
  dark: {
    primary: '#818cf8',      // Kolor główny (jasny niebieski)
    background: '#000000',   // Tło ciemnego motywu  
    text: '#ffffff',         // Tekst ciemnego motywu
  }
};
```
