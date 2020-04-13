import React, { useState } from "react";
import MainInfo from "./MainInfo";
import Skills from "./Skills";

export const FormContext = React.createContext();

export default () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("");
  const [likes, setLikes] = useState([]);

  return (
    <form>
      <FormContext.Provider
        value={{ email, setEmail, password, setPassword, likes, setLikes }}
      >
        <MainInfo />
        <Skills />
      </FormContext.Provider>
      <div>
        <p>Email: {email}</p>
        <p>Contraseña: {password}</p>
        <p>Lenguajes: {likes.join(",")}</p>
      </div>
    </form>
  );
};
