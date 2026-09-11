import { useState } from "react";
import "./SignupPage.css";

//Ignore random comments they're just fopr my own memory!!

// For the app (LATERRR): <SignupPage />

function SignupPage() {  //not sure if i'm supposed to change this to const, but since it was here imma leave it

      const [formData, setFormData] = useState({
        name: "",
        email: "",
        password:"",
        confirmPassword:"",
        nationality:"fi",  // ihad to add fi, because otherwise it just shows empty in click if i don't change
      });

      //inputInfo (usually e) same as week4-fe-pp (registartion)
      const handleChange = (inputInfo) => {
        setFormData({
          //grab all from the formData
          ...formData,
          //example:   name: Matti Nykänen
          [inputInfo.target.name]: inputInfo.target.value,
        });
      };

      //withpout this the email shows immediately
      const [submitted, setSubmitted] = useState(false);

      const handleSubmit = (inputInfo) => {
        inputInfo.preventDefault();
        console.log('meow')
        setSubmitted(true);
    };
    
    return (
      <section className="section">
        <div className="section-center">
          <h2>Sign-Up:</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label htmlFor="password">
              Password
              <input //the password turns into dots bc of type=password
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={8} //then it has to be 8 something at least
              />
              {formData.password.length > 0 && formData.password.length < 8 && (
                <div id="password-hint"> Your password is too weak! </div>
              )}
            </label>
            <br />
            <label htmlFor="confirmPassword">
              Confirm Password
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <br />
            <label htmlFor="nationality">
              Nationality
              <select 
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                //required
              >
                <option value="fi"> FI </option>
                <option value="en"> EN </option>
                <option value="de"> DE </option>
                <option value="fr"> FR </option>
              </select>
            </label>
            <br />
            <input type="submit" value="Sign-up" />
          </form>

          {submitted && (
            <div>  
              <div>
                <h3>Your email is {formData.email} </h3>
                <div>Nationality: {formData.nationality}</div>
              </div>
              <div>
                {formData.nationality === "fi" && "mMoi"}
                {formData.nationality === "en" && "Hello"}
                {formData.nationality === "de" && "Hallo"}
                {formData.nationality === "fr" && "Bonjour"}
              </div>
            </div>
          )}
        </div>
      </section>
/* Nationality	Message
fi	Moi
en	Hello
de	Hallo
fr	Bonjour */ 
    
  );

};

export default SignupPage;
