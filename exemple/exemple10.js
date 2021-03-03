/******************
**** PARTIE 1  ****
/******************/

var nom = "Vilain"; //variable globale, peut être utilisée dans tout mon code.
let prénom = 'Guy'; //Variable locale, n'est accessible qu'à certain endroit de mon code

const registreNational = "871022-554-32";//Variable locale dont la valeur ne changera pas.
console.log(registreNational);//Je peux lire ma variable
registreNational = "123254-244-21";//Si je réaffecte une nouvelle valeur à cette constante --> error
console.log(registreNational);









/******************
**** PARTIE 2  ****
/******************/

let rue = "Place de la concorde";//Chaîne de caractère

let âge = 18; // Number

let majeur = true;//Boolean

let personne = {//objet
    nom: "Vilain",
    prénom: "Guy",
    âge: "41"
}

console.log(personne.nom + " " + personne.prénom + " " + personne.âge);

function direBonjour(){console.log("Bonjour");}//déclarer une Fonction

direBonjour();//Appel de ma fonction

