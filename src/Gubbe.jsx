import React, {useState} from 'react'; 
export default function Gubbe() {
    
    //cors måste sätta upp en backend för att få till to do
    //const URL = "https://it-ord.idg.se/slumpa";
    //fetch(URL) .then(response => console.log(response);
    //.catch(error => console.log(error));
    
    var ord = "HÄNGAGUBBE";

    var falseWord = 0;
    let trueWord = 0;
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
            <button inputMode='window.location.reload();'>reload</button>
            
            <p>{maskeratOrd}</p>
            {alfabetet
            .map((alfabetet, index) => 
            <button key={index} onClick={() => {
                if (ord.includes(alfabetet)) {
                    setCorrectGuesses([...correctGuesses, alfabetet])
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
                    window.location.reload(true);
                }

                if (!maskeratOrd.includes("_")) {
                    alert(vann);
                    window.location.reload(true);
                }




            }}>{alfabetet}</button>)}
            
            </div>
}
//{!maskeratOrd.includes("_") && <p>{vann} </p>}