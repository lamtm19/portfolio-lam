# Rapport de Projet : Portfolio Personnel en CSS Avancé

## Présentation du projet

Pour ce projet final de CSS avancé, j'ai créé un portfolio personnel sous forme d'interface iOS. Ce choix design me permet de présenter mes projets de manière interactive et originale, tout en démontrant mes compétences en CSS avancé.

## Choix de design

### Palette de couleurs
J'ai choisi une palette de couleurs inspirée de l'interface iOS pour plusieurs raisons :
- Les dégradés bleu clair pour le fond d'écran créent une ambiance apaisante et professionnelle
- L'utilisation des couleurs vives et caractéristiques d'iOS (bleu #007AFF, rouge #FF3B30, vert #4CD964) pour les icônes améliore l'identification des éléments
- Les contrastes entre ces couleurs et le fond assurent une bonne lisibilité

### Typographie
J'ai utilisé la police système `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif` pour :
- Reproduire fidèlement l'apparence iOS
- Garantir une excellente lisibilité sur tous les appareils
- Optimiser les performances en utilisant les polices natives

### Organisation visuelle
L'interface est structurée pour être immédiatement familière aux utilisateurs d'appareils Apple :
- La grille d'applications principale avec 4 colonnes
- Le dock en bas de l'écran avec les applications essentielles
- Le dossier "Portfolio" qui regroupe mes projets

## Fonctionnalités avancées utilisées

### Structure SASS modulaire
J'ai organisé mon code SASS en plusieurs fichiers thématiques :
- Variables centralisées pour faciliter la maintenance
- Fichiers séparés par fonctionnalité (applications, dock, popup, etc.)
- Nesting pour améliorer la lisibilité du code

### Flexbox et Grid
- **Flexbox** est utilisé pour les alignements verticaux et horizontaux (dock, barre d'état)
- **CSS Grid** est implémenté pour la grille d'applications principale et l'intérieur du dossier Portfolio
- Combinaison des deux technologies pour obtenir des mises en page complexes et parfaitement alignées

### Effets visuels
- **Backdrop filter** pour l'effet de flou glacé caractéristique d'iOS
- **Box shadow** subtiles pour donner de la profondeur aux éléments
- **Transitions** sur les interactions (hover, active) pour une expérience fluide
- **Dégradés** pour les icônes et le fond d'écran

### Personnalisation par JavaScript
- Fonction permettant de changer le fond d'écran
- Possibilité de remplacer les icônes par des images personnalisées
- Restauration des paramètres par défaut

### Responsive design complet
- Media queries pour adapter l'interface à toutes les tailles d'écran
- Réorganisation de la grille selon la taille de l'écran (4 colonnes sur mobile, jusqu'à 8 sur grand écran)
- Support du mode sombre basé sur les préférences système

### Interactions avancées
- Dossier "Portfolio" interactif qui s'ouvre et se ferme
- Persistance du contexte lors de l'interaction avec les applications du dossier
- Gestion des notifications et overlays

Ce projet démontre ma maîtrise des technologies CSS modernes et ma capacité à créer des interfaces interactives complexes et responsives.