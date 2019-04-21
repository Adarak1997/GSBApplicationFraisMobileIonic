# Application Frais Mobile (Ionic + PHP)

<img src="http://danielpaul.fr/test/1.png" alt="connexion" width="250"/>
<img src="http://danielpaul.fr/test/2.png" alt="fiche frais" width="250"/>
<img src="http://danielpaul.fr/test/3.png" alt="detail" width="250"/>
<img src="http://danielpaul.fr/test/4.png" alt="Paramètres" width="250"/>

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
      
