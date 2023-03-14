// import LogoComponent from "./assets/logo.png"

import LogoComponent from "../components/logo";
import Botao from '../components/botaoLogin'

function Card() {
    return ( 
      <>
        <div className="flex ">
          <LogoComponent/>
          <p className='slogan'>Onde você faz acontecer!</p>
        </div>
      <div className='cardInicio'>
        <img src={LogoComponent} alt="" className="logo"/>
        <p>Seja bem vindo(a) ao ToDo, a minha plataforma de E-commerce e digital bank!</p>
        <Botao texto='Sou Novo!'/>
        
        <a href="./" className="possuiConta">Já possui uma conta?</a>
      </div>
      </>
        
    );
}

export default Card;
