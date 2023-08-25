# Chicken-servie
Une API REST contenant les fonctions CRUD

## Auteur
Facinet Kouyate

Vous remarquerez que le code est en Typescript pour l'expérience dev.
Par aileurs, si vous voulez le code javascript, il se trouve dans le dossier "dist"

## REST API chicken

### chicken se represente comme suit:
name: String (required),
birthday: Date,
weight: Number (required),
steps: Number (default 0),
isRunning: Boolean (default false)

### ENDPOINTS

GET api/chicken listes les objets chicken

GET api/chicken/{name}  retourne l'objet chicken avec cet nom.

POST api/chicken ajoute un nouveau objet chicken
```
exemple body

{
    "name": "GuineanChicken",
    "birthday": "1970-01-20T14:16:29.626Z",
    "weight": 212,
    "steps": 12,        
    "isRunning": false
}
```

PATCH api/chicken/{name} met à jour un objet chicken correspondant à name
```
example body

{
    "name": "GuineanChicken",
    "birthday": "1970-01-20T14:16:29.626Z",
    "weight": 212,
    "steps": 12,        
    "isRunning": false
}
```

DELETE api/chicken/{name} supprime un objet chicken correspondant à name

PUT /api/chicken/run incremente la variable steps de l'objet correspondant à name

```
example body

{
    "name": "GuineanChicken",
}
```


### RUN

Tout d'abord, créer un fichier .env, ajouter le lien vers Mongo DB:
 ```'mongodb+srv://username:passwd@cluster0.toi055d.mongodb.net/?retryWrites=true&w=majority'```
remplacer username et password par leurs valeurs respectifs.

#### Pour demarrer directement sur la machine
il faut s'assurer d'avoir nodejs installé sur la machine ensuite se placer dans le repertoire "chicken" et taper la commande.
  ``` npm run start ```

#### Pour demarrer dans un container docker
Il faut s'assurer d'avoir docker et docker-compose installés ou docker desktop
ensuite se placer à la racine du projet au même niveau que le repertoire chicken.

``` docker-compose up -d ```

### Your feedbacks are welcome !
