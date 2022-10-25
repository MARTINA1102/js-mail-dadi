/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*
const mailList=['mariorossi@gmail.com','giorgiobiachi@gmail.com','andreamarroni@gmail.com'];
const utenteMail = prompt('Quale è la tua email?');
console.log(utenteMail);
if (mailList.includes(utenteMail)){
    console.log(utenteMail);
    document.getElementById('risultato-fin').innerHtml=utenteMail;
}else{
    console.log('NON SEI PRESENTE NELLA LISTA');
        document.getElementById('risultato-fin').innerHtml=NON SEI PRESENTE NELLA LISTA;

}
*/



/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
/*
let numeroCasuale=parseInt(Math.floor(Math.random() * 6) + 1);
console.log(numeroCasuale);
let numeroUtente= parseInt(prompt('scegli un numero da 1 a 6'));
console.log(numeroUtente);
if (numeroCasuale>numeroUtente){
    console.log('hai perso');
}else{
    console.log('hai vinto')
}
*/

/*
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/
const eleMail= document.getElementsByClassName('email');
const eleBtn= document.querySelector ('.btn-controlla');
const eleResult=document.getElementById('risultato-fin');
const mailList=['mariorossi@gmail.com','giorgiobiachi@gmail.com','andreamarroni@gmail.com'];
const utenteMail = eleMail;
console.log(utenteMail);
eleBtn.addEventListener('click',function(){
    if (mailList.includes(utenteMail)){
        console.log(utenteMail);
        eleResult.innerHTML=utenteMail;
    }else{
        console.log('NON SEI PRESENTE NELLA LISTA');
        eleResult.innerHTML='NON SEI PRESENTE NELLA LISTA'
    }
})
