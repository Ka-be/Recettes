// FONCTION COMPTEUR
// ----------------------------------

var data = 0;
  
//Valeur par défaut : 0 dans le h2 de compteur
document.getElementById("counting").innerText = data;
  
//Fonction incrément (+)
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

//Fonction décrément (-)
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}


// FONCTION CALCUL AUTO DES QUANTITES
// ----------------------------------

