import { useState } from "react"
import './App.css';

function App() {
    //Ocupamos manejar estados de una variable
  //Pueden ser manipuladas cuando el usuario haga algo 1 estado para cada input
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);

  //state para el resultado
  const [resultado, setResultado] = useState(0);

  //Este metodo nos ayuda a que se actualice el input 1
  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  };
  //Este metodo nos ayuda a que se actualice el input 2
  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  };
 
  //Fucnión para sumar
  const handleSumar = (event) => {
    setResultado(parseFloat(numeroUno) + parseFloat(numeroDos));
  };

  const handleRestar = (event) => {
    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos));
  };

  const handleMultimplicar = (event)  =>{
    setResultado(parseFloat(numeroUno * parseFloat(numeroDos)));
  };

  const handleDividir = (event) =>{
    setResultado(parseFloat(numeroUno / parseFloat(numeroDos)));
  };


  return (
    // se engloban dentro de un fragment <> </>
    <>
        <h1>Calculadora basica</h1>
        <h2>Mauricio Alejandro Serrano García</h2>
        {/* es un imput con un valor que es el de numeroUno(es un estado reactivo) ahora con
         la función que creamos es lo que hara el input  */}
        <input type="text" placeholder="Numero 1" value={numeroUno} onChange={handleChangeUno}/>
        <input type="text" placeholder="Numero 2" value={numeroDos} onChange={handleChangeDos}/>
        {/* Damos un salto  */}
        <hr />
        <button onClick={handleSumar} >  Sumar</button>
        <button onClick={handleRestar}>Restar</button>
        <button onClick={handleMultimplicar}>Multiplicar</button>
        <button onClick={handleDividir}>Dividir</button>
        <hr />
        <p>Resultado: {resultado}</p>

    </>

    )
}

export default App
