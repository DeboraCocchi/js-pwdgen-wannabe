const userFirstName = prompt('Qual è il tuo nome?');
const userLastName = prompt('Qual è il tuo cognome?');
const userColor = prompt('Qual è il tuo colore preferito?');


document.getElementById('message').innerHTML = `
Ciao ${userFirstName} ${userLastName},<br> la password che hai scelto è <strong>${userFirstName}${userLastName}${userColor}22</strong>
`;