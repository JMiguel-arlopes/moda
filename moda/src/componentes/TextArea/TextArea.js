import './TextArea.css'

const TextArea = (props) => {
    const text = `${props.placeholder}...`
    return (
        <div className='text-area'>
            <label>{props.label}</label>
            <input placeholder={text}></input>
        </div>
    )
}

export default TextArea