import { useState } from "react";


const StateFulForm = () => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState('');
  const [password, setPassword] = useState(null);


  const handleSubmit = e => {
    e.preventDefault();
    if(password.length < 4){
      setError('password must be 4 characters or longer')
    } else{
      setError('');
    }
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  const handlePassword = e => {
    setPassword(e.target.value);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text" name="name" />
        <br></br>
        <input onChange={handleEmailChange} type="text" name="email" />
        <br />
        <input onChange={handlePassword} type="password" name="password" />
        <br />
        <button>Submit</button>
        {
          error && <p>{error}</p>
        }
      </form>
      
    </div>
  );
};

export default StateFulForm;