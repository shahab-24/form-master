
import useInputState from '../CustomHook/CustomHook';

const HookForm = () => {
  // const [name, handleNameChange] = useInputState('hello');
  const nameState = useInputState('alhamdulillah');


  const handleSubmit= e =>{
    console.log(nameState.value);
    e.preventDefault();
    
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange}  type="text" name="name" /> */}
        <br></br>
        <input {...nameState}  type="text" name="email" />
        <br />
        <input type="number" name="phone" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookForm;