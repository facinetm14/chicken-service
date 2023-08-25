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

PATCH api/chicken/{name} met à jour un objet chicken correspondant à name

DELETE api/chicken/{name} supprime un objet chicken correspondant à name

PUT /api/chicken/run incremente la variable steps de l'objet de 1


### RUN

#### Pour demarrer directement sur la machine
il faut s'assurer d'avoir nodejs installé sur la machine ensuite se placer dans le repertoire "chicken" et taper la commande.
  ``` npm run start ```

#### Pour demarrer dans un container docker
Il faut s'assurer d'avoir docker et docker-compose installés ou docker desktop
ensuite se placer à la racine du projet au même niveau que le repertoire chicken.

``` docker-compose up -d ```

### Your feedbacks are welcome !