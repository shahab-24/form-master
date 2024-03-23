import { useContext } from "react";
import { MoneyContext } from "../Dada/Dada";


const Cousin = ({name,assets}) => {
  const [money, setMoney] =useContext(MoneyContext);
  return (
    <div>
      <h3>cousin</h3>
      <p>{name}</p>
      <p>has:{assets}</p>
      <p>money:{money}</p>
      <button onClick={() => setMoney(money + 1500)}>Add money</button>
    </div>
  );
};

export default Cousin;