import { useState, useEffect } from "react";

const Hooks = () => {

    let idade = 23;
    const [novaIdade, setNovaIdade] = useState(40)

const changeAge = () => {
    idade = 24;
    console.log(idade)
}

const changeNewAge = () => {
    setNovaIdade(45)
}

useEffect(() => { 
    console.log("Testando")
})
    return (
        <div>
            <p>idade {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>idade {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )

}

export default Hooks