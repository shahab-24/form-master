


const SimpleForm = () => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br></br>
        <input type="text" name="email" />
        <br />
        <input type="number" name="phone" />
        <br />
        <button>Submit</button>
      </form>
      
      
    </div>
  );
};

export default SimpleForm;

