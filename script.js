/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const mailList=['mariorossi@gmail.com','giorgiobiachi@gmail.com','andreamarroni@gmail.com'];
const utenteMail = prompt('Quale è la tua email?');
console.log(utenteMail);
if (mailList.includes(utenteMail)){
    console.log(utenteMail);
}else{
    console.log('NON SEI PRESENTE NELLA LISTA');
}




/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

