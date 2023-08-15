import './TextArea.css'





const TextArea = (props) => {

    let valor = 'kkj'

    const aoDigitado = (event) => {
        valor = event.target.value
    }

    const text = `${props.placeholder}...`
    return (
        <div className='text-area'>
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={text}></input>
        </div>
    )
}

export default TextArea