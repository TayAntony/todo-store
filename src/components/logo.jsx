import Logo from '../assets/logo.png'

function LogoComponent() {
    return ( 
        <div>
            <img src={Logo} alt="logo" className='p-40'/>
        </div>
     );
}

export default LogoComponent;