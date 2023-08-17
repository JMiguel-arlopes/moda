import './TextArea.css'


const TextArea = (props) => {

    const text = `${props.placeholder}...`

    // caso tenha dúvidas, é como se jogasse a função "aoAlterado" pra ca, assim como 
    // da pra jogar variáveis e strings por meio do props 
    const aoDigitado = event => props.aoAlterado(event.target.value)

    return (
        <div className='text-area'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={text}></input>
        </div>
    )
}

export default TextArea