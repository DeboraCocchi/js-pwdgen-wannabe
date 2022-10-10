const userFirstName = prompt('Qual è il tuo nome?');
const userLastName = prompt('Qual è il tuo cognome?');
const userColor = prompt('Qual è il tuo colore preferito?');


document.getElementById('message').innerHTML = `
Ciao ${userFirstName} ${userLastName}, il tuo colore preferito è ${userColor} 22!
`;