import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();

  const [submittedData, setSubmittedData] = useState();

    function onSubmit(data) {
    console.log("submitting the form", data);
    setSubmittedData(data);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>

        
  <h2 className="form-heading">Fill in the details here</h2>
  


        <div>
          <label>Name: </label>
          <input {...register("name")} />
        </div>
        <br />

        <div>
          <label>Age: </label>
          <input {...register("age")} />
        </div>
        <br />

        <div>
          <label>Exp: </label>
          <input {...register("exp")} />
        </div>
        <br />

        <div>
          <label>Phone Number: </label>
          <input {...register("PhoneNumber")} />
        </div>
        <br />

        <div>
          <label>Gender: </label>
          <input {...register("Gender")} />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Form Details</h2>
        {submittedData && (
          <div>
            <p>Name: {submittedData.name}</p>
            <p>Age: {submittedData.age}</p>
            <p>Exp: {submittedData.exp}</p>
            <p>Phone Number: {submittedData.PhoneNumber}</p>
            <p>Gender: {submittedData.Gender}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
