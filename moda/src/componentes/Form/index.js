import TextArea from "../TextArea/TextArea"
import ListaSuspensa from '../ListaSuspensa'
import Btn from '../Btn'
import './form.css'
import { useState } from "react"

const Form = () => {
    const roupas = ['vestidos', 'camisas', 'shorts', 'calças'];

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const kiplin = event => {
        event.preventDefault()
        console.log(event.target)
    }

    function alteracao(valor) {
        setNome(valor)
    }

    return (
        <section className="formulario">
            <form onSubmit={kiplin}>
                <h2>Preencha todos os dados no Card abaixo para o submit</h2>
                <TextArea
                    obrigatorio={true}
                    label="Nome:"
                    placeholder="Informe seu nome?"
                    valor={nome}
                    aoAlterado={alteracao}
                />

                <TextArea
                    obrigatorio={true}
                    label="Cargo:"
                    placeholder="Informe seu cargo?"
                    // aqui fiz do jeito mais complexo porém mais sintatico e facil
                    aoAlterado={valor => setCargo(valor)}
                    valor={cargo}
                />

                <TextArea
                    label="Imagem:"
                    placeholder="Informe o endereço de imagem"
                    // mesmo caso do comentario anterior
                    aoAlterado={valor => setImagem(valor)}
                    valor={imagem}
                />

                <ListaSuspensa obrigatorio={true} label="Veja nossos Profissionais" itens={roupas} />
                <Btn>
                    Kiplin
                </Btn>
            </form>
        </section>
    )
}

export default Form