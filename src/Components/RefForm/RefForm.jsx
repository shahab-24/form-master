import { useRef } from "react";


const RefForm = () => {
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br></br>
        <input ref={emailRef} type="text" name="email" />
        <br />
        <input type="number" name="phone" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RefForm;