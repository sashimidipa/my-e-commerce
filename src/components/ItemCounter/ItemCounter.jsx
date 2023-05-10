import './ItemCounter.css'

export const ItemCounter = ({max, cantidad, modify}) =>{


    const sumar = () =>{
        if (cantidad < max){
            modify(cantidad + 1)
        }
    }
    const restar = () =>{
        if(cantidad >0){
            modify(cantidad-1)
        }
    }

    return(
        <>
        <h4>{cantidad}</h4>
        <div>
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
        </div>
        </>
    )
}

