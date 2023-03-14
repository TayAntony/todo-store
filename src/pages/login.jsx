import Voltar from '../components/setaVoltar'
import Botao from '../components/botaoLogin'

function Login() {
    return ( 
        <>
        <div className="imgBackground">
        <Voltar/>
        <p className='paragrafos max-w-xs mt-20'>Insira suas informações para realizar o login!</p>
            <div className='cardInicio'>
                <input type="text" placeholder='E-mail' className='inputs'/>
                <div className='flex items-end flex-col'>
                    <input type="password" placeholder='Password ' className='inputs'/>
                    <a href="" className='esqueciSenha'>Esqueci a senha</a>
                </div>
                <Botao texto='Logar'/>
            </div>

        </div>
        
        </>
     );
}

export default Login;