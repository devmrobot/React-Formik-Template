import React from "react";
import "./home.css";
import ClientForm from "../components/ClientForm";
import SignUp from "../assets/sign-up.png";

const Home = () => {
  return (
    <div>
      <div className="nav">
        <h1>Sign Up</h1>
      </div>
      <div className="main">
        <div>
          <ClientForm />
        </div>
        <div className="img">
          <img src={SignUp} alt={SignUp} />
        </div>
      </div>
    </div>
  );
};

export default Home;
