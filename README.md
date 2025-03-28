Mon site :
https://portfolio-lam.netlify.app/







# Portfolio Personnel en CSS Avancé - Interface iOS

Ce projet est un portfolio personnel créé comme projet final pour le cours de CSS Avancé. Il présente une interface inspirée d'iOS avec un dossier "Portfolio" contenant plusieurs projets fictifs.

## Fonctionnalités

- Interface iOS complètement responsive qui s'adapte aux mobiles, tablettes et ordinateurs
- Utilisation de SASS pour organiser le code CSS
- Implémentation de Flexbox et Grid pour la mise en page
- Dossier "Portfolio" interactif contenant 4 projets
- Notifications iOS simulées
- Possibilité de personnaliser les icônes et le fond d'écran
- Mode sombre automatique basé sur les préférences du système

## Structure du projet

```
portfolio-css-avance/
├── index.html              # Page principale
├── css/
│   └── styles.css          # CSS compilé
├── scss/
│   ├── styles.scss         # Fichier principal SASS
│   ├── _variables.scss     # Variables (couleurs, espacements, etc.)
│   ├── _reset.scss         # Reset et styles de base
│   ├── _layout.scss        # Mise en page globale
│   ├── _apps.scss          # Styles des applications
│   ├── _dock.scss          # Styles du dock
│   ├── _popup.scss         # Styles des popups et du dossier
│   └── _responsive.scss    # Media queries pour le responsive
├── js/
│   └── main.js             # JavaScript pour l'interactivité
└── README.md               # Documentation
```

## Comment utiliser

1. Clonez ce dépôt : `git clone [URL_DU_REPO]`
2. Ouvrez `index.html` dans votre navigateur, ou utilisez le lien GitHub Pages

### Personnalisation

Ce projet inclut des fonctions JavaScript pour personnaliser l'interface :

```javascript
// Changer le fond d'écran
changeWallpaper('URL_DE_VOTRE_IMAGE');

// Remplacer une icône d'application
replaceAppIcon('instagram', 'URL_DE_VOTRE_IMAGE');

// Restaurer les paramètres par défaut
restoreDefaultWallpaper();
restoreAppIcon('instagram');
```

## Techniques CSS avancées utilisées

- **SASS** : Variables, imports, nesting, organisation modulaire
- **Flexbox** : Utilisé pour les alignements et le dock
- **CSS Grid** : Implémenté pour la grille d'applications et l'intérieur du dossier
- **Media Queries** : Pour une expérience responsive complète
- **Variables CSS** : Pour faciliter la personnalisation et la maintenance
- **Animations et transitions** : Pour une expérience utilisateur fluide
- **Filtres et effets** : Effets de flou (backdrop-filter) pour un look moderne

## Compatibilité

- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Responsive pour les appareils de toutes tailles
- Support du mode sombre

## Crédits

Projet créé dans le cadre du cours de CSS Avancé.
