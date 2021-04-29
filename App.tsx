import React from 'react';
import './App.css';

function App() {

  interface Colors {
    columnA: string[],
    columnB: string[],
    columnC: string[],
    columnD: string[],
    columnE: string[],
}
 
let theColors: Colors = {
    columnA: ['red', 'yellow', 'blue', 'purple', 'black', 'Baby blue', 'chocolate', 'Blood red'],
    columnB: ['orange', 'cyan', 'skyblue', 'depppurple', 'gray', 'Blood red', 'Blue-gray', 'Blue-green'],
    columnC: ['green', 'teal', 'brown', 'pink', 'magenta', 'Brink pink', 'Camel', 'Canary'],
    columnD: ['orange', 'violet', 'almond', 'amber', 'white', 'Canary yellow', 'Candy', 'Celeste'],
    columnE: ['ruby', 'bronze', 'gold', 'aqua', 'azure', 'Cinereous', 'Cinnabar', 'Citron']
}
 
const CheckColor = (theArray: string) => {
  return theArray === (document.getElementById("colorCheck") as HTMLInputElement).value;
}

const showColor = () => {
  let getColor : any = theColors.columnA.filter(CheckColor);
  document.getElementById("appendColor")!.innerHTML = getColor;
}

  return (
    <div className="App">
        <p>Check color :</p>
        <input type="text" id="colorCheck"></input>
        <button onClick={showColor}>Check it</button>
        <p id='appendColor'></p>
    </div>
  );
}

export default App;
