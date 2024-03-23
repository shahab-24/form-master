import { useContext, useState } from "react";
import { AssetContext, MoneyContext } from "../Dada/Dada";

const Ami = () => {
  const gift = useContext(AssetContext);
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h3>Ami</h3>
      <p>has:{gift}</p>
      <p>{money}</p>
      
    </div>
  );
};

export default Ami;