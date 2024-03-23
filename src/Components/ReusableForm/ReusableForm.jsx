

const ReusableForm = ({formTitle, handleSubmit, submitbtn, children}) => {

  const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
      
    }
    handleSubmit(data);
  }
  
  return (
    <div>
      {children}
      <h3>{formTitle}</h3>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br></br>
        <input type="text" name="email" />
        <br />
        <input type="number" name="phone" />
        <br />
        <button>{submitbtn}</button>
        </form>
    </div>
  );
};

export default ReusableForm;