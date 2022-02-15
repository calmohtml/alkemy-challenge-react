export default function Login() {
  /*
    Email: challenge@alkemy.org
    Password: react
  */

  const submitHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "" || password === "") {
      //
      return alert("Las campos no pueden estar vacíos");
    } else if (email !== "" && email.includes("@") === false) {
      //
      return alert("Debes escribir una dirección de correo electrónico válida");
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      //
      return alert("Credenciales inválidas");
    }

    console.log(email, password);
  };

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
