import React, {useState} from 'react'; 
export default function Gubbe() {
    
    //cors måste sätta upp en backend för att få till to do
    //const URL = "https://it-ord.idg.se/slumpa";
    //fetch(URL) .then(response => console.log(response);
    //.catch(error => console.log(error));
    
    var ord = "HäNGAGUBBE";

    var falseWord ="0";
    const lost ="Du förlorade";
    const vann ="Grattis! Du är en vinnare!!";
    const alfabetet = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "Å", "Ä", "Ö"];
    const [correctGuesses, setCorrectGuesses] = useState([])   

    const maskeratOrd = ord.split('').map(letter => 
    correctGuesses.includes(letter) ? letter : "_").join(" ");

    

    return  <div>
            <button inputMode='skriv'>Ändra ord</button>
            <p>{maskeratOrd}</p>
            {alfabetet
            .map((alfabetet, index) => 
            <button key={index} onClick={() => {
                if (ord.includes(alfabetet)) {
                    setCorrectGuesses([...correctGuesses, alfabetet])
                }

                if (!ord.includes(alfabetet)) {
                    falseWord++;
                    console.log(falseWord);
                }

                if (falseWord === 4) {
                    alert(lost)}




            }}>{alfabetet}</button>)}
            {!maskeratOrd.includes("_") && <p>{vann}</p>}
            </div>
}
