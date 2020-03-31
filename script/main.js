console.log('Js ok');
// CHIEDERE IL COGNOME ALL'UTENTE
// Referenze
var lista = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomi = document.getElementById('cognomi');
var listaCognomi = document.getElementById('lista-cognomi');
var btnAggiungi = document.getElementById('btn-aggiungi');

btnAggiungi.addEventListener('click',
  // INSERIRLO IN UN ARRAY CONTENENTE ALTRI COGNOMI
  function() {
    lista.push(cognomi.value);
    console.log(lista)
    lista.sort();
    console.log(lista)

    // STAMPARE LA LISTA ORDINATA ALFABETICAMENTE
    // STAMPARE LA POSIZIONE DEL NUOVO UTENTE NELLA LISTA
    var items = '';
    for (i = 0; i < lista.length; i++) {
      items += '<li>' + lista[i] + '</li>';

      listaCognomi.innerHTML = items + 'La posizione del tuo cognome nella lista è: ' + lista.indexOf(cognomi.value);
    }
  }
);
