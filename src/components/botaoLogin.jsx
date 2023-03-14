const Botao = (props) =>{
    return ( 
        <div>
            <button className="mainButton">
                {props.texto}
            </button>
        </div> 
        );
}


export default Botao;