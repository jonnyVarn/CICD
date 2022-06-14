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
    //var ordDB= ["HÄNGAGUBBE", "SVÅRT", "LÄTT", "SEN", "SOL", "APA", "KATT", "BJÖRN", "KO", "KALV", "ÅSNA"];
    var ordDB = require('./svenska-ord.json');
    var falseWord = 0;
    let trueWord = 0;
    var setOrd = 0; 
    var ord = ordDB[randomword(0, 90000)]; console.log(randomword);
    
    console.log(ord);
    function changeWord(){setOrd++; ord=ordDB[setOrd]; console.log(ord);}
    const lost ="Du förlorade";
    const vann ="Grattis! Du är en vinnare!!";
    const alfabetet = ["a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];
    const [correctGuesses, setCorrectGuesses] = useState([]);
       

    const maskeratOrd = ord.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" ");
    //const[getName, setName]=useState(false);
    //const handleNameChange = () => {setName(!getName);}
/*
<button inputMode='skriv'>Ändra ord</button>
            <button onClick={handleNameChange}>
           {getName ? 'off' : 'on'}
       </button>
*/
    return  <div>
            

            <button onClick={RefreshPage}>Refresh</button>
            <button onClick={changeWord}>byt ord</button>
            <p>{maskeratOrd}</p>
           
            {alfabetet
            .map((alfabetet, index) => 
            <button key={index} onClick={() => {
                if (ord.includes(alfabetet)) {
                    setCorrectGuesses([...correctGuesses, alfabetet]);
                    trueWord++;
                    console.log(trueWord);
                    console.log(ord.length);
                    console.log(correctGuesses.length);
                }

                if (!ord.includes(alfabetet)) {
                    falseWord++;
                    console.log(falseWord);
                }

                if (falseWord === 5) {
                    alert(lost)
                    {window.location.reload(true)};
                }

                if (!maskeratOrd.includes("_")) {
                    alert(vann);
                    {window.location.reload(true)};
                }




            }}>{alfabetet}</button>)}
            {!maskeratOrd.includes("_") && <p>{vann} </p>}
            </div>
            
}
