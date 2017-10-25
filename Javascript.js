function form1() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var ville = document.getElementById("ville").value;
  //isNan() verifie que le paramètre n'est pas un nombre
  if(nom && ville && prenom && isNaN(nom) == true && isNaN(prenom) == true && isNaN(ville) == true){
    var result = 'Nom : ' + nom + '\n' + 'Prénom : ' + prenom + '\n' + 'Ville : ' + ville;
    alert(result);
  }
}
