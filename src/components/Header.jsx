import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header className="header-utp">
      <Link to={"/"}>
        <h1>Sistema de Matrícula</h1>
      </Link>
      <img className="logo-utp" src="/src/assets/logo-utp.png" alt="" />
    </header>
  );
}
