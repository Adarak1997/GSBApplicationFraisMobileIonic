# Application Frais Mobile (Ionic + PHP)

<p>
<img align="left" width="175" alt="1" src="https://user-images.githubusercontent.com/9747815/56463863-18697f00-63dd-11e9-8233-954cea3d57d0.png">
<img align="left" width="175" alt="2" src="https://user-images.githubusercontent.com/9747815/56463873-48188700-63dd-11e9-8135-21c4c40d2b38.png">
<img align="left" width="175" alt="3" src="https://user-images.githubusercontent.com/9747815/56463874-48b11d80-63dd-11e9-90df-887ab330e81c.png">
<img align="left" width="175" alt="4" src="https://user-images.githubusercontent.com/9747815/56463875-48b11d80-63dd-11e9-9c5f-4c0a37851ce7.png">
</p>


Dans ce projet vous trouvez un exemple d'application frais mobile avec les fonctionnalités suivantes :

- Page de connexion
- Page de la liste des fiches de frais de l'utilisateur connecté
- Page de détail d'une fiche de frais selectionnée
- Page de paramètrage (rappel des données de l'utilisateur + déconnexion)

# Installation

1. Cloner le projet dans **WAMP** ou **MAMP**
2. Ouvrir le terminal puis naviguer jusqu'au dossier **ApplicationFraisMobile**
3. Entrer la commande `npm install`
4. Modifier la variable **url** dans les le dossier **providers** de l'application Ionic pour la faire correspondre avec l'arborescence de vos fichiers. Variable a modifier :
```php
url = 'http://localhost:8888/cours/bts/2/ApplicationFrais/ApplicationFrais/ApplicationFraisWeb/';
  ```

5. Base de données 
      - Si vous avez une base de données, adaptez les requêtes des fichiers PHP du dossier **ApplicationFraisWeb**
      - Si vous n'avez pas de base de données : créez-en une et appelez la "**gsb**" puis importer le fichier **gsb.sql**

6. Adapter le code **PHP** pour qu'il se connecte correctement à votre base de données

7. Tester l'application avec la commande: `ionic serve -l`
      
