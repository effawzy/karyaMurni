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
 
const showColor = () => {
  let value = (document.getElementById("colorCheck") as HTMLInputElement).value;
  let getColor : any = theColors.columnA.includes(value);

  if(getColor === true){
    document.getElementById("appendColor")!.innerHTML = `Warna ${value} tersedia`;
  }
  else{
    document.getElementById("appendColor")!.innerHTML = `Tidak ada warna ${value}`;
  }
  
}

  return (
    <div className="App">
        <p>Check color :</p>
        <select id="colorCheck">
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="bronze">bronze</option>
            <option value="purple">purple</option>
            <option value="chocolate">chocolate</option>
            <option value="gold">gold</option>
        </select>
        <button onClick={showColor}>Check it</button>
        <p id='appendColor'></p>
    </div>
  );
}

export default App;
