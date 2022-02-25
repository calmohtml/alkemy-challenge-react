import Navbar from "../components/Navbar";
import axios from "../api/axios";
import swAlert from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Login() {
  /*
    Email: challenge@alkemy.org
    Password: react
  */

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "" || password === "") {
      //
      swAlert("Las campos no pueden estar vacíos");
    } else if (email !== "" && email.includes("@") === false) {
      //
      swAlert("Debes escribir una dirección de correo electrónico válida");
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      //
      swAlert("Credenciales inválidas");
    }

    try {
      const response = await axios
        .post("http://challenge-react.alkemy.org", {
          email,
          password,
        })
        .then((response) => {
          console.log(response);

          const token = response.data.token;
          window.localStorage.setItem("token", token);
          navigate("/store", { replace: true });
        });
    } catch (error) {
      console.error(error);
    }
  };

  /* let token = window.localStorage.getItem("token"); */

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <span>E-mail:</span>
        <input type="email" name="email" id="email" />
        <hr />
        <span>Contraseña:</span>
        <input type="password" name="password" id="password" />
        <hr />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
