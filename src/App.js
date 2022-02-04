import './App.css';
import { useState } from 'react';

function App() {
  let [paino,setPaino] = useState(0);
  let [pullot,setPullot] = useState(0);
  let [aika,setAika] = useState(0);
  let [sukupuoli,setSukupuoli] = useState("mies");
  let [tulos,setTulos] = useState(0);

  function alcometer(e){
    e.preventDefault();
    let result = 0;
    let litraa = pullot * 0.33;
    let grammaa = litraa * 8 * 4.5;
    let poltto = paino / 10;
    let grammaaJäljellä = grammaa - (poltto * aika);

    if (sukupuoli === "mies"){
      result = grammaaJäljellä / (paino * 0.7)
    }
    if (sukupuoli === "nainen"){
      result = grammaaJäljellä / (paino * 0.6)
    }
    if (grammaaJäljellä <= 0){
      result = 0
    }
    setTulos(result);
  }
  return (
    <form onSubmit={alcometer}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight (kg)</label>
        <input id="weight" type="number" value={paino} onChange={e => setPaino(e.target.value)}/>
      </div>
      <div>
        <label>Beer (0.33l)</label>
        <input id="bottle" type="number" value={pullot} onChange={e => setPullot(e.target.value)}/>
      </div>
      <div>
        <label>Time (hour)</label>
        <input id="time" type="number" value={aika} onChange={e => setAika(e.target.value)}/>
      </div>
      <div>
        <label>Gender</label>
        <label><input type="radio" value="nainen" name="sukupuoli" onChange={e => setSukupuoli(e.target.value)}/>Woman</label>
        <label><input type="radio" value="mies" name="sukupuoli" defaultChecked onChange={e => setSukupuoli(e.target.value)}/>Man</label>
      </div>
      <button>Calculate</button>
      <div>
        <output>
          <p>Alcohol left: {tulos.toFixed(2)} grams</p>
        </output>
      </div>
    </form>
  );
}

export default App;
