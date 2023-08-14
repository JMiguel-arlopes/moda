import TextArea from "../TextArea/TextArea"
import './form.css'
const Form = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha todos os dados no Card abaixo para o submit</h2>
                <TextArea label="Nome:" placeholder="Informe seu nome?" />
                <TextArea label="Cargo:" placeholder="Informe seu cargo?" />
                <TextArea label="Imagem:" placeholder="Informe o endereço de imagem" />
            </form>
        </section>
    )
}

export default Form