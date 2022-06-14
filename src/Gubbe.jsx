import React, {useState} from 'react';
import './Gubbe.css';
export default function Gubbe() {
    //using svenska ord from https://raw.githubusercontent.com/almgru/svenska-ord.txt/master/svenska-ord.json with unlicence 
    //cors måste sätta upp en backend för att få till to do
    //const URL = "https://it-ord.idg.se/slumpa";
    //fetch(URL) .then(response => console.log(response);
    //.catch(error => console.log(error));
    function RefreshPage(){window.location.reload(true);}
    function randomword (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    var ordDB = require('./svenska-ord.json');
    var falseWord = 0; 
    let toMuchRandom = 0;
    function settoMuchRandom(){if (toMuchRandom === 0) {toMuchRandom = randomword(0,90000);} }

    var ord = ordDB[toMuchRandom]; console.log(randomword);
    console.log(ord);
    const lost ="Du förlorade! Ordet var " +(ord) + "." ;
    const vann ="Grattis! Du är en vinnare!!";
    const alfabetet = ["a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];
    const [correctGuesses, setCorrectGuesses] = useState([]);
       

    const maskeratOrd = ord.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" ");
    return  <div>
            

            <button onClick={RefreshPage}>Börja om</button>
            <p>{maskeratOrd}</p>
           
            {alfabetet
            .map((alfabetet, index) => 
            <button key={index} onClick={() => {
                if (ord.includes(alfabetet)) {
                    setCorrectGuesses([...correctGuesses, alfabetet]);
                }

                if (!ord.includes(alfabetet)) {
                    falseWord++;
                    console.log(falseWord);
                }

                if (falseWord === 5) {

                    alert(lost)
                }

            }}>{alfabetet}</button>)}
            {!maskeratOrd.includes("_") && <p>{vann} </p>}
            </div>
            
}
