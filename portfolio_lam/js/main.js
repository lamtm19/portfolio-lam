// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
  // Éléments principaux
  const apps = document.querySelectorAll('.app');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const closePopupBtn = document.getElementById('closePopup');
  
  // Variable pour suivre l'état du dossier Portfolio
  window.folderIsOpen = false;
  
  // Configuration des événements pour les applications
  apps.forEach(app => {
      // Ne pas ajouter l'événement au dossier Portfolio
      if(app.getAttribute('data-app') !== 'cloud-folder') {
          app.addEventListener('click', function() {
              popup.style.display = 'block';
              overlay.style.display = 'block';
          });
      }
  });
  
  // Gestion du dossier Portfolio
  const portfolioFolder = document.querySelector('[data-app="cloud-folder"]');
  if (portfolioFolder) {
      portfolioFolder.addEventListener('click', function(e) {
          e.stopPropagation(); // Empêcher la propagation pour ne pas déclencher le popup iOS update
          
          // Définir que le dossier est ouvert
          window.folderIsOpen = true;
          
          // Créer le dossier Portfolio
          createPortfolioFolder();
      });
  }
  
  // Fermeture du popup
  closePopupBtn.addEventListener('click', function() {
      popup.style.display = 'none';
      
      // Si le dossier était ouvert, garder l'overlay visible
      // sinon, cacher l'overlay
      if (!window.folderIsOpen) {
          overlay.style.display = 'none';
      }
  });
  
  // Fermeture de l'overlay
  overlay.addEventListener('click', function() {
      // Fermer le popup iOS update
      popup.style.display = 'none';
      
      // Fermer le dossier Portfolio s'il est ouvert
      const folderPopup = document.querySelector('.folder-popup');
      if (folderPopup) {
          folderPopup.remove();
          window.folderIsOpen = false;
      }
      
      overlay.style.display = 'none';
  });
  

  
});


function createPortfolioFolder() {
  // Créer le fond du dossier
  const folderPopup = document.createElement('div');
  folderPopup.className = 'folder-popup';
  
  // Ajouter la barre de titre
  const titleBar = document.createElement('div');
  titleBar.className = 'folder-title';
  const titleText = document.createElement('span');
  titleText.textContent = 'Portfolio';
  titleBar.appendChild(titleText);
  folderPopup.appendChild(titleBar);
  
  // Créer le contenu du dossier
  const folderContent = document.createElement('div');
  folderContent.className = 'folder-content';
  
  // Applications dans le dossier Portfolio
  const portfolioApps = [
    { name: 'Rex Studio', color: '#FFFFFF', icon: '<a href="https://www.instagram.com/rexstudio.music/" target="_blank"><img src="icons/rex-studio.png" width="50" height="45" alt="Rex Studio"></a>', position: null},
    { name: 'ToDoList', color: '#FFFFFF', icon: '<a href="Projet To-do-List/todolist.html" target="_blank"><img src="icons/todo-app.png" width="50" height="50" alt="To Do List"></a>', position: null },
    { name: "Lam's Barber", color: '#000000d9', icon: '<a href="HTML & CSS/site_barber.html" target="_blank"><img src="icons/coiffeur.png" width="50" height="50" alt="Lam\'s Barber"></a>', position: null },
    { name: 'ABBPC', color: '#FFFFFF', icon: '<a href="CodeSiteABBPC/refonte.html" target="_blank"><img src="icons/site-refonte.png" width="45" height="50" alt="ABBPC"></a>', position: 'fourth-app' }
];


  
  // Ajouter les applications au dossier
  portfolioApps.forEach(app => {
      const appDiv = document.createElement('div');
      appDiv.className = 'folder-app';
      if (app.position) {
          appDiv.classList.add(app.position);
      }
      
      // Icône de l'application
      const iconDiv = document.createElement('div');
      iconDiv.className = 'folder-app-icon';
      iconDiv.style.backgroundColor = app.color;
      iconDiv.innerHTML = app.icon;
      
      // Nom de l'application
      const nameDiv = document.createElement('div');
      nameDiv.className = 'folder-app-name';
      nameDiv.textContent = app.name;
      
      appDiv.appendChild(iconDiv);
      appDiv.appendChild(nameDiv);
      
      // Ajouter l'événement pour afficher le popup iOS update
      appDiv.addEventListener('click', function(e) {
          e.stopPropagation();
          
          // Montrer le popup d'iOS update
          const popup = document.getElementById('popup');
          popup.style.display = 'block';
          
          // Cacher le dossier temporairement sans le supprimer
          folderPopup.style.display = 'none';
          
          // Gérer la fermeture du popup
          const handlePopupClose = function() {
              popup.style.display = 'none';
              
              // Si le dossier était ouvert, le réafficher
              if (window.folderIsOpen) {
                  folderPopup.style.display = 'block';
              }
              
              // Supprimer cet event listener pour éviter les duplications
              document.getElementById('closePopup').removeEventListener('click', handlePopupClose);
          };
          
          // Ajouter l'événement de fermeture au bouton Close
          document.getElementById('closePopup').addEventListener('click', handlePopupClose);
      });
      
      folderContent.appendChild(appDiv);
  });
  
  folderPopup.appendChild(folderContent);
  
  // Ajouter les indicateurs de page (points)
  const pageIndicator = document.createElement('div');
  pageIndicator.className = 'folder-dots';
  
  // Ajouter deux points (premier actif)
  const dot1 = document.createElement('div');
  dot1.className = 'folder-dot active';
  
  const dot2 = document.createElement('div');
  dot2.className = 'folder-dot';
  
  pageIndicator.appendChild(dot1);
  pageIndicator.appendChild(dot2);
  
  folderPopup.appendChild(pageIndicator);
  
  // Ajouter le dossier au DOM
  document.body.appendChild(folderPopup);
  document.getElementById('overlay').style.display = 'block';
}