import Cousin from "../Cousin/Cousin";


const Master = ({assets}) => {
  return (
    <div>
      <h3>Master</h3>
      <Cousin assets={assets} name={'jasim'}></Cousin>
    </div>
  );
};

export default Master;