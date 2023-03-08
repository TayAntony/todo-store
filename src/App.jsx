import Logo from "./assets/logo.png"

function App() {

  return (
    <div className="App imgBackground">
      
      <div className="maximo">
        <div className='absolute'>
          <h1 className='todo'>ToDo</h1>
          <p className='slogan'>Onde você faz acontecer!</p>
        </div>

        <div className="borda">
          <div className='cardInicio'>
            <img src={Logo} alt="" className="logo"/>
            <p>Seja bem vindo(a) ao ToDo, a minha plataforma de E-commerce e digital bank!</p>
            <button className="mainButton">Sou novo!</button>
            <a href="#" className="possuiConta">Já possui uma conta?</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
