import { createContext, useState } from "react";
import Baba from "../Baba/Baba";
import FakirBaba from "../FakirBaba/FakirBaba";
import Master from "../Master/Master";
import './Dada.css'

export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000);
const Dada = () => {
  const assets = 'diamond';
  const [money, setMoney] =useState(1000);
  return (
    <div className="dada flex  dada">
      <h3>Dada</h3>
      <br />
      <p>money: {money}</p>
      
       <MoneyContext.Provider value={[money, setMoney]}>
       <AssetContext.Provider value='gold' >
       <div className="flex">
        <Baba></Baba>
        <FakirBaba></FakirBaba>
        <Master assets={assets}></Master>
        </div>
       </AssetContext.Provider>
       </MoneyContext.Provider>
      
    </div>
  );
};

export default Dada;