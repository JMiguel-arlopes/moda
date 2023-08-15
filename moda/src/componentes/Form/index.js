import TextArea from "../TextArea/TextArea"
import ListaSuspensa from '../ListaSuspensa'
import Btn from '../Btn'
import './form.css'


const kiplin = event => {
    event.preventDefault()
    console.log(event.target)
}



const Form = () => {
    const roupas = ['vestidos', 'camisas', 'shorts', 'calças'];

    return (
        <section className="formulario">
            <form onSubmit={kiplin}>
                <h2>Preencha todos os dados no Card abaixo para o submit</h2>
                <TextArea obrigatorio={true} label="Nome:" placeholder="Informe seu nome?" />
                <TextArea obrigatorio={true} label="Cargo:" placeholder="Informe seu cargo?" />
                <TextArea label="Imagem:" placeholder="Informe o endereço de imagem" />
                <ListaSuspensa obrigatorio={true} label="Veja nossos Profissionais" itens={roupas} />
                <Btn>
                    Kiplin
                </Btn>
            </form>
        </section>
    )
}

export default Form